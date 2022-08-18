import React from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import GlobalStyle from './theme/styles'

export function App(){
  return (
    <>
    <GlobalStyle />
    <Header />
    <Main/>
    </>
  )
}
