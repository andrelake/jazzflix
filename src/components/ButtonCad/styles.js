import styled from 'styled-components';

export const ButtonCadastrar = styled.button`
  font-size: 20px;
  font-family: Segoe UI;
  font-weight: bold;
  border-radius: 7px;
  padding: 5px 10px;
  -webkit-tap-highlight-color: transparent;
  background-color: #f4f4f4;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 0 0 10px red;
  }
`;
