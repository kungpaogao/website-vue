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
    };
  },
};
</script>
