<template>
  <div class="banner banner-container">
    <div
      v-for="(banner, index) in bannerList"
      :key="banner.img"
      :class="{ active: index === activeBannerIndex % 7 }"
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
  private activeBannerIndex = 0;

  private bannerList = [
    {
      img: "banner0.png",
      gravity: "top right"
    },
    {
      img: "banner1.png",
      gravity: "bottom left"
    },
    {
      img: "banner2.png",
      gravity: "center center"
    },
    {
      img: "banner3.png",
      gravity: "bottom right"
    },
    {
      img: "banner4.png",
      gravity: "center center"
    },
    {
      img: "banner5.png",
      gravity: "top left"
    },
    {
      img: "banner6.png",
      gravity: "bottom center"
    },
    {
      img: "banner7.png",
      gravity: "bottom center"
    }
  ];

  private mounted(): void {
    setInterval(this.timmerHandler, 10000);
  }

  private timmerHandler(): void {
    this.activeBannerIndex += 1;
  }
}
</script>
