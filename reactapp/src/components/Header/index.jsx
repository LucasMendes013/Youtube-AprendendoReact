import React from 'react'
import { Container } from './styles'
import imageWorld from '../../assets/world.png'


export function Header (){
  return (
    <Container>
      <div>
        <img src={imageWorld} alt='icon' title='icon'></img>
      </div>
      <h1>Página de Estudos React</h1>
    </Container>
  )
}