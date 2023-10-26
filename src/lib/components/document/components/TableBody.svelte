<script lang="ts">
	import {
		sealsNumber,
		percentages,
		initialWeights,
		finalWeights,
		differences,
		numberProbe
	} from '$lib/stores/store';
</script>

<div id="main">
	<div id="header">
		<div class="cells">N° de Pollos</div>
		<div class="cells">N° de Precinto</div>
		<div class="cells">Peso Inicial(kg)</div>
		<div class="cells">Peso Final(kg)</div>
		<div class="cells">Diferencia(kg)</div>
		<div class="cells">% Retención</div>
	</div>
	<div class="body">
		{#each $numberProbe as probe, i}
			<div id="child{i}" class="child">
				<div>
					{i + 1}
				</div>
				<div id="sealChild{i}">
					{#if !$sealsNumber[i]}
						----
					{:else}
						{$sealsNumber[i].toFixed()}
					{/if}
				</div>
				<div id="initialChild{i}">
					{#if !$initialWeights[i]}
						----
					{:else}
						{$initialWeights[i].toFixed(3)}
					{/if}
				</div>
				<div id="finalChild{i}">
					{#if !$finalWeights[i]}
						----
					{:else}
						{$finalWeights[i].toFixed(3)}
					{/if}
				</div>
				<div id="diffChild{i}">
					{#if !$differences[i]}
						----
					{:else}
						{$differences[i].toFixed(3)}
					{/if}
				</div>
				<div id="percChild{i}">
					{#if !$percentages[i]}
						----
					{:else}
						{$percentages[i].toFixed(2)}
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	%childFormat {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		text-align: center;
	}

	$border: 1px solid black;

	div#main {
		font-size: 16px;
		width: 755px;
		border: $border;
	}

	div#header {
		@extend %childFormat;
		font-weight: bold;

		div:not(:last-child) {
			border-right: $border;
		}
	}

	div.body {
		height: 600px;
		display: grid;
		grid-template-rows: auto;
		font-size: 18px;
		div.child {
			@extend %childFormat;
		}

		div.child {
			div {
				border-top: $border;
			}
			div:not(:last-child) {
				border-right: $border;
			}
		}
	}

	@media print {
		div.body {
			height: 700px;
		}
	}
</style>
