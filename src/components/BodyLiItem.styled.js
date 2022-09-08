import styled from "styled-components";

export const WrapperBody = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;

export const WrapperItem = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 30%;
  margin: 0.3rem;
  padding: 0.3rem;
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  /* align-items: center; */
  padding-bottom: 1rem;

  button {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  .icon {
    position: absolute;
    right: -8px;
    top: -8px;
  }
  .name,
  .img {
    margin: 0.5rem auto;
    padding: 0 5px;
    text-align: center;
    color: #999999;
    font-size: 18px;
  }
  /* .img svg {
    width: 40px;
  } */
  .quantity {
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: #666666;
    font-size: 18px;

    &.void {
      color: #fd0000;
    }
  }

  .actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
    box-sizing: border-box;
  }
`;
