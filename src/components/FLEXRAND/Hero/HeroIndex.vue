<template>
  <div class="hero-container" :style="{ backgroundImage: `url(${bgFrame})` }">
    <div class="text-content">
      <h1 class="hero-title">
        <p>FlexRand Savings at your own pace.</p>
      </h1>
      <p class="hero-description">
        Enjoy full control over your money. Deposit anytime, withdraw anytime, and grow without penalties
      </p>
      <div class="button-group">
        <button class="btn btn-primary">View how it works</button>
        <button class="btn btn-secondary">Start Saving</button>
      </div>
      <div class="avatar-chain">
        <img src="../../../assets/users-chunks.png" />
      </div>
    </div>
    <div class="image-container">
      <img src="@/assets/phone-in-hand-3.png" class="phone-img" alt="PockieSafe App on Phone" />
    </div>
  </div>
</template>

<script setup>
import bgFrame from '@/assets/bg-frame-3.png'
</script>

<style scoped>
.hero-container {
  width: 95%;
  margin: 100px auto 48px auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 5% 0 5%;
  box-sizing: border-box;
  text-align: center;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  min-height: 500px;
}

.text-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 1;
}

.hero-title { font-size: 49px; font-weight: bold; margin: 0; line-height: 1.1; }
.hero-description { width: 80%; font-size: clamp(0.75rem, 2vw, 1rem); margin-top: 16px; }

.button-group { 
  display: flex; 
  flex-direction: column; 
  gap: 12px; 
  margin-top: 24px; 
  width: 100%;
}

.btn { 
  padding: 14px 24px; 
  border-radius: 25px; 
  border: 1px solid transparent; 
  cursor: pointer; 
  transition: all 0.3s ease;
  font-weight: 600;
  width: 100%;
}

.btn-primary { background-color: white; color: black; }
.btn-primary:hover { background-color: transparent; border-color: white; color: white; }
.btn-secondary { background-color: transparent; border-color: white; color: white; }
.btn-secondary:hover { background-color: white; color: black; }

.avatar-chain { display: flex; align-items: center; margin-top: 24px; width: 40%; left: 50% }
.avatar { width: 50%; height: 38px; border-radius: 50%; margin-left: -5px; }

.numbers-stack { display: flex; align-items: center; margin-top: 24px; }
.number-large { font-size: 2.5rem; margin: 0 10px; }
.number-plus { font-size: 2.5rem; color: #4ade80; }
.number-label { font-size: 1rem; text-align: left; margin-left: 10px; }

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end; 
  margin-top: auto;      
  padding-top: 40px;
}

.phone-img { width: 80%; max-width: 350px; height: auto; display: block; }

@media (min-width: 600px) {
  .button-group {
    flex-direction: row;
    justify-content: center;
    width: auto;
  }
  .btn {
    width: auto;
    border-radius: 15px;
  }
}

@media (min-width: 1024px) {
  .hero-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end; 
    padding: 60px 100px 0 100px;
    text-align: left;
    overflow: hidden;
  }

  .text-content {
    align-items: flex-start;
    width: 45%;
    padding-bottom: 60px;
  }

  .button-group { justify-content: flex-start; }
  
  .image-container {
    width: 50%;
    justify-content: flex-end;
    align-self: flex-end;
    padding-top: 0;
  }

  .phone-img {
    width: 100%;
    max-width: 480px;
  }
}
</style>