# React Compiler playground app ✨✨✨

This project provides a minimal setup for a React 19 app powered by [React Compiler](https://react.dev/learn/react-compiler).
In this developer playground you can prototype and test how React Compiler will optimize re-renders in React applications.

## Quick start

```shell
npm install
npm run dev
```

In `./src/App.jsx` you can add components you want to test. You can use `console.log` to check which components re-render and when.

### Checking if components have been optimized

You can use [React Devtools](https://react.dev/learn/react-developer-tools) (v5.0+), which has built-in support for React Compiler and will display a “Memo ✨” badge next to components that have been optimized by the compiler. 

In React Devtools, you can also enable `“Highlight updates when components render”` option for a visual indication when components rerender (However, I found that it does not always accurately work with components optimized by React Compiler, so using `console.log` to check if the component is re-rendered seems more reliable as of now).

### Checking how components have been optimized

Minification is disabled in this project, so when you don't understand why some components are being re-rendered when you think they shouldn't, you can build this project with ```npm run build``` and
examine the `dist` folder to see the output of the React Compiler (open `./dist/assets/index-*.js` and scroll to the bottom). 

You can also copy your code to [React Compiler online playground](https://playground.react.dev/) and see the compilation result there. 

### Running app example

Example of the project running and how it can be used to detect unexpected behavior of React Compiler:

![running_app_example](https://github.com/toli444/React-Compiler-playground-app/assets/14879804/69840e7a-a5d3-43d0-8716-97ac840d2ca9)

Read more about it [in this article](https://medium.com/@anatoli.semianiaka/react-compiler-common-memoization-gotcha-in-your-react-app-78fae189a02f) about React Compiler common memoization “gotcha”.

## How the project is setup

https://react.dev/learn/react-compiler#usage-with-vite
