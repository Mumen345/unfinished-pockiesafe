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
      <div v-for="(item, index) in contentItems" :key="index" class="content-box">
        <div class="box-header" @click="toggleAccordion(index)">
          <h3>{{ item.title }}</h3>
          <span class="arrow" :class="{ 'open': item.isOpen }">▼</span>
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
      'The platform allows users to save personally through FlexRand and collectively through Stokvel savings. With Pockiesafe, users can contribute, track savings, manage group contributions, and receive payouts digitally instead of relying on manual records, cash handling, or informal tracking.',
      'Pockiesafe is built for everyday South Africans who want better control over their savings, whether they are saving alone, with friends, family, a community group, or stokvel.'
    ]
  },
  { 
    title: '2. Is Pockiesafe a bank?', 
    isOpen: false,
    paragraphs: [
      'No. Pockiesafe is not a bank.',
      'Pockiesafe is a fintech savings platform that works with regulated banking, payment, and compliance partners to support digital savings. The platform provides the app, savings tools, user experience, contribution tracking, payout management, and customer support.',
      "User funds are intended to be held separately from Pockiesafe's company operating funds through a pooled trust and custody structure, supported by banking and fiduciary partners."
    ]
  },
  { 
    title: '3. What savings products does Pockiesafe offer?', 
    isOpen: false,
    paragraphs: [
      "Pockiesafe's launch version focuses on two main products:",
      'Flexrand is a flexible savings wallet that allows users to save money and access it when needed, depending on product rules.',
      'Stokvel is a digital group savings feature that allows members to contribute money, track payments, manage group rules, and receive payouts according to the agreed stokvel structure.',
      "Pockiesafe is starting with these two products to keep the platform simple, focused, and suitable for South African savings habits."
    ]
  },
  { 
    title: '4. What is FlexRand?', 
    isOpen: false,
    paragraphs: [
      "FlexRand is Pockiesafe's flexible savings wallet.",
      "It is designed for users who want to build a savings habit without locking their money away for long periods. You can use FlexRand for emergency savings, short-term goals, personal savings, or general financial discipline.",
      "FlexRand gives users visibility over their savings balance and allows them to manage their money digitally through the Pockiesafe app."
    ]
  },
  { 
    title: '5. What is the Pockiesafe Stokvel feature?', 
    isOpen: false,
    paragraphs: [
      "The Pockiesafe Stokvel feature helps groups save together digitally.",
      "Instead of using notebooks, spreadsheets, Whatsapp messages, or manual payment tracking, group members can contribute through the app, view group progress, track payment activity, and receive payout according to the group's agreed rules.",
      "It is designed to make Stokvels more transparent, organized, and easier to manage for both group admins and members."
    ]
  },
  { 
    title: '6. Can I create or join a stokvel on Pockiesafe?', 
    isOpen: false,
    paragraphs: [
      "Yes. Pockiesafe is designed to allow users to create or join stokvel groups.",
      "A group admin can create a stokvel, set the group rules, invite members, define contribution amounts, select the savings cycle, and manage a group's activity.",
      "Members can join invited groups, make contributions, track their status, and view relevant group information through the app."
    ]
  },
  { 
    title: '7. How does Pockiesafe keep user funds safe?', 
    isOpen: false,
    paragraphs: [
      'Pockiesafe is designed to keep user funds separate from company money.',
      'User savings are intended to be held in a pooled trust or custody account, while Pockiesafe business expenses such as salaries, vendors, and operations are handled through a separate company operating account.',
      'This separation helps ensure user savings are not mixed with the company\'s day-to-day business funds. The banking architecture also includes reconciliation, compliance, oversight, and audit support to strengthen accountability.'
    ]
  }
])

const toggleAccordion = (index) => {
  contentItems.value[index].isOpen = !contentItems.value[index].isOpen
}
</script>

<style scoped>
.main-layout { display: flex; flex-direction: column; align-items: center; }

.tabs-wrapper { display: flex; justify-content: center; width: 100%; margin-bottom: 2rem; }
.tabs-container { display: flex; gap: 0.5rem; padding: 0.25rem; background: #f3f4f6; border-radius: 8px; width: fit-content; }
.tab-button { padding: 0.5rem 1rem; border: none; border-radius: 6px; background: transparent; color: #000000; font-size: 12px; font-weight: 500; cursor: pointer; transition: all 0.2s ease; }
.tab-button.active { background: #ffffff; color: #000000; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }

.content-wrapper { display: flex; flex-wrap: wrap; gap: 2rem; padding: 2rem; justify-content: center; width: 100%; align-items: flex-start; }
.content-box { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 1.5rem; width: 100%; max-width: 660px; cursor: pointer; flex-shrink: 0; }
.box-header { display: flex; justify-content: space-between; align-items: center; }
.arrow { font-size: 12px; color: #6b7280; transition: transform 0.3s ease; }
.arrow.open { transform: rotate(180deg); }

@media (min-width: 1236px) { .content-box { flex: 0 0 calc(50% - 1rem); } }

h3 { margin: 0; font-size: 1.25rem; color: #111827; font-weight: 600; }
hr { border: 0; border-top: 1px solid #e5e7eb; margin: 1rem 0; }
p { margin: 0 0 1rem 0; line-height: 1.6; color: #374151; font-size: 15px; }
p:last-child { margin-bottom: 0; }
</style>