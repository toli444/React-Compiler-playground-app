# React Compiler playground app

This project provides a minimal setup for a React app powered by [React Compiler](https://react.dev/learn/react-compiler).
In this developer playground you can prototype and test how React Compiler will optimize re-renders in React applications.

## Quick start

```shell
npm install
npm run dev
```

In `./src/App.jsx` you can add components you want to test. You can use `console.log` to check which components re-render and when.

### Checking if components have been optimized

You can use [React Devtools](https://react.dev/learn/react-developer-tools) (v5.0+), which has built-in support for React Compiler and will display a “Memo ✨” badge next to components that have been optimized by the compiler. 

There you can also enable `Highlight updates when components renderk` option for a visual indication when components rerender (However, I found that it does not always accurately work with components optimized by React Compiler, so using `console.log` to check if the component is re-rendered seems more reliable as of now).

### Checking how components have been optimized

Minification is disabled in this project, so when you don't understand why some components are being re-rendered when you think they shouldn't, you can build this project with ```npm run build``` and
examine the `dist` folder to see the output of the React Compiler (open `./dist/assets/index-*.js` and scroll to the bottom). 

You can also copy your code to [React Compiler online playground](https://playground.react.dev/) and see the compilation result there. 

## How the project is setup

https://react.dev/learn/react-compiler#usage-with-vite
