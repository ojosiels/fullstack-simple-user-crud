import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
  gap: 10px;
  > li {
    max-height: 20vh;
    width: 500px;
    overflow-y: scroll;
    border: 2px #d3d4d9 solid;
    border-radius: 10px;
  }
`;
