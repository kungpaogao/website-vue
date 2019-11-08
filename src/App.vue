<template>
  <div id="app" class="h-full">
    <!-- <top-bar /> -->
    <router-view class="mt-3" />
  </div>
</template>

<script>
// import TopBar from "@/components/TopBar.vue";

export default {
  name: "app",
  components: {
    // TopBar,
  },
};
</script>

<style>
html,
body {
  @apply h-full w-full;
}
</style>
