import styled from "styled-components";

export const ListingPageStyled = styled.div`
  .tabNavBar {
    position: sticky;
    top: 0;
    z-index: 101;
    background-color: white;
    width: 100%;
    height: 50px;
    justify-content: space-evenly;
    align-items: center;
    > div {
      display: flex;
    }
    > button {
      background-color: aquamarine;
    }
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;
  > li {
    max-height: 20vh;
    width: 500px;
    overflow-y: scroll;
    border: 2px #d3d4d9 solid;
    border-radius: 10px;
  }
`;
