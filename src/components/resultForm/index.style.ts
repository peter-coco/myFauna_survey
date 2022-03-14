import styled from 'styled-components';

export const ResultFormWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 10px 10px;
  box-sizing: border-box;
`;
export const ResultPercentage = styled.div<{ mainColor: string }>`
  width: 100%;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    color: ${(props) => props.mainColor};
  }
`;
export const ResultAnimalImage = styled.img`
  width: 320px;
  height: 357px;
`;
export const ResultAnimalTitle = styled.div<{ mainColor: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    text-align: center;
  }
  & > div > span {
    color: ${(props) => props.mainColor};
  }
`;
export const ResultAnimalSubTitle = styled.div<{ mainColor: string }>`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.mainColor};
`;
export const ResultAnimalDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
export const ResultLetterTitle = styled.div<{ mainColor: string }>`
  width: 251px;
  height: 38px;
  padding: 5px 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: ${(props) => props.mainColor};
  -webkit-text-stroke: 0.1px white;
`;
export const ResultLetter = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 319px;
  height: 356px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 10px 50px;
  box-sizing: border-box;
  text-align: center;
  word-break: keep-all;
`;

export const ResultShareWrap = styled.div`
  width: 286px;
  /* height: 129px; */
  padding: 5px 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
`;
export const ResultShareTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  -webkit-text-stroke: 0.1px white;
`;
export const ResultShareLinkWrap = styled.div``;
export const ResultShareKakao = styled.div``;
export const ResultShareLink = styled.div``;

export const ResultMatchWrap = styled.div`
  width: 286px;
  padding: 5px 5px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
  gap: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ResultMatchTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  -webkit-text-stroke: 0.1px white;
`;
export const ResultMatchLikeWrap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export const ResultMatchLikeDislikeWrap = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
`;
export const ResultMatchLikeTitle = styled.div`
  font-weight: 400;
  font-size: 12px;
`;
export const ResultMatchLikeImage = styled.img`
  width: 109px;
  height: 122px;
`;
export const ResultMatchLikeDescription = styled.div`
  font-weight: 400;
  font-size: 9px;
  text-align: center;
  font-family: 'roboto';
`;
export const ResultMatchLikeLinkBtn = styled.div<{ mainColor: string }>`
  font-weight: 400;
  font-size: 9px;
  -webkit-text-stroke: 0.5px white;
  background-color: ${(props) => props.mainColor};
  border-radius: 30px;
  padding: 2px 10px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const ResultMatchDislikeWrap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export const ResultMatchDislikeTitle = styled.div`
  font-weight: 400;
  font-size: 12px;
`;
export const ResultMatchDislikeImage = styled.img`
  width: 109px;
  height: 122px;
`;
export const ResultMatchDislikeDescription = styled.div`
  font-weight: 400;
  font-size: 9px;
  font-family: 'roboto';
  text-align: center;
`;
export const ResultMatchDislikeLinkBtn = styled.div<{ mainColor: string }>`
  font-weight: 400;
  font-size: 9px;
  -webkit-text-stroke: 0.5px white;
  background-color: ${(props) => props.mainColor};
  border-radius: 30px;
  padding: 2px 10px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const ResultCreatorWrap = styled.div`
  width: 286px;
  padding: 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
`;
export const ResultCreatorTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  -webkit-text-stroke: 0.1px white;
`;
export const ResultCreatorImage = styled.img`
  width: 71px;
  height: 115px;
`;
export const ResultCreatorHashtag = styled.div`
  font-weight: 700;
  font-size: 12px;
`;
export const ResultCreatorSubTitle = styled.div<{ mainColor: string }>`
  font-weight: 400;
  font-size: 14px;
  font-family: 'roboto';
  color: ${(props) => props.mainColor};
`;
export const ResultCreatorDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  font-family: 'roboto';
`;
export const ResultCreatorLinkBtn = styled.div<{ mainColor: string }>`
  width: 122px;
  height: 32px;
  background-color: ${(props) => props.mainColor};
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ResultRetryBtn = styled.div`
  width: 251px;
  height: 74px;

  background: #ffffff;
  border: 3px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  /* font-family: 'roboto'; */
  cursor: pointer;
`;
