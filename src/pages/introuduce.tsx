import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IntroduceWrap = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* gap: 50px; */
  align-items: center;
  justify-content: space-evenly;
  background-color: #8ec4cb;
`;
const Description = styled.div`
  font-weight: 900;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  -webkit-text-stroke: 0.1px white;
`;

const Select = styled.div`
  width: 220px;
  height: 68px;
  background: #cce0ff;
  border-radius: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  /* font-family: 'Jua'; */
  -webkit-text-stroke: 0.1px white;
  font-style: normal;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 18px;
  color: black;
  cursor: pointer;
`;
const Introduce = () => {
  return (
    <IntroduceWrap>
      <Description>
        깊은 산속에 가면
        <br />
        <br />
        나와 닮은 동물을
        <br />
        비춰주는 옹달샘이
        <br />
        있다고 한다.
        <br />
        <br />
        호기심 가득한
        <br />
        마음을 품고
        <br />
        <br />
        옹달샘에 내 얼굴을
        <br />
        비춰보았다.
      </Description>
      <Link to="/survey" style={{ textDecorationLine: 'none' }}>
        <Select onClick={() => {}}>무슨 모습일까?</Select>
      </Link>
    </IntroduceWrap>
  );
};

export default Introduce;
