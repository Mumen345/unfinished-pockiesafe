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
    title: '1. How is my data protected?',
    isOpen: false,
    paragraphs: [
      'We use industry-standard encryption to ensure all your personal and financial information remains private.',
      'Data is stored in secure, restricted environments with constant monitoring.'
    ]
  },
  {
    title: '2. Are my funds insured?',
    isOpen: false,
    paragraphs: [
      'Pockiesafe works exclusively with regulated financial partners who adhere to strict capital and insurance requirements.',
      'This ensures that your capital is managed within a protected financial framework.'
    ]
  },
  {
    title: '3. What happens if I lose my phone?',
    isOpen: false,
    paragraphs: [
      'Your account is protected by biometric or password authentication.',
      'You can immediately log in from another device to deactivate access for your lost phone.'
    ]
  },
  {
    title: '4. Do you share my data with third parties?',
    isOpen: false,
    paragraphs: [
      'We do not sell your personal data.',
      'Information is only shared with verified partners where necessary to provide you with the financial services requested.'
    ]
  },
  {
    title: '5. How do you prevent unauthorized access?',
    isOpen: false,
    paragraphs: [
      'We utilize multi-factor authentication (MFA) to ensure that only you can access your account.',
      'Suspicious login attempts trigger immediate security alerts and account lockouts.'
    ]
  },
  {
    title: '6. Are transactions secure?',
    isOpen: false,
    paragraphs: [
      'Every transaction is verified through secure banking protocols.',
      'We use advanced tokenization so that your sensitive banking details are never exposed during transfers.'
    ]
  },
  {
    title: '7. How often is the security audited?',
    isOpen: false,
    paragraphs: [
      'Our platforms undergo regular security audits and penetration testing.',
      'We stay updated with the latest cybersecurity standards to defend against emerging threats.'
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