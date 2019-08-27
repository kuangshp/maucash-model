import Vue from 'vue';
import MaucashModel from './maucash-model';

const components = [MaucashModel];

// 定义 install 方法
const install = (vue: typeof Vue) => {
  // 遍历并注册全局组件
  components.map((component) => {
    vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components,
};
