import styled from 'styled-components';

// Styled component with various issues
const Button = styled.button`
  padding: 10px 20px;
  margin: 0px;  /* Zero with unit */
  Color: blue;  /* Property name should be lowercase */
  background:#fff;  /* Missing space after colon */
  border: 1px solid #CCC;  /* Hex should be lowercase */
  font-family: 'Arial';  /* Unnecessary quotes */

  &:hover {
    background: #F0F0F0;  /* Hex should be lowercase */
    cursor: pointer;
  }

  /* Empty block */
  &:active {

  }
`;

// Another styled component
const Container = styled.div`
  display: flex;
  justify-content:center;  /* Missing space after colon */
  align-items: center;
  width: 100%;
  height: 100vh;
`;

// Template literal CSS
const dynamicStyles = `
  .wrapper {
    padding: 20px;
    margin: 0px;  /* Zero with unit */
  }

  .title {
    Color: #333;  /* Property name should be lowercase */
    font-size: 24px;
  }
`;

export { Button, Container };