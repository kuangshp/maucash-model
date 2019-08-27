import MaucashModel from './maucash-model';

const components = [MaucashModel];

// 定义 install 方法
const install = (Vue: any) => {
  // 判断是否已经安装
  if ((install as any).installed) {
    return;
  }
  // 遍历并注册全局组件
  components.map((component) => {
    Vue.component(component.name, component);
  });
};

// 判断是否直接引入文件的方式
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components,
};
