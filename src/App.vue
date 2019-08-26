<template>
  <div id="app">
    <button @click="open">打开弹框</button>
    <Model
      v-model="model"
      draggable
      title="标题"
    >内容体</Model>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Model from './components/Model.vue';
@Component({
  components: {
    Model,
  },
})
export default class App extends Vue {
  private model: boolean = false;

  private open(): void {
    this.model = true;
  }
}
</script>

<style lang="scss">
</style>
