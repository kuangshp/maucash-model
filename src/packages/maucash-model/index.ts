import Vue from 'vue';
import MaucashModel from './MaucashModel.vue';

(MaucashModel as any).install = (vue: typeof Vue) => {
  vue.component(MaucashModel.name, MaucashModel);
};

if (typeof window !== 'undefined' && (window as any).Vue) {
  (window as any).Vue.use(MaucashModel);
}
export default MaucashModel;
