---
title: Тестирование доступности — это не страшно
layout: cover
---

# Тестирование доступности —<br />это не страшно

Разбираемся с ролями и Testing Library 🐙

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
  src="conduit-screenshot.jpg" 
  alt="Интерфейс сайта Conduit" 
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
class: flex flex-col
---

# Как использовать роли в тестировании?

Добро пожаловать в Testing Library

После установки Testing Library для, например, Cypress, тесты можно будет писать вот так:

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
    src="accessibility-tree.webp" 
    alt="Дерево доступности сайта Conduit" 
    class="shadow-xl rounded"
  />
  <img 
    src="conduit-screenshot.webp" 
    alt="Интерфейс сайта Conduit, опять" 
    class="shadow-xl rounded"
  />
</div>


