<template>
  <div class="main-layout">
    <div class="tabs-wrapper">
      <div class="tabs-container">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tab-button', { active: activeTab === tab }]"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>
    </div>

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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ['General', 'Stokvel', 'Flexrand', 'Security', 'App Support']
const activeTab = ref('General')

const contentItems = ref([
  {
    title: '1. What is Pockiesafe?',
    isOpen: false,
    paragraphs: [
      'Pockiesafe is a South African digital savings platform designed to help individuals and groups save money in a safer, easier, and more transparent way.',
      'The platform allows users to save personally through FlexRand and collectively through Stokvel savings.',
      'Pockiesafe is built for everyday South Africans who want better control over their savings.'
    ]
  },
  {
    title: '2. Is Pockiesafe a bank?',
    isOpen: false,
    paragraphs: [
      'No. Pockiesafe is not a bank.',
      'It is a fintech platform working with regulated financial partners.'
    ]
  },
  {
    title: '3. What savings products does Pockiesafe offer?',
    isOpen: false,
    paragraphs: [
      'Pockiesafe offers FlexRand and Stokvel.',
      'These products support personal and group savings.'
    ]
  },
  {
    title: '4. What is FlexRand?',
    isOpen: false,
    paragraphs: [
      'FlexRand is a flexible digital savings wallet.',
      'It allows users to save and access funds when needed.'
    ]
  },
  {
    title: '5. What is the Pockiesafe Stokvel feature?',
    isOpen: false,
    paragraphs: [
      'It allows users to save together digitally.',
      'Members can track contributions and payouts transparently.'
    ]
  },
  {
    title: '6. Can I create or join a stokvel?',
    isOpen: false,
    paragraphs: [
      'Yes, users can create or join stokvels.',
      'Group rules and contributions are managed in-app.'
    ]
  },
  {
    title: '7. How does Pockiesafe keep funds safe?',
    isOpen: false,
    paragraphs: [
      'User funds are kept separate from company funds.',
      'Pockiesafe works with regulated partners and security controls.'
    ]
  }
])

const toggleAccordion = (index) => {
  contentItems.value[index].isOpen = !contentItems.value[index].isOpen
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.tabs-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
}

.tabs-container {
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem;
  background: #f3f4f6;
  border-radius: 8px;
}

.tab-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  font-size: 12px;
  cursor: pointer;
}

.tab-button.active {
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.content-wrapper {
  column-count: 1;
  column-gap: 2rem;
  width: 100%;
  max-width: 1400px;
  padding: 2rem;
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