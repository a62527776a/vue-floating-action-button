# Vue Floating Action Button

##### ❤❤❤❤ a beautiful Floating Action Button ❤❤❤❤

<p align="center">
	<a href="https://www.npmjs.com/package/vue-float-action-button">
		<img src="https://img.shields.io/npm/dm/vue-float-action-button.svg" alt="Monthly downloads">
	</a>
	<img src="https://img.shields.io/badge/min+gzip-5.8_kB-blue.svg" alt="5.8 kB min+gzip">
  <a href="https://github.com/a62527776a/vue-floating-action-button/blob/master/LICENSE"><img
            src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License"></a>
  <a href="https://travis-ci.org/a62527776a/vue-floating-action-button">
    <img src="https://img.shields.io/travis/a62527776a/vue-floating-action-button.svg">
  </a>
  <a href='https://coveralls.io/github/a62527776a/vue-floating-action-button?branch=master'><img src='https://coveralls.io/repos/github/a62527776a/vue-floating-action-button/badge.svg?branch=master' alt='Coverage Status' /></a>
  <br>
  <a href="https://github.com/a62527776a/vue-floating-action-button/issues">
    <img src="https://img.shields.io/github/issues-closed-raw/a62527776a/vue-floating-action-button.svg" />
  </a>
  <a href="https://github.com/a62527776a/vue-floating-action-button">
    <img src="https://img.shields.io/github/stars/a62527776a/vue-floating-action-button.svg?style=social" />
  </a>
</p>

![8.gif](http://upload-images.jianshu.io/upload_images/5738345-8348ec8f54f0d160.gif?imageMogr2/auto-orient/strip)

![7.gif](http://upload-images.jianshu.io/upload_images/5738345-a13b5b7b511f8484.gif?imageMogr2/auto-orient/strip)

**[English Doc](https://github.com/a62527776a/vue-floating-action-button/blob/master/readme.md)**

**[homepage and document](http://vue-fab-homapage.dscsdoj.top)**

**[live demo](http://vue-fab.dscsdoj.top/)**

**[demo代码](https://github.com/a62527776a/vue-floating-action-button/blob/master/demo/App.vue)**



# API

## options

| Option |  Type  | Params | Description |
| ------ | --------  | ------ | ----------  |
|  iconType  | String |'MaterialDesign'/'iconfont' |  Decide which icon to use based on your usage habits or development dependencies |

```
Vue.use(VueFab, /* {
  ----------------------
  // opitons Optional iconfont icon or MaterialIcons
  iconType: 'MaterialDesign'
  // iconType: 'iconfont'
} */)
```

**vue-fab API**

## Props

| Option |  Type  |  Default  | Params | Description |
| ------ | ------ | --------  | ------ | ----------  |
|  iconType  | String |  'MaterialDesign' | 'MaterialDesign'/'iconfont' |  Decide which icon to use based on your usage habits or development dependencies     |
| autoHideDirection | String | 'up' | 'up' / 'down' | Rolling auto-hiding direction control, default value up to show up to hide down value to show up to hide down value |
|  icon  | String |  'add' | / |  Inactive icon     |
| activeIcon | String | 'add' | / | Activated icon |
| size | String | 'Normal' | 'big' / 'normal' / 'small' | The size of the main Fab will change with the submenu. |
|mainBtnColor|String|'#E64C3B'| / | Main button color|
|hidden| Boolean | true | true / false | Whether to hide Fab |
|fabAnimateBezier | String | linear | 'ease' / 'linear' / 'ease-in' / 'ease-out' / 'ease-in-out' / '.18,.89,.91,.17' | The main button shows the hidden Bezier curve. Fill in the Bezier curve and fill in 'n, n, n, n' or 'liner' directly.  |
| z-index|Number|5 | / |Fab level|
| shadow | Boolean | true | true / false | Main button shadow|
| clickAutoClose| Boolean | true | true / false | Whether to close the menu after clicking the submenu item |
| scrollAutoHide | Boolean | true | true / false | Whether scrolling triggers auto-hiding (the PC side and the mobile side are implemented differently according to the scroll event and the touchmove event respectively) |
| autoHideThreshold | Number | 10 | / | Scroll triggered auto-hidden threshold unit px |
| fabAutoHideAnimateModel | String | 'alive' | 'default' / 'alive' | Fab scrolling triggers auto-hide animations into 'default' (reduce hidden) and 'alive' (scroll down) |
| fabItemAnimate | String | 'default' | 'default' / 'alive' | Transition animation when opening the close submenu is divided into 'default' (respectively) 'alive' (split transition) |
| fabAliveAnimateBezier | String' | '.16,1.01,.61,1.2' | 'ease' / 'linear' / 'ease-in' / 'ease-out' / 'ease-in-out' / '.18,.89,.91,.17' | Sub-menu list Bezier curve in alive animation mode Note: Only when fabMenuAnimate is alive |
| globalOptions | Object | {spacing: 40, delay: 0.05} | / | Animation delay and spacing for each fab-item |
* **delay**: The delay difference between the fade in and out of the menu item is the delay (in s) of the delay for the previous menu item (the value is automatically divided by 3 when the fabItemAnimate is alive)
* **spacing** Spacing of each menu item Unit px

## Methods

| Name | Param | Type | Default | Description |
| ---- |   -------- | ------- | ------- | ----------- |
| onOffFab | True / False | Boolean | True | Show or hide Fab |

**fab-item API**

## Props

| Option |  Type  |  Default  | Params | Description |
| ------ | ------ | --------  | ------ | ----------  |
| idx | Number | 0 | / | The subscript determines the position and the value returned by the clickItem event (required) |
| title | String | '' | / | Menu item title If not filled, the title box will not be displayed. |
| icon | String | 'add' | / | Submenu item icon Supports [Material Icon] (https://material.io/icons/) and [iconfont](https://www.iconfont.cn/) icon |
| color | String | '#FFF' | / | Support for css color standard Default to white Do not fill in this value will automatically have a shadow with a value of 0px 2px 8px #666 |
| titleColor| String | #666 | / | Submenu title font color |
| titleBgColor | String | #FFF | / | Submenu background color |

## Event

|    Name   |   Param   | Description |
| ----      | -------   | ----------- |
| clickItem | {idx} | When the menu item is not empty and the menu item is clicked, the idx value passed in the menu item is returned. |

## 


## Note

Due to safari's event delivery mechanism window, document, body does not respond to click eventsIf clicks on a blank area and the submenu cannot be automatically closed ** Please check if the html height is 100%
   If there is no 100%, please set the css attribute to the html tag separately min-height: 100%
   The project handles the safari browser separately. In the safari browser, the click event is mounted on the HTML tag, and the browser other than the iOS system is mounted on the window.

***
## LICENSE
MIT
