<template>
  <div class="start-menu">
    <h1 class="start-menu__title">
      <span
        v-for="(letter, index) in title"
        :key="index"
        class="start-menu__jumping-letter"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        {{ letter }}
      </span>
    </h1>
    <div class="start-menu__main-menu">
      <button class="start-menu__start-button" @click="startGame">
        Начать игру
      </button>
      <button class="start-menu__quit-button" @click="quitGame">Выйти</button>
    </div>
  </div>
</template>

<script>
import ClickSound from "@/assets/sounds/Click.mp3";

export default {
  data() {
    return {
      title: "Memory Squares",
    };
  },
  methods: {
    quitGame() {
      window.location.href = "https://github.com/qwewerqwewer1/Memory";
    },
    startGame() {
      this.playClick();
      this.$router.push("/GamePage");
    },
    playClick() {
      const audio = new Audio(ClickSound);
      audio.play();
    },
  },
};
</script>

<style scoped>
.start-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.start-menu__title {
  font-size: 72px;
  font-weight: bold;
  color: #ffcc00;
  text-shadow: 3px 3px 11px rgb(0 0 0 / 80%);
  margin-bottom: 40px;
}

.start-menu__jumping-letter {
  display: inline-block;
  animation: jumpLetter 1s infinite;
}

@keyframes jumpLetter {
  0%,
  100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(8px);
  }
}

.start-menu__main-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.start-menu__start-button,
.start-menu__quit-button {
  padding: 15px 40px;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 12px;
  margin: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  color: #fff;
  font-family: cursive;
}

.start-menu__start-button {
  background-color: #f2bd00;
}

.start-menu__quit-button {
  background-color: #ff2a00;
}

.start-menu__start-button:hover,
.start-menu__quit-button:hover {
  background-color: #2bd94e;
  transform: translateY(-4px);
}

.start-menu__start-button:active,
.start-menu__quit-button:active {
  transform: translateY(0);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
}
</style>
