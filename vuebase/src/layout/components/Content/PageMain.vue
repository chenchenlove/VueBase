<template>
  <section class="page-main">
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
  </section>
</template>

<script>
export default {
  name: "PageMain",
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
