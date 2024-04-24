import React from 'react';

const Checkbox = ({checked, onChange, label, id}) => {
	return (
		<label htmlFor={id} className="checkbox">
			<span>{label}</span>
			<input type="checkbox" id={id} checked={checked} onChange={onChange}/>
		</label>
	)
}

export default Checkbox