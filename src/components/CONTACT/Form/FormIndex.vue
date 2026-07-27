<template>

  <!-- MAIN -->
  <main class="mt-20 md:mt-24 pb-16 md:pb-24 px-4 md:px-6 lg:px-10 2xl:px-20 max-w-[1400px] mx-auto">
    <div class="contact-grid">

      <!-- MAP SIDE -->
      <div class="map-side">
        <iframe
          class="map-frame"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369520.32954565535!2d27.868279993792786!3d-25.75766016388871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619cbec65033%3A0xf66262b07a847b4c!2sPretoria%2C%20South%20Africa!5e0!3m2!1sen!2sng!4v1781876469392"
        ></iframe>

        <div class="map-info-box">
          <i class="fa-solid fa-location-dot"></i>
          <h2>Our Office</h2>
          <p>
            Pockie Technologies Global (PTY) Ltd, Regus Offices,
            Sandton, Johannesburg, South Africa
          </p>
        </div>
      </div>

      <!-- FORM SIDE -->
      <div class="form-side">

        <div class="form-row">
          <div class="input-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter First Name" />
          </div>

          <div class="input-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter Last Name" />
          </div>
        </div>

        <div class="form-row">
          <div class="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your Email" />
          </div>

          <div class="input-group">
            <label>Phone Number</label>
            <div class="phone-container">
              <select v-model="selectedDialCode" class="country-select">
                <option 
                  v-for="(country, index) in countries" 
                  :key="index" 
                  :value="country.dialCode"
                >
                  {{ country.name }} ({{ country.dialCode }})
                </option>
              </select>
              
              <!-- Phone number input with integrated dial code badge below it -->
              <div class="phone-input-wrapper">
                <span class="prefix-badge">{{ selectedDialCode }}</span>
                <input type="tel" placeholder="Enter Phone Number" class="phone-input" />
              </div>
            </div>
          </div>
        </div>

        <div class="message-box">
          <label>Message</label>
          <textarea placeholder="Enter your Message"></textarea>
        </div>

        <button class="send-btn">Send</button>
      </div>

    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import numbersData from '@/assets/numbers.json'

const countries = ref(numbersData)
const selectedDialCode = ref('+27')
</script>

<style scoped>
:global(body) {
  overflow-y: scroll;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 20px 0;
  width: 100%;
}

.map-side {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-width: 0;
}

.map-frame {
  width: 100%;
  height: 420px;
  border: 0;
  border-radius: 16px;
}

.map-info-box {
  border: 1px solid #d3d3d3;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
  word-break: break-word;
}
 
.map-info-box i {
  font-size: 28px;
  color: #60a5fa;
}

.map-info-box h2 { 
  margin: 8px 0;
  font-size: 24px;
} 

.form-side {
  width: 100%;
  min-width: 0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
}

.input-group {
  width: 100%;
  min-width: 0;
}

label {
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.message-box {
  margin-bottom: 20px;
  width: 100%;
}

.phone-container {
  display: flex;
  flex-direction: column;
  flex-direction: column; /* Explicitly requested vertical stack */
  gap: 10px;
  width: 100%;
}

.country-select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;
  box-sizing: border-box;
}

.phone-input-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
}

.prefix-badge {
  padding: 0 12px;
  font-size: 14px;
  color: #555;
  background-color: #f9f9f9;
  border-right: 1px solid #ddd;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  white-space: nowrap;
}

.phone-input {
  border: none !important;
  outline: none;
  flex: 1;
  padding: 12px;
  width: 100%;
  min-width: 0;
}

.send-btn {
  width: 100%;
  padding: 15px;
  background: #5a4ad1;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease;
}

.send-btn:hover {
  background: #4a3cb8;
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .map-frame {
    height: 350px;
  }
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .map-frame {
    height: 260px;
  }

  main {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (min-width: 1600px) {
  .contact-grid {
    gap: 60px;
  }

  .map-frame {
    height: 520px;
  }
} 
</style>