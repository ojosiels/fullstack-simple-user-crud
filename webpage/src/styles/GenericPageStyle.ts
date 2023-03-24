import styled from "styled-components";

export default styled.div`
  .tabNavBar {
    position: sticky;
    top: 0;
    z-index: 101;

    background-color: white;
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > div {
      display: flex;
    }

    .linkItem {
      background-color: #3182ce;
      color: white;

      padding: 10px 15px;
      border-radius: 15px;

      transition: 0.4s;
      :hover {
        background-color: #315282;
      }
    }
  }
`;
