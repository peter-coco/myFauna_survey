import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Styles from './index.style';
import { ResultContent } from '../../types/resultContet';
import { setResultContents } from '../../utils/setResultContents';
import KakaoShareButton from '../kakaoShare';
import KakaoAdfit from '../kakaoAdfit';
import { firebaseDB } from '../../config/firebase';
import ReactAudioPlayer from 'react-audio-player';

const ResultType = ({ type = 'dog' }: { type?: string }) => {
  const creatorLogo = '/images/replace_logo.png';
  const shareLinkLogo = '/images/shareLink.png';
  const soundTrack = '/sound/survey_bgm.mp3';

  const copyLinkRef = useRef('window.location.href');
  const [resultPercent, setResultPercent] = useState(0);

  const [resultLikeCount, setResultLikeCount] = useState(0);
  const [resultBadCount, setResultBadCount] = useState(0);
  const [resultExpectCount, setResultExpectCount] = useState(0);
  const [resultFunCount, setResultFunCount] = useState(0);

  const [resultLikeCountCheck, setResultLikeCountCheck] = useState(false);
  const [resultBadCountCheck, setResultBadCountCheck] = useState(false);
  const [resultExpectCountCheck, setResultExpectCountCheck] = useState(false);
  const [resultFunCountCheck, setResultFunCountCheck] = useState(false);

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
    window.location.href = resultLikeLinkUrl;
  };

  const handleDislikeLinkBtn = () => {
    window.location.href = resultDislikeLinkUrl;
  };

  const handleCreatorLinkBtn = () => {
    window.open('https://www.instagram.com/2022.replace/');
  };

  const handleClickLikeBtn = () => {
    if (resultLikeCountCheck) return;

    const bucket = firebaseDB.collection('evaluation');

    bucket
      .doc('evaluation_item')
      .get()
      .then((item) => {
        const items = item.data();
        bucket.doc('evaluation_item').update({ like: items?.like + 1 });
        setResultLikeCount((pre) => pre + 1);
        setResultLikeCountCheck(true);
      });
  };

  const handleClickBadBtn = () => {
    if (resultBadCountCheck) return;

    const bucket = firebaseDB.collection('evaluation');

    bucket
      .doc('evaluation_item')
      .get()
      .then((item) => {
        const items = item.data();
        bucket.doc('evaluation_item').update({ bad: items?.bad + 1 });
        setResultBadCount((pre) => pre + 1);
        setResultBadCountCheck(true);
      });
  };

  const handleClickFunBtn = () => {
    if (resultFunCountCheck) return;

    const bucket = firebaseDB.collection('evaluation');

    bucket
      .doc('evaluation_item')
      .get()
      .then((item) => {
        const items = item.data();
        bucket.doc('evaluation_item').update({ fun: items?.fun + 1 });
        setResultFunCount((pre) => pre + 1);
        setResultFunCountCheck(true);
      });
  };

  const handleClickExpectBtn = () => {
    if (resultExpectCountCheck) return;

    const bucket = firebaseDB.collection('evaluation');

    bucket
      .doc('evaluation_item')
      .get()
      .then((item) => {
        const items = item.data();
        bucket.doc('evaluation_item').update({ expect: items?.expect + 1 });
        setResultExpectCount((pre) => pre + 1);
        setResultExpectCountCheck(true);
      });
  };

  const handleShareLink = (text: any) => {
    // 흐름 1.
    if (!document.queryCommandSupported('copy')) {
      return alert('복사하기가 지원되지 않는 브라우저입니다.');
    }
    // 흐름 2.
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.position = 'fixed';
    // 흐름 3.
    document.body.appendChild(textarea);
    // focus() -> 사파리 브라우저 서포팅
    textarea.focus();
    // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
    textarea.select();
    // 흐름 4.
    document.execCommand('copy');
    // 흐름 5.
    document.body.removeChild(textarea);
    alert('클립보드에 복사되었습니다.');
  };

  const handleRetryBtn = () => {
    window.location.href = '/';
  };

  const handleAnotherTestBtn = () => {
    window.location.href = 'https://jaksimsamil-survey.netlify.app';
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

  useEffect(() => {
    const bucket = firebaseDB.collection('result');

    bucket
      .doc('type')
      .get()
      .then((item) => {
        const items = item.data();
        let typeCount = 0;

        if (type === 'raccon') {
          typeCount = items?.raccon;
        } else if (type === 'fox') {
          typeCount = items?.fox;
        } else if (type === 'dog') {
          typeCount = items?.dog;
        } else if (type === 'bear') {
          typeCount = items?.bear;
        } else if (type === 'cow') {
          typeCount = items?.cow;
        } else if (type === 'hamster') {
          typeCount = items?.hamster;
        } else if (type === 'rabbit') {
          typeCount = items?.rabbit;
        } else if (type === 'cat') {
          typeCount = items?.cat;
        } else {
          typeCount = items?.hedgehog;
        }

        const percentage = Number(((typeCount / items?.total) * 100).toFixed(2));
        setResultPercent(percentage);
      });
  }, []);

  useEffect(() => {
    // console.log(process.env.NEXT_PUBLIC_FIREBASE_APIKEY);
    const bucket = firebaseDB.collection('evaluation');
    bucket
      .doc('evaluation_item')
      .get()
      .then((item) => {
        const items = item.data();
        setResultExpectCount(items?.expect);
        setResultLikeCount(items?.like);
        setResultBadCount(items?.bad);
        setResultFunCount(items?.fun);
      });
  }, []);

  return (
    <Styles.ResultFormWrap>
      <ReactAudioPlayer src={soundTrack} autoPlay controls={false} loop={true} volume={0.05} />
      <Styles.ResultPercentage mainColor={resultMainColor}>
        나와 비슷한 유형의 사람이&nbsp;<span>{resultPercent}%</span>&nbsp;있어요.
      </Styles.ResultPercentage>
      <Styles.ResultAnimalImage src={resultLogoImage} />
      <Styles.ResultAnimalTitle mainColor={resultMainColor}>
        {resultAnimalTitle}
      </Styles.ResultAnimalTitle>
      <Styles.ResultAnimalSubTitle mainColor={resultMainColor}>
        {resultAnimalSubTitle}
      </Styles.ResultAnimalSubTitle>
      <Styles.ResultCreatorDescription>{resultAnimalDescription}</Styles.ResultCreatorDescription>
      <Styles.ResultLetterWrap>
        <Styles.ResultLetterTitle mainColor={resultMainColor}>
          {resultLetterTitle}
        </Styles.ResultLetterTitle>
        <Styles.ResultLetter bgImage={resultLetterImage}>{resultLetter}</Styles.ResultLetter>
      </Styles.ResultLetterWrap>
      {/* <KakaoAdfit /> */}
      <Styles.ResultShareWrap>
        <Styles.ResultShareTitle>
          내 결과 공유하기
          <Styles.UnderLinkBar mainColor={resultMainColor} />
        </Styles.ResultShareTitle>
        <Styles.ResultShareLinkWrap>
          <KakaoShareButton />
          {/* <Styles.ResultShareKakao></Styles.ResultShareKakao> */}
          <Styles.ResultShareLink
            src={shareLinkLogo}
            onClick={() => handleShareLink(window.location.href)}
          ></Styles.ResultShareLink>
        </Styles.ResultShareLinkWrap>
      </Styles.ResultShareWrap>
      <Styles.ResultMatchWrap>
        <Styles.ResultMatchTitle>
          동물별 궁합
          <Styles.UnderLinkBar mainColor={resultMainColor} />
        </Styles.ResultMatchTitle>
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
      <Styles.TestReviewWrap>
        <Styles.TestReviewTitle>
          테스트는 어땠나요?
          <Styles.UnderLinkBar mainColor={resultMainColor} />
        </Styles.TestReviewTitle>
        <Styles.TestReviewContentsWrap>
          <Styles.TestReviewContentWrap>
            <Styles.TestReviewEmotionWrap onClick={handleClickLikeBtn}>
              <Styles.TestReviewEmotion>😄</Styles.TestReviewEmotion>
              <Styles.TestReviewEmotionDescription>잘맞아요</Styles.TestReviewEmotionDescription>
            </Styles.TestReviewEmotionWrap>
            <Styles.TestReviewEmotionCount>{resultLikeCount}</Styles.TestReviewEmotionCount>
          </Styles.TestReviewContentWrap>
          <Styles.TestReviewContentWrap>
            <Styles.TestReviewEmotionWrap onClick={handleClickFunBtn}>
              <Styles.TestReviewEmotion>😋</Styles.TestReviewEmotion>
              <Styles.TestReviewEmotionDescription>재밌어요</Styles.TestReviewEmotionDescription>
            </Styles.TestReviewEmotionWrap>
            <Styles.TestReviewEmotionCount>{resultFunCount}</Styles.TestReviewEmotionCount>
          </Styles.TestReviewContentWrap>
          <Styles.TestReviewContentWrap>
            <Styles.TestReviewEmotionWrap onClick={handleClickBadBtn}>
              <Styles.TestReviewEmotion>😅</Styles.TestReviewEmotion>
              <Styles.TestReviewEmotionDescription>아쉬워요</Styles.TestReviewEmotionDescription>
            </Styles.TestReviewEmotionWrap>
            <Styles.TestReviewEmotionCount>{resultBadCount}</Styles.TestReviewEmotionCount>
          </Styles.TestReviewContentWrap>
          <Styles.TestReviewContentWrap>
            <Styles.TestReviewEmotionWrap onClick={handleClickExpectBtn}>
              <Styles.TestReviewEmotion>😍</Styles.TestReviewEmotion>
              <Styles.TestReviewEmotionDescription>후속작GO!</Styles.TestReviewEmotionDescription>
            </Styles.TestReviewEmotionWrap>
            <Styles.TestReviewEmotionCount>{resultExpectCount}</Styles.TestReviewEmotionCount>
          </Styles.TestReviewContentWrap>
        </Styles.TestReviewContentsWrap>
      </Styles.TestReviewWrap>
      <Styles.ResultCreatorWrap>
        <Styles.ResultCreatorTitle>
          만든이
          <Styles.UnderLinkBar mainColor={resultMainColor} />
        </Styles.ResultCreatorTitle>
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
      <Styles.ResultRetryBtn onClick={handleAnotherTestBtn}>
        다른 심리테스트 해보기
      </Styles.ResultRetryBtn>

      <Styles.ResultRetryBtn onClick={handleRetryBtn}>테스트 다시 하기</Styles.ResultRetryBtn>
      <Styles.AdDescription>
        재밌게 하셨다면 아래 광고 한 번만 클릭해주세요!
        <br /> 클릭은 저희가 츄파츕스로 당 충전을 할 수 있는 힘이 됩니다!
        <br /> 더 좋은 심리테스트를 만들게요!
        <br />
        👇 👇🏻 👇🏼 👇🏽 👇🏾 👇🏿
      </Styles.AdDescription>
      <KakaoAdfit />
    </Styles.ResultFormWrap>
  );
};

export default ResultType;
