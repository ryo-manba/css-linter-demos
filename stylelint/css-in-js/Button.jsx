import styled from 'styled-components';

/* Basic styled component */
const Button = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: white;
  
  &:hover {
    background: #0056b3;
  }
`;

/* Component with CSS errors for testing */
const ErrorButton = styled.button`
  /* Unknown property */
  foo: bar;

  /* Invalid value */
  color: baz;

  /* Unknown unit */
  width: 100zz;
`;

export { Button, ErrorButton };