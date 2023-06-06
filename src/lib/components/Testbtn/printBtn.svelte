<script lang="ts">
	import Button, { Label } from '@smui/button';

	const handleClick = () => {
		window.print();
	};
</script>

<Button on:click={() => handleClick()} variant="raised">
	<Label>Imprimir</Label>
</Button>
