<template>
  <div class="show-wrapper">
    <div class="show-wrapper--title">
      <h2 v-if="title">{{ title }}</h2>
      <small v-if="description">{{ description }}</small>
    </div>
    <div class="show-wrapper--demo">
      <div class="show-wrapper--content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Show',
  props: ['title', 'description'],
  data() {
    return {
      visible: false,
      btnText: '显示代码'
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.show-wrapper {
  margin: 30px 0 0 0;
  .show-wrapper--title {
    h2 {
      padding: 0;
      margin: 0;
      border-bottom: none;
      font-size: 18px;
      margin-bottom: 10px;
    }
    small {
      font-size: 14px;
      display: inline-block;
      margin-bottom: 10px;
      color: #5e6d82;
    }
  }
  .show-wrapper--demo {
    border: 1px solid #ebebeb;
    border-bottom: none;
    border-radius: 3px;
    box-shadow: 0 0 2px 0 rgba(232, 237, 250, 0.6),
      0 1px 2px 0 rgba(232, 237, 250, 0.5);
    .show-wrapper--content {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 4%;
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>
