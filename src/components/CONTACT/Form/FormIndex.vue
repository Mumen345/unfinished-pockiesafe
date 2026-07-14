<template>
  <!-- NAVBAR -->
  <nav class="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-100">
    <div
      class="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-10 2xl:px-20 py-4 flex items-center justify-between"
    >
      <router-link to="/" class="shrink-0">
        <img :src="logo" alt="Logo" class="h-8 w-auto" />
      </router-link>

      <div class="hidden lg:flex items-center gap-8">
        <router-link to="/stokvel" class="font-medium text-gray-700">Stokvel</router-link>
        <router-link to="/flexrand" class="font-medium text-gray-700">FlexRand</router-link>
        <router-link to="/security" class="font-medium text-gray-700">Security</router-link>
        <router-link to="/faqs" class="font-medium text-gray-700">FAQs</router-link>
      </div>

      <div class="hidden md:block w-[150px]"></div>
    </div>
  </nav>

  <!-- MAIN -->
  <main class="mt-24 pb-24 px-4 md:px-6 lg:px-10 2xl:px-20 max-w-[1400px] mx-auto">
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
          <div>
            <label>First Name</label>
            <input type="text" placeholder="Enter First Name" />
          </div>

          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Enter Last Name" />
          </div>
        </div>

        <div class="form-row">
          <div>
            <label>Email</label>
            <input type="email" placeholder="Enter your Email" />
          </div>

          <div>
            <label>Phone Number</label>
            <div class="phone-container">
              <vue-country-code
                @onSelect="onSelect"
                :preferredCountries="['vn', 'us', 'gb']"
              />
              <input type="tel" placeholder="Enter Phone Number" />
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
import { ref, onMounted } from 'vue'
import logo from '@/assets/logo.png'

const countries = ref([])
const selectedCountry = ref('ZA')

const onSelect = ({ name, iso2, dialCode }) => {
  console.log(name, iso2, dialCode)
}

onMounted(async () => {
  try {
    const res = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,cca2'
    )
    const data = await res.json()
    countries.value = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    )
  } catch (err) {
    console.error('Error fetching countries:', err)
  }
})
</script>

<style scoped>
:global(body) {
  overflow-y: scroll;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 40px 0;
}

.map-side {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
}
 
.map-info-box i {
  font-size: 28px;
  color: #60a5fa;
}

.map-info-box h2 { 
  margin: 8px 0;
  font-size: 24px;
} 

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
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
}

textarea {
  min-height: 120px;
  resize: none;
}

.message-box {
  margin-bottom: 20px;
}

.phone-container {
  display: flex;
  gap: 10px;
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
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .map-frame {
    height: 280px;
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