<template>
  <div id="app" class="h-full">
    <router-view class="pt-3" />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
html,
body {
  @apply h-full w-full;
}
</style>
