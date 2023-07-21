<template>
  <div>
    <h4>{{ isStart }}</h4>
    <div id="GamePage">
      <div
        v-for="(plate, i) in plates"
        :key="i"
        :class="[
          { active: plate.active, clicked: plate.isClicked },
          plate.color,
        ]"
        @click="toggleClick"
        class="grid-item"
      ></div>
    </div>
    <h4 class="hover" @click="() => this.$router.push('/')">Назад</h4>
    <!-- <h4 class='hover' @click="activeMeRandomPlate">activeMeRandomPlate</h4> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerArr: [],
      arrRandomsPlates: [],
      secBeforeStartGame: 3,
      idx: 0,
      startInterval: null,
      randomNumPC: Number,
      plates: [
        { active: false, color: "red", isClicked: false },
        { active: false, color: "green", isClicked: false },
        { active: false, color: "blue", isClicked: false },
        { active: false, color: "yellow", isClicked: false },
      ],
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.startInterval = setInterval(() => this.secBeforeStartGame--, 1000);
    },
    activeMeRandomPlate() {
      let randNumPlate = Math.floor(Math.random() * 4);
      this.arrRandomsPlates.push(randNumPlate);
      this.blinkAllPlates();
    },
    blinkAllPlates() {
      if (this.idx < this.arrRandomsPlates.length) {
        let currentPlate = this.plates[this.arrRandomsPlates[this.idx]];
        currentPlate.active = true;
        setTimeout(() => {
          currentPlate.active = false;
          this.idx++;
          setTimeout(this.blinkAllPlates, 1000);
        }, 1000);
      } else {
        this.idx = 0;
      }
    },
    toggleClick() {
      alert();
    },
  },
  computed: {
    isStart() {
      return this.secBeforeStartGame > -1
        ? `Игра начнется через ${this.secBeforeStartGame}`
        : "Запоминай!";
    },
  },
  watch: {
    secBeforeStartGame() {
      if (this.secBeforeStartGame === -2) {
        clearInterval(this.startInterval);
        this.activeMeRandomPlate();
      }
    },
  },
};
</script>

<style scoped>
#GamePage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 25px;
}

.grid-item {
  height: 334px;
  width: 334px;
  border-radius: 7%;
}

.grid-item:hover {
  cursor: pointer;
  opacity: 0.6;
}

.clicked {
  scale: 0.95;
}

.red {
  background: #e70909c2;
  color: #e709094b;
  opacity: 0.3;
  box-shadow: 10px -12px 0px 0px;
}

.green {
  background: #05f311cc;
  color: #05f3113f;
  opacity: 0.3;
  box-shadow: 10px -12px 0px 0px;
}

.blue {
  background: #0c2de9c7;
  color: #0c2de934;
  opacity: 0.3;
  box-shadow: 10px -12px 0px 0px;
}

.yellow {
  background: #e5ff00cb;
  color: #e5ff0042;
  opacity: 0.3;
  box-shadow: 10px -12px 0px 0px;
}

.hover:hover {
  cursor: pointer;
  box-shadow: inset 0px 0px 14px 0px;
}

h4 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.active {
  opacity: 1;
  box-shadow: 10px -10px 13px 7px;
}
</style>
