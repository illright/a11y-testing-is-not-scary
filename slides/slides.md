---
title: Тестирование доступности — это не страшно
layout: cover
---

# Тестирование доступности —<br />это не страшно

Разбираемся с ролями и Testing Library <logos-testing-library />

<div class="flex-1" />

<div class="flex flex-1 justify-between items-end mb-4">
  <Persona />

  <img src="merge-conference-logo.svg" class="h-18" />
</div>

<style>
  h1 {
    @apply text-5xl
  }

  h1 + p {
    @apply text-2xl mt-5
  }
</style>

---
layout: fact
---

# Дисклеймер

"Ничего о нас без нас"

Если вы хотите улучшить опыт пользователей с ограниченными возможностями, <br /><strong>спросите пользователей с ограниченными возможностями</strong>.

<style>
  .slidev-layout.fact h1 {
    @apply text-5xl mb-8
  }
  .slidev-layout.fact h1 + p {
    @apply mb-12
  }
</style>

---

# Проблема тестирования

Как искать элементы на странице?

<div class="approach bg-red-500/20 p-6 mb-4 rounded-xl">

## Подход 1

Использовать CSS-селекторы

```ts
cy.get('main > div:nth-child(3) .button').click()
```

</div>

<div class="approach bg-blue-500/20 p-6 rounded-xl">

## Подход 2

Использовать тестовые идентификаторы

```ts
cy.get('[data-testid=like-button]').click()
```

</div>

<style>
  .approach { 
    --slidev-code-font-size: 1rem;
    --slidev-code-padding: 1rem;
  }

  .approach p {
    @apply mt-2 mb-4
  }
</style>

---
class: flex flex-col
---

# А что же пользователь?

<div class="flex items-center flex-1 gap-2">
  <img src="comic-part-1.svg" />
  <img src="comic-part-2.svg" />
  <img src="comic-part-3.svg" />
</div>

<style>
  img {
    @apply w-1/3
  }
</style>

---

# Знакомьтесь, Conduit или Real World App

Что здесь важно для пользователя?

<img 
  src="conduit-home-screenshot.webp" 
  alt="Интерфейс главной страницы сайта Conduit" 
  class="shadow-xl rounded" 
/>

---
class: flex flex-col
---

# У всего есть своя роль

<div class="flex gap-12 flex-1">
<div class="flex-1">

## Разделы сайта

Например:

* `region` — важный раздел
* `feed` — лента
* `form` — форма

</div>
<div class="flex-1">

## Элементы функциональности

Например:

* `button` — кнопка
* `link` — ссылка
* `checkbox` — галочка

</div>
</div>

<strong>Самое приятное</strong>: браузеры ставят роли сами, если мы верстаем не на `<div>`-ах!

<style>
  h2 {
    @apply mb-2 mt-5
  }

  ul {
    @apply pl-4
  }
</style>

---

# Как использовать роли в тестировании?

Добро пожаловать в Testing Library

