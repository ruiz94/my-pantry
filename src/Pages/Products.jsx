import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";

const WrapperButtonNew = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  a{
    background-color: #99d98c;
    padding: .5rem 2.5rem;
    border-radius: 10px;
    color: #666666;
  }
`;


const Products = () => {
  return <Layout title="Products" back="/">
    <WrapperButtonNew>
      <Link to="/new-product">Add new</Link>
    </WrapperButtonNew>
  </Layout>;
};

export default Products;
