<template>
  <v-app>
    <v-main>
      <!-- App Bar -->
      <v-app-bar app color="transparent" dark class="app-bar-bg">
        <template #prepend>
          <v-app-bar-nav-icon variant="text" @click.stop="toggleDrawer" />
        </template>
      </v-app-bar>

      <!-- Navigation Drawer -->
      <v-navigation-drawer v-model="drawer">
        <v-list>
          <v-list-item
            v-for="item in navItems"
            :key="item.value"
            :prepend-icon="item.icon"
            :title="item.title"
            :to="item.to"
            @click="hideDrawer"
          />
        </v-list>
      </v-navigation-drawer>

      <!-- 🌌 Animated Hero Section -->
      <section class="hero-section" ref="hero">
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="ocean"></div>

        <div class="hero-content" :class="{ visible: heroVisible }">
          <transition name="fade-slide" appear>
            <div v-if="heroVisible">
              <h1>ITで「真の価値」を届ける</h1>
              <p>合同会社エクスシップス — exships LLC.</p>
              <v-btn
                color="primary"
                variant="flat"
                size="large"
                class="mt-6"
                @click="scrollToFeatures"
              >
                プロジェクトを見る
              </v-btn>
            </div>
          </transition>
        </div>
      </section>

      <!-- 💼 Features Section -->
      <v-container class="mt-16 mb-16" ref="features">
        <v-row>
          <v-col
            v-for="(feature, i) in features"
            :key="i"
            cols="12"
            md="4"
            class="text-center"
          >
            <transition name="fade-up" appear>
              <v-card elevation="6" class="pa-6 hover-card">
                <v-icon size="48" color="primary" class="mb-4">
                  {{ feature.icon }}
                </v-icon>
                <h3 class="font-weight-bold mb-2">{{ feature.title }}</h3>
                <p class="text-medium-emphasis">{{ feature.description }}</p>
              </v-card>
            </transition>
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
  data: () => ({
    drawer: null,
    heroVisible: false,
    navItems: [
      { icon: "mdi-ferry", title: "Home", value: "home", to: "/" },
      {
        icon: "mdi-badge-account-horizontal-outline",
        title: "About",
        value: "about",
        to: "/about",
      },
      {
        icon: "mdi-domain",
        title: "Company",
        value: "company",
        to: "/company",
      },
      {
        icon: "mdi-view-list-outline",
        title: "Projects",
        value: "projects",
        to: "/projects",
      },
      { icon: "mdi-forum", title: "Contact", value: "contact", to: "/contact" },
      { icon: "mdi-debug", title: "Debug", value: "debug", to: "/debug" },
    ],
    features: [
      {
        icon: "mdi-cellphone-link",
        title: "クロスプラットフォーム開発",
        description:
          "iOS / Android / Web を横断し、高品質なアプリケーションを効率的に開発します。",
      },
      {
        icon: "mdi-brain",
        title: "AI・機械学習",
        description:
          "AI・ML技術を活用し、よりスマートで自律的なサービスを実現します。",
      },
      {
        icon: "mdi-chart-bubble",
        title: "チーム開発支援",
        description:
          "アジャイルとスクラムで、チームの力を最大化する仕組みを構築します。",
      },
    ],
  }),
  mounted() {
    setTimeout(() => (this.heroVisible = true), 600);
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    hideDrawer() {
      this.drawer = false;
    },
    scrollToFeatures() {
      this.$refs.features.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
/* ===== 🌠 星空＋海のアニメーション背景 ===== */
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 星の層 */
.stars {
  background: url("https://cdn.pixabay.com/photo/2017/02/09/09/11/starry-sky-2051448_1280.jpg")
    repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  animation: moveStars 200s linear infinite;
  z-index: 0;
}

/* 瞬く層 */
.twinkling {
  background: transparent
    url("https://www.transparenttextures.com/patterns/stardust.png") repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  animation: moveTwinkling 300s linear infinite;
  opacity: 0.5;
  z-index: 1;
}

/* 海の層 */
.ocean {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 30, 60, 0.9), transparent);
  animation: moveOcean 60s linear infinite;
  z-index: 2;
}

/* Heroテキスト */
.hero-content {
  position: relative;
  z-index: 3;
  opacity: 0;
  transform: translateY(40px);
  transition: all 1.2s ease;
}
.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

/* カードホバー */
.hover-card {
  transition: all 0.4s ease;
}
.hover-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
}

/* ====== Keyframes ====== */
@keyframes moveStars {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-1000px, 1000px, 0);
  }
}
@keyframes moveTwinkling {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(1000px, -1000px, 0);
  }
}
@keyframes moveOcean {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200px);
  }
}

/* トランジション */
.fade-slide-enter-active {
  transition: all 1.2s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-up-enter-active {
  transition: all 1.2s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

/* AppBar背景 */
.app-bar-bg {
  background-image: url("https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg");
  background-size: cover;
  background-position: center;
}
</style>
