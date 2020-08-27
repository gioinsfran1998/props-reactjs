import React from 'react';

const Imagen = ({ urlImagen }) => {
	return (
		<div>
			<img src={urlImagen} className='align-self-end mr-3' alt='' />
		</div>
	);
};

export default Imagen;
