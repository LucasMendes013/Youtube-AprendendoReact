import React,{  useEffect, useState } from 'react'
import { Container, ContainerBotoes } from './styles'

export function ComponentUseEffect() {  
  let [useNome, setUseNome] = useState(false)

  useEffect(() => {
    if(useNome === false){
      document.title = 'Praticando '
    }else {
    document.title = 'Contagem está em: ' + useNome
  }
  }, [useNome])

  return (
    <Container>
      <div>
        <h1>Como utilizar o UseEffect</h1>
        <p>Realiza uma ação quando uma outra determinada ação ocorrer, toda vez que a página é atualizada</p>
      </div>
      <ContainerBotoes>
        <button onClick={() => {setUseNome(useNome + 1)}}>Clique para somar</button>
        <p>Contagem está em: {useNome}</p>
        <button onClick={() => {setUseNome(useNome - 1)}}>Clique para subtrair</button>
        <button onClick={() => {setUseNome(useNome = false)}}>Clique para voltar</button>
      </ContainerBotoes>
        
    </Container>
    
  )
}
