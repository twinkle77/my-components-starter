<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'TestComponent',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
div {
  color: red;
}
</style>
