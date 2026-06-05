<template>
  <div class="flex flex-col items-center justify-center px-4 mb-20">
    
    <!-- TITLE -->
    <h1 class="text-3xl sm:text-4xl font-bold mb-10 text-center">
      How FlexRand Savings Works
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
          Create a FlexRand in Minutes
        </h2>
        <p class="text-[17px]">
            Grow your savings without rigid rules. Earn returns, withdraw instantly, and save in your own rhythm.
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
          <img src="../../../assets/flexrand-phones.png" class="phone-img" alt="PockieSafe App on Phone" />
          </div>
    </div>
  </div>
</template>

<script setup>
    import bgFrame from '@/assets/mid-flexrand-image.png';
  const info = [
    {
      title: 'Fund Your Wallet',
      description: 'Add money to your FlexRand wallet and start building flexible savings for your everyday goals.',
      number: '1',
      icon: 'fa-solid fa-wallet',
      iconBg: '#00BFA6',
    },
    {
      title: 'Earn Daily Returns',
      description: 'Grow your savings daily while keeping your money accessible when you need it.',
      number: '2',
      icon: 'fa-solid fa-sack-dollar',
      iconBg: '#00BFA6',
    },
    {
      title: '3 Withdrawals Monthly',
      description: 'Withdraw up to three times per month while staying in control of your savings balance.',
      number: '3',
      icon: 'fa-solid fa-hand-holding-dollar',
      iconBg: '#00BFA6',
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