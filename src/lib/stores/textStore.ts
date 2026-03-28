import { type Readable, readable } from 'svelte/store';

interface BrandText {
	brandTitle: string;
	brandSubTitle: string;
	officialName: string;
	companyName: string;
	documentTitle: string;
	documentCode: string;
	documentValidity: string;
	documentRevision: string;
	documentPages: string;
}

export const textStore: Readable<BrandText[]> = readable([
	{
		brandTitle: '',
		brandSubTitle: 'Planta Procesadora de Aves',
		officialName: 'ESTABLECIMIENTO N° OFICIAL 1612',
		companyName: 'Unión Agricola de Avellaneda Coop. Ltda.',
		documentTitle: 'DETERMINACIÓN DE RETENCIÓN DE AGUA',
		documentCode: 'FS-GC-RG-03',
		documentValidity: '09/05/25',
		documentRevision: '06',
		documentPages: '1 de 1'
	},
	{
		brandTitle: '',
		brandSubTitle: 'Planta Procesadora de Aves',
		officialName: 'ESTABLECIMIENTO N° OFICIAL 1612',
		companyName: 'Unión Agricola de Avellaneda Coop. Ltda.',
		documentTitle: 'DETERMINACIÓN DE RETENCIÓN DE AGUA',
		documentCode: 'FS-GC-RG-03',
		documentValidity: '09/05/25',
		documentRevision: '06',
		documentPages: '1 de 1'
	},
	{
		brandTitle: '',
		brandSubTitle: 'Planta Procesadora de Aves',
		officialName: 'ESTABLECIMIENTO N° OFICIAL 1612',
		companyName: 'Unión Agricola de Avellaneda Coop. Ltda.',
		documentTitle: 'Determinación de Retención de Solución de Aditivado',
		documentCode: 'RG-ADITIVO-009',
		documentValidity: '01/03/23',
		documentRevision: '00',
		documentPages: '1 de 1'
	}
]);
