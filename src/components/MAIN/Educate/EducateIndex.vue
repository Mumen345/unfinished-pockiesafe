<template>
  <div class="flex flex-col items-center justify-center px-4 mb-20">
    
    <!-- TITLE -->
    <h1 class="text-3xl sm:text-4xl font-bold mb-10 text-center">
      How Pockiesafe Works
    </h1>

    <!-- GRID -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

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
</template>

<script setup>
  const info = [
    {
      title: 'Download the App',
      description: 'Get started by downloading Pockiesafe and creating your secure savings account in minutes.',
      number: '1',
      icon: 'fa-solid fa-mobile-screen',
      iconBg: '#00BFA6',
    },
    {
      title: 'Verify your KYC',
      description: 'Complete a quick identity check so we can keep your savings, stokvels, and account secure.',
      number: '2',
      icon: 'fa-solid fa-user-check',
      iconBg: '#5856D6',
    },
    {
      title: 'Start saving',
      description: 'Complete a quick identity check so we can keep your savings, stokvels, and account secure.',
      number: '3',
      icon: 'fa-solid fa-wallet',
      iconBg: '#FF7A00',
    },
  ]
</script>

<style scoped>

</style>