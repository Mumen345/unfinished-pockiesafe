<template>
  <div class="content-wrapper">
    <div
      v-for="(item, index) in contentItems"
      :key="index"
      class="content-box"
    >
      <div class="box-header" @click="toggleAccordion(index)">
        <h3>{{ item.title }}</h3>
        <span class="arrow" :class="{ open: item.isOpen }">▼</span>
      </div>

      <div v-if="item.isOpen" class="box-content">
        <hr />
        <p v-for="(text, pIndex) in item.paragraphs" :key="pIndex">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const contentItems = ref([
  {
    title: '1. What exactly is FlexRand?',
    isOpen: false,
    paragraphs: [
      'FlexRand is your personal, flexible digital wallet within Pockiesafe.',
      'It is designed to give you instant access to your savings whenever life happens.'
    ]
  },
  {
    title: '2. How quickly can I withdraw funds?',
    isOpen: false,
    paragraphs: [
      'Withdrawals from your FlexRand wallet are processed rapidly.',
      'Funds are typically available in your linked account shortly after you initiate the request.'
    ]
  },
  {
    title: '3. Is there a minimum balance requirement?',
    isOpen: false,
    paragraphs: [
      'We believe in inclusive saving, so there are no high minimum balance requirements.',
      'You can start saving with an amount that fits your current budget.'
    ]
  },
  {
    title: '4. Can I earn interest on FlexRand?',
    isOpen: false,
    paragraphs: [
      'Yes, your savings in FlexRand grow over time.',
      'We provide competitive growth rates to ensure your money works for you while it is stored.'
    ]
  },
  {
    title: '5. Is my FlexRand wallet linked to a bank card?',
    isOpen: false,
    paragraphs: [
      'FlexRand operates as a digital wallet that integrates seamlessly with your existing banking methods.',
      'You can easily fund your wallet or withdraw to your primary bank account.'
    ]
  },
  {
    title: '6. Are there fees for using FlexRand?',
    isOpen: false,
    paragraphs: [
      'We maintain a transparent fee structure with no hidden costs.',
      'All applicable transaction fees are clearly displayed before you confirm any action.'
    ]
  },
  {
    title: '7. How do I track my daily growth?',
    isOpen: false,
    paragraphs: [
      'Your dashboard provides a clear, real-time view of your balance and accrued growth.',
      'You can check your progress anytime via the mobile app or web portal.'
    ]
  }
])

const toggleAccordion = (index) => {
  const isCurrentlyOpen = contentItems.value[index].isOpen
  
  contentItems.value.forEach((item) => {
    item.isOpen = false
  })
  
  if (!isCurrentlyOpen) {
    contentItems.value[index].isOpen = true
  }
}
</script>

<style scoped>
.content-wrapper {
  column-count: 1;
  column-gap: 2rem;
  width: 100%;
  max-width: 1400px;
}

@media (min-width: 1236px) {
  .content-wrapper {
    column-count: 2;
  }
}

.content-box {
  break-inside: avoid;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.arrow {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

hr {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 1rem 0;
}

p {
  margin: 0 0 1rem 0;
  line-height: 1.6;
  font-size: 15px;
}
</style>