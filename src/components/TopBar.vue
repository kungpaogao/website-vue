<template>
  <div class="w-full">
    <nav class="flex justify-between text-black">
      <div class="flex flex-row">
        <a href="https://www.instagram.com/gao.visuals/">
          <i data-feather="instagram" class="w-5 m-3"></i>
        </a>
        <a href="https://www.linkedin.com/in/andrewxgao/">
          <i data-feather="linkedin" class="w-5 m-3"></i>
        </a>
        <a href="https://github.com/kungpaogao">
          <i data-feather="github" class="w-5 m-3"></i>
        </a>
      </div>
      <div class="font-body m-3">resume</div>
    </nav>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "TopBar",
  mounted: function() {
    feather.replace();
  }
};
</script>

<style></style>
