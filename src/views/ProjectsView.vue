<template>
  <v-container class="projects-page">
    <v-row class="justify-center mb-6">
      <h1 class="text-h4 font-weight-bold text-center">プロジェクトを見る</h1>
    </v-row>

    <v-row dense>
      <v-col v-for="(project, i) in projects" :key="i" cols="12" sm="6" md="4">
        <v-card
          class="project-card"
          elevation="4"
          @click="openProject(project)"
        >
          <v-img :src="project.image" height="180px" />
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
          <v-card-text>{{ project.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: "Fridge Keeper",
        subtitle: "KMP App",
        image:
          "https://cdn.pixabay.com/photo/2023/02/09/12/27/snow-7779222_1280.jpg",
        description: "Kotlin Multiplatformを活用した冷蔵庫管理アプリ",
      },
      {
        title: "FleetSync",
        subtitle: "Web Platform",
        image:
          "https://cdn.pixabay.com/photo/2017/07/31/11/21/ocean-2552278_1280.jpg",
        description: "物流効率化のためのチーム向け運行管理ツール",
      },
      {
        title: "OceanHub",
        subtitle: "Cloud Service",
        image:
          "https://cdn.pixabay.com/photo/2016/11/29/02/31/ship-1867122_1280.jpg",
        description: "海上輸送データを統合するB2B SaaSプラットフォーム",
      },
    ],
  }),
  methods: {
    openProject(project) {
      alert(`プロジェクト: ${project.title}`);
    },
  },
};
</script>

<style scoped>
.projects-page {
  padding-top: 80px;
}
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
