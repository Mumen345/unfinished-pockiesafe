<template>
  <section class="secure-savings-section">
    <div class="secure-container">
      <div class="secure-empty-col"></div>

      <div class="secure-content-col">
        <div class="secure-header">
          <i class="fa-solid fa-shield-halved secure-icon"></i>
          <h2 class="secure-title">Safe. Licensed. Reliable.</h2>
        </div>
        <p class="secure-description">
          All Flexrand Transactions are protected by encryption and are regulated under our FSP Licence (FSP55736)
        </p>
        <div class="secure-badges">
          <div class="secure-badge">POPIA Complaint</div>
          <div class="secure-badge">Reg No. 2025/128579/07</div>
          <div class="secure-badge">Bank-Grade Encryption</div>
        </div>
      </div>
    </div>

    <div class="secure-image-container">
      <img src="@/assets/lady-business.png" alt="PreFooter Image" class="secure-image" />
    </div>
  </section>
</template>

<style scoped>
.secure-savings-section {
  background-color: #F6F8FF;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-top: 2.5rem;
  width: 100%;
  position: relative;
}

@media (min-width: 768px) {
  .secure-savings-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

.secure-container {
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .secure-container {
    width: 85%;
  }
}

@media (min-width: 1024px) {
  .secure-container {
    width: 75%;
    flex-direction: row;
    gap: 5rem;
  }
}

.secure-empty-col {
  width: 100%;
  display: none;
}

@media (min-width: 1024px) {
  .secure-empty-col {
    display: block;
    width: 50%;
  }
}

.secure-content-col {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (min-width: 1024px) {
  .secure-content-col {
    width: 50%;
    align-items: flex-start;
    text-align: left;
  }
}

/* Header */
.secure-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.secure-icon {
  font-size: 24px;
  color: #5856D6;
}

.secure-title {
  font-size: 22px;
  font-weight: 700;
  color: #1f2937;
}

@media (min-width: 768px) {
  .secure-title {
    font-size: 30px;
  }
}

/* Description */
.secure-description {
  font-size: 14px;
  line-height: 1.75rem;
  color: #4b5563;
  max-width: 560px;
}

@media (min-width: 768px) {
  .secure-description {
    font-size: 16px;
  }
}

/* Badges Wrapper */
.secure-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

@media (min-width: 1024px) {
  .secure-badges {
    justify-content: flex-start;
  }
}

/* Individual Badge */
.secure-badge {
  padding: 0.5rem 1.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 9999px;
  background-color: #ffffff;
  color: #5856D6;
  font-size: 13px;
  font-weight: 500;
}

@media (min-width: 768px) {
  .secure-badge {
    font-size: 14px;
  }
}

/* Absolute Image Container - Moved closer to the text by increasing left offset */
.secure-image-container {
  display: none;
  position: absolute;
  bottom: 0;
  left: 12%; /* Increased from 5% to push the image further right toward the text */
  justify-content: center;
}

@media (min-width: 1024px) {
  .secure-image-container {
    display: flex;
  }
}

@media (min-width: 1280px) {
  .secure-image-container {
    left: 15%; /* Adjusts slightly more for larger screens if needed */
  }
}

/* Image */
.secure-image {
  width: 300px;
  object-fit: contain;
}

@media (min-width: 1280px) {
  .secure-image {
    width: 380px;
  }
}
</style>