import React from 'react';

const Card= (props) =>
{
	return (
			<div className='tc bg-light-blue grow ma2 pa3 dib br3 bw2 shadow-5'>
			<img alt='Robot' src={`https://robohash.org/${props.id}?150x150`}/>
			<div>
			<h2>{props.name}</h2>
			<p>{props.email}</p>
			</div>
			</div>

		   );
}

export default Card;