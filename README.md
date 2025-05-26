<h1 style="display: flex; align-items: center; justify-content: center">
  <a href="https://insola.tech/" style="display:flex; align-items: center; margin-right: 10px;">
    <img alt="Insola Tech" src="public/favicon.png" width="60" />
  Insola Tech
  </a>
  Ui Kit
</h1>

Библиотека компонентов группы пет-проектов Insola Tech. Используется в insola-design.ru, Insola Layout, Verni Sotku и многих других

## 🚅 Быстрый старт

1.  **Установи зависимости**

    Перейди в папку с китом и установи зависимости своим любимым менеджером пакетов

    ```shell
    cd insola-tech-ui-kit
    npm i
    ```

1.  **Открой исходники и начинай говнокодить**

    Посмотри, как организованы компоненты, и делай похожим образом.

1.  **Проверь, что всё работает**

    Запусти сторибук `npm run storybook` чтобы посмотреть, как компоненты работают в изоляции, что можно с ними делать и какие есть крайние случаи их использования. 

    Сторибук запустится по адресу `http://localhost:6006`

## 🔎 Как всё устроено?

Компоненты лежат внутри папки `/src/components` и организованы по упрощённому подобию FSD.
Внутри папки компоненты разбиты по файлам:

    .
    ├── index.vue
    ├── stories.ts
    └── types.ts

1.  **`index.vue`**: Содержит сам компонент, его логику и html-шаблон

2.  **`stories.ts`**: Здесь определяются истории, которые потом отоб

3.  **`public`**: This directory will contain the development and production build of the site.

4.  **`src`**: This directory will contain all of the code related to what you will see on your application.

5.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.

6.  **`.eslintrc.cjs`**: This file contains the configuration for ESLint.

7.  **`.prettierrc.json`**: This file contains the configuration for Prettier.

8.  **`.index.html`**: This is the HTML page that is served when generating a development or production build.

9.  **`jsconfig.json`**: This file specifies the root files and the options for the features provided by the JavaScript language service.

10. **`LICENSE`**: The template is licensed under the MIT licence.

11. **`yarn.lock`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(Do not change it manually).**

12. **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

13. **`vite.config.js`**: This is the configuration file for [Vite](https://vitejs.dev/), a build tool that aims to provide a faster and leaner development experience for modern web projects.

14. **`README.md`**: A text file containing useful reference information about the project.

## Contribute

If you encounter an issue with the template, we encourage you to open an issue in this template's repository.

## Learning Storybook

1. Read our introductory tutorial at [Learn Storybook](https://storybook.js.org/tutorials/intro-to-storybook/vue/en/get-started/).
2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
3. See our official documentation at [Storybook](https://storybook.js.org/).
