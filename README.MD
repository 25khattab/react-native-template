# react-native-template

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Libraries Nice to have](#nice_to_have)

## About <a name = "about"></a>

Its a template for react-native projects using expo SDK 49 and react navigation

### Features

- Multiple Language Support

- RTL & Dark mode Support from withing View and Text [check them out](./src/components/overriden-components/)

- zustand

- react query (soon)

- Eslint and prettier formatting same as shopify

```
npm run prettier
npm run lint
```

- Template Generation using Plop Currently can generate components [check plopfile.js](plopfile.js)

```
npm run generate
```

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development.

#### You should change project name and slug in packages.json and in app.json

### Prerequisites

What things you need to install the software and how to install them.

this is my current setup just incase it didn't work on your local machine.

```
pnpm >= 8
node >= v18.16.0 always prefer LTS
```

### Installing

A step by step series of examples that tell you how to get a development env running.

```
npm i

npm run start
```

## Libraries Nice to have <a name = "nice_to_have"></a>

### This is just preference use what you are comfortable with


- #### [react-hook-form](https://github.com/react-hook-form/react-hook-form)

- #### [Zod](https://github.com/colinhacks/zod) for type validation and it's really nice with [react-hook-form](https://github.com/react-hook-form/react-hook-form)

- #### [react-native-bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet) Its very good library for bottom sheet with easy usage and can build complex stuff too.

- #### [react-native-snap-carousel](https://github.com/meliorence/react-native-snap-carousel)

- #### [react-native-modal](https://github.com/react-native-modal/react-native-modal) tihs will also come in handy if you want to understand how it works [modal](https://reactnative.dev/docs/modal)

- #### For picker I suggest [react-native-element-dropdown](https://github.com/hoaphantn7604/react-native-element-dropdown) its very nice and easy to use and has only 1 Dependency, Also for Secioned multi select I suggest [react-native-sectioned-multi-select](https://github.com/renrizzolo/react-native-sectioned-multi-select)

- #### Also check Expo they have very good and maintained packages
