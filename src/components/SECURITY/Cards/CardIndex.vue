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
  },
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
          <i
            :class="card.icon"
            class="text-white text-5xl"
          ></i>
        </div>

        <h2 class="text-4xl font-bold text-black mt-10">
          {{ card.title }}
        </h2>

        <p class="text-lg text-gray-500 mt-6 leading-8">
          {{ card.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cards-section {
  width: 100%;
  padding: 0 80px;
  margin-bottom: 100px;
  box-sizing: border-box;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.card {
  width: 480px;
  min-height: 450px;

  background: #f7f7f7;
  border-radius: 40px;

  padding: 60px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  transition: all 0.3s ease;
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

/* Tablet */
@media (max-width: 1200px) {
  .cards-section {
    padding: 0 40px;
  }

  .card {
    width: 420px;
  }
}

/* Mobile */
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
}
</style>