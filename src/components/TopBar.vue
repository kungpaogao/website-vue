<template>
  <div class="z-50 w-full bg-transparent">
    <nav class="flex justify-between text-text">
      <div class="flex flex-row">
        <a href="https://www.instagram.com/gao.visuals/">
          <i data-feather="instagram" class="link ext"></i>
        </a>
        <a href="https://www.linkedin.com/in/andrewxgao/">
          <i data-feather="linkedin" class="link ext"></i>
        </a>
        <a href="https://github.com/kungpaogao">
          <i data-feather="github" class="link ext"></i>
        </a>
      </div>
      <div
        class="font-body link lowercase"
        @mouseenter="resume = '(Sep 2019) Resume'"
        @mouseleave="resume = 'Resume'"
      >
        <a href="/resume.pdf">{{ resume }}</a>
      </div>
    </nav>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "TopBar",
  data() {
    return {
      resume: "Resume",
    };
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style scoped>
.link {
  @apply m-3;
  transition: color 350ms;
}

.ext {
  @apply w-5;
}

.link:hover {
  @apply text-accent-500;
}
</style>
