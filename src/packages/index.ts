import Vue from 'vue';
import MaucashModel from './maucash-model';

const install = (vue: typeof Vue): void => {
  // 安装全部的插件
  vue.component('maucash-model', MaucashModel);
};

export default {
  install,
};
