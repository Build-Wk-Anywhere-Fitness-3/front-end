import styled from "styled-components";

export const ClassListStyle = styled.div`
  font-size: 62.5%;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;

  div {
    border: 1px solid black;
    box-sizing: border-box;
    padding: 1%;
    margin: 1% 0;
    box-shadow: 5px 5px 5px black;
    background: #343434;
    color: #fcfaf1;
    border-radius: 10px;
  }
  h1 {
    font-size: 2.5rem;
    text-align: center;
    width: 100%;
    margin-top: 1%;
  }
`;

export const FormStyle = styled.form`
  width: 60%;
  margin: 0 auto;
  select {
    border: 2px #e6b31e solid;
    border-radius: 10px;
  }
`;
