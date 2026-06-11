<template>
  <section class="prefooter-section">
    <img
      src="@/assets/lady-business.png"
      alt="PreFooter Image"
      class="lady-img"
    />

    <div class="content-wrapper">
      <div class="text-container">
        <div class="header-box">
          <i class="fa-solid fa-shield-halved"></i>
          <h2>Safe. Licensed. Reliable.</h2>
        </div>

        <p>All Stokvel Group Savings transactions are protected by encryption and regulated under our FSP license (FSP55736).</p>

        <div class="tags-container">
          <div class="tag">POPIA Compliant</div>
          <div class="tag">Reg No. 2025/128579/07</div>
          <div class="tag">Bank-Grade Encryption</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- Base Styles (Mobile First) --- */
.prefooter-section {
  position: relative;
  background-color: #FFF6EC;
  margin-top: 40px;
  width: 100%;
  overflow: hidden;
  min-height: 400px;
}

.content-wrapper {
  width: 90%;
  margin: 0 auto;
  padding: 40px 0 240px 0; 
}

.lady-img {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  object-fit: contain;
  z-index: 0;
}

.text-container { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  text-align: center; 
  z-index: 10; 
}

/* --- Tablet Range (768px - 1024px) --- */
@media (min-width: 768px) and (max-width: 1023px) {
  .prefooter-section {
    min-height: 320px;
  }
  
  .content-wrapper {
    width: 90%;
    /* Forced 300px padding as requested */
    padding: 60px 0 60px 300px; 
  }

  .lady-img {
    left: 40px;
    transform: none;
    width: 260px;
  }

  .text-container {
    align-items: flex-start;
    text-align: left;
    gap: 16px;
  }

  .tags-container { justify-content: flex-start; }
}

/* --- Desktop Range (1024px and up) --- */
@media (min-width: 1024px) {
  .content-wrapper {
    width: 75%;
    padding: 80px 0 80px 380px;
  }
  
  .lady-img {
    left: 60px;
    transform: none;
    width: 320px;
  }
}

/* --- Shared Element Styles --- */
.header-box { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.header-box i { font-size: 24px; color: #FF7A00; }
.header-box h2 { font-size: 26px; font-weight: bold; color: #1f2937; }
.tags-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 16px; }
.tag { padding: 8px 20px; border: 1px solid #e5e7eb; border-radius: 9999px; background: white; color: #FF7A00; font-size: 13px; font-weight: 500; }
</style>