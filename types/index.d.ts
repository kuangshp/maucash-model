import Vue from 'vue';

declare function install(vue: typeof Vue): void;

declare class MaucashModel extends Vue {}

declare const _default: {
  install: typeof install;
};

export { MaucashModel };

export default _default;
