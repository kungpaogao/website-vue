<template>
  <div class="bg-white rounded-lg p-6 shadow">
    <h1>{{ day }}</h1>
    <h2>{{ state }}</h2>
    <h3>Low: {{ convert(low) }}, High: {{ convert(high) }}</h3>
  </div>
</template>

<script>
export default {
  props: ["state", "low", "high", "day"],
  name: "WeatherPanel",
  methods: {
    convert(celsius) {
      return Math.round(1.8 * celsius + 32);
    },
  },
};
</script>

<style></style>
