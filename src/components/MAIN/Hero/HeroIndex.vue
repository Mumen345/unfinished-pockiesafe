<template>
  <div class="hero_container mt-5">
    <div class="left_container">
      <div>
        <h1>Save Smarter. Live Better.</h1>
        <p>Join transparent Stokvels with friends or build your own flexible savings plan with FlexRand. Powered by
          PockieSafe..</p>
      </div>
      <div class="button-group">
        <button class="btn btn-primary">Get the App</button>
        <button class="btn btn-secondary">Explore Features</button>
      </div>
      <div class="avatar-chain">
        <img v-for="(img, index) in customers" :key="index" :src="img" class="avatar"
          :style="{ zIndex: customers.length - index }" alt="Customer Avatar" />
      </div>
      <div class="numbers-stack">
        <img src="@/assets/arrow-up.png" class="arrow-icon" alt="Arrow Up" />
        <h1 class="number-large">10K</h1>
        <span class="number-plus">+</span>
        <span class="number-label">Active Users</span>
      </div>
      <small>Trusted by early savers building better money habits with <b>PockieSafe.</b></small>
    </div>
    <div class="image_container">
      <img src="@/assets/phone-in-hand.svg" class="phone-img" alt="PockieSafe App on Phone" />
    </div>
  </div>
</template>
<script setup>
import customer0 from '@/assets/customer-0.png'
import customer1 from '@/assets/customer-1.png'
import customer2 from '@/assets/customer-2.png'
import customer3 from '@/assets/customer-3.png'
import customer4 from '@/assets/customer-4.png'
import customer5 from '@/assets/customer-5.png'
import customer6 from '@/assets/customer-6.png'

const customers = [customer1, customer0, customer2, customer3, customer4, customer5, customer6]
</script>
<style scoped>
.hero_container {
  background-image: url("../../../assets/bg-frame.png");
  background-color: #cccccc;
  height: 750px;
  width: 95%;
  margin: 100px auto 30px;
  border-radius: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  gap: 100px;
}

.left_container {
  width: 390px;
}

h1 {
  font-size: 64px;
  line-height: 72px;
  font-family: LatoBold;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 28px;
  font-weight: 400px !important;
  font-family: LatoReg;
  color: #EBEBFF;
}

.gaps {
  gap: 30px;
}

.button-group {
  display: flex;
  flex-direction: row;
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
  width: 100%;
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

.avatar-chain {
  display: flex;
  align-items: center;
  margin-top: 24px;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-left: -5px;
}

.numbers-stack {
  display: flex;
  align-items: center;
  margin-top: 24px;
}

.number-large {
  font-size: 2.5rem;
  margin: 0 10px;
}

.number-plus {
  font-size: 2.5rem;
  color: #4ade80;
}

.number-label {
  font-size: 1rem;
  text-align: left;
  margin-left: 10px;
}

@media (max-width: 1260px) {
  .image_container {
    /* width:600px; */
  }

  .hero_container {
    width: 97%;
  }
}

@media (max-width: 1260px) {
  .hero_container {
    padding-top: 30px;
    height: auto;
    flex-direction: column;
    gap: 20px;
    width: 890px;
  }
  
  @media (max-width: 1100px) {
    .left_container {
      text-align: center;
      display: flex;
      flex-direction: column;
      width: 70%;
      align-items: center;
      justify-content: center;
    }
    
  }
  
  @media (max-width: 900px) {
    .hero_container {
      height: auto;
      flex-direction: column;
      padding-top: 50px;
      gap: 20px;
      width: 100%;
      border-radius: 0;
      margin: 72px 0 30px;
    }

    .left_container {
      width: 85%;
    }
  }

  @media (max-width: 450px) {
    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-left: -5px;
    }

    .button-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 24px;
      width: 100%;
    }

    h1 {
      font-size: 40px;
      line-height: 50px;
      font-family: LatoBold;
      margin-bottom: 10px;
    }
  }
}
</style>