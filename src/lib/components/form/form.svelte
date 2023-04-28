<script>
	import Btn from '../Testbtn/btn.svelte';
	import Button, { Label } from '@smui/button';

	let clicked = 0;

	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';
	import Paper, { Title, Content } from '@smui/paper';
	import Radio from '@smui/radio';
	import FormField from '@smui/form-field';
	import Checkbox from '@smui/checkbox';

	let checked = false;
	let checked2 = false;

	let value = '';
	let valueA = '';
	let valueB = '';
	let valueC = '';
	let valueD = '';
	let options = [
		{
			name: 'SENASA (8%)',
			disabled: false
		},
		{
			name: 'Union Europea (4.5%)',
			disabled: false
		},
		{
			name: 'Otro',
			disabled: false
		}
	];
	let selected = 'Union Europea (4.5%)';
</script>

<div id="formDiv">
	<Paper color="primary" variant="outlined">
		<Title>Generador de Registro de Hidratación</Title>
		<Content>
			<div>
				<div>
					<Textfield bind:value={valueB} label="Fecha" type="date" style="width: 121px;">
						<Icon class="material-icons" slot="leadingIcon">event</Icon>
					</Textfield>
				</div>
				<div>
					<Textfield bind:value={valueB} label="Hora de inicio" type="time" style="width: 121px;">
						<Icon class="material-icons" slot="leadingIcon">alarm_on</Icon>
					</Textfield>
				</div>
				<div class="columns margins">
					<div>
						<Textfield
							bind:value={valueA}
							label="Peso promedio de pollos"
							suffix="㎏"
							input$pattern="\d+"
							type="number"
						/>
					</div>
				</div>
				<div class="radio-demo">
					<p>Limite de Hidratación(%)</p>
					<FormField>
						<Radio bind:group={selected} value={options[0].name} disabled={options[0].disabled} />
						<span>
							{options[0].name}
						</span>
						<Radio bind:group={selected} value={options[1].name} disabled={options[1].disabled} />
						<span>
							{options[1].name}{options[1].disabled ? ' (disabled)' : ''}
						</span>
						<Radio bind:group={selected} value={options[2].name} disabled={options[2].disabled} />
						<span>
							{options[2].name}{options[2].disabled ? ' (disabled)' : ''}
							<Textfield
								bind:value={valueB}
								label="%"
								type="number"
								disabled
								style="width: 121px;"
							/>
						</span>
					</FormField>
				</div>
				<div style="margin-top: 1em;">
					<FormField align="end">
						<Checkbox bind:checked={checked2} />
						<span slot="label">Agregar precintos perdidos</span>
					</FormField>
				</div>
				<div class="margins">
					<Textfield
						style="width: 100%;"
						helperLine$style="width: 100%;"
						textarea
						bind:value
						label="Observaciones"
					/>
				</div>
				<Button on:click={() => clicked++} variant="raised">
					<Label>Raised</Label>
				</Button>
			</div></Content
		>
	</Paper>
</div>

<style lang="scss">
	div#formDiv {
		font-family: sans-serif, calibri;
		height: 100vh;
		height: 100dvh;
		display: grid;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	form {
		border: 1px solid black;
		border-radius: 14px;
		width: 50dvw;
		height: 80dvh;
	}
	ul,
	li {
		text-decoration: none;
		list-style: none;
	}

	.textField {
		width: 121px;
	}

	.radio-demo > :global(*) {
		margin: 0 0.2em;
	}
</style>
