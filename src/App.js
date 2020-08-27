import React from 'react';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

const App = () => {
	return (
		<div className='container mt-5'>
			<h1>Props</h1>
			<Saludo persona='Giovanni' edad={23} />
			<Saludo persona='Juan' edad={21} />
			<Saludo persona='Roman  ' edad={15} />
			<hr />
			<h3>Caja de comentarios</h3>
			<Comentario
				urlImagen='https://picsum.photos/100'
				persona='Giovanni'
				texto='lorem ipsum ndlreo med'
			/>
			<Comentario
				urlImagen='https://picsum.photos/100'
				persona='Juan'
				texto='lorem lreom ipsum ndlreo medi '
			/>
			<Comentario
				urlImagen='https://picsum.photos/100'
				persona='Roman'
				texto='ipsum lorem ipsum ndlreo med'
			/>
		</div>
	);
};

export default App;
