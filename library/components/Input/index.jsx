import React from 'react';
import styled from "styled-components";
import useTheme from "../../hooks/useTheme";

const StyledInput = styled.input`
      border: 1px solid ${({theme, variant}) => theme.variants[variant]};
      color: ${({theme}) => theme.typography.color};
      background: #000;
      padding: 10px;
      border-radius: 10px;
    `;

const Input = ({ placeholder, variant }) => {
    const { theme } = useTheme()
    if (!theme) return null
    return (
        <StyledInput theme={theme} variant={variant} placeholder={placeholder}></StyledInput>
    );
}

export default Input;