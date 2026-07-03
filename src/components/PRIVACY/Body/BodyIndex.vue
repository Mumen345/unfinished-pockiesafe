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
        <p>PockieSafe values your privacy. This policy outlines how we collect, use, and safeguard your information across our website and mobile app.</p>
      </section>

      <section v-if="activeSection === 'information'">
        <h2>Information We Collect</h2>
        <p>We collect limited personal and technical information.</p>
      </section>

      <section v-if="activeSection === 'usage'">
        <h2>How We Use Your Information</h2>
        <p>Your data is used to operate and improve our services.</p>
      </section>

      <section v-if="activeSection === 'security'">
        <h2>Data Storage & Security</h2>
        <p>Security safeguards are applied to protect your data.</p>
      </section>

      <section v-if="activeSection === 'consent'">
        <h2>Consent</h2>
        <p>By using our services, you agree to this policy.</p>
      </section>

      <section v-if="activeSection === 'sharing'">
        <h2>Sharing & Third Party Access</h2>
        <p>Data is shared only when required or permitted.</p>
      </section>

      <section v-if="activeSection === 'rights'">
        <h2>Your Rights</h2>
        <p>You may request access or deletion of your data.</p>
      </section>

      <section v-if="activeSection === 'popia'">
        <h2>POPIA Compliance</h2>
        <p>We comply with POPIA regulations.</p>
      </section>

      <section v-if="activeSection === 'retention'">
        <h2>Retention</h2>
        <p>Data is retained only as long as necessary.</p>
      </section>

      <section v-if="activeSection === 'updates'">
        <h2>Policy Updates</h2>
        <p>This policy may be updated from time to time.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeSection = ref('information')

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'information', label: 'Information We Collect' },
  { id: 'usage', label: 'How We Use Your Information' },
  { id: 'security', label: 'Data Storage & Security' },
  { id: 'consent', label: 'Consent' },
  { id: 'sharing', label: 'Sharing & Third Party Access' },
  { id: 'rights', label: 'Your Rights' },
  { id: 'popia', label: 'POPIA Compliance' },
  { id: 'retention', label: 'Retention' },
  { id: 'updates', label: 'Policy Updates' }
]
</script>

<style scoped>
.policy-wrapper {
  display: flex;
  gap: 3rem;
  margin: 4rem 0;
}

.toc {
  width: 260px;
  margin-left: 10%;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 1rem 0;
  background: #fff;
}

.toc-title {
  font-size: 13px;
  font-weight: 600;
  color: #6b7280;
  padding: 0 1.5rem 0.75rem;
}

.toc-link {
  position: relative;
  display: block;
  width: 100%;
  padding: 0.6rem 1.5rem 0.6rem 2.5rem;
  text-align: left;
  font-size: 14px;
  color: #374151;
  background: transparent;
  border: none;
  cursor: pointer;
}

.toc-link.active {
  color: #2563eb;
}

.toc-link.active::before {
  content: '';
  position: absolute;
  left: 1.25rem;
  top: 8px;
  bottom: 8px;
  width: 4px;
  background: #2563eb;
  border-radius: 999px;
}

.policy-content {
  max-width: 640px;
}

.policy-content h2 {
  font-size: 20px;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.policy-content p {
  font-size: 15px;
  color: #4b5563;
}

@media (max-width: 768px) {
  .policy-wrapper {
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 1rem;
  }

  .toc {
    width: 100%;
    margin-left: 0;
  }

  .toc-link {
    padding: 0.75rem 1rem 0.75rem 2rem;
    font-size: 15px;
  }

  .toc-link.active::before {
    left: 0.75rem;
  }

  .policy-content {
    max-width: 100%;
  }

  .policy-content h2 {
    text-align: center;
  }
}
</style>