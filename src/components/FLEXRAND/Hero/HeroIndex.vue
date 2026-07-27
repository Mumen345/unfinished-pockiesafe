<template>
  <div class="hero_container mt-5">
    <div class="left_container">
      <div>
        <h1>Flexrand Savings at your <span class="break-text">own pace</span></h1>
        <p>Enjoy full control over your money. Deposit anytime, withdraw anytime and grow without penalties.</p>
      </div>
      <div class="button-group">
        <button class="btn btn-primary">View how it works</button>
        <button class="btn btn-secondary">Start Saving</button>
      </div>
      <div class="avatar-chain">
        <img src="../../../assets/users-chunks.png" />
      </div>
    </div>
    <div class="image_container">
      <img src="../../../assets/phone-in-hand-3.png" class="phone-img" alt="PockieSafe App on Phone" />
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
.hero_container {
  background-image: url("../../../assets/bg-frame-3.png");
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
  overflow: hidden;
}

.left_container {
  width: 440px;
}

.image_container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
}

.phone-img {
  max-height: calc(100% - 10px);
  height: calc(100% - 10px);
  object-fit: contain;
  object-position: bottom;
  transform: translateY(10px);
}

h1 {
  font-size: 56px;
  line-height: 64px;
  font-family: LatoBold;
  font-weight: 600; /* Reduced font weight slightly */
  margin-bottom: 20px;
}

.break-text {
  display: block;
}

p {
  font-size: 16px;
  line-height: 28px;
  font-weight: 300 !important; /* Reduced paragraph text weight slightly */
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