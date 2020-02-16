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
        {
          key: "flu",
          desc: "Flux",
          link: "https://github.com/cornell-dti/campus-density-android/",
          title: "Link to the GitHub repository",
        },
        {
          key: "n2n",
          desc: "N2N inventory",
          link: "https://www.youtube.com/watch?v=Ft4LrRe-ZK0",
          title: "Watch a video on the project",
        },
        { key: "web", desc: "this website", link: "", title: "" },
      ],
      learning: [
        {
          key: "arc",
          desc: "Android architecture",
          link: "https://developer.android.com/jetpack/docs/guide",
          title: "Link to a quick guide",
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
      reading: [
        {
          key: "new",
          desc: "New Testament",
          link:
            "https://classes.cornell.edu/browse/roster/SP20/class/CLASS/2613",
          title: "Link to my Classics class",
        },
        {
          key: "vis",
          desc: "Visual Studies",
          link:
            "https://classes.cornell.edu/browse/roster/SP20/class/VISST/2000",
          title: "Link to my visual studies class",
        },
      ],
      location: "Cornell",
    };
  },
};
</script>
