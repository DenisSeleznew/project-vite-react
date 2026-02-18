// import { useState } from 'react';

const products = [
	{
		id: 1,
		name: 'Чайник',
	},
	{
		id: 2,
		name: 'Утюг',
	},
];

export const MyComponents = () => {
	return (
		<ul>
			{products.map(({ id, name }) => (
				<li key={id}>{name}</li>
			))}
		</ul>
	);
};
