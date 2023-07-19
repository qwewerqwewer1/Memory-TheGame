<template>
	<div>
		<h4>{{ this.time > -1 ? `Игра начнется через ${this.time}` : 'Погнали!' }}</h4>
		<div id="GamePage">
			<div class="square grid-item red"></div>
			<div class="square grid-item green"></div>
			<div class="square grid-item blue"></div>
			<div class="square grid-item yellow"></div>
		</div>
		<h4 class='hover' @click="() => this.$router.push('/')">Назад</h4>
	</div>
</template>

<script>
export default {
	data() {
		return {
			time: 3
		}
	},
	mounted() {
		this.startTimer();
	},
	methods: {
		startTimer() {
			setInterval(() => this.time--, 1000)
		}
	}
}
</script>

<style scoped>
#GamePage {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 10px;
}

.grid-item {
	height: 300px;
	width: 300px;
}

.square {
	border-radius: 7%;
}

.red {
	background: #e70909c2;
	opacity: .4;
}

.green {
	background: #05f311cc;
	opacity: .4;
}

.blue {
	background: #0c2de9c7;
	opacity: .4;
}

.yellow {
	background: #e5ff00cb;
	opacity: .4;
}

.hover:hover {
	box-shadow: inset 0px 0px 14px 0px;
}

h4 {
	display: flex;
	justify-content: center;
	align-items: center;
}

.active {
	opacity: 1;
}
</style>