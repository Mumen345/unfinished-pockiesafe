<template>
  <div class="policy-wrapper">
    <aside class="toc">
      <p class="toc-title">Table Of Content</p>

      <button
        v-for="section in sections"
        :key="section.id"
        class="toc-link"
        :class="{ active: activeSection === section.id }"
        @click="activeSection = section.id"
      >
        {{ section.label }}
      </button>
    </aside>

    <main class="policy-content">
      <section v-if="activeSection === 'introduction'">
        <h2>Introduction</h2>
        <p>Welcome to <strong>PockieSafe</strong>, a savings platform designed to help individuals and groups save money transparently and securelythrough digital tools such as <strong>Stokvel</strong> and <strong>FlexRand</strong> wallets.</p><br>
        <p>By accessing or using our website, mobile app, or related services, you agree to these Terms and Conditions ("Terms"). If you do not agree, please discontinue use immediately.</p><br>
        <p>These Terms constitute a binding agreement between you ("User", "you", or "your") and <strong>Pockie Technologies Global (Pty) Ltd</strong> ("Pockiesafe", "we", "us", or "our")</p>
      </section>

      <section v-if="activeSection === 'definition'">
  <h2>Definitions</h2>
  <p>"Service" refers to the PockieSafe platform, including our website and mobile application. "User" refers to any individual or entity registered to use our financial savings features.</p>
</section>

<section v-if="activeSection === 'eligibility'">
  <h2>Eligibility</h2>
  <p>To use PockieSafe, you must be at least 18 years of age and possess the legal capacity to enter into a binding agreement in your jurisdiction.</p>
</section>

<section v-if="activeSection === 'account'">
  <h2>Account Registration</h2>
  <p>You agree to provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials.</p>
</section>

<section v-if="activeSection === 'user'">
  <h2>User Responsibilities</h2>
  <p>Users must use PockieSafe for lawful purposes only. You agree not to engage in any activity that interferes with or disrupts the operation of our services.</p>
</section>

<section v-if="activeSection === 'stokvel'">
  <h2>Stokvel Terms</h2>
  <p>Participation in Stokvel groups is subject to the specific rules agreed upon by your group members. PockieSafe acts as the facilitator for these collective savings pools.</p>
</section>

<section v-if="activeSection === 'flexrand'">
  <h2>FlexRand Terms</h2>
  <p>FlexRand allows you to manage flexible savings with ease. Interest rates and withdrawal terms are outlined within the FlexRand dashboard and are subject to periodic review.</p>
</section>

<section v-if="activeSection === 'fees'">
  <h2>Fees and Payments</h2>
  <p>Any applicable service fees are clearly displayed before you confirm a transaction. We reserve the right to adjust our fee structure, with prior notice provided to all users.</p>
</section>

<section v-if="activeSection === 'security'">
  <h2>Security & Data</h2>
  <p>We employ industry-standard encryption to protect your financial data. Your privacy is our priority, and we handle all information in strict accordance with POPIA regulations.</p>
</section>

<section v-if="activeSection === 'termination'">
  <h2>Termination</h2>
  <p>You may close your account at any time. We reserve the right to suspend or terminate access to our services if you violate these terms or engage in fraudulent activity.</p>
</section>

<section v-if="activeSection === 'disclaimers'">
  <h2>Disclaimers</h2>
  <p>PockieSafe provides the platform "as is." We are not liable for any indirect or consequential damages arising from your use of the service or third-party interactions.</p>
</section>

<section v-if="activeSection === 'governing'">
  <h2>Governing Law</h2>
  <p>These terms are governed by and construed in accordance with the laws of South Africa. Any disputes shall be subject to the exclusive jurisdiction of the South African courts.</p>
</section>

<section v-if="activeSection === 'updates'">
  <h2>Updates to these terms</h2>
  <p>We may update these terms from time to time. Significant changes will be communicated via email or through an in-app notification.</p>
</section>

<section v-if="activeSection === 'contact'">
  <h2>Contact Information</h2>
  <p>If you have any questions or concerns regarding these terms, please contact our support team directly through the help center in the PockieSafe app.</p>
</section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Set default to 'introduction' so it loads content immediately
const activeSection = ref('introduction')

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'definition', label: 'Definitions' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'account', label: 'Account Registration' },
  { id: 'user', label: 'User Responsibilities' },
  { id: 'stokvel', label: 'Stokvel Terms' },
  { id: 'flexrand', label: 'FlexRand Terms' },
  { id: 'fees', label: 'Fees and Payments' },
  { id: 'security', label: 'Security & Data' },
  { id: 'termination', label: 'Termination' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'governing', label: 'Governing Law' },
  { id: 'updates', label: 'Updates to these terms' },
  { id: 'contact', label: 'Contact Information' },
]
</script>

<style scoped>
/* Keep your existing styles as they were perfect! */
.policy-wrapper { display: flex; gap: 3rem; margin: 4rem 0; }
.toc { width: 260px; margin-left: 10%; border: 1px solid #e5e7eb; border-radius: 14px; padding: 1rem 0; background: #fff; }
.toc-title { font-size: 13px; font-weight: 600; color: #6b7280; padding: 0 1.5rem 0.75rem; }
.toc-link { position: relative; display: block; width: 100%; padding: 0.6rem 1.5rem 0.6rem 2.5rem; text-align: left; font-size: 14px; color: #374151; background: transparent; border: none; cursor: pointer; }
.toc-link.active { color: #2563eb; }
.toc-link.active::before { content: ''; position: absolute; left: 1.25rem; top: 8px; bottom: 8px; width: 4px; background: #2563eb; border-radius: 999px; }
.policy-content { max-width: 640px; }
.policy-content h2 { font-size: 20px; margin-bottom: 0.5rem; font-weight: bold; }
.policy-content p { font-size: 15px; color: #4b5563; }
</style>