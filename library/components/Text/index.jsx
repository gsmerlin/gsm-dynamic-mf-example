import React from 'react';
import styled from "styled-components";
import useTheme from "../../hooks/useTheme";

const StyledText = styled.p`
      color: ${({theme, variant}) => theme.variants[variant]};
      font-family: ${({theme}) => theme.typography.font};
      font-size: ${({theme, size}) => theme.typography.size[size]};
      padding: 10px;
    `;

const Text = ({ children, variant, size }) => {
    const { theme } = useTheme();
    if (!theme) return null
    return (
        <StyledText theme={theme} variant={variant} size={size}>{children}</StyledText>
    );
}

export default Text;