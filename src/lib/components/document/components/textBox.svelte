<script lang="ts">
	import { observation } from '$lib/stores/store';
</script>

<textarea name="textBox" id="textBox" cols="30" rows="10" readonly
	>Observaciones: {$observation}</textarea
>

<style lang="scss">
	#textBox {
		height: 110px;
		width: 755px;
		border: 1px solid black;
		resize: none;
		padding: 5px;
	}
</style>
