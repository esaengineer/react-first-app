import React from 'react';

const SearchBox = ({searchField,searchChange}) =>
{
	return (
		<div className="pa2">

		<input className="pa3 ba bg-green bg-lightest-blue"
		 type="search" placeholder="Search Items" 
		 onChange={searchChange}/>

		</div>
		);
}


export default SearchBox;