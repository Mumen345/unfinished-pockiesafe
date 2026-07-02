<template>
  <footer class="bg-black w-full py-14 px-6 md:px-10">
    <div
      class="max-w-[1200px] mx-auto
      flex flex-col lg:flex-row
      justify-between gap-12"
    >
      <div class="max-w-[353px]">
        <img
          src="@/assets/logo-2.png"
          alt="Logo"
          class="w-[150px]"
        />

        <p class="text-white text-[14px] leading-7 my-6 text-gray-300">
          Savings made simple, secure, and community-driven. Manage your
          FlexRand savings and stokvel contributions with transparency,
          trust, and control.
        </p>

        <div class="flex items-center gap-5 text-white text-[18px]">
          <i class="fa-brands fa-facebook-f cursor-pointer hover:text-[#5856D6] transition"></i>

          <i class="fa-brands fa-instagram cursor-pointer hover:text-[#5856D6] transition"></i>

          <i class="fa-brands fa-x-twitter cursor-pointer hover:text-[#5856D6] transition"></i>

          <i class="fa-brands fa-linkedin cursor-pointer hover:text-[#5856D6] transition"></i>

          <i class="fa-brands fa-youtube cursor-pointer hover:text-[#5856D6] transition"></i>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-12">
        <div class="flex flex-col gap-4">
          <p class="text-white font-semibold text-[16px]">
            Company
          </p>

          <RouterLink
            to="/"
            class="text-gray-400 hover:text-white transition text-[14px]"
          >
            How it Works
          </RouterLink>

          <RouterLink
            to="/"
            class="text-gray-400 hover:text-white transition text-[14px]"
          >
            About Pockiesafe
          </RouterLink>

          <RouterLink
            to="/"
            class="text-gray-400 hover:text-white transition text-[14px]"
          >
            Our Team
          </RouterLink>

          <RouterLink
            to="/"
            class="text-gray-400 hover:text-white transition text-[14px]"
          >
            Careers
          </RouterLink>
        </div>

        <div class="flex flex-col gap-4">
          <p class="text-white font-semibold text-[16px]">
            Products
          </p>

          <RouterLink
            to="/flexrand"
            class="text-gray-400 hover:text-white transition text-[14px]"
          >
            FlexRand
          </RouterLink>

          <RouterLink
            to="/stokvel"
            class="text-gray-400 hover:text-white transition text-[14px]"
          >
            Stokvel Savings
          </RouterLink>
        </div>

        <div class="flex flex-col gap-4">
          <p class="text-white font-semibold text-[16px]">
            Learn
          </p>

          <RouterLink
            to="/faqs"
            class="text-gray-400 hover:text-white transition text-[14px]"
          >
            FAQs
          </RouterLink>

          <RouterLink
            to="/"
            class="text-gray-400 hover:text-white transition text-[14px]"
          >
            Blog
          </RouterLink>

          <RouterLink
            to="/security"
            class="text-gray-400 hover:text-white transition text-[14px]"
          >
            Security
          </RouterLink>
        </div>
        <div class="flex flex-col gap-4">
          <p class="text-white font-semibold text-[16px]">
            Legal
          </p>

          <RouterLink
            to="/terms"
            class="text-gray-400 hover:text-white transition text-[14px]"
          >
            Terms & Conditions
          </RouterLink>

          <RouterLink
            to="/privacy"
            class="text-gray-400 hover:text-white transition text-[14px]"
          >
            Privacy Policy
          </RouterLink>
        </div>
        <div class="flex flex-col text-white gap-3">
  <p class="font-semibold text-[16px]">
    Get In Touch
  </p>

  <p class="underline cursor-pointer">
    support@africa.co.za
  </p>

  <p>
    Johannesburg, South Africa
  </p>

<RouterLink to="/contact">
  <button
    class="p-1 mt-1 bg-white text-black rounded-[5px]
    w-[150px] font-medium hover:border hover:bg-transparent hover:text-white transition text-[15px] font-bold"
  >
    Contact Support
  </button>
</RouterLink>
</div>
      </div>
    </div>

    <div
      class="border-t border-white mt-12 pt-6
      flex flex-col md:flex-row
      items-center justify-between gap-4"
    >
      <div class="w-full flex justify-center">
  <p class="text-white text-[13px] text-center max-w-[900px] leading-6">
    © 2026 PockieSafe. All rights reserved. PockieSafe is a product of
    Pockie Technologies Global (Pty) Ltd. Company Registration No:
    2025/128579/07.
  </p>
  
</div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>