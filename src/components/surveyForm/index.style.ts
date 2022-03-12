import styled from 'styled-components';

export const SurveyFormWrap = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
`;
export const Top = styled.div`
  width: 100%;
  height: 60%;
`;
export const Bottom = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const SurveyDescriptionImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const SurveyDescription = styled.div`
  width: 250px;
  height: 56px;
  text-align: center;
  line-height: 56px;
`;
export const SurveyOptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SurveyOption = styled.div`
  width: 250px;
  height: 56px;
  font-weight: 400;
  font-size: 15px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6px 20px;
  box-sizing: border-box;
  word-break: keep-all;
  &:focus {
    color: #c4c4c4;
    background-color: #9d9d9d;
  }
`;
