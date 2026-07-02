<template>
  <!-- Fixed full-width banner -->
  <div class="fixed-banner">
    <hr />
    <span>Last updated: January 10 2025</span>
  </div>
</template>

<script setup>
/* no logic */
</script>

<style scoped>
.fixed-banner {
  position: fixed;
  left: 0;
  right: 0;
  top: 0; /* change to bottom: 0 if needed */
  width: 100vw;
  background-color: #c4c6ff;
  padding: 16px 0;
  z-index: 999; /* stays above layout */
}

/* Divider */
hr {
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
  border: none;
  margin-bottom: 12px;
}

/* Text */
span {
  padding-left: 16px;
  font-size: 14px;
  color: #1f2937;
}
</style>