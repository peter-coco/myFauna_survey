import React, { useCallback, useEffect, useState } from 'react';
import * as Styles from './index.style';
import { ResultContent } from '../../types/resultContet';
import { setResultContents } from '../../utils/setResultContents';
import { ShareResult } from '../kakaoShare';

const ResultType = ({ type = 'dog' }: { type?: string }) => {
  const creatorLogo = '/images/replace_logo.png';

  const [resultMainColor, setResultMainColor] = useState('');
  const [resultLogoImage, setResultLogoImage] = useState('');
  const [resultAnimalTitle, setResultAnimalTitle] = useState<React.ReactNode>();
  const [resultAnimalSubTitle, setResultAnimalSubTitle] = useState('');
  const [resultAnimalDescription, setResultAnimalDescription] = useState<React.ReactNode>();
  const [resultLetterTitle, setResultLetterTitle] = useState('');
  const [resultLetter, setResultLetter] = useState<React.ReactNode>();
  const [resultLetterImage, setResultLetterImage] = useState('');
  const [resultLikeImageUrl, setResultLikeImageUrl] = useState('');
  const [resultLikeDescription, setResultLikeDescription] = useState<React.ReactNode>();
  const [resultLikeLinkUrl, setResultLikeLinkUrl] = useState('');
  const [resultDislikeImageUrl, setResultDislikeImageUrl] = useState('');
  const [resultDislikeDescription, setResultDislikeDescription] = useState<React.ReactNode>();
  const [resultDislikeLinkUrl, setResultDislikeLinkUrl] = useState('');

  const handleLikeLinkBtn = () => {
    console.log(resultLikeLinkUrl);
    window.location.href = resultLikeLinkUrl;
  };

  const handleDislikeLinkBtn = () => {
    window.location.href = resultDislikeLinkUrl;
  };

  const handleCreatorLinkBtn = () => {
    window.open('https://www.instagram.com/accounts/login/?next=/2022.replace/');
  };

  const handleResultContent = useCallback((resultContent: ResultContent) => {
    setResultMainColor(resultContent.mainColor);
    setResultLogoImage(resultContent.logoImage);
    setResultAnimalTitle(resultContent.animalTitle);
    setResultAnimalSubTitle(resultContent.animalSubTitle);
    setResultAnimalDescription(resultContent.animalDescription);
    setResultLetterTitle(resultContent.letterTitle);
    setResultLetter(resultContent.letter);
    setResultLetterImage(resultContent.letterImage);
    setResultLikeImageUrl(resultContent.likeImageUrl);
    setResultLikeDescription(resultContent.likeDescription);
    setResultLikeLinkUrl(resultContent.likeLinkUrl);
    setResultDislikeImageUrl(resultContent.dislikeImageUrl);
    setResultDislikeDescription(resultContent.dislikeDescription);
    setResultDislikeLinkUrl(resultContent.dislikeLinkUrl);
  }, []);

  useEffect(() => {
    const resultContent = setResultContents(type);
    handleResultContent(resultContent);
  }, [type]);

  return (
    <Styles.ResultFormWrap>
      <Styles.ResultPercentage mainColor={resultMainColor}>
        나와 비슷한 유형의 사람이&nbsp;<span>00%</span>&nbsp;있어요.
      </Styles.ResultPercentage>
      <Styles.ResultAnimalImage src={resultLogoImage} />
      <Styles.ResultAnimalTitle mainColor={resultMainColor}>
        {resultAnimalTitle}
      </Styles.ResultAnimalTitle>
      <Styles.ResultAnimalSubTitle mainColor={resultMainColor}>
        {resultAnimalSubTitle}
      </Styles.ResultAnimalSubTitle>
      <Styles.ResultCreatorDescription>{resultAnimalDescription}</Styles.ResultCreatorDescription>
      <Styles.ResultLetterTitle mainColor={resultMainColor}>
        {resultLetterTitle}
      </Styles.ResultLetterTitle>
      <Styles.ResultLetter bgImage={resultLetterImage}>{resultLetter}</Styles.ResultLetter>
      <Styles.ResultShareWrap>
        <Styles.ResultShareTitle>내 결과 공유하기</Styles.ResultShareTitle>
        <Styles.ResultShareLinkWrap>
          <Styles.ResultShareKakao>
            <ShareResult />
          </Styles.ResultShareKakao>
          <Styles.ResultShareLink></Styles.ResultShareLink>
        </Styles.ResultShareLinkWrap>
      </Styles.ResultShareWrap>
      <Styles.ResultMatchWrap>
        <Styles.ResultMatchTitle>동물별 궁합</Styles.ResultMatchTitle>
        <Styles.ResultMatchLikeDislikeWrap>
          <Styles.ResultMatchLikeWrap>
            <Styles.ResultMatchLikeTitle>좋아요</Styles.ResultMatchLikeTitle>
            <Styles.ResultMatchLikeImage src={resultLikeImageUrl} />
            <Styles.ResultMatchLikeDescription>
              {resultLikeDescription}
            </Styles.ResultMatchLikeDescription>
            <Styles.ResultMatchLikeLinkBtn mainColor={resultMainColor} onClick={handleLikeLinkBtn}>
              유형보기
            </Styles.ResultMatchLikeLinkBtn>
          </Styles.ResultMatchLikeWrap>
          <Styles.ResultMatchDislikeWrap>
            <Styles.ResultMatchDislikeTitle>
              {type === 'cow' ? '좋아요' : '아쉬워요'}
            </Styles.ResultMatchDislikeTitle>
            <Styles.ResultMatchDislikeImage src={resultDislikeImageUrl} />
            <Styles.ResultMatchDislikeDescription>
              {resultDislikeDescription}
            </Styles.ResultMatchDislikeDescription>
            <Styles.ResultMatchDislikeLinkBtn
              mainColor={resultMainColor}
              onClick={handleDislikeLinkBtn}
            >
              유형보기
            </Styles.ResultMatchDislikeLinkBtn>
          </Styles.ResultMatchDislikeWrap>
        </Styles.ResultMatchLikeDislikeWrap>
      </Styles.ResultMatchWrap>
      <Styles.ResultCreatorWrap>
        <Styles.ResultCreatorTitle>만든이</Styles.ResultCreatorTitle>
        <Styles.ResultCreatorImage src={creatorLogo} />
        <Styles.ResultCreatorHashtag>
          #너하고싶은거다해 #도전공간 #리플레이스
        </Styles.ResultCreatorHashtag>
        <Styles.ResultCreatorSubTitle mainColor={resultMainColor}>
          우리가 하고싶은 일을 합니다.
        </Styles.ResultCreatorSubTitle>
        <Styles.ResultCreatorDescription>
          나를 열정적으로 만드는 것을 콘텐츠로 제작합니다. 재밌는 실험을 많이 할 예정이니
          기대해주세요!
        </Styles.ResultCreatorDescription>
        <Styles.ResultCreatorLinkBtn mainColor={resultMainColor} onClick={handleCreatorLinkBtn}>
          2022.replace
        </Styles.ResultCreatorLinkBtn>
      </Styles.ResultCreatorWrap>
      <Styles.ResultRetryBtn>테스트 다시 하기</Styles.ResultRetryBtn>
    </Styles.ResultFormWrap>
  );
};

export default ResultType;
