import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import api from "../api";
import Layout from "./Layout";

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 80%;
  margin: 2rem auto;
  padding: 3rem 2rem;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 0 15px -10px;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
  }
  select,
  input {
    border-radius: 5px;
    color: #666666;
    border: 1px solid #c8c8c8;
    margin-top: 0.3rem;
  }
  input {
    margin-top: 0.3rem;
    padding: 0.5rem 1.5rem;
  }
  select {
    padding: 0.5rem;
  }
  button{
    background-color: #99d98c;
    border: none;
    border-radius: 5px;
    padding: .5rem 0;
    margin-top: 1rem;
    color: #666666;
  }
`;

const NewProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState('Produce');
  const [unit, setUnit] = useState("Kg");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await api.getCategories();
      console.log(response);
      if (response.status === "success") {
        setCategories(response.data);
      }
    };
    getCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === ''){
      alert('You must add a name');
      return;
    }
    console.log("submit", name, category, unit);
  };

  return (
    <Layout title="New Product" back="/products">
      <WrapperForm onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Name:</span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="categories">
          <span>Category</span>
          <select
            id="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="unit">
          <span>Unit</span>
          <select
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="Kg">Kg</option>
            <option value="Pza">Pza</option>
          </select>
        </label>
        <button type="submit">Save</button>
      </WrapperForm>
    </Layout>
  );
};

export default NewProduct;
