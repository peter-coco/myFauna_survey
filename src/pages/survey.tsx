import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from '../components/loading';
import SurveyForm from '../components/surveyForm';
import { setResultOnSurvey } from '../utils/setResultOnSurvey';
import * as bgImage from '../asset/images/index';
import { firebaseDB } from '../config/firebase';

const SurveyWrap = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100vh;
`;

const Survey = () => {
  const [loadingStateToResult, setLoadingStateToResult] = useState(false);
  const [timer, setTimer] = useState(2);
  const [timerButton, setTimerButton] = useState(false);
  const [surveyNo, setSurveyNo] = useState(1);
  const [characterPoint, setCharacterPoint] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('/images/survey_bg1.jpeg');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionImage, setDescriptionImage] = useState('/images/survey_logo1.jpeg');
  const [topOptionText, setTopOptionText] = useState<React.ReactNode>(<div></div>);
  const [bottomOptionText, setBottomOptionText] = useState<React.ReactNode>(<div></div>);

  const handleNextSurvey = useCallback(() => {
    if (surveyNo < 9) {
      setSurveyNo((pre) => pre + 1);
      return;
    }
    setTimerButton(true);
    setLoadingStateToResult(true);
  }, [surveyNo]);

  const handleTopOption = useCallback(() => {
    setCharacterPoint((pre) => pre + 1);
    handleNextSurvey();
  }, [handleNextSurvey]);
  const handleBottomOption = useCallback(() => {
    setCharacterPoint((pre) => pre - 1);
    handleNextSurvey();
  }, [handleNextSurvey]);

  const handleSurveyInforByNo = useCallback(
    async (
      imageUrl: string,
      bgColor: string,
      description: string,
      descriptionImageUrl: string,
      topOptionText: React.ReactNode,
      botOptionText: React.ReactNode
    ) => {
      await setBackgroundImage(imageUrl);
      await setBackgroundColor(bgColor);
      await setDescription(description);
      await setDescriptionImage(descriptionImageUrl);
      await setTopOptionText(topOptionText);
      await setBottomOptionText(botOptionText);
    },
    []
  );

  const handleAddResultToDatabase = useCallback(async () => {
    setTimerButton(false);
    const resultType = setResultOnSurvey(characterPoint);
    const bucket = firebaseDB.collection('bucket');
    await bucket.add({ resultType });
    window.location.href = `/result/${resultType}`;
  }, [characterPoint]);

  useEffect(() => {
    switch (surveyNo) {
      case 1:
        handleSurveyInforByNo(
          bgImage.SurveyBg1_9,
          '#ffffff',
          '나는',
          '/images/survey_logo1.jpeg',
          '활발한 사람이다',
          '조용한 사람이다'
        );
        break;
      case 2:
        handleSurveyInforByNo(
          bgImage.SurveyBg2,
          '#ffffff',
          '사람들과 말할 때',
          '/images/survey_logo2.jpeg',
          '여러 사람들과 말을 많이 한다.',
          '소수의 사람들과 말한다.'
        );
        break;
      case 3:
        handleSurveyInforByNo(
          bgImage.SurveyBg3,
          '#ffffff',
          '어떤 일을 할 때',
          '/images/survey_logo3.jpeg',
          '할 일을 찾아서 한다. ',
          <div>주어진 업무만 한다.</div>
        );
        break;
      case 4:
        handleSurveyInforByNo(
          bgImage.SurveyBg4,
          '#ffffff',
          '사람들은 종종 나에게',
          '/images/survey_logo4.jpeg',
          '활동적이고 진취적이라고 한다. ',
          '배려심이 많고 섬세하다고 한다.'
        );
        break;
      case 5:
        handleSurveyInforByNo(
          bgImage.SurveyBg5,
          '#ffffff',
          '나는 팀을',
          '/images/survey_logo5.jpeg',
          '이끄는 사람이다.',
          '도우는 사람이다. '
        );
        break;
      case 6:
        handleSurveyInforByNo(
          bgImage.SurveyBg6,
          '#ffffff',
          '불합리한 일을 겪을 경우',
          '/images/survey_logo6.jpeg',
          '아닌걸 아니라고 말한다.',
          '참고 넘어간다.'
        );
        break;
      case 7:
        handleSurveyInforByNo(
          bgImage.SurveyBg7,
          '#ffffff',
          '나는 주로',
          '/images/survey_logo7.jpeg',
          '이상을 꿈꾼다.',
          '현실을 본다. '
        );
        break;
      case 8:
        handleSurveyInforByNo(
          bgImage.SurveyBg8,
          '#ffffff',
          '무언가를 이룰 때',
          '/images/survey_logo8.jpeg',
          '정한 목표를 꼭 이뤄낸다.',
          '정한 목표를 자주 바꾼다. '
        );
        break;
      case 9:
        handleSurveyInforByNo(
          bgImage.SurveyBg1_9,
          '#ffffff',
          '다른 사람이 나를 볼 때',
          '/images/survey_logo9.jpeg',
          '진취적이고 열정있는 사람으로 봤으면 한다.',
          '예리하고 꼼꼼한 사람으로 봤으면 한다.'
        );
        break;
    }
  }, [surveyNo]);

  useEffect(() => {
    if (timerButton) {
      const countdown = setInterval(() => {
        if (timer > 0) {
          setTimer((pre) => pre - 1);
        } else {
          handleAddResultToDatabase();

          // setLoadingStateToResult(false);
          return;
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timerButton, timer, characterPoint]);

  return (
    <SurveyWrap>
      {loadingStateToResult ? (
        <Loading />
      ) : (
        <SurveyForm
          backgroundImage={backgroundImage}
          description={description}
          descriptionImageUrl={descriptionImage}
          topOptionText={topOptionText}
          bottomOptionText={bottomOptionText}
          handleTopOption={handleTopOption}
          handleBottomOption={handleBottomOption}
        />
      )}
    </SurveyWrap>
  );
};

export default Survey;
