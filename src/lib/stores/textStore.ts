import { type Readable, readable } from 'svelte/store';

export const textStore = readable({
	enercop: {
		brandTitle: 'POLLOS ENERCOP',
		brandSubTitle: 'Planta Procesadora de Aves',
		logoBrand: '/src/lib/images/logoenercop.jpg',
		officialName: 'ESTABLECIMIENTO OFICIAL N° 1612',
		companyName: 'Unión Agricola de Avellaneda',
		companyLogo: '/src/lib/images/logouaa.jpg',
		documentTitle: 'Determinación de Absorción de Agua',
		documentCode: 'RH-HIDRA-006',
		documentValidity: '01/10/21',
		documentRevision: '04',
		documentPages: '1 de 1'
	}
});
