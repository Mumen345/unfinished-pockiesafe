<template>
  <div class="flex flex-col items-center justify-center px-4 mb-20">
    
    <!-- TITLE -->
    <h1 class="text-3xl sm:text-4xl font-bold mb-10 text-center">
      How Stokvel Group Savings Works
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

    <div class="middle" :style="{ backgroundImage: `url(${bgFrame})` }">
        <h2 class=" flex flex-col text-3xl sm:text-4xl font-bold text-center">
          Create or Join a Stokvel in Minutes
        </h2>
        <p class="text-[17px]">
            Set up your group rules, define contribution amounts, and invite friends instantly — all within the app.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
  <img
    src="../../../assets/app-store-badge.png"
    alt="Download on the App Store"
    class="h-12 w-auto sm:h-14 md:h-16"
  />

  <img
    src="../../../assets/google-play-badge.png"
    alt="Get it on Google Play"
    class="h-12 w-auto sm:h-14 md:h-16"
  />
</div>
        <div class="image-container">
          <img src="../../../assets/stokvel-phones.png" class="phone-img" alt="PockieSafe App on Phone" />
          </div>
    </div>
  </div>
</template>

<script setup>
    import bgFrame from '@/assets/mid-stokvel-image.png';
  const info = [
    {
      title: 'Create or join a group',
      description: 'Start a new stokvel or join an existing group with clear rules, members, and contribution details.',
      number: '1',
      icon: 'fa-solid fa-users-rays',
      iconBg: '#FF7A00',
    },
    {
      title: 'Contribute Regularly',
      description: 'Make scheduled contributions and track every payment with transparent group records.',
      number: '2',
      icon: 'fa-solid fa-pen-nib',
      iconBg: '#FF7A00',
    },
    {
      title: 'Receive Due Payouts',
      description: 'Get your payout when it’s your turn or when the savings cycle ends, based on your group rules.',
      number: '3',
      icon: 'fa-solid fa-hand-holding-dollar',
      iconBg: '#FF7A00',
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