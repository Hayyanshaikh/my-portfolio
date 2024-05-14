import React from 'react';

const Checkbox = ({checked = false, onChange, label, id}) => {
	return (
		<label htmlFor={id} className="checkbox">
			{label && <span>{label}</span>}
			<input type="checkbox" id={id} checked={checked} onChange={onChange}/>
		</label>
	)
}

export default Checkbox;