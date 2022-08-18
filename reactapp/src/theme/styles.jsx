import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
:root {
  --blue-100: #0d0f36;
  --blue-200: #294380;
  --blue-300: #69d2cd;
  --blue-400: #b9f1d6;
  --beige-100: #f1f6ce;
  --white-100: #ffffff;
  --white-200: #ebf7f8;

  --gray-200: #30182b;
  --beige-200: #f0f1bc;
  --green-100: #60f0c0;
  --red-100: #ff360e;
  --black-100: #191f04;

}

  body {
    margin: 0;
    padding: 0;
    background-color: var(--white-200);
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;


  }
`;
export default GlobalStyle;