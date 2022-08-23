import React,{ useEffect, useState } from 'react'
import { Container, ContainerBotoes } from './styles'

export function ComponentUseEffect() {  
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('rodou a cada renderização')
  }, [count])
  return (
    <Container>
      <div>
        <h1>Como utilizar o UseEffect</h1>
        <p>Realiza uma ação quando uma outra determinada ação ocorrer</p>
      </div>
      <ContainerBotoes>
        <button onClick={() =>setCount((contador) => contador + 1)}>
          Somar
        </button>
        <button onClick={() =>setCount((contador) => contador - 1)}>
          Subtrair
        </button>
        <button onClick={() =>setCount((contador) => contador / 2)}>
          Dividir
        </button>
        <button onClick={() =>setCount((contador) => contador * 2)}>
          Multiplicar
        </button>
        <button onClick={() =>setCount((contador) => contador = 0)}>
          Voltar
        </button>
        <p>{count}</p>
      </ContainerBotoes>
        
    </Container>
    
  )
}
