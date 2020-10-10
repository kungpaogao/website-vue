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
      <li v-if="making.length > 0">
        {{ "Making: " }}
        <doing-list :list="making" />
      </li>
      <li v-if="learning.length > 0">
        {{ "Learning: " }}
        <doing-list :list="learning" />
      </li>
      <li v-if="reading.length > 0">
        {{ "Reading: " }}
        <doing-list :list="reading" />
      </li>
    </ul>
  </div>
</template>

<script>
import DoingList from "./DoingList";

export default {
  name: "Doing",
  components: {
    DoingList,
  },
  data: function() {
    return {
      making: [
        {
          key: "flu",
          desc: "Flux",
          link: "https://github.com/cornell-dti/campus-density-android/",
          title: "Link to the GitHub repository for Flux Android",
        },
        {
          key: "n2n",
          desc: "N2N inventory",
          link: "https://www.youtube.com/watch?v=Ft4LrRe-ZK0",
          title: "Watch a video about the Neighbor to Neighbor project",
        },
        { key: "web", desc: "this website", link: "", title: "" },
      ],
      learning: [
        {
          key: "arc",
          desc: "Android architecture",
          link: "https://developer.android.com/jetpack/docs/guide",
          title: "Link to a quick guide about Android architecture",
        },
        {
          key: "kot",
          desc: "Kotlin",
          link: "https://kotlinlang.org/",
          title: "Link the Kotlin's website",
        },
        {
          key: "rea",
          desc: "React",
          link: "https://reactjs.org/",
          title: "Link to React's website",
        },
        {
          key: "tai",
          desc: "Tailwind",
          link: "https://tailwindcss.com/",
          title: "",
        },
      ],
      reading: [],
      location: "Cornell",
    };
  },
};
</script>
