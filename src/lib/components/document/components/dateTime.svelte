<script>
	import { time } from '$lib/stores/store';
	import { date } from '$lib/stores/store';
</script>

<div id="main">
	<div id="date">Fecha: {$date}</div>
	<div id="time">
		<div>Hora de inicio: {$time.initial} HS</div>
		<div>Hora de finalización: {$time.final} HS</div>
	</div>
</div>

<style lang="scss">
	div#main {
		display: grid;
		height: 100px;
		grid-template-columns: repeat(2, 1fr);
		align-content: center;
		font-weight: bold;
		font-size: 15px;
	}
</style>
