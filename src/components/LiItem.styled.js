import styled from "styled-components";

export const WrapperLi = styled.li`
  width: 100%;

  margin-bottom: 1rem;
  list-style: none;

  box-sizing: border-box;

  &.open {
    .headerLi .action img {
      transform: rotate(0);
    }
    .bodyLi {
      display: flex;
      /* max-height: 320px; */
      padding: 0.5rem;
      /* overflow: auto; */
    }
  }

  .headerLi {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 5px;
    padding: 1rem;

    .title {
      font-size: 18px;
      font-weight: 500;
    }

    .action {
      display: flex;
      background: transparent;
      border: none;

      .quantity {
        margin-right: 0.5rem;
        width: 50px;
        text-align: right;
      }

      img {
        transform: rotate(-90deg);
        transition: 0.5s all ease;
      }
    }
  }

  .bodyLi {
    display: none;
    /* max-height: 0; */
    background-color: #ededed;
    width: 97%;
    margin: auto;
    padding: 0;
    box-sizing: border-box;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
    /* transition: padding 0.3s ease, max-height 0.5s ease, overflow 4s ease; */
  }
`;

export const WrapperCategories = styled.div`
  padding-bottom: 2.5rem;
`;
