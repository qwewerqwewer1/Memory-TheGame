<template>
  <div id="StartMenu">
    <h3 class="main_title center">
      Memory - The Game!
    </h3>

    <div class="main_menu">
      <h4 class="start hover" @click="() => this.$router.push('/GamePage')">Старт!</h4>
      <h4 class="quit hover" @click="reloadBrowser">Сброс</h4>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    reloadBrowser() {
      alert('Браузер будет перезагружен!')
      location.reload();
    }
  }
}
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}

.hover:hover {
  box-shadow: inset 0px 0px 14px 0px;
}

h4 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>