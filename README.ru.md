<div align="center">
  <img src="./slides/public/merge-conference-logo.svg#gh-light-mode-only" alt="Конференция Merge, Иннополис, 2022" height="48" />
  <img src="./.github/readme-assets/merge-conference-logo-dark.svg#gh-dark-mode-only" alt="Конференция Merge, Иннополис, 2022" height="48" />
  
  ## Тестирование доступности — это не страшно
  
  _Тестируйте на одной волне с вашими пользователями!_
  
  <!--<a>
    <img alt="Запись доклада" src="./.github/readme-assets/talk-ru.svg" height="36" /></a>-->
  <a href="https://illright.github.io/a11y-testing-is-not-scary/">
    <img alt="Слайды" src="https://github.com/illright/a11y-testing-is-not-scary/raw/main/.github/readme-assets/slides-ru.svg" height="36" /></a>
  <a href="./README.md">
    <img alt="README in English" src="./.github/readme-assets/readme-in-english.svg" height="36" /></a>
</div>

<br />

Доклад о важности HTML-ролей для доступности и навигации по сайту с перспективы тестировщиков, а также обзор [Testing Library](https://testing-library.com/) на практике для тестирования доступности с помощью Cypress.

Этот доклад был представлен на конференции [Merge 2022](https://mergeconf.ru/) в Иннополисе, Россия.

## Ключевые мысли

* Значительным препятствием в авто-тестировании является использование сайта программно
* Есть два популярных подхода к нахождению элементов на странице
  * С помощью CSS-селекторов
  * С помощью тестовых идентификаторов
* Вышеперечисленные подходы не соответствуют тому, как пользователи используют сайт
* HTML-роли — это способ сообщить браузеру о важных регионах и интерактивных элементах
* Testing Library помогает использовать роли в построении устойчивых тестов, попутно проверяющих доступность

## Приложение-пример

В директории `next-realworld-example-app` находится Next.js-фронтенд для проекта [Real World App](https://realworld.io/). В код проекта были внесены следующие изменения ([сравнить ветки](https://github.com/illright/next-realworld-example-app/compare/main...a11y)):

* Список постов был превращён в `feed` ([`ccda521`](https://github.com/illright/next-realworld-example-app/commit/ccda52106e7cec9208b1fa4d73dee88ee1b813b2))
* Каждый пост был превращён в `article` и получил доступное имя ([`e197baf`](https://github.com/illright/next-realworld-example-app/commit/e197baf8c7a66a62821d57c7a41de3980b02ee6d))
* Тэги справа были превращены в `complementary` и получили доступное имя ([`4b808c6`](https://github.com/illright/next-realworld-example-app/commit/4b808c670e96bd95d3d5ffc3a7f7c94a27b13612))
* Панель вкладок была превращена в `tablist` ([`d825145`](https://github.com/illright/next-realworld-example-app/commit/d825145b838cac08c5ca65723f71ca757bc000b6))
* Интеграционные тесты были написаны с помощью Cypress ([`6dfe4bc`](https://github.com/illright/next-realworld-example-app/commit/6dfe4bc1b85893be9859aec475c92b516201e75a))
* Доступные метки были привязаны к полям в форме регистрации ([`3d2dea2`](https://github.com/illright/next-realworld-example-app/commit/3d2dea2c918972df085bc8840099bb18ea452fdb))

## Как презентовать локально

Слайды созданы с помощью [Slidev](https://sli.dev). Запустите их скриптом `dev` в директории `slides/`:

```bash
cd slides
pnpm i
pnpm dev
```

## Лицензия

Логотип конференции Merge **защищен авторскими правами**, он распространяется с разрешения владельцев авторских прав.

Эмоджи входят в состав [EmojiOne](https://www.joypixels.com/), распространяемый под лицензией **CC-BY 4.0**.

Слайды и приложение-пример распространяются под лицензией **ISC**. [Кликните здесь](https://choosealicense.com/licenses/isc/), чтоб узнать больше об этой лицензии.

