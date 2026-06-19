<template>
  <router-view />
</template>

<style>
@font-face {
  font-family: 'LatoReg';
  src: url('/src/assets/fonts/Lato-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'LatoBold';
  src: url('/src/assets/fonts/Lato-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
  max-width: 2000px;
  margin: 0 auto;
}
</style>