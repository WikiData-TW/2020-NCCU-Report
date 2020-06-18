<template>
  <div class="banner banner-container">
    <div
      v-for="(banner, index) in bannerList"
      :key="banner.img"
      :class="[
        { active: index === activeBannerIndex % 8 },
        banner.progressStyle
      ]"
      :style="{
        'background-image': `url(${require('@/assets/img/banner/' +
          banner.img)})`,
        'background-position': banner.gravity
      }"
      @mouseover="activeBannerIndex = index"
      class="banner banner-img"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Banner extends Vue {
  private activeBannerIndex = -1;

  private bannerList = [
    {
      img: "banner0.png",
      gravity: "top right",
      progressStyle: "dark"
    },
    {
      img: "banner1.png",
      gravity: "bottom left",
      progressStyle: "light"
    },
    {
      img: "banner2.png",
      gravity: "center center",
      progressStyle: "dark"
    },
    {
      img: "banner3.png",
      gravity: "bottom right",
      progressStyle: "light"
    },
    {
      img: "banner4.png",
      gravity: "center center",
      progressStyle: "light"
    },
    {
      img: "banner5.png",
      gravity: "top left",
      progressStyle: "dark"
    },
    {
      img: "banner6.png",
      gravity: "bottom center",
      progressStyle: "dark"
    },
    {
      img: "banner7.png",
      gravity: "bottom center",
      progressStyle: "light"
    }
  ];

  private mounted(): void {
    setTimeout(this.timmerHandler, 100);
    setInterval(this.timmerHandler, 10000);
  }

  private timmerHandler(): void {
    this.activeBannerIndex += 1;
  }
}
</script>
