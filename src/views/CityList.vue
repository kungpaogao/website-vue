<template>
  <div class="max-w-xs my-auto mx-auto">
    <h1 class="text-center text-5xl">Weather</h1>
    <CityPanel
      class="text-center mt-5"
      v-for="city in cities"
      :key="city.name"
      :city-name="city.name"
      :city-id="city.woeid"
    ></CityPanel>
  </div>
</template>

<script>
import CityPanel from "@/components/CityPanel.vue";

export default {
  name: "CityList",
  components: {
    CityPanel,
  },
  data: function() {
    return {
      cities: [
        { name: "Washington, DC", woeid: "2514815" },
        { name: "Boston, MA", woeid: "2367105" },
        { name: "Chicago, IL", woeid: "2367105" },
        { name: "Los Angeles, CA", woeid: "2442047" },
      ],
    };
  },
};
</script>

<style scoped></style>
