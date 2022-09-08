import styled from "styled-components";

export const Item = styled.div`
  width: 45%;
  background-color: #fff;
  border-radius: 10px;
  margin: 1rem 0;

  a {
    width: 100%;
    height: 100%;
    padding: 2rem 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .name {
    margin-bottom: 1rem;
    /* font-size: ; */
    font-weight: 600;
    color: #666666;
  }
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
`;
