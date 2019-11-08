<template>
  <div>
    <label>
      <h2 class="font-head font-semibold text-md uppercase">
        Things I'm Doing
      </h2>
    </label>
    <ul class="pl-5 list-disc font-body lowercase">
      <!-- TODO: make this pull from API/database -->
      <li>{{ location }}</li>
      <li>
        {{ "Making: " }}
        <span :key="it.key" v-for="it in making">
          <a v-if="it.link" :href="it.link" :title="it.title">{{ it.desc }}</a>
          <span v-else>{{ it.desc }}</span>
          <span>{{ it.key !== making[making.length - 1].key ? sep : "" }}</span>
        </span>
      </li>
      <li>
        {{ "Learning: " }}
        <span :key="it.key" v-for="it in learning">
          <a v-if="it.link" :href="it.link" :title="it.title">{{ it.desc }}</a>
          <span v-else>{{ it.desc }}</span>
          <span>{{
            it.key !== learning[learning.length - 1].key ? sep : ""
          }}</span>
        </span>
      </li>
      <li>
        {{ "Reading: " }}
        <span :key="it.key" v-for="it in reading">
          <a v-if="it.link" :href="it.link" :title="it.title">{{ it.desc }}</a>
          <span v-else>{{ it.desc }}</span>
          <span>{{
            it.key !== reading[reading.length - 1].key ? sep : ""
          }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Doing",
  data: function() {
    return {
      making: [
        { key: "web", desc: "this website", link: "", title: "" },
        {
          key: "tak",
          desc: "takk",
          link: "https://takksolution.com/",
          title: "Visit the takk website",
        },
        {
          key: "n2n",
          desc: "N2N inventory",
          link: "https://www.youtube.com/watch?v=Ft4LrRe-ZK0",
          title: "Watch a video on the project",
        },
      ],
      learning: [
        { key: "rea", desc: "React", link: "", title: "" },
        { key: "tai", desc: "Tailwind", link: "", title: "" },
        { key: "kot", desc: "Kotlin", link: "", title: "" },
      ],
      reading: [{ key: "tex", desc: "Textbooks", link: "", title: "" }],
      location: "Cornell",
      sep: ", ",
    };
  },
};
</script>

<style></style>
