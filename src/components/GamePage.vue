<template>
	<div>
		<h4>{{ isStart }}</h4>
		<h4>{{ this.time }}</h4>
		<div id="GamePage">
			<div :class="{
				'active': objColors['0'],
			}" class="square grid-item red"></div>
			<div :class="{
				'active': objColors['1'],
			}" class="square grid-item green"></div>
			<div :class="{
				'active': objColors['2'],
			}" class="square grid-item blue"></div>
			<div :class="{
				'active': objColors['3'],
			}" class="square grid-item yellow"></div>
		</div>
		<h4 class='hover' @click="() => this.$router.push('/')">Назад</h4>
		<h4 class='hover' @click="activeMeRandomPlateGodPls">activeMeRandomPlateGodPls</h4>
	</div>
</template>

<script>
export default {
	data() {
		return {
			compArr: [],
			playerArr: [],
			time: -1,
			startInterval: Function,
			randomNumPC: Number,
			arrPlates: [],
			objColors: {
				0: false,
				1: false,
				2: false,
				3: false,
			}

		}
	},
	mounted() {
		this.startTimer();
		this.arrPlates = Array.prototype.slice.call(document.querySelectorAll('.square'))
		// console.log(this.arrPlates[])

	},
	methods: {
		startTimer() {
			this.startInterval = setInterval(() => this.time--, 1000)
		},
		activeMeRandomPlateGodPls() {
			let randNum = Math.floor(Math.random() * 4);
			let convertToStrRandNum = randNum.toString()
			this.objColors[convertToStrRandNum] = !this.objColors[convertToStrRandNum]
			setTimeout(() => {
				this.objColors[convertToStrRandNum] = !this.objColors[convertToStrRandNum]
			}, 1000)
		}
	},
	computed: {
		isStart() {
			return this.time > -1 ? `Игра начнется через ${this.time}` : 'Запоминай!'
		},
	},
	watch: {
		time() {
			if (this.time === -2) {
				clearInterval(this.startInterval);
			}
		}
	}
}
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
}

.square {
	border-radius: 7%;
}

.red {
	background: #e70909c2;
	color: #e709094b;
	opacity: .3;
	box-shadow: 10px -12px 0px 0px;
}

.green {
	background: #05f311cc;
	color: #05f3113f;
	opacity: .3;
	box-shadow: 10px -12px 0px 0px;
}

.blue {
	background: #0c2de9c7;
	color: #0c2de934;
	opacity: .3;
	box-shadow: 10px -12px 0px 0px;
}

.yellow {
	background: #e5ff00cb;
	color: #e5ff0042;
	opacity: .3;
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