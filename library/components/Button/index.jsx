import React from 'react';
import styled from "styled-components";
import useTheme from "../../hooks/useTheme";

const StyledButton = styled.button`
      background-color: ${({theme, variant}) => theme.variants[variant]};
      color: ${({theme}) => theme.typography.color};
      padding: 10px;
      outline: none;
      border: none;
      border-radius: 10px;
      &:active {
        background-color: #333;
      }
    `;

const Button = ({ label, variant, onChange }) => {
    const { theme } = useTheme()
    if (!theme) return null
    return (
        <StyledButton variant={variant} theme={theme} onChange={onChange}>{label}</StyledButton>
    );
}

export default Button;