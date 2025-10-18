<template>
  <div class="who-we-are">
    <!-- ヒーローセクション -->
    <section class="hero">
      <h1>Who We Are</h1>
      <p>
        We are a team of passionate developers creating modern web solutions.
      </p>
      <Button label="Learn More" class="p-button-rounded p-button-outlined" />
    </section>

    <!-- チームカードセクション -->
    <section class="cards">
      <div class="card-grid">
        <Card
          v-for="member in team"
          :key="member.name"
          :title="member.name"
          :subTitle="member.role"
          class="team-card"
        >
          <template #header>
            <img :src="member.image" alt="" class="team-img" />
          </template>
          <p>{{ member.description }}</p>
        </Card>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Alice",
          role: "Frontend Dev",
          description: "Loves Vue and modern UI.",
          image: "/images/alice.jpg",
        },
        {
          name: "Bob",
          role: "Backend Dev",
          description: "API specialist.",
          image: "/images/bob.jpg",
        },
        {
          name: "Carol",
          role: "UI/UX Designer",
          description: "Designs intuitive interfaces.",
          image: "/images/carol.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.who-we-are {
  padding: 3rem;
  font-family: "Arial", sans-serif;
}

/* ヒーロー */
.hero {
  text-align: center;
  margin-bottom: 4rem;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

/* カードグリッド */
.cards .card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

/* チームカード */
.team-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

/* 画像 */
.team-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

/* ボタン */
.p-button-rounded {
  font-weight: bold;
}
</style>
