<template>
  <div>
    <navigation-main></navigation-main>
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
body {
  background: #1b1919;
  color: white;
}
.lock-scroll {
  overflow: hidden;
}
</style>
