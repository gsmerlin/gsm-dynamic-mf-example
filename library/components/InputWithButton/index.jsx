import React from 'react';
import Input from "../Input";
import Button from "../Button";

function InputWithButton({variant, placeholder, label, onChange}) {
    return (
        <div style={{display: 'flex', gap: 15}}>
            <Input variant={variant} placeholder={placeholder} />
            <Button label={label} variant={variant} onChange={onChange} />
        </div>
    );
}

export default InputWithButton;