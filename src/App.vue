<template>
  <div class="main">
    <RouterView />
  </div>
</template>

<style>
body {
  margin: 30px;
  padding: 30px;
  background: linear-gradient(90deg, #121212, #24262c);
  color: aqua;
  font-family: monospace;
  font-size: 50px;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>