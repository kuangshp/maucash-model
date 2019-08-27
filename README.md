# maucash-model

## 一、使用方式

- 1、安装

  ```shell
  npm install maucash-model
  ```

- 2、在项目中的`main.js`文件中引入

  ```js
  import MaucashModel from 'maucash-model';
  import 'maucash-model/dist/maucash-model.css';
  ```

* 3、组件中使用

  ```html
  <button @click="openModel">点击打开弹框</button>
  <maucash-model v-model="model" draggable>内容</maucash-model>
  ```

## 二、主要的`API`

|       参数        |    类型    | 说明                           | 默认值  |
| :---------------: | :--------: | ------------------------------ | ------- |
|      `title`      |  `String`  | 标题                           | 空      |
|  `isHideHeader`   | `Boolean`  | 是否隐藏头部                   | `false` |
|  `isHideFooter`   | `Boolean`  | 是否隐藏底部                   | `false` |
|    `closeFunc`    | `Function` | 关闭按钮的回调函数             |         |
|    `closeText`    |  `String`  | 关闭按钮的文字                 | 取消    |
|   `confirmFunc`   | `Function` | 确认按钮的回调函数             |         |
|   `confirmText`   | `Function` | 确认按钮的文字                 | 确认    |
|     `render`      | `Function` | 自定义底部,自己写一个`jsx`语法 |         |
|      `width`      |  `Number`  | 弹框的宽度                     | 450     |
|     `height`      |  `Number`  | 弹框的高度                     | 300     |
|    `bodyStyle`    |  `Object`  | 内容体的样式                   | `{}`    |
|    `draggable`    | `Boolean`  | 是否可拖拽                     | `false` |
| `isHideCloseBtn`  | `Boolean`  | 是否隐藏取消按钮               | `false` |
| `isHideConfimBtn` | `Boolean`  | 是否隐藏确认按钮               | `false` |
