<template>
  <div class="mt-[100px]">
    <div class="hero-container" :style="{ backgroundImage: `url(${bgFrame})` }">
      <div class="text-content">
        <h1 class="hero-title">
          <p>FlexRand Savings at Your Own Pace</p>
        </h1>
        <p class="hero-description">
          Enjoy full control over your money. Deposit anytime, withdraw anytime, and grow without penalties.
        </p>

        <div class="button-group">
          <button class="btn btn-primary">Start Saving</button>
          <button class="btn btn-secondary">View How it Works</button>
        </div>

        <div class="avatar-chain">
          <img src="@/assets/users-chunks.png" class="users-img" alt="Users" />
        </div>
      </div>
      <div class="image-container">
        <img src="@/assets/phone-in-hand-3.png" class="phone-img" alt="PockieSafe App on Phone" />
      </div>
    </div>
  </div>
</template>

<script setup>
import bgFrame from '@/assets/bg-frame-3.png'
</script>

<style scoped>
.hero-container {
  width: 95%;
  margin: 0 auto 48px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  justify-content: center;
  color: white;
  z-index: 1;
}

.hero-title { font-size: 40px; font-weight: bold; line-height: 1.1; margin: 0; }
.hero-description { width: 80%; font-size: 14px; margin-top: 16px; color: #e5e5e5; }

.button-group { 
  display: flex; 
  flex-direction: column; 
  gap: 12px; 
  margin-top: 24px; 
  width: 100%;
  align-items: center;
}

.btn { 
  padding: 14px 24px; 
  border-radius: 25px; 
  border: 1px solid transparent; 
  cursor: pointer; 
  transition: all 0.3s ease;
  font-weight: 600;
  width: 100%;
  max-width: 250px;
}

.btn-primary { background-color: white; color: black; }
.btn-primary:hover { background-color: transparent; border-color: white; color: white; }
.btn-secondary { background-color: transparent; border-color: white; color: white; }
.btn-secondary:hover { background-color: white; color: black; }

.avatar-chain { margin-top: 24px; display: flex; justify-content: center; }
.users-img { width: 180px; height: auto; }

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end; 
  margin-top: auto; 
  padding-top: 50px;
}

.phone-img { 
  width: 80%; 
  max-width: 300px; 
  height: auto; 
  display: block; 
}

@media (min-width: 600px) {
  .button-group {
    flex-direction: row;
    justify-content: center;
  }
  .btn {
    width: auto;
    padding: 12px 32px;
  }
}

@media (min-width: 1024px) {
  .hero-container {
    flex-direction: row;
    align-items: flex-end;
    padding: 80px 5% 0 5%;
  }

  .text-content {
    width: 50%;
    align-items: center;
    padding-bottom: 80px;
  }
  
  .image-container {
    width: 50%;
    margin-top: 0;
    padding-top: 0;
  }

  .phone-img {
    max-width: 400px;
  }
}
</style>