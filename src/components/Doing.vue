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
        <doing-list :list="making" />
      </li>
      <li>
        {{ "Learning: " }}
        <doing-list :list="learning" />
      </li>
      <li>
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
  props: ["data"],
  data() {
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
        {
          key: "flx",
          desc: "Flux",
          link: "https://github.com/cornell-dti/campus-density-android",
          title: "Visit the GitHub repo",
        },
      ],
      learning: [
        { key: "rea", desc: "React", link: "https://reactjs.org/", title: "" },
        {
          key: "tai",
          desc: "Tailwind",
          link: "https://tailwindcss.com/",
          title: "",
        },
        {
          key: "kot",
          desc: "Kotlin",
          link: "https://kotlinlang.org/",
          title: "",
        },
      ],
      reading: [{ key: "tex", desc: "Textbooks", link: "", title: "" }],
      location: "Cornell",
    };
  },
};
</script>
