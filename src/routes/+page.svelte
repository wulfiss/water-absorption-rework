<script>
	import Btn from '$lib/components/Testbtn/btn.svelte';
	import MainLayout from '$lib/components/document/MainLayout.svelte';
	import { addTime } from '$lib/tools/time';
	import Form from '$lib/components/form/form.svelte';
	console.log(addTime(['1:30:15', '0:45:10', '2:10:00']));
</script>

<Form />
<MainLayout />
