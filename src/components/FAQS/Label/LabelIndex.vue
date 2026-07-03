<template>
  <div class="p-[67px] bg-[#F4F4F4] flex flex-col text-center items-center justify-center">
     <h1>Still need help?</h1>
     <p>Our support team is here for you. Reach out anytime</p>

     <div class="button-group">
          <button class="contact">Contact Support</button>
          <button class="help-center">Visit Our Help Center</button>
     </div>
  </div>
  
</template>

<script setup>

</script>

<style scoped>
     h1 {
          font-size: 1.7rem;
          font-weight: bold;
          margin-bottom: 1rem;
     }
     p {
          color: #b7b7b7;
          margin-bottom: 2rem;
     }
     .button-group {
          display: flex;
          gap: 15px;
          padding: 1rem;
     }

     .contact {
          border: 1px solid black;
          padding: 10px 17px;
          border-radius: 9px;
          background: black;
          color: white;
     }
     .help-center {
          border: 1px solid black;
          padding: 10px 17px;
          border-radius: 9px;
     }

     .contact:hover, .help-center:hover {
          cursor: pointer;
          transform: scale(1.05);
     }
</style>