<template>
  <div class="home topbar-comp content-center">
    <div class="container max-w-xs my-auto mx-auto flex flex-col p-5 text-text">
      <h1 class="text-3xl font-extrabold font-head text-accent-500">Hello!</h1>
      <h2 class="text-4xl font-extrabold font-head">I'm Andrew Gao.</h2>
      <h3 class="text-md font-body lowercase">CS & Stat @ Cornell</h3>
      <actions class="mt-10" />
      <doing class="mt-10" />
    </div>
  </div>
</template>

<script>
import Doing from "@/components/Doing.vue";
import Actions from "@/components/Actions.vue";

export default {
  name: "home",
  components: {
    Doing,
    Actions
  }
};
</script>

<style scoped>
@import "../styles/global.css";
</style>
