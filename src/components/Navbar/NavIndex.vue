<template>
  <!-- Navbar -->
  <nav
    id="navbar"
    class="fixed top-0 z-50 w-full bg-white border-b border-gray-100 mb-[100px]"
  >
    <!-- Inner Container -->
    <div
      class="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 md:px-6 lg:px-10 py-4"
    >
      <!-- Logo -->
      <router-link to="/" class="shrink-0">
        <img
          :src="logo"
          alt="Pocket Logo"
          class="h-7 md:h-8 w-auto"
        />
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-8">
        <router-link
          to="/stokvel"
          class="font-medium text-gray-700 transition hover:text-gray-900"
          active-class="underline decoration-2 underline-offset-[6px]"
        >
          Stokvel
        </router-link>

        <router-link
          to="/flexrand"
          class="font-medium text-gray-700 transition hover:text-gray-900"
          active-class="underline decoration-2 underline-offset-[6px]"
        >
          FlexRand
        </router-link>

        <router-link
          to="/security"
          class="font-medium text-gray-700 transition hover:text-gray-900"
          active-class="underline decoration-2 underline-offset-[6px]"
        >
          Security
        </router-link>

        <router-link
          to="/faqs"
          class="font-medium text-gray-700 transition hover:text-gray-900"
          active-class="underline decoration-2 underline-offset-[6px]"
        >
          FAQs
        </router-link>
      </div>

      <!-- Desktop Buttons -->
      <div class="hidden md:flex items-center gap-3">
        <!-- Apple -->
        <div
          class="flex cursor-pointer items-center gap-2 rounded-xl bg-black px-3 py-2 text-white"
        >
          <i class="fa-brands fa-apple text-[22px]"></i>

          <div class="leading-tight">
            <small class="block text-[9px] uppercase">
              Download on the
            </small>

            <p class="text-sm font-semibold">
              App Store
            </p>
          </div>
        </div>

        <!-- Google -->
        <div
          class="flex cursor-pointer items-center gap-2 rounded-xl bg-black px-3 py-2 text-white"
        >
          <i class="fa-brands fa-google-play text-[18px]"></i>

          <div class="leading-tight">
            <small class="block text-[9px] uppercase">
              Get it on
            </small>

            <p class="text-sm font-semibold">
              Google Play
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile Hamburger -->
      <button
        @click="mobileMenu = !mobileMenu"
        class="flex lg:hidden items-center justify-center w-10 h-10 rounded-lg border border-gray-200"
      >
        <i
          :class="mobileMenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
          class="text-gray-700 text-lg"
        ></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="mobileMenu"
        class="lg:hidden border-t border-gray-100 bg-white px-4 py-6"
      >
        <div class="flex flex-col gap-5">
          <router-link
            to="/stokvel"
            class="font-medium text-gray-700"
            active-class="underline decoration-2 underline-offset-[6px]"
            @click="mobileMenu = false"
          >
            Stokvel
          </router-link>

          <router-link
            to="/flexrand"
            class="font-medium text-gray-700"
            active-class="underline decoration-2 underline-offset-[6px]"
            @click="mobileMenu = false"
          >
            FlexRand
          </router-link>

          <router-link
            to="/security"
            class="font-medium text-gray-700"
            active-class="underline decoration-2 underline-offset-[6px]"
            @click="mobileMenu = false"
          >
            Security
          </router-link>

          <router-link
            to="/faqs"
            class="font-medium text-gray-700"
            active-class="underline decoration-2 underline-offset-[6px]"
            @click="mobileMenu = false"
          >
            FAQs
          </router-link>

          <!-- Mobile Store Buttons -->
          <div class="flex flex-col gap-3 pt-4">
            <div
              class="flex items-center gap-2 rounded-xl bg-black px-3 py-3 text-white"
            >
              <i class="fa-brands fa-apple text-[22px]"></i>

              <div class="leading-tight">
                <small class="block text-[9px] uppercase">
                  Download on the
                </small>

                <p class="text-sm font-semibold">
                  App Store
                </p>
              </div>
            </div>

            <div
              class="flex items-center gap-2 rounded-xl bg-black px-3 py-3 text-white"
            >
              <i class="fa-brands fa-google-play text-[18px]"></i>

              <div class="leading-tight">
                <small class="block text-[9px] uppercase">
                  Get it on
                </small>

                <p class="text-sm font-semibold">
                  Google Play
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/logo.png'

const mobileMenu = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>