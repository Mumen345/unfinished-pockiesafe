<template>
  <div class="flex flex-col items-center justify-center px-4 mb-20">
    
    <!-- TITLE -->
    <h1 class="text-3xl sm:text-4xl font-bold mb-10 text-center">
      How We Protect Your Savings
    </h1>

    <!-- GRID -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">

      <div
        v-for="infor in info"
        :key="infor.title"
        class="rounded-2xl p-6 min-h-[220px]
        flex flex-col items-center text-center
        bg-white shadow-sm"
      >
        <!-- ICON -->
        <i
          :class="infor.icon"
          class="text-[40px] mb-4"
          :style="{ color: infor.iconBg }"
        ></i>

        <!-- TITLE ROW -->
        <div class="flex items-center justify-center gap-3 mb-3">
          <span
            class="bg-gray-100 px-3 py-1 rounded-full text-sm font-bold text-gray-500"
          >
            {{ infor.number }}
          </span>

          <h3 class="font-semibold text-lg">
            {{ infor.title }}
          </h3>
        </div>

        <!-- DESCRIPTION -->
        <p class="text-sm text-gray-500">
          {{ infor.description }}
        </p>
      </div>

    </div>
  </div>
  <div class="middle" :style="{ backgroundImage: `url(${bgFrame})` }">
        <h2 class=" flex flex-col text-3xl sm:text-4xl font-bold text-center">
          Verified and Regulated.
        </h2>
        <p class="text-[20px] text-gray-400 text-center max-w-2xl mt-4">
            PockieSafe is operated by Pockie Technologies Global (Pty) Ltd, Registration No. 2025/128579/07, and authorised under FSP Licence No. 55736. Built with KYC verification, encrypted data protection, and secure savings controls, PockieSafe helps keep your money and stokvel activities protected.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
  <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
    View FSP License
  </button>
</div>
        <div class="image-container">
          <img src="../../../assets/flexrand-phones.png" class="phone-img" alt="PockieSafe App on Phone" />
          </div>
    </div>
</template>

<script setup>
import bgFrame from '../../../assets/mid-security-image.png'
  const info = [
    {
      title: 'Multi-Factor Auth',
      description: 'Add an extra layer of protection to your account with secure login verification.',
      number: '1',
      icon: 'fa-solid fa-user-shield',
      iconBg: '#5856D6',
    },
    {
      title: 'Data Encryption',
      description: 'Your personal information, savings records, and transaction data are encrypted for safety.',
      number: '2',
      icon: 'fa-solid fa-coins',
      iconBg: '#3F8CFF',
    },
    {
      title: 'Regular Audits',
      description: ' We review our systems and processes regularly to maintain security and compliance.',
      number: '3',
      icon: 'fa-solid fa-magnifying-glass-dollar',
      iconBg: '#FBBC04',
    },
    {
      title: 'Secure Cloud Hosting',
      description: ' We review our systems and processes regularly to maintain security and compliance.',
      number: '4',
      icon: 'fa-solid fa-cloud',
      iconBg: '#34A853',
    },
  ]
</script>

<style scoped>
     .middle {
  width: 100%;
  min-height: 500px;
  margin: 96px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 48px 20px 0;
  box-sizing: border-box;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
}

.phone-img {
  width: 100%;
  max-width: 300px;
  object-fit: contain;
}
</style>