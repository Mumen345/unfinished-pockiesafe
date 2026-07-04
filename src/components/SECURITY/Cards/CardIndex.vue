<script setup>
const cards = [
  {
    icon: 'fa-solid fa-key',
    title: 'Bank Grade Encryption',
    description: 'All user data and transactions are encrypted end-to-end for maximum security.',
    color: '#FF7A00'
  },
  {
    icon: 'fa-solid fa-location-pin',
    title: 'Licensed & Regulated',
    description: 'PockieSafe operates under Financial Services Provider License (FSP55736)',
    color: '#00BFA6'
  },
  {
    icon: 'fa-solid fa-user-check',
    title: 'POPIA Compliant',
    description: 'We Adhere to South Africa’s POPIA data privacy and protection framework.',
    color: '#4285F4'
  }
]
</script>

<template>
  <section class="cards-section">
    <div class="cards-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
      >
        <div
          class="icon-container"
          :style="{ backgroundColor: card.color }"
        >
          <i :class="card.icon" class="icon"></i>
        </div>

        <h2 class="title">
          {{ card.title }}
        </h2>

        <p class="description">
          {{ card.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cards-section {
  width: 100%;
  padding: 0 40px;
  margin-bottom: 100px;
  box-sizing: border-box;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.card {
  width: 360px;
  min-height: 440px;
  background: #f7f7f7;
  border-radius: 40px;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
}

.icon-container {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  color: white;
  font-size: 48px;
}

.title {
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin-top: 40px;
}

.description {
  font-size: 18px;
  color: #6b7280;
  margin-top: 24px;
  line-height: 1.8;
}

@media (max-width: 1200px) {
  .cards-section {
    padding: 0 24px;
  }

  .card {
    width: 340px;
  }
}

@media (max-width: 768px) {
  .cards-section {
    padding: 0 20px;
  }

  .cards-container {
    gap: 30px;
  }

  .card {
    width: 100%;
    min-height: 380px;
    padding: 40px;
  }

  .icon-container {
    width: 90px;
    height: 90px;
  }

  .title {
    font-size: 32px;
  }
}
</style>