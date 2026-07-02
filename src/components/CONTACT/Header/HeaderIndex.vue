<template>
  <div class="mt-[100px] justify-center items-center flex mb-10 flex-col gap-4">
    <div class="flex items-center justify-center flex-col">
      <h1 class="text-[32px] font-bold text-black text-center">Get In Touch</h1>
      <p class="text-[16px] text-gray-400 text-center">We're here to help you with any questions about your savings, security, and partnership.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div v-for="know in knowledge" :key="know.title" class="bg-blue-50 text-blue-500 p-4 w-[80%] m-0 mx-auto   rounded-lg flex flex-col gap-2 m-4 pr-[100px]">
        <i :class="know.icon" class="text-[28px] text-blue-400 mb-1"></i>
        <h1 class="text-[20px] font-semibold">{{ know.title }}</h1>
        <p class="text-[14px]">{{ know.description }}</p>
        <p class="text-[13px] font-medium">{{ know.address }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const knowledge = [
  { 
    icon: 'fa-solid fa-circle-question',
    title: 'Customer Support', 
    description: 'Get help with your Stokvel or Flexrand account', 
    address: 'support@pockiesafe.co.za' 
  },
  { 
    icon: 'fa-solid fa-handshake',
    title: 'Partnership Enquiries', 
    description: 'Collaborate with us to empower digital savings communities', 
    address: 'partners@pockiesafe.co.za' 
  },
  { 
    icon: 'fa-solid fa-house-signal',
    title: 'Security Concerns', 
    description: 'Report suspicious activity or get help securing your account', 
    address: 'security@pockiesafe.co.za' 
  }
]
</script>