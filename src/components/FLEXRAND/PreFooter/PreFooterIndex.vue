<template>
  <section class="bg-[#E6FAF7] py-12 md:py-16 mt-10 w-full mb">
    <div
      class="w-[92%] md:w-[85%] lg:w-[75%] mx-auto
      flex flex-col lg:flex-row items-center justify-between
      gap-10 lg:gap-20"
    >
      <div class="flex justify-center w-full lg:w-1/2">
        <img
          src="@/assets/lady-business.png"
          alt="PreFooter Image"
          class="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[380px] object-contain"
        />
      </div>

      <div
        class="w-full lg:w-1/2 flex flex-col
        items-center lg:items-start
        text-center lg:text-left"
      >
        <div class="flex items-center gap-3 mb-10">
          <i class="fa-solid fa-shield-halved text-[24px] text-[#00BFA6]"></i>

          <h2 class="text-[22px] md:text-[30px] font-bold text-gray-800">
            Safe. Licensed. Reliable.
          </h2>
        </div>

        <p class="text-[14px] md:text-[16px] leading-7 text-gray-600 max-w-[560px]">
          All FlexRand Savings transactions are protected by encryption and regulated under our FSP license (FSP55736).
        </p>

        <div class="flex flex-wrap items-center gap-4 mt-8">
          <div
            class="px-5 py-2 border
            rounded-full bg-white text-[#00BFA6]
            text-[13px] md:text-[14px] font-medium"
          >
            POPIA Compliant
          </div>

          <div
            class="px-5 py-2 border
            rounded-full bg-white text-[#00BFA6]
            text-[13px] md:text-[14px] font-medium"
          >
            Reg No. 2025/128579/07
          </div>

          <div
            class="px-5 py-2 border
            rounded-full bg-white text-[#00BFA6]
            text-[13px] md:text-[14px] font-medium"
          >
            Bank-Grade Encryption
          </div>
        </div>
      </div>
    </div>
  </section>
</template>