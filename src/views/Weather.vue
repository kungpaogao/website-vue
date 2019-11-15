<template>
  <div class="max-w-xs my-auto mx-auto">
    <h1 class="text-5xl text-center">Location</h1>
    <weather-panel></weather-panel>
  </div>
</template>

<script>
import WeatherPanel from "@/components/WeatherPanel.vue";

export default {
  name: "Weather",
  components: {
    WeatherPanel,
  },
  data: function() {
    return {};
  },
};
</script>

<style scoped></style>
