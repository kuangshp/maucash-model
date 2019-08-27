export default {
  props: {
    render: {
      type: Function,
    },
  },
  render(h: any): any {
    return this.render(h);
  },
};
