<template>
  <div class="game-page">
    <h4 class="game-page__status">{{ isStart }}</h4>
    <div class="game-page__grid">
      <!-- Plate -->
      <div
        v-for="(plate, i) in plates"
        :key="i"
        @click="playerCanClick ? handlePlateClick(plate) : null"
        :class="[
          {
            'game-page__plate--active': plate.active,
            'game-page__plate--disabled': !playerCanClick,
          },
          `game-page__plate--${plate.color}`,
        ]"
        class="game-page__plate"
      ></div>
    </div>
    <!-- plate -->
    <h4
      class="game-page__btn_back game-page__status"
      @click="() => this.$router.replace('/')"
    >
      Назад
    </h4>
  </div>
</template>

<script>
import CompActivatePlate from "@/assets/sounds/CompActivatePlate.mp3";
import PlayerActivatePlate from "@/assets/sounds/PlayerActivatePlate.mp3";
import PlayerActivatePlateError from "@/assets/sounds/ErrorActivatePlate.mp3";
import Tick from "@/assets/sounds/tick.mp3";
export default {
  data() {
    return {
      playerClickCounter: 0,
      computerPlates: [],
      secBeforeStartGame: 3,
      currentIndex: 0,
      timerInterval: null,
      plates: [
        { active: false, color: "red" },
        { active: false, color: "green" },
        { active: false, color: "blue" },
        { active: false, color: "yellow" },
      ],
      playerCanClick: false,
    };
  },

  mounted() {
    this.startTimer();
  },

  methods: {
    computerPlateActivationSound() {
      const audio = new Audio(CompActivatePlate);
      audio.play();
    },
    playerPlateActivationSound() {
      const audio = new Audio(PlayerActivatePlate);
      audio.play();
    },
    playerPlateActivationSoundError() {
      const audio = new Audio(PlayerActivatePlateError);
      audio.play();
    },
    tickSound() {
      const audio = new Audio(Tick);
      audio.play();
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.secBeforeStartGame--;
      }, 1000);
    },
    activateRandomPlate() {
      this.playerCanClick = false;
      let randomNumber = Math.floor(Math.random() * 4);
      let plate = this.plates[randomNumber];
      this.computerPlates.push(plate);
      this.blinkAllCompColors();
    },
    blinkAllCompColors() {
      if (this.currentIndex < this.computerPlates.length) {
        let currentPlate = this.computerPlates[this.currentIndex];
        currentPlate.active = true;
        this.computerPlateActivationSound();
        setTimeout(() => {
          currentPlate.active = false;
          this.currentIndex++;
          setTimeout(this.blinkAllCompColors, 500);
        }, 500);
      } else {
        this.currentIndex = 0;
        setTimeout(() => (this.playerCanClick = true));
      }
    },
    handlePlateClick(plate) {
      if (plate === this.computerPlates[this.playerClickCounter]) {
        this.playerPlateActivationSound();
        if (this.playerClickCounter !== this.computerPlates.length - 1) {
          this.playerClickCounter++;
        } else {
          this.playerClickCounter = 0;
          this.playerCanClick = false;
          setTimeout(() => this.activateRandomPlate(), 1000);
        }
      } else {
        this.playerPlateActivationSoundError();
        this.$router.replace("/");
      }
    },
  },
  computed: {
    isStart() {
      if (this.secBeforeStartGame > -1) {
        return `Игра начнется через ${this.secBeforeStartGame}`;
      } else {
        return this.playerCanClick ? "Жмякай" : "Запоминай!";
      }
    },
  },
  watch: {
    secBeforeStartGame(currentSec, prevSec) {
      if (currentSec !== prevSec && currentSec >= 0) this.tickSound();
      if (this.secBeforeStartGame === -2) {
        clearInterval(this.timerInterval);
        this.activateRandomPlate();
      }
    },
  },
};
</script>

<style scoped>
.game-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.game-page__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 25px;
  max-width: 693px;
  margin: auto;
}

.game-page__plate {
  height: 334px;
  width: 334px;
  border-radius: 7%;
  cursor: pointer;
  opacity: 0.55;
  box-shadow: 10px -12px 0px 0px;
  transition: box-shadow 0.3s, transform 0.3s;
}

.game-page__plate:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  transform: translate(5px, -5px);
}

.game-page__plate:active {
  opacity: 1;
  box-shadow: 10px -10px 13px 7px;
  transform: translateY(0) scale(1.1) rotateX(20deg);
}

.game-page__plate--red {
  background: #e70909c2;
  color: #e709094b;
}

.game-page__plate--green {
  background: #05f311cc;
  color: #05f3113f;
}

.game-page__plate--blue {
  background: #0c2de9c7;
  color: #0c2de934;
}

.game-page__plate--yellow {
  background: #e5ff00cb;
  color: #e5ff0042;
}

.game-page__status {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 20px;
  font-size: 32px;
  color: #f8bc35;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.game-page__btn_back {
  padding: 15px 40px;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 12px;
  margin: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  background-color: #f2bd00;
  color: #fff;
}

.game-page__btn_back:hover {
  background-color: #2bd94e;
  transform: translateY(-4px);
}

.game-page__btn_back:active {
  background-color: #2bd94e;
  transform: translateY(-4px);
}

.game-page__plate--active {
  opacity: 1;
  box-shadow: 10px -10px 13px 7px;
}

.game-page__plate--disabled {
  pointer-events: none;
}
</style>
