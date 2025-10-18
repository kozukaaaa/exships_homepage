<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app color="transparent" dark class="app-bar-bg">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :permanent="!isMobile"
      :temporary="isMobile"
      app
    >
      <v-list>
        <v-list-item
          v-for="link in navLinks"
          :key="link.title"
          :prepend-icon="link.icon"
          :title="link.title"
          :to="link.to"
          @click="isMobile && hideDrawer()"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8">
            <!-- 日本語版 -->
            <v-subheader class="text-h6 font-weight-bold my-4">
              利用規約（日本語）
            </v-subheader>

            <v-card outlined class="mb-4" v-for="(item, i) in termsJP" :key="i">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>
                <div v-html="item.text"></div>
              </v-card-text>
            </v-card>

            <!-- 英語版 -->
            <v-subheader class="text-h6 font-weight-bold my-4">
              Terms of Service (English)
            </v-subheader>

            <v-card
              outlined
              class="mb-4"
              v-for="(item, i) in termsEN"
              :key="'en-' + i"
            >
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>
                <div v-html="item.text"></div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Footer -->
      <v-footer color="primary" app> © 2020 - 2025 exships LLC. </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "TermsOfService",
  data: () => ({
    drawer: false,
    navLinks: [
      { title: "Home", to: "/", icon: "mdi-ferry" },
      {
        title: "About",
        to: "/about",
        icon: "mdi-badge-account-horizontal-outline",
      },
      { title: "Company", to: "/company", icon: "mdi-domain" },
      { title: "Contact", to: "/contact", icon: "mdi-forum" },
    ],
    termsJP: [
      {
        title: "1. 適用範囲",
        text: "本規約は、合同会社エクスシップス（以下「当社」）が提供するアプリケーション（以下「本アプリ」）の利用に関する条件を定めるものです。本アプリを利用する全てのユーザー（以下「ユーザー」）に適用されます。",
      },
      {
        title: "2. 利用条件",
        text: "ユーザーは本規約に同意した上で、本アプリを利用するものとします。違法または不適切な目的での利用は禁止されます。",
      },
      {
        title: "3. 知的財産権",
        text: "本アプリに含まれる全ての情報、画像、デザイン、コード、テキスト等の著作権および知的財産権は当社または正当な権利者に帰属します。",
      },
      {
        title: "4. 個人情報の取り扱い",
        text: "本アプリでは、広告配信（Google AdMob等）や利用状況解析（Firebase Analytics等）のために、ユーザーの情報を収集する場合があります。収集された情報の利用目的、第三者提供については、それぞれのサービス提供者のプライバシーポリシーをご確認ください。",
      },
      {
        title: "5. 広告について",
        text: "本アプリ内の広告に関して、ユーザーは広告事業者による情報収集に同意するものとします。",
      },
      {
        title: "6. 免責事項",
        text: "当社は本アプリの内容や情報の正確性について保証するものではありません。本アプリの利用によって生じたいかなる損害についても、当社は責任を負いません。",
      },
      {
        title: "7. 規約の変更",
        text: "本規約は、予告なく変更される場合があります。最新の規約は本アプリ内または公式ウェブサイトで確認できます。",
      },
    ],
    termsEN: [
      {
        title: "1. Scope",
        text: "These terms govern the use of the application provided by Exships, LLC. (the “App”) and apply to all users (“Users”) of the App.",
      },
      {
        title: "2. Conditions of Use",
        text: "Users must agree to these terms before using the App. Users may not use the App for any illegal or inappropriate purposes.",
      },
      {
        title: "3. Intellectual Property",
        text: "All content, images, designs, code, and text included in the App are the property of Exships, LLC. or its rightful owners.",
      },
      {
        title: "4. Personal Information",
        text: "The App may collect user information for advertising (e.g., Google AdMob) and analytics (e.g., Firebase Analytics). Please refer to the respective third-party service providers’ privacy policies for details on data usage and sharing.",
      },
      {
        title: "5. Advertising",
        text: "Users agree to the collection of information by advertising providers when interacting with ads in the App.",
      },
      {
        title: "6. Disclaimer",
        text: "Exships, LLC. does not guarantee the accuracy of the App content. The company is not responsible for any damages arising from the use of the App.",
      },
      {
        title: "7. Changes to Terms",
        text: "These terms may be updated without prior notice. Users should review the latest version within the App or on the official website.",
      },
    ],
  }),
  computed: {
    isMobile() {
      return window.innerWidth < 960;
    },
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    hideDrawer() {
      this.drawer = false;
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
.v-card {
  transition: 0.3s ease;
}
.v-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
