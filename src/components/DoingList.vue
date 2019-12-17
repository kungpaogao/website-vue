<template>
  <span>
    <span :key="it.key" v-for="it in list">
      <a v-if="it.link" :href="it.link" :title="it.title">{{ it.desc }}</a>
      <span v-else>{{ it.desc }}</span>
      <span>{{ it.key !== list[list.length - 1].key ? sep : "" }}</span>
    </span>
  </span>
</template>

<script>
export default {
  name: "DoingList",
  props: ["list"],
  data() {
    return { sep: ", " };
  },
};
</script>
