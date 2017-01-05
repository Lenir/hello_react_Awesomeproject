# hello_react_Awesomeproject
this is my first time in react native.

리액트 네이티브는 처음 써보네요. 검색하면서 이것저것 붙이며 공부중입니다.

## Used/referenced
사용한 툴이나 도움이 많이 된 사이트를 모았습니다.


+ rnpm (react package manager), https://github.com/rnpm/rnpm
+ React native, https://facebook.github.io/react-native/
+ React tutorial korean, https://www.gitbook.com/book/g6ling/react-native-tutorial-korean
+ React native router flux, https://github.com/aksonov/react-native-router-flux
+ React native Image Picker, https://github.com/marcshilling/react-native-image-picker
+ Ionic Ionicon, http://ionicframework.com/docs/v2/ionicons/


## Note
보통 에러 해결법 찾아서 기록해둔 것들입니다.

+ In window 7, run react native in android avd, I encountered Error:404(file not found), Error:500(internal error).(I think cause is watchman for window).

윈도우7 환경에서 안드로이드 avd로 run-android 실행시 404에러나 500에러가 뜹니다. 왜인지는 잘 모르겠는데 아마 watchman때문인 거 같아서 run-android 할 때 마다 watchman리스트와 npm 캐시를 지워줬더니 되더군요. 정확한 이유는 모르겠습니다. 아마 윈도우용 watchman이 알파 버전이라서 그런거 같아요.

I solve it like this.

일단 해결법은
```bash
$ watchman watch-del-all
$ npm cache clean
```
+ And I encountered error 'Error: undefined is not an object (Evaluating 'react.React.createElement')'
and cause was import statement.

그리고 또 'Error: undefined is not an object (Evaluating 'react.React.createElement')'이런 에러가 나왔는데.. 예상치도 못한 에러라서 적어둡니다.

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

+ And another issue with react-native-image-picker, 'Error: undefined is not an object (evaluating ImagePickerManager..' it's cause not link with native project.(I told before, i delete watchman and npm cache every time.)
so, delete watchman list, and link, and clean cache, and launch.

React native Image Picker사용시 에러가 뜨던데 이건 watchman 캐시를 지워버려서 npm link가 되지 않아 생기는 것 같더군요. 링크해주니까 잘 됩니다. 빨리 맥환경으로 돌아가야할텐데..

```bash
$ watchman watch-del-all
$ rnpm link
$ react-native link
$ npm cache clean
$ react-native start
```
