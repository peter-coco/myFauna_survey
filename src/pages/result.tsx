import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ResultWrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Result = ({ resultType }: { resultType: string }) => {
  return <ResultWrap></ResultWrap>;
};

export default Result;
