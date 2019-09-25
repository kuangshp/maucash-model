import Vue from 'vue';
import MaucashModel from './maucash-model';
const components: { [propsName: string]: any } = {
  MaucashModel,
};

const install = (vue: typeof Vue): void => {
  // 安装全部的插件
  Object.keys(components).forEach((key) => {
    vue.component(key, components[key]);
  });
};

export default {
  install,
  ...components,
};
