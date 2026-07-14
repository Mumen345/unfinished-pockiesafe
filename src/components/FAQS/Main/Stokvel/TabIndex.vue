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
    title: '1. How do I start a Stokvel?',
    isOpen: false,
    paragraphs: [
      'Send a message to the group administrator by usin the Contact page".',
      'Follow the prompts to set your group goals, contribution frequency, and payout rules.'
    ]
  },
  {
    title: '2. Are Stokvel payouts automated?',
    isOpen: false,
    paragraphs: [
      'Yes, once the group cycle is complete and terms are met, the platform facilitates the payout process automatically.',
      'This ensures all members receive their funds securely and on time.'
    ]
  },
  {
    title: '3. Can I join multiple Stokvels?',
    isOpen: false,
    paragraphs: [
      'Absolutely. You can participate in several different stokvel groups simultaneously.',
      'Each group is tracked independently within your Pockiesafe dashboard.'
    ]
  },
  {
    title: '4. What happens if a member misses a payment?',
    isOpen: false,
    paragraphs: [
      'The platform notifies the group administrator and the member immediately.',
      'Stokvel rules, as defined during creation, determine the grace period and consequences for missed contributions.'
    ]
  },
  {
    title: '5. Is my Stokvel money locked away?',
    isOpen: false,
    paragraphs: [
      'Stokvel funds are subject to the rules agreed upon by your group.',
      'These funds are held in secure, regulated accounts until the designated payout date.'
    ]
  },
  {
    title: '6. Can I see what others have contributed?',
    isOpen: false,
    paragraphs: [
      'Transparency is a core feature. You can view the contribution status of all members in your group in real-time.',
      'This helps in maintaining accountability and trust among all members.'
    ]
  },
  {
    title: '7. How are Stokvel disagreements resolved?',
    isOpen: false,
    paragraphs: [
      'We encourage groups to set clear rules within the app when forming the Stokvel.',
      'If conflicts arise, our support team is available to help mediate based on the digital records and agreed-upon rules.'
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