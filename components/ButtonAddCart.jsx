import React from 'react'
import styled from 'styled-components'
const ButtonAddToCart = styled.button`
    border:2px solid #F5C75D;
    border-radius:8px;
    width:100%;
    height:40px;
    background:#fff;
    box-sizing: border-box;

`
export default function ButtonAddCart() {
    return <ButtonAddToCart>Agregar</ButtonAddToCart>
}
