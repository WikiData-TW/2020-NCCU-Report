<template>
  <div class="banner banner-container" :class="{ fullsize: isFullSize }">
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
    >
      <div class="banner banner-showbox">
        <h3 class="banner banner-slogan font-sans">{{ banner.slogan }}</h3>
        <img
          v-if="banner.subImage"
          :src="require(`@/assets/img/${banner.subImage}`)"
          alt=""
        />
      </div>
    </div>
    <div
      class="banner banner-fullsize banner-btn"
      @click="isFullSize = !isFullSize"
    >
      <font-awesome-icon v-if="!isFullSize" :icon="['fas', 'expand-alt']" />
      <font-awesome-icon v-else :icon="['fas', 'compress-alt']" />
    </div>
    <div class="banner banner-nav">
      <div
        @click="activeBannerIndex > 1 ? (activeBannerIndex -= 1) : null"
        class="icon"
      >
        <font-awesome-icon :icon="['fas', 'caret-left']" />
      </div>
      <div @click="activeBannerIndex += 1" class="icon">
        <font-awesome-icon :icon="['fas', 'caret-right']" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Banner extends Vue {
  private isFullSize = false;

  private activeBannerIndex = -1;

  private bannerList = [
    {
      img: "banner0.png",
      gravity: "top right",
      progressStyle: "light",
      slogan: "",
      subImage: ""
    },
    {
      img: "banner1.png",
      gravity: "bottom left",
      progressStyle: "light",
      slogan: "漁電共生規劃於南臺灣廣泛推行，\n臺南七股亦為預定地之一。",
      subImage: ""
    },
    {
      img: "banner2.png",
      gravity: "center center",
      progressStyle: "dark",
      slogan:
        "綠能政策同時具龐大的經濟效益，\n帶動光電業者進駐七股，以高價圈地。",
      subImage: ""
    },
    {
      img: "banner3.png",
      gravity: "bottom right",
      progressStyle: "light",
      slogan:
        "政府雖然規範漁獲量必須打到原產量的七成，\n漁民仍憂心生計可能受到影響。",
      subImage: ""
    },
    {
      img: "banner4.png",
      gravity: "center center",
      progressStyle: "light",
      slogan:
        "目前七股有約 450 公頃的漁電共生案場待推動，\n相當於 18 座大安森林公園的面積。",
      subImage: "icon/park-example.svg"
    },
    {
      img: "banner5.png",
      gravity: "top left",
      progressStyle: "dark",
      slogan: "七股長期採友善環境方式養殖文蛤，\n漁民擔憂漁場可能被污染、破壞。",
      subImage: ""
    },
    {
      img: "banner6.png",
      gravity: "bottom center",
      progressStyle: "dark",
      slogan: "「我們不是反對漁電共生，\n只是想找到一個適合的地方推動他。」",
      subImage: ""
    },
    {
      img: "banner7.png",
      gravity: "bottom center",
      progressStyle: "light",
      slogan:
        "環保團體也擔心\n太陽能板架設後會影響黑面琵鷺覓食，\n危及當地生態環境。",
      subImage: ""
    }
  ];

  private mounted(): void {
    setTimeout(this.timmerHandler, 100);
    setInterval(this.timmerHandler, 5000);
  }

  private timmerHandler(): void {
    this.activeBannerIndex += 1;
  }
}
</script>
