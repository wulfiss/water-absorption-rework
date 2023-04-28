<script lang="ts">
	import {
		sealsNumber,
		percentages,
		initialWeights,
		finalWeights,
		differences
	} from '$lib/stores/store';
</script>

<div id="main">
	<div id="header">
		<div class="cells">N° de Pollos</div>
		<div class="cells">N° de Precinto</div>
		<div class="cells">Peso Inicial(kg)</div>
		<div class="cells">Peso Final(kg)</div>
		<div class="cells">Diferencia(kg)</div>
		<div class="cells">% Hidratación</div>
	</div>
	<div class="body">
		{#each $sealsNumber as seal, i}
			<div id="child{i}" class="child">
				<div>
					{#if !$sealsNumber[i]}
						----
					{:else}
						{i + 1}
					{/if}
				</div>
				<div>
					{#if !$sealsNumber[i]}
						----
					{:else}
						{seal.toFixed()}
					{/if}
				</div>
				<div>
					{#if !$initialWeights[i]}
						----
					{:else}
						{$initialWeights[i].toFixed(3)}
					{/if}
				</div>
				<div>
					{#if !$finalWeights[i]}
						----
					{:else}
						{$finalWeights[i].toFixed(3)}
					{/if}
				</div>
				<div>
					{#if !$differences[i]}
						----
					{:else}
						{$differences[i].toFixed(3)}
					{/if}
				</div>
				<div>
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
</style>
