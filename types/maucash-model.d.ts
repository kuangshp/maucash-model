import Vue from 'vue';

export declare class MaucashModel extends Vue {
  // 标题
  public title: string;
  // 是否隐藏头部
  public isHideHeader: boolean;
  // 是否隐藏底部
  public isHideFooter: boolean;
  // 关闭按钮的事件
  public iscloseFunc: () => void;
  // 关闭按钮文字
  public closeText: string;
  // 确认按钮的事件
  public confirmFunc: () => void;
  // 确认按钮的文字
  public confirmText: string;
  // 底部自定义渲染函数
  public render: () => void;
  // 弹框的宽
  public width: number;
  // 弹框的高
  public height: number;
  // 内容体的样式
  public bodyStyle: { [propsName: string]: any };
  // 是否可拖拽
  public draggable: boolean;
  // 是否隐藏关闭按钮
  public isHideCloseBtn: boolean;
  // 是否隐藏确认按钮
  public isHideConfimBtn: boolean;
}
