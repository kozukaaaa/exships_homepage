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
          <v-list lines="ten">
            <v-list-item>
              <v-list-item-title
                ><div>
                  合同会社エクスシップスが提供するアプリ<br />
                  プライバシーポリシーについて
                </div>
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="pa-6 ma-6">
              <v-list-item-title>個人情報の収集</v-list-item-title>
              <v-list-item-subtitle
                >本アプリは、広告配信のためにGoogle 広告、Google
                AdMob、利用状況解析のためにGoogle Firebase
                Analyticsを使用しています
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>広告について</v-list-item-title>
              <v-list-item-subtitle
                >本アプリでは、広告配信を目的として以下の広告配信事業者がご利用者の情報を自動取得する場合がございます。取得する情報、利用目的、第三者への提供等につきましては、以下の広告配信事業者のアプリケーション・プライバシーポリシーのリンクよりご確認ください。
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>AdMob（Google Inc.)</v-list-item-title>
              <v-list-item-subtitle
                ><a
                  href="http://www.google.com/intl/ja/policies/technologies/ads/"
                  >http://www.google.com/intl/ja/policies/technologies/ads/</a
                >
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Google 広告に関するポリシー</v-list-item-title>
              <v-list-item-subtitle
                ><a href="https://policies.google.com/technologies/ads?hl=ja"
                  >https://policies.google.com/technologies/ads?hl=ja</a
                >
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>利用状況解析ついて</v-list-item-title>
              <v-list-item-subtitle
                >本アプリでは、今後の開発の参考とするため、アプリの利用状況データを収集するツールとしてFirebase(Google
                Inc.)を使用しており、Firebaseがご利用者の情報を自動取得する場合がございます。取得する情報、利用目的、第三者への提供等につきましては、以下のGoogleプライバシーポリシーのリンクよりご確認ください。
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Google プライバシーポリシー</v-list-item-title>
              <v-list-item-subtitle
                ><a href="https://policies.google.com/privacy?hl=ja"
                  >https://policies.google.com/privacy?hl=ja</a
                >
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="pa-6 ma-6">
              <v-list-item-title>Privacy Policy</v-list-item-title>
              <v-list-item-subtitle
                >Exships, LLC. built the FridgeKeeper app as a Free app. This
                SERVICE is provided by Exships, LLC. at no cost and is intended
                for use as is. This page is used to inform visitors regarding
                our policies with the collection, use, and disclosure of
                Personal Information if anyone decided to use our Service. If
                you choose to use our Service, then you agree to the collection
                and use of information in relation to this policy. The Personal
                Information that we collect is used for providing and improving
                the Service. We will not use or share your information with
                anyone except as described in this Privacy Policy. The terms
                used in this Privacy Policy have the same meanings as in our
                Terms and Conditions, which is accessible at FridgeKeeper unless
                otherwise defined in this Privacy Policy.
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                >Information Collection and Use</v-list-item-title
              >
              <v-list-item-subtitle
                >For a better experience, while using our Service, we may
                require you to provide us with certain personally identifiable
                information, including but not limited to Ad delivery,Usage
                analysis. The information that we request will be retained by us
                and used as described in this privacy policy. The app does use
                third party services that may collect information used to
                identify you. Link to privacy policy of third party service
                providers used by the app<br />
                ・<a href="https://policies.google.com/privacy"
                  >Google Play Services</a
                ><br />
                ・<a
                  href="https://support.google.com/admob/answer/6128543?hl=en"
                  >AdMob</a
                ><br />
                ・<a href="https://firebase.google.com/policies/analytics"
                  >Firebase Analytics</a
                >
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
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
