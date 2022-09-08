import styled from "styled-components";

export const WrapperHeader = styled.div`
  background-color: #f4a261;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  box-shadow: 0 0 10px -3px;

  .box-title {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1rem;

    .title {
      font-weight: bold;
      font-size: 24px;
    }
  }

  .box-profile {
    margin-right: 1rem;
  }
`;

export const WrapperBody = styled.div`
  /* position: relative; */
  padding: 1rem;
  box-sizing: border-box;

  ul {
    padding-left: 0;
  }
`;
