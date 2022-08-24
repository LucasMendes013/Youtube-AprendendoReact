import React from 'react'
import { Container, ContainerBotoes } from './styles'

export function ComponentContext() {  

  return (
    <Container>
      <div>
        <h1>Como utilizar o Context</h1>
        <p>Compartilhamento de States entre Components. Acontece de forma a encapsular Components para que especificando, eles herdem aqueles determinados States</p>
        <p>Mesmo que seja invisivel, neste momento foi exportada uma constante para todo o projeto, de forma que nao precisemos criar outras com as mesmas qualificações.</p>
      </div>
      <ContainerBotoes>

      </ContainerBotoes>
        
    </Container>
    
  )
}
