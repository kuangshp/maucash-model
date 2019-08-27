<template>
  <div
    class="model"
    v-if="value"
  >
    <div
      class="cover"
      :class="{move: draggable}"
    >
      <div
        class="content"
        @mousedown="move"
        :style="contentStyle"
      >
        <div
          class="header"
          v-if="isShowHeader"
          :class="{move: draggable}"
        >
          <div class="title">{{title}}</div>
          <div
            class="close"
            @click="close"
          >&#935;</div>
        </div>
        <div
          class="body"
          :style="bodyStyle"
        >
          <slot></slot>
        </div>
        <div
          class="footer"
          v-if="isShowFooter"
          :style="{'justify-content': render ? 'normal': ''}"
        >
          <template v-if="render">
            <Footer :render="render" />
          </template>
          <template v-else>
            <div class="btn-group">
              <button
                class="btn close-btn"
                @click="closeBtn"
              >{{closeText}}</button>
              <button
                class="btn confirm-btn"
                @click="confirmBtn"
              >{{confirmText}}</button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

import Footer from './Footer';

@Component({
  name: 'maucash-model',
  components: {
    Footer,
  },
})
export default class MaucashModel extends Vue {
  // 显示与隐藏，绑定到v-model上的值
  @Prop({ type: Boolean, default: false, required: true }) private value!: boolean;

  // 标题
  @Prop({ type: String, default: '', required: false }) private title!: string;

  // 是否显示头部
  @Prop({ type: Boolean, default: true, required: false }) private isShowHeader!: boolean;

  // 是否显示底部
  @Prop({ type: Boolean, default: true, required: false }) private isShowFooter!: boolean;

  // 关闭的事件回调
  @Prop({ type: Function, required: false }) private closeFunc!: () => void;

  // 关闭按钮文字
  @Prop({ type: String, default: '关闭', required: false }) private closeText!: string;

  // 确认的事件回调
  @Prop({ type: Function, required: false }) private confirmFunc!: () => void;

  // 确认按钮文字
  @Prop({ type: String, default: '确认', required: false }) private confirmText!: string;

  // 底部自定义render函数
  @Prop({ type: Function, required: false }) private render!: () => void;

  // 弹框的宽度
  @Prop({ type: Number, default: 450, required: false }) private width!: number;

  // 弹框的高度
  @Prop({ type: Number, default: 300, required: false }) private height!: number;

  // 内容体的样式
  @Prop({ type: Object, default: () => ({}), required: false }) private bodyStyle!: { [propsName: string]: any };

  // 是否可拖动
  @Prop({ type: Boolean, default: false, required: false }) private draggable!: boolean;

  private contentStyle: { [propsName: string]: any } = {
    width: this.width + 'px',
    height: this.height + 'px',
  };

  // 关闭事件
  @Emit('input')
  private close(): boolean {
    return false;
  }

  // 关闭按钮事件
  private closeBtn() {
    if (this.closeFunc) {
      this.closeFunc();
    } else {
      this.close();
    }
  }

  // 确认按钮事件
  private confirmBtn() {
    if (this.confirmFunc) {
      this.confirmFunc();
    } else {
      this.close();
    }
  }

  // 拖拽事件
  private move(e: any) {
    const odiv: HTMLElement = e.target.parentNode.parentNode;
    if (this.draggable) {
      // 算出鼠标相对元素的位置
      const disX: number = e.clientX - odiv.offsetLeft;
      const disY: number = e.clientY - odiv.offsetTop;
      document.onmousemove = (event: any) => {
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left: number = event.clientX - disX;
        let top: number = event.clientY - disY;
        // 计算能移动的最大位置与最小位置
        const maxX: number = document.documentElement.clientWidth - odiv.offsetWidth;
        const maxY: number = document.documentElement.clientHeight - odiv.offsetHeight;
        // if (left < 0) {
        //   left = 0;
        // } else if (left > maxX) {
        //   left = maxX;
        // }
        // if (top < 0) {
        //   top = 0;
        // } else if (top > maxY) {
        //   top = maxY;
        // }
        left = Math.min(maxX, Math.max(0, left));
        top = Math.min(maxY, Math.max(0, top));
        // 移动当前元素
        odiv.style.left = left + 'px';
        odiv.style.top = top + 'px';
        odiv.style.margin = 'unset';
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  }
}
</script>

<style scoped lang="scss">
.cover {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  &.move {
    background: transparent;
  }
  .content {
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    border: 1px solid #e5e5e5;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    .header {
      border-bottom: 1px solid #e5e5e5;
      line-height: 50px;
      height: 50px;
      display: flex;
      flex-direction: row;
      &.move {
        cursor: move;
      }
      .title {
        flex: 1;
        margin-left: 10px;
      }
      .close {
        width: 10px;
        cursor: pointer;
        line-height: 50px;
        margin-right: 10px;
      }
    }
    .body {
      padding: 1rem;
      flex: 1;
    }
    .footer {
      border-top: 1px solid #e5e5e5;
      line-height: 50px;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      .btn-group {
        margin-right: 10px;
        .btn {
          font-size: 12px;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: 0;
          font-weight: 400;
          text-align: center;
          padding: 5px 15px 6px;
          touch-action: manipulation;
          cursor: pointer;
          background-image: none;
          outline: none;
        }
      }
      .confirm-btn {
        margin-left: 10px;
        color: #fff;
        background-color: #2d8cf0;
      }
    }
  }
}
</style>