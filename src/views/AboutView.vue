<template>
  <v-app>
    <v-main>
      <v-app-bar app color="transparent" dark class="app-bar-bg">
        <template v-slot:prepend>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
          </v-app-bar-nav-icon>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-list>
          <v-list-item
            prepend-icon="mdi-ferry"
            title="Home"
            value="home"
            to="/"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-badge-account-horizontal-outline"
            title="About"
            value="about"
            v-on:click="hideDrawer"
            to="/about"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-domain"
            title="Company"
            value="company"
            to="/company"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="Contact"
            value="contact"
            to="/contact"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-container fluid>
        <v-subheader>会社沿革</v-subheader>
        <v-row no-gutters>
          <div v-if="isMobile()">
            <v-timeline side="end">
              <v-timeline-item
                v-for="item in items"
                :key="item.id"
                :dot-color="item.color"
                :size="item.size"
              >
                <v-alert :color="item.color" :icon="item.icon" :value="true">
                  <strong class="text-pre-wrap" v-text="item.title"></strong
                  ><br />
                  <span v-text="item.message" class="text-pre-wrap"></span>
                </v-alert>
              </v-timeline-item>
            </v-timeline>
          </div>
          <div v-else>
            <v-timeline direction="horizontal">
              <v-timeline-item
                v-for="item in items"
                :key="item.id"
                :dot-color="item.color"
                :size="item.size"
              >
                <v-alert :color="item.color" :icon="item.icon" :value="true">
                  <strong class="text-pre-wrap" v-text="item.title"></strong
                  ><br />
                  <span v-text="item.message" class="text-pre-wrap"></span>
                </v-alert>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-row>
        <v-row no-gutters>
          <v-card
            append-icon="mdi-open-in-new"
            class="mx-auto"
            href="https://twitter.com/KeitaKozuka"
            max-width="360"
            prepend-icon="mdi-alpha-x-box"
            rel="noopener"
            subtitle="DMからお気軽にお問い合わせください"
            target="_blank"
            title="代表のX"
          ></v-card>
        </v-row>
        <v-row class="pa-4">
          <v-card
            append-icon="mdi-open-in-new"
            class="mx-auto"
            href="https://www.facebook.com/keita.kozuka"
            max-width="360"
            prepend-icon="mdi-facebook"
            rel="noopener"
            subtitle="DMからお気軽にお問い合わせください"
            target="_blank"
            title="代表のFacebook"
          ></v-card>
        </v-row>
      </v-container>
      <v-footer color="primary" app> © 2020 - 2025 exships LLC. </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        color: "primary",
        icon: "mdi-account",
        size: "small",
        title: "創業前",
        message: `社会に価値を届ける多数のプロジェクトに携わっています

結婚支援アプリ
（国内最大級）  
住宅情報アプリ
（業界大手）  
受験支援アプリ
（大手教育企業）  
クラウドソーシングアプリ
（主要プラットフォーム）`,
      },
      {
        id: 2,
        color: "red darken-1",
        icon: "mdi-domain",
        size: "large",
        title: "設立",
        message: `個人事業主から法人成り
合同会社エクスシップス設立
社員雇用開始
リモートワーク制度導入`,
      },
      {
        id: 3,
        color: "red darken-1",
        icon: "mdi-devices",
        size: "large",
        title: "実績",
        message: `金融関連を含む高難易度プロジェクトに携わり、技術力を発揮  
        
地域活性化アプリ
（自社開発） 
コンビニIoTアプリ
（業界大手） 
ペイメントアプリ
（上場小売企業）`,
      },
      {
        id: 4,
        color: "primary",
        icon: "mdi-airplane",
        size: "large",
        title: "現在",
        message: `Vueでホームページ再構築
クロスプラットフォーム学習を支援
AI学習を支援
ネイティブ開発が強いのはもちろん
クロスプラットフォーム開発も力を入れています
ITによる社会のさらなる発展を目指します`,
      },
    ],
    drawer: null,
  }),
  methods: {
    hideDrawer: function () {
      this.drawer = false;
    },
    isMobile: function () {
      var userAgent = window.navigator.userAgent.toLowerCase();
      if (
        userAgent.indexOf("iphone") != -1 ||
        userAgent.indexOf("ipad") != -1 ||
        userAgent.indexOf("android") != -1 ||
        userAgent.indexOf("mobile") != -1
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.app-bar-bg {
  background-image: url("https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg");
  background-size: cover;
  background-position: center;
}
</style>
