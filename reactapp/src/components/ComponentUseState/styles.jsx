import styled from 'styled-components'

export const Container = styled.div `
  grid-column: 2 / 2;
  display: flex;  
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  margin: 10px;
  padding: 10px;
  border-radius: 1.5rem;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center
  }
    p{
      font-size: 10px;
      padding: 0;
      position:relative;
      bottom: 20px;
    }
      h1 {
        font-size: 18px;
        padding: 0;
      }
`
export const ContainerBotoes = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  button{
    margin-right: 20px;
    border: 1px solid gray;
    border-radius: 5px;
    background: black;
    color: white;
    padding: 10px;
    transition: 0.5s;
  }
  button:hover {
    background: #767676;
    transition:  0.5s ;
    border: 1px solid black;
  }
`