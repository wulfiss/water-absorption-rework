<script>
	import Btn from '../Testbtn/btn.svelte';

	import HelperText from '@smui/textfield/helper-text';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import Paper, { Content } from '@smui/paper';
	import Radio from '@smui/radio';
	import FormField from '@smui/form-field';
	import Checkbox from '@smui/checkbox';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

	let checked = false;

	let disabled = true;
	let probes = 25;
	let userTotalProbes = 20;
	let userDate = '';
	let timeUser = '09:00';
	let average = 2.5;
	let customPercent = 4.5;
	let percentage = 0;

	let value = '';

	let options = [
		{
			name: 'SENASA (8%)',
			value: 8,
			disabled: false
		},
		{
			name: 'Union Europea (4.5%)',
			value: 4.5,
			disabled: false
		},
		{
			name: 'Otro',
			value: 0,
			disabled: false
		}
	];

	let selected = 4.5;

	$: if (selected === 0) {
		disabled = false;
		percentage = customPercent;
	} else {
		disabled = true;
		percentage = selected;
	}

	$: console.log(userDate);
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
								bind:value={average}
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
							bind:group={selected}
							value={options[0].value}
							disabled={options[0].disabled}
						/>
						<span class="radioSpan">
							{options[0].name}
						</span>
						<Radio
							class="radioChild"
							bind:group={selected}
							value={options[1].value}
							disabled={options[1].disabled}
						/>
						<span class="radioSpan">
							{options[1].name}{options[1].disabled ? ' (disabled)' : ''}
						</span>
						<Radio
							class="radioChild"
							bind:group={selected}
							value={options[2].value}
							disabled={options[2].disabled}
						/>
						<span class="spanLast">
							<Textfield
								bind:value={customPercent}
								label="Otro"
								label$style="margin-top: 5px; font-size: 14px"
								suffix="%"
								input$pattern="\d+"
								type="number"
								style="width: 70px;"
								{disabled}
							>
								<HelperText slot="helper">ej. 4.3</HelperText>
							</Textfield>
						</span>
					</FormField>
				</div>
				<div id="seals">
					<FormField align="end">
						<Checkbox bind:checked />
						<span slot="label">Agregar precintos perdidos</span>
					</FormField>
				</div>
				<div class="margins">
					<Textfield
						textarea
						bind:value
						label="Observaciones"
						input$rows={4}
						input$cols={50}
						input$resizable={false}
					/>
				</div>
				<Btn
					userProbes={probes}
					userAverage={average}
					userTotal={userTotalProbes}
					userUserPercentage={percentage}
					swap={checked}
					{timeUser}
					{userDate}
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
