import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoadingWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  /* padding: 10px 10px; */
  /* box-sizing: border-box; */
`;
const LoadingText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  font-family: 'Jua';
`;
const LoadingImage = styled.img`
  width: 320px;
  height: 357px;
`;

const Loading = () => {
  const loadingImage = '/images/loading.gif';

  return (
    <LoadingWrap>
      <LoadingImage src={loadingImage} />
      <LoadingText>나와 닮은 동물을 찾는 중...</LoadingText>
    </LoadingWrap>
  );
};

export default Loading;
