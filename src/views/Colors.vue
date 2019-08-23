<template>
  <div
    class="topbar-comp h-full w-full"
    :style="{ backgroundColor: '#' + color }"
  >
    <div class="w-1/4 mx-auto font-body pt-16 flex flex-row">
      <div class="under w-5 h-full text-black white">
        <i data-feather="hash" class="p-1"></i>
      </div>
      <input v-model="color" type="text" class="under w-full pl-1" />
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "colors",
  data() {
    return {
      color: "fff"
    };
  },
  mounted: function() {
    feather.replace();
  }
};
</script>

<style scoped>
@import "../styles/global.css";

.white {
  background-color: #fff !important;
}

.under {
  @apply border-solid border-b-2;
}
</style>
