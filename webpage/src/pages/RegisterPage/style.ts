import styled from "styled-components";

export const GenericFormPageStyled = styled.div`
  width: fit-content;
  margin: 50px auto;
  background-color: #3182ce;

  padding: 25px;
  padding-bottom: 40px;

  border-radius: 20px;
  > form > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  h2 {
    color: white;
  }
  label {
    color: white;
  }
  input,
  select {
    background-color: white;
  }
  p {
    color: white;
    font-weight: 700;
  }
`;
