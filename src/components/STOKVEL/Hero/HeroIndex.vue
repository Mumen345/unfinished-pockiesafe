<template>
  <div class="mt-[100px]">
      <div class="hero-container" :style="{ backgroundImage: `url(${bgFrame})` }">
        <div class="text-content">
      <h1 class="hero-title">
        <p>Stokvel Group Savings Made Simple</p>
      </h1>
      <p class="hero-description">
        Join or create a Stokvel that fits your goals. Enjoy transparency, accountability, and growth through collective saving.
      </p>

      <div class="button-group">
        <button class="btn btn-primary">Start a Group</button>
        <button class="btn btn-secondary">Join a Group</button>
      </div>

      <div class="avatar-chain">
        <img
         src="@/assets/Group Chunks.png" />
      </div>
    </div>
    <div class="image-container">
          <img src="@/assets/phone-in-hand-2.png" class="phone-img" alt="PockieSafe App on Phone" />
        </div>
</div>
  </div>
</template>

<script setup>
import bgFrame from '@/assets/bg-frame-2.png'
</script>

<style scoped>
.hero-container {
  width: 100%;
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
  max-width: 350px;
  color: white;
  margin-top: 96px;
  margin-bottom: 48px;
}

.hero-title {
  font-size: 45px;
  font-weight: bold;
  line-height: 1.1;
  margin: 0;
}

.hero-title p {
  margin: 0;
}

.hero-description {
  font-size: 12px;
  margin-top: 8px;
  color: white;
}

/* --- Buttons --- */
.button-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 32px;
}

.btn {
  width: 100%;
  border-radius: 120px;
  padding: 12px 24px;
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

/* --- Avatars --- */
.avatar-chain {
  display: flex;
  align-items: center;
  margin-top: 32px;
}

.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: white;
  object-fit: cover;
  margin-left: -5px;
}

.avatar:first-child {
  margin-left: 0;
}

/* --- Numbers --- */
.numbers-stack {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.arrow-icon {
  width: 16px;
  height: 16px;
}

.number-large {
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  color: white;
  margin: 0 20px;
}

.number-plus {
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  color: #4ade80; /* Nice bright green */
}

.number-label {
  font-size: 15px;
  font-weight: bold;
  line-height: 1.2;
  color: white;
  margin-left: 20px;
}

/* --- Trust Badge --- */
.trust-badge {
  margin-top: 20px;
  text-align: left;
}

.trust-badge p {
  font-size: 12px;
  color: white;
  margin: 0;
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


/* =========================================
   RESPONSIVE UPGRADES (TABLET & DESKTOP)
========================================= */

/* Small Tablets / Large Phones */
@media (min-width: 640px) {
  .phone-img {
    max-width: 400px;
  }
}

/* Desktop Breakpoint (lg) */
@media (min-width: 1024px) {
  .hero-container {
    flex-direction: row;
    gap: 15%;
    padding-left: 48px;
    padding-right: 48px;
  }

  .text-content {
    margin-top: 0;
  }

  .button-group {
    flex-direction: row;
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