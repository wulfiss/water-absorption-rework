import { type Readable, readable } from 'svelte/store';

export const textStore = readable({
	0: {
		brandTitle: '',
		brandSubTitle: 'Planta Procesadora de Aves',
		officialName: 'ESTABLECIMIENTO OFICIAL N° 1612',
		companyName: 'Unión Agricola de Avellaneda',
		documentTitle: 'Determinación de Absorción de Agua',
		documentCode: 'RH-HIDRA-006',
		documentValidity: '01/10/21',
		documentRevision: '04',
		documentPages: '1 de 1'
	},
	1: {
		brandTitle: '',
		brandSubTitle: 'Planta Procesadora de Aves',
		officialName: 'ESTABLECIMIENTO OFICIAL N° 1612',
		companyName: 'Unión Agricola de Avellaneda',
		documentTitle: 'Determinación de Absorción de Agua',
		documentCode: 'RH-HIDRA-006',
		documentValidity: '01/10/21',
		documentRevision: '04',
		documentPages: '1 de 1'
	},
	2: {
		brandTitle: '',
		brandSubTitle: 'Planta Procesadora de Aves',
		officialName: 'ESTABLECIMIENTO OFICIAL N° 1612',
		companyName: 'Unión Agricola de Avellaneda',
		documentTitle: 'Determinación de Absorción de Solución de Aditivado',
		documentCode: 'RH-XXX-XXX',
		documentValidity: 'XX/XX/XX',
		documentRevision: '00',
		documentPages: '1 de 1'
	}
});
