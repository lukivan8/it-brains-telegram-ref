import React from 'react';
import styled from "styled-components";

const Divider = () => {
    return (
        <StyledDivider/>
    );
};

const StyledDivider = styled.hr`
  display: block;
  border: none;
  border-bottom: 0.33px solid rgba(60, 60, 67, 0.29);
  width: 70%;
  margin: 0 auto;
`

export default Divider;