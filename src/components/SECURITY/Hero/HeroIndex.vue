<template>
  <div class="mt-[100px]">
    <div class="hero-container" :style="{ backgroundImage: `url(${bgFrame})` }">
      <div class="text-content">
        <h1 class="hero-title">
          <p>Your Savings & Data Are Always Protected</p>
        </h1>
        <p class="hero-description">
          Your funds, identity, and transactions are protected with advanced encryption and regulated under our FSP license.
        </p>
        <div class="button-group">
          <button class="btn btn-primary">View License Info</button>
          <button class="btn btn-secondary">Learn about POPIA</button>
        </div>
      </div>
      <div class="image-container">
        <img src="@/assets/phone-in-hand-4.png" class="phone-img" alt="PockieSafe App on Phone" />
      </div>
    </div>
  </div>
</template>

<script setup>
import bgFrame from '@/assets/bg-frame-4.png'
</script>

<style scoped>
.hero-container {
  width: 95%;
  max-width: 1800px;
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

.text-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  color: white;
  margin-top: 96px;
  margin-bottom: 48px;
  text-align: center;
}

.hero-title {
  font-size: 45px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 16px;
}

.hero-title p {
  margin: 0;
}

.hero-description {
  font-size: 12px;
  margin-top: 8px;
  color: white;
  margin-bottom: 5px;
}

/* --- Buttons --- */
.button-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 5px;
}

.btn {
  width: 100%;
  border-radius: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;
  border: 1px solid transparent;
}

.btn-primary {
  background-color: white;
  color: black;
}

.btn-primary:hover {
  background-color: transparent;
  border-color: white;
  color: white;
}

.btn-secondary {
  background-color: transparent;
  border-color: white;
  color: white;
}

.btn-secondary:hover {
  background-color: white;
  color: black;
}

/* --- Image Container --- */
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

/* --- Tablet --- */
@media (min-width: 600px) and (max-width: 1023px) {
  .button-group {
    flex-direction: row;
    justify-content: center;
    width: auto;
  }

  .btn {
    width: auto;
  }
}

/* --- Small Tablets / Large Phones --- */
@media (min-width: 640px) {
  .phone-img {
    max-width: 400px;
  }
}

/* --- Desktop --- */
@media (min-width: 1024px) {
  .hero-container {
    flex-direction: row;
    gap: 15%;
    padding-left: 48px;
    padding-right: 48px;
  }

  .text-content {
    align-items: flex-start;
    text-align: left;
    margin-top: 0;
  }

  .button-group {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    width: auto;
  }

  .btn {
    width: auto;
  }

  .image-container {
    width: auto;
  }

  .phone-img {
    max-width: 500px;
  }
}
</style>