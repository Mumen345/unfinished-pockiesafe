<template>
  <div class="full-width-wrapper">
     <div class="first_container">
          <hr>
          Last updated: January 10 2025
     </div>
      <div class="p-[67px] bg-[#6E6BFF] flex flex-col text-center items-center justify-center">
    <p class="text-[40px] text-white">
        Your privacy is our promise.
    </p>
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
  </div>
</template>

<style scoped>
.full-width-wrapper {
  display: flex;
  flex-direction: column;
  width: 100% !important; 
  margin: 0 !important;
  padding: 0 !important; 
}

.first_container {
  display: flex;
  flex-direction: column;
  background-color: #d9dbff;
  width: 100% !important;
  text-align: center;
  padding: 90px 0;
}

hr {
  width: 100%;
  border: none;
  border-top: 1px solid #d3d3d3;
  margin-bottom: 20px;
}
</style>