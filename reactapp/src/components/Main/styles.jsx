import styled from 'styled-components'

export const Container = styled.main `
  display: grid;
  background: var(--blue-300);
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column: 2/ 2;
  grid-row: 1/1;
  height: 800px;
  margin: 2rem;
  border-radius: 10px;
`

