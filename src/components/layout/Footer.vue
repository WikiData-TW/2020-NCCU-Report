<template>
  <footer class="footer footer-container">
    <div class="footer footer-group">
      <p class="footer footer-title">製作</p>
      <ul class="footer people-list">
        <span>採訪編輯</span>
        <li v-for="people in authors" :key="people.name">
          <a
            v-if="people.link"
            :href="people.link"
            target="_blank"
            rel="noopener noreferrer"
            >{{ people.name }}</a
          >
          <span v-else>{{ people.name }}</span>
        </li>
      </ul>
      <ul class="footer people-list">
        <span>網頁製作</span>
        <li v-for="people in developers" :key="people.name">
          <a
            v-if="people.link"
            :href="people.link"
            target="_blank"
            rel="noopener noreferrer"
            >{{ people.name }}</a
          >
          <span v-else>{{ people.name }}</span>
        </li>
      </ul>
      <ul class="footer people-list">
        <span>美術協力</span>
        <li v-for="people in arts" :key="people.name">
          <a
            v-if="people.link"
            :href="people.link"
            target="_blank"
            rel="noopener noreferrer"
            >{{ people.name }}</a
          >
          <span v-else>{{ people.name }}</span>
        </li>
      </ul>
    </div>
    <div class="footer footer-group">
      <p class="footer footer-title">聯絡我們</p>
      <div class="footer footer-contact-container">
        <a
          v-for="info in contacts"
          :key="info.name"
          :href="info.link"
          :title="info.name"
          :alt="info.name"
          class="footer footer-contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon class="icon" :icon="info.icon" />
          <span>{{ info.name }}</span>
        </a>
      </div>
    </div>
    <div class="footer footer-copyright">
      <p v-for="unit in cooperates" :key="unit.name" class="footer footer-text">
        <a :href="unit.link" target="_blank" rel="noopener noreferrer">
          {{ unit.name }}
        </a>
      </p>
      <br />
      <p class="footer footer-text">
        &copy; 2020 政大學學報｜All Rights Reserved
      </p>
      <p class="footer footer-text">
        Source Code is licensed under the
        <a
          href="https://raw.githubusercontent.com/WikiData-TW/2020-NCCU-Report/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          >MIT License</a
        >
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  private authors = [
    { name: "陳子瑜" },
    { name: "陳妍如" },
    { name: "萬巧蓉" },
    { name: "方小瑀" }
  ];
  private arts = [
    {
      name: "陳筠橋"
    },
    {
      name: "Aries Cs",
      link: "https://aries0d0f.me"
    }
  ];
  private developers = [
    {
      name: "Aries Cs",
      link: "https://aries0d0f.me"
    }
  ];
  private contacts = [
    {
      name: "政大學學報 Facebook 粉絲專頁",
      link: "https://www.facebook.com/unewsonline/",
      icon: ["fab", "facebook-f"]
    },
    {
      name: "政大學學報",
      link: "https://unews.nccu.edu.tw/",
      icon: ["fas", "newspaper"]
    }
  ];
  private cooperates = [
    {
      name: "政治大學新聞學系",
      link: "https://jschool.nccu.edu.tw/"
    },
    {
      name: "WIKIDATA Taiwan｜維基數據臺灣",
      link: "https://fb.com/WikidataTW"
    }
  ];
}
</script>
