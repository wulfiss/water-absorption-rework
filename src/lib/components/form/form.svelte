<script lang="ts">
	import Btn from '../Testbtn/btn.svelte';
	import { variables } from '$lib/stores/variableStore';

	import HelperText from '@smui/textfield/helper-text';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import Paper, { Content } from '@smui/paper';
	import Radio from '@smui/radio';
	import FormField from '@smui/form-field';
	import Checkbox from '@smui/checkbox';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

	let checked = false;

	let disabled = false;
	let userDate = '';
	let timeUser = '09:00';
	let averageWeight = 2.5;
	let userObs = '';

	let options = [
		{
			name: 'Union Europea (4.5%)',
			value: 0,
			disabled: false
		},
		{
			name: 'SENASA (8%)',
			value: 1,
			disabled: false
		},
		{
			name: 'Piu Gusto (10%)',
			value: 2,
			disabled: true
		}
	];

	let selectedId = 0;

	$: if (selectedId === 2) {
		disabled = true;
		averageWeight = 2.8;
	} else {
		disabled = false;
		averageWeight = 2.5;
	}
</script>

<div id="formDiv">
	<Paper color="primary" variant="outlined" class="paper">
		<div class="top-app-bar-container" style="text-align:center">
			<TopAppBar variant="static">
				<Row>
					<Section>
						<Title Style="margin-left: 23px">Generador de Registro de Hidratación</Title>
					</Section>
				</Row>
			</TopAppBar>
		</div>
		<br />
		<Content>
			<div id="content">
				<div id="first">
					<div>
						<Textfield bind:value={userDate} label="Fecha" type="date" style="width: 131px;">
							<Icon class="material-icons" slot="leadingIcon">event</Icon>
						</Textfield>
					</div>
					<div>
						<Textfield
							bind:value={timeUser}
							label="Hora de inicio"
							type="time"
							style="width: 131px;"
						>
							<Icon class="material-icons" slot="leadingIcon">alarm_on</Icon>
						</Textfield>
					</div>
					<div class="columns margins">
						<div>
							<Textfield
								class="average"
								bind:value={averageWeight}
								label="Peso promedio"
								suffix="㎏"
								input$pattern="\d+"
								type="number"
								style="width: 131px;"
							>
								<HelperText slot="helper" style="margin-left: 150px;">ej. 2.50</HelperText>
							</Textfield>
						</div>
					</div>
				</div>
				<div class="radio-demo">
					<p>Limite de Hidratación(%)</p>
					<FormField class="radio">
						<Radio
							class="radioChild"
							bind:group={selectedId}
							value={options[0].value}
							disabled={options[0].disabled}
						/>
						<span class="radioSpan">
							{options[0].name}
						</span>
						<Radio
							class="radioChild"
							bind:group={selectedId}
							value={options[1].value}
							disabled={options[1].disabled}
						/>
						<span class="radioSpan">
							{options[1].name}{options[1].disabled ? ' (disabled)' : ''}
						</span>
						<Radio
							class="radioChild"
							bind:group={selectedId}
							value={options[2].value}
							disabled={options[2].disabled}
						/>
						<span class="radioSpan">
							{options[2].name}{options[2].disabled ? ' (disabled)' : ''}
						</span>
					</FormField>
				</div>
				<div id="seals">
					<FormField align="end">
						<Checkbox bind:checked {disabled} />
						<span slot="label">Agregar precintos perdidos</span>
					</FormField>
				</div>
				<div class="margins">
					<Textfield
						textarea
						bind:value={userObs}
						label="Observaciones"
						input$rows={4}
						input$cols={50}
						input$resizable={false}
					/>
				</div>
				<Btn
					maxProbes={$variables[selectedId].maxProbes}
					{averageWeight}
					probes={$variables[selectedId].probes}
					percentage={$variables[selectedId].percentage}
					swap={checked}
					{timeUser}
					{userDate}
					{userObs}
					{selectedId}
					timeMax={$variables[selectedId].timeMax}
					timeMin={$variables[selectedId].timeMin}
				/>
			</div>
		</Content>
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
		background-color: #ff8a65;
	}

	div#content {
		display: grid;
		row-gap: 10px;
	}

	* :global(.paper) {
		background-color: white;
		height: 90vh;
		height: 90dvh;
	}

	.radio-demo > :global(*) {
		margin: 0 0.2em;
	}

	* :global(.radio) {
		height: 10dvh;
	}

	* :global(.radioChild) {
		margin-top: -10px;
	}

	.radioSpan {
		margin-top: -10px;
	}

	@media print {
		div#formDiv {
			display: none;
		}
	}
</style>