[**Testing Library**](https://testing-library.com/) — это набор дополнительных запросов для инструментов авто-тестирования.

* Работает с  React,  Vue,  Angular,  Svelte и др.
* Интегрируется с  Jest,  Mocha,  Cypress,  Playwright и др.
* Предоставляет следующие запросы:
  * `getByRole` — найти элемент по роли
  * `getByLabelText` — найти элемент по `<label>`
  * ...
  * `getByText` — найти элемент по текстовому содержимому
  * `getByTestId` — найти элемент по тестовому ID

---
class: flex flex-col
---

# Как использовать роли в тестировании?

После установки Testing Library для, например, Cypress, тесты можно будет писать вот так

```ts {1,2,7|3,6|4,5}
// Проверим, что из ленты мы можем перейти к посту
it('allows going to the page of a post from the main feed', () => {
  cy.findByRole('article', { name: /Create a new implementation/ }).within(() => {
    cy.findByRole('link', { name: /Read more/ }).click();
    cy.url().should('include', '/article/Create-a-new-implementation-1');
  });
});
```

<div v-click class="flex-1 flex items-end">
  Заметили тестирование доступности? А оно есть 😎
</div>

<style>
  pre { 
    --slidev-code-font-size: 1rem;
    --slidev-code-padding: 1rem;
    --slidev-code-line-height: 1.5rem;
  }
</style>

---

# Вот только это не сработает

Посмотрим на дерево доступности на сайте Conduit 💩

<div class="flex justify-between h-100">
  <img 
    src="conduit-home-screenshot.webp" 
    alt="Интерфейс главной страницы сайта Conduit, опять" 
    class="shadow-xl rounded w-11/16 self-start"
  />
  <img 
    src="conduit-home-accessibility-tree.webp" 
    alt="Дерево доступности главной страницы сайта Conduit" 
    class="shadow-xl rounded h-full"
  />
</div>

---

# Давайте исправлять

Шаг 1: Превратим ленту постов в `feed`

<div class="grid gap-4">

```tsx {all|6}
const MainView = () => (
  <div className="col-md-9">
    <div className="feed-toggle">
      <TabList />
    </div>
    <ArticleList />
  </div>
);
```

<img src="0-before.webp" class="shadow-xl rounded" alt="Дерево доступности главной страницы Conduit до изменений" />

</div>

<style>
  .grid {
    grid-template-columns: 1fr 400px;
  }
</style>

---

# Давайте исправлять

Шаг 1: Превратим ленту постов в `feed`

<div class="grid gap-4">

```tsx {6,7,8}
const MainView = () => (
  <div className="col-md-9">
    <div className="feed-toggle">
      <TabList />
    </div>
    <main role="feed">
      <ArticleList />
    </main>
  </div>
);
```

<img src="1-after-feed-highlight.webp" class="shadow-xl rounded" alt="Дерево доступности главной страницы Conduit после создания feed, с выделением измененной части" />

</div>

<style>
  .grid {
    grid-template-columns: 1fr 400px;
  }
</style>

---

# Давайте исправлять

Шаг 2: Превратим посты в `article`-ы

<div class="grid gap-4">

```tsx {all|3,8}
const ArticlePreview = ({ article }) => {
  return (
    <div>
      {/* ... */}
      <h1>{preview.title}</h1>
      <p>{preview.description}</p>
      <span>Read more...</span>
    </div>
  );
};
```

<img src="1-after-feed.webp" class="shadow-xl rounded" alt="Дерево доступности главной страницы Conduit после создания feed" />

</div>

<style>
  .grid {
    grid-template-columns: 1fr 400px;
  }
</style>

---

# Давайте исправлять

Шаг 2: Превратим посты в `article`-ы

<div class="grid gap-4">

```tsx {3,5,8}
const ArticlePreview = ({ article }) => {
  return (
    <article aria-labelledby={headingId}>
      {/* ... */}
      <h1 id={headingId}>{preview.title}</h1>
      <p>{preview.description}</p>
      <span>Read more...</span>
    </article>
  );
};
```

<img src="2-after-article-highlight.webp" class="shadow-xl rounded col-start-2 row-span-full" alt="Дерево доступности главной страницы Conduit после разметки article, с выделением измененной части" />

<div v-click>

Генерация `headingId` здесь опущена, но с ней может помочь хук `useId()` из React 18 или библиотеки [`@react-aria/utils`](https://react-spectrum.adobe.com/react-aria/useId.html).

</div>

</div>

<style>
  .grid {
    grid-template-columns: 1fr 400px;
    grid-template-rows: auto auto;
  }
</style>

---

# Давайте исправлять

Шаг 3: Превратим карточку тэгов в `complementary`

<div class="grid gap-4">

```tsx {all|8,11}
const Home = () => (
  <div className="home-page">
    <Banner />
    <div className="container page">
      <div className="row">
        <MainView />
        <div className="col-md-3">
          <div>
            <p>Popular Tags</p>
            <Tags />
          </div>
        </div>
      </div>
    </div>
  </div>
);
```

<img src="2-after-article.webp" class="shadow-xl rounded col-start-2 row-span-full" alt="Дерево доступности главной страницы Conduit после разметки article" />

</div>

<style>
  .grid {
    grid-template-columns: 1fr 400px;
  }
</style>

---

# Давайте исправлять

Шаг 3: Превратим карточку тэгов в `complementary`

<div class="grid gap-4">

```tsx {8,9,11}
const Home = () => (
  <div className="home-page">
    <Banner />
    <div className="container page">
      <div className="row">
        <MainView />
        <div className="col-md-3">
          <aside aria-labelledby="popular-tags-heading">
            <p id="popular-tags-heading">Popular Tags</p>
            <Tags />
          </aside>
        </div>
      </div>
    </div>
  </div>
);
```

<img src="3-after-aside-highlight.webp" class="shadow-xl rounded col-start-2 row-span-full" alt="Дерево доступности главной страницы Conduit после разметки complementary, с выделением измененной части" />

</div>

<style>
  .grid {
    grid-template-columns: 1fr 400px;
  }
</style>

---

# Давайте исправлять

Шаг 4: Превратим панель вкладок в `tablist`

<div class="grid gap-4">

```tsx {all|3,4,5,7,8,11,12,14,15,17}
const TabList = () => {
  return (
    <ul>
      <li>
        <NavLink href="/">
          Global Feed
        </NavLink>
      </li>

      <Maybe test={!!tag}>
        <li>
          <CustomLink href={`/?tag=${tag}`}>
            <i className="ion-pound" /> {tag}
          </CustomLink>
        </li>
      </Maybe>
    </ul>
  );
};
```

<img src="3-after-aside.webp" class="shadow-xl rounded col-start-2 row-span-full" alt="Дерево доступности главной страницы Conduit после разметки complementary" />

</div>

<style>
  .grid {
    grid-template-columns: 1fr 400px;
  }
</style>

---

# Давайте исправлять

Шаг 4: Превратим панель вкладок в `tablist`

<div class="grid gap-4">

```tsx {3,4,5,7,8,11,12,14,15,17}
const TabList = () => {
  return (
    <ul role="tablist">
      <li role="presentation">
        <NavLink role="tab" href="/">
          Global Feed
        </NavLink>
      </li>

      <Maybe test={!!tag}>
        <li role="presentation">
          <CustomLink role="tab" href={`/?tag=${tag}`}>
            <i className="ion-pound" /> {tag}
          </CustomLink>
        </li>
      </Maybe>
    </ul>
  );
};
```

<img src="4-after-tablist-highlight.webp" class="shadow-xl rounded col-start-2 row-span-full" alt="Дерево доступности главной страницы Conduit после разметки tablist, с выделением измененной части" />

</div>

<style>
  .grid {
    grid-template-columns: 1fr 400px;
  }
</style>
