import React, {useState} from 'react'
import { ComponentUseState } from '../ComponentUseState'
import { ComponentUseEffect } from '../ComponentUseEffect'
import { ComponentContext } from '../ComponentContext'
import { Container } from './styles'
import IndexContext from '../ComponentContext/indexContext'

export function Main(){
  const [setNome, setuseNome] = useState(false)
  return (
    <Container>
      <IndexContext.Provider value={{setNome, setuseNome}}> {/* Exportando o context para seus filhos */}
        <ComponentUseState />
        <ComponentUseEffect />
        <ComponentContext />
      </IndexContext.Provider>
    </Container>
  )
}
