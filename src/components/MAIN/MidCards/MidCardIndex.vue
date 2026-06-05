<template>
  <div class="flex justify-center flex-wrap gap-6 px-4 mb-[100px] items-stretch">

    <!-- Cards from array -->
    <div
      v-for="card in cards"
      :key="card.title"
      class="w-full sm:w-[350px] flex"
    >
      <div
        class="flex flex-col bg-gray-50 p-8 md:p-12 rounded-2xl w-full min-h-[420px]"
      >
        <!-- Icon -->
        <div
          class="w-[70px] h-[70px] rounded-2xl flex items-center justify-center mb-10"
          :style="{ backgroundColor: card.iconBg }"
        >
          <i :class="card.icon" class="text-white text-[28px]"></i>
        </div>

        <!-- Title -->
        <div class="min-h-[120px]">
          <p class="text-[32px] md:text-[40px] font-bold leading-tight">
            {{ card.title }}
          </p>
        </div>

        <!-- Description -->
        <p class="text-[13px] leading-relaxed text-gray-400 max-w-[300px] mt-4">
          {{ card.description }}
        </p>

        <!-- CTA -->
        <span class="text-sm mt-auto pt-10 self-end">
          {{ card.cta }}
        </span>
      </div>
    </div>

    <!-- Third Static Card -->
    <div class="w-full sm:w-[350px] flex">
      <div
        class="flex flex-col rounded-2xl w-full min-h-[420px] p-8 md:p-12 bg-cover bg-center"
        :style="{ backgroundImage: `url(${bgFrame})` }"
      >
        <!-- Title -->
        <div class="min-h-[120px]">
          <p class="text-white text-[32px] md:text-[35px] leading-tight">
            Check our upcoming savings features
          </p>
        </div>

        <!-- Spacer -->
        <div class="flex-1"></div>

        <!-- CTA -->
        <button
          class="bg-[#5856D6] text-white self-end px-5 py-3 rounded-full text-sm font-medium transition hover:opacity-90"
        >
          View More
          <i class="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import bgFrame from '@/assets/black-card-image.png'

const cards = [
  { 
    title: 'Stokvel Group Savings',
    description:
      'Save together with your group, track contributions, manage members and build trust with transparent stockvel records.',
    cta: 'Community Savings',
    icon: 'fa-solid fa-users',
    iconBg: '#FF7A00',
  },
  {
    title: 'FlexRand Savings',
    description:
      'Create a flexible savings wallet for everyday goals, add money anytime, and stay in control of your savings journey.',
    cta: 'Flexible Savings',
    icon: 'fa-solid fa-wallet',
    iconBg: '#00BFA6',
  }
]
</script>