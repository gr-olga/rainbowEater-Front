import styled from "styled-components"

export const Button = styled.button`
  background: ${props => props.primary ? "#2F2FA2" : "white"};
  color: ${props => props.primary ? "white" : "#2F2FA2"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2F2FA2;
  border-radius: 3px;

  &:hover {
    border: 2px solid #AFD275
  }
`;

export const Image = styled.img`
  width: 300px;
  margin: 15px;
  border-radius: 2em;`


export const Title = styled.h2`
  font-size: 1.2em;
  text-align: center;
  color: #2F2FA2;
  padding: 20px 0px 5px 0px;
`