# hello_react_Awesomeproject
this is first tutorial of react native.
리액트 튜토리얼입니다.

## Used/referenced
+ rnpm (react package manager), https://github.com/rnpm/rnpm
+ React native, https://facebook.github.io/react-native/
+ React tutorial korean, https://www.gitbook.com/book/g6ling/react-native-tutorial-korean
+ React native router flux, https://github.com/aksonov/react-native-router-flux
+ Ionic Ionicon, http://ionicframework.com/docs/v2/ionicons/

## Note
In window 7, android env. encountered error 404, 500.(i think cause is watchman for window).
current solution worked for me is,
```bash
$ watchman watch-del-all
$ npm cache clean
```
And I encountered error 'Error: undefined is not an object (Evaluating 'react.React.createElement')'
and cause was import statement.
i wrote import statement like
```js
import {
  React,
  Component
} from 'react';
```
and change like this.
```js
import React, { Component } from 'react';
```
