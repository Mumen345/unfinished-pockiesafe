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
    title: '1. How do I contact Pockiesafe support?',
    isOpen: false,
    paragraphs: [
      'You can reach out to our team directly through the "Contact Us" section in the app.',
      'We also provide email support and live chat options during business hours.'
    ]
  },
  {
    title: '2. What are the support hours?',
    isOpen: false,
    paragraphs: [
      'Our dedicated support team is available Monday to Friday, from 08:00 to 17:00.',
      'For urgent security issues, our automated systems monitor the platform 24/7.'
    ]
  },
  {
    title: '3. Can I request new features?',
    isOpen: false,
    paragraphs: [
      'Absolutely. We love hearing from our users.',
      'Send your suggestions via the "Feedback" option in the App Support tab, and our product team will review them.'
    ]
  },
  {
    title: '4. How do I report a technical issue?',
    isOpen: false,
    paragraphs: [
      'Please use the "Report a Bug" feature in the settings menu.',
      'Providing screenshots and a brief description helps us resolve the issue much faster.'
    ]
  },
  {
    title: '5. Is there a community forum?',
    isOpen: false,
    paragraphs: [
      'Yes, we have an active community forum where users share savings tips and best practices.',
      'You can join the conversation directly through the link provided in the App Support section.'
    ]
  },
  {
    title: '6. How do I update my profile details?',
    isOpen: false,
    paragraphs: [
      'Navigate to "Account Settings" to update your contact information or security preferences.',
      'For identity verification changes, our support team may need to assist you to keep your account secure.'
    ]
  },
  {
    title: '7. What if I forget my password?',
    isOpen: false,
    paragraphs: [
      'Click on "Forgot Password" on the login screen to receive a secure reset link via email.',
      'If you have trouble accessing your email, contact our support line for identity verification and account recovery.'
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