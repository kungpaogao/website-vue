<template>
  <div class="max-w-xs my-auto mx-auto">
    <h1 class="text-5xl text-center">{{ location }}</h1>
    <weather-panel
      class="mt-5"
      v-for="(day, i) in threeDays"
      :key="day.id"
      :state="day.weather_state_name"
      :low="day.min_temp"
      :high="day.max_temp"
      :day="days[i]"
    ></weather-panel>
  </div>
</template>

<script>
import WeatherPanel from "@/components/WeatherPanel.vue";
import axios from "axios";

export default {
  name: "Weather",
  components: {
    WeatherPanel,
  },
  data() {
    return {
      info: null,
      threeDays: [],
      location: "",
      days: ["Today", "Tomorrow", "In 2 Days"],
    };
  },
  methods: {
    parse() {
      const info = JSON.stringify(this.info);
      const json = JSON.parse(info);
      const weatherList = json.data.consolidated_weather;
      this.threeDays = weatherList.slice(0, 3);
      this.location = json.data.title;
    },
  },
  mounted() {
    const woeid = this.$route.params.id;
    const cors_api_url = "https://cors-anywhere.herokuapp.com/";
    const api_url = "https://www.metaweather.com/api/location/";
    axios.get(cors_api_url + api_url + woeid).then(response => {
      (this.info = response), this.parse();
    });
  },
};
</script>

<style scoped></style>
