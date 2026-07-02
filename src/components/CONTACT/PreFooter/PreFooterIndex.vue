  <template>
    <div class="container">
      <span class="text-[40px] text-white">
          <p>Our Security's got you covered</p>
      </span>
      <div class="flex gap-3 pt-4">
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
    
  </template>

  <script setup>

  </script>

  <style scoped>
    .container {
  padding: 67px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-width: 100%;

background: linear-gradient(
  to right,
  #6262ff,
  #b0b0fa,
  #bdbdff
);
}
  </style>