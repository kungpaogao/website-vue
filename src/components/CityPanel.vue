<template>
  <div>
    <router-link :to="'/city/' + cityId">
      <div class="bg-white rounded-lg p-6 shadow">
        <h2 class="text-xl">{{ cityName }}</h2>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityPanel",
  props: ["cityName", "cityId"],
};
</script>

<style scoped></style>
