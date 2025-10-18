<template>
  <v-app>
    <v-main>
      <!-- App Bar -->
      <v-app-bar app color="transparent" dark class="app-bar-bg">
        <template #prepend>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
          </v-app-bar-nav-icon>
        </template>
      </v-app-bar>

      <!-- Navigation Drawer -->
      <v-navigation-drawer v-model="drawer">
        <v-list>
          <v-list-item
            v-for="link in navLinks"
            :key="link.title"
            :prepend-icon="link.icon"
            :title="link.title"
            :to="link.to"
          />
        </v-list>
      </v-navigation-drawer>

      <!-- Main Content -->
      <v-container fluid>
        <v-subheader class="text-h6 font-weight-bold my-4"
          >会社概要</v-subheader
        >

        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card
              v-for="(item, index) in companyInfo"
              :key="index"
              class="mb-4"
              :color="item.color"
              :dark="item.dark"
            >
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
              <v-card-text v-if="item.text">
                <div v-html="item.text" />
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
  name: "CompanyProfile",
  data: () => ({
    drawer: null,
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
    companyInfo: [
      {
        title: "企業名",
        subtitle: "exships LLC",
        text: "合同会社エクスシップス",
        color: "primary",
        dark: true,
      },
      {
        title: "代表社員",
        subtitle: "Keita Kozuka",
        text: "小塚 啓太",
      },
      {
        title: "設立",
        subtitle: "Established in",
        text: "2020/01/06",
        color: "primary",
        dark: true,
      },
      {
        title: "資本金",
        subtitle: "Capital",
        text: "1,000,000円",
      },
      {
        title: "事業内容",
        subtitle: "Business details",
        text: `スマートフォン向けアプリケーション開発<br>
                DevOps・アジャイル開発推進事業<br>
                Webサイト制作`,
        color: "primary",
        dark: true,
      },
    ],
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
.v-card {
  transition: 0.3s ease;
}
.v-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}
</style>
