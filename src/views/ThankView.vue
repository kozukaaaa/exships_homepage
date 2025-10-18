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
        <v-row no-gutters>
          <v-sheet
            class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
            elevation="4"
            height="250"
            max-width="800"
            width="100%"
            rounded
          >
            <div>
              <h4 class="text-h4 font-weight-black text-primary">
                お問い合わせありがとうございます！
              </h4>

              <div class="text-h5 font-weight-medium mb-2">
                近日中にご入力頂きましたメールアドレス宛にご連絡いたします
              </div>
            </div>
          </v-sheet>
        </v-row>
      </v-container>
      <v-footer color="primary" app> © 2020 - 2025 exships LLC. </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  methods: {
    hideDrawer: function () {
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
</style>
