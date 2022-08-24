import React,{  useContext, useState } from 'react'
import IndexContext from '../ComponentContext/indexContext'
import { Container, ContainerBotoes } from './styles'

export function ComponentUseState() {  
  const [count, setCount] = useState(0)
  const [setNome, setUseNome] = useContext(IndexContext)
  return (
    <Container>
      <div>
        <h1>Como utilizar o UseState</h1>
        <p>Realiza uma ação quando uma outra determinada ação ocorrer</p>
        <p>Cria estados e pode os manipular, somando, trocando o valor inverso e etc.</p>
      </div>
      <ContainerBotoes>
        <button setNome={setNome} onClick={() =>setCount((contador) => contador + 1)}>
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
