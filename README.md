# vue-mini-toast
```
简单的vue的弹窗插件（pop/alert/confirm/actionSheet）
```

## 安装
```
npm install vue-mini-toast -S
```

## Vue中使用
```
// main.js
import toast from 'vue-mini-toast'
Vue.use(toast);
```

## API

* #### pop
```
this.$pop(option);
```
##### option [ Object ]
|参数|类型|可选含义|
|:---------:|:-------------:|:--------:|
|   msg     |     String    |   提示内容   |
|   align   |     String    |   弹框位置：top/middle（默认）/bottom   |
|   theme   |     String    |   弹窗颜色：black（默认黑底白字）/light（白底黑字）   |
|   delay   |     Number    |   自动消失时间（默认2000ms）   |

* #### alert
```
this.$alert(option, callback);
```
##### option [ Object ]
|参数|类型|可选含义|
|:---------:|:-------------:|:--------:|
|   title   |     String    |   标题   |
|    msg    |     String    |   弹窗内容   |
|    btn    |     String    |   按钮文字（默认‘确定’）   |
|  btnColor |     String    |   按钮文字颜色（默认蓝色）   |
##### callback [ Function ]
|含义|
|:--------:|
|   点击按钮的回调函数   |

* #### confirm
```
this.$confirm(option, callback);
```
##### option [ Object ]
|参数|类型|可选含义|
|:---------:|:-------------:|:--------:|
|   title   |     String    |   标题   |
|    msg    |     String    |   弹窗内容   |
|    btn    |    [String]   |   按钮文字（默认 [‘确定’, ‘取消’]）   |
|  btnColor |    [String]   |   按钮文字颜色（默认蓝色）   |
##### callback [ Function ]
|回调参数|含义|
|:---------:|:--------:|
|   index   |   点击的按钮index值   |

* #### actionSheet
```
this.$actionSheet(option, callback);
```
##### option [ Object ]
|参数|类型|可选含义|
|:---------:|:-------------:|:--------:|
|   title   |     String    |   标题（可选传，默认无）   |
|    btn    |    [String]   |   按钮文字（默认 ['选项1', '选项2']）   |
|  btnColor |    [String]   |   按钮文字颜色（默认蓝色）   |
##### callback [ Function ]
|回调参数|含义|
|:---------:|:--------:|
|    item   |   点击的按钮文字内容   |
|   index   |   点击的按钮index值   |