import styled from "styled-components"

export const Button = styled.button`
  border: 2px solid transparent;
  display: block;
  width: 100%;
  height: 45px;
  font-family: inherit;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  color: #24542b;
  background-color: #a4ffaf;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border-color: #a4ffaf;
    color: #a4ffaf;
  }

  & > svg {
    margin-left: 0.5rem;
    vertical-align: text-top;
  }
`