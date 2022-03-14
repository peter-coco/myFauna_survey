import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ResultType from '../components/resultForm';

const ResultWrap = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Result = () => {
  const { type } = useParams();

  return (
    <ResultWrap>
      <ResultType type={type} />
    </ResultWrap>
  );
};

export default Result;
