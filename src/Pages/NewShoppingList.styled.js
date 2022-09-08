import styled from "styled-components";

export const WrapperInput = styled.div`
  width: 100;
  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;

  input {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    color: #c7c7c7;
    font-size: 18px;
    text-align: center;
    text-transform: capitalize;

    &:focus,
    &:focus-visible {
      outline: 2px solid #c7c7c7;
    }
  }
`;

export const WrapperButtonSave = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border: none;
  background-color: #99d98c;
  color: #666666;
  padding: .5rem 2.5rem;
  border-radius: 10px;
  cursor: pointer;
`;
