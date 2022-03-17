import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from '../components/loading';
import SurveyForm from '../components/surveyForm';
import { setResultOnSurvey } from '../utils/setResultOnSurvey';
import * as bgImage from '../asset/images/index';
import { firebaseDB } from '../config/firebase';
import * as Styles from '../components/surveyForm/index.style';
import ReactAudioPlayer from 'react-audio-player';
import { setSurveyContents } from '../utils/setSurveyContents';

const SurveyWrap = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100vh;
`;

const Survey = () => {
  const soundTrack = '/sound/survey_sound.m4a';

  const [loadingStateToResult, setLoadingStateToResult] = useState(false);
  const [timer, setTimer] = useState(2);
  const [timerButton, setTimerButton] = useState(false);
  const [surveyNo, setSurveyNo] = useState(1);
  const [characterPoint, setCharacterPoint] = useState(0);

  const backgroundImage: string = '/images/survey_bg11.png';
  const [description, setDescription] = useState('');
  const [descriptionImage, setDescriptionImage] = useState('/images/survey_logo1.jpeg');
  const [topOptionText, setTopOptionText] = useState('');
  const [bottomOptionText, setBottomOptionText] = useState('');

  const handleNextSurvey = useCallback(() => {
    if (surveyNo < 17) {
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

  const handleSurveyInforByNo = (
    descriptionValue: string,
    descriptionImageUrl: string,
    topOptionValue: string,
    botOptionValue: string
  ) => {
    setDescription(descriptionValue);
    setDescriptionImage(descriptionImageUrl);
    setTopOptionText(topOptionValue);
    setBottomOptionText(botOptionValue);
  };
  const handleAddResultToDatabase = useCallback(async () => {
    setTimerButton(false);
    const resultType = setResultOnSurvey(characterPoint);
    // const bucket = firebaseDB.collection('bucket');
    // await bucket.add({ resultType });
    window.location.href = `/result/${resultType}`;
  }, [characterPoint]);

  // console.log(topOptionText);
  useEffect(() => {
    const [description, descriptionImage, topOptionText, bottomOptionText] =
      setSurveyContents(surveyNo);

    handleSurveyInforByNo(description, descriptionImage, topOptionText, bottomOptionText);
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
        // <SurveyForm
        //   backgroundImage={backgroundImage}
        //   description={description}
        //   descriptionImageUrl={descriptionImage}
        //   topOptionText={topOptionText}
        //   bottomOptionText={bottomOptionText}
        //   handleTopOption={handleTopOption}
        //   handleBottomOption={handleBottomOption}
        // />
        <Styles.SurveyFormWrap backgroundImage={backgroundImage}>
          <ReactAudioPlayer src={soundTrack} autoPlay controls={false} loop={true} volume={0.05} />
          <Styles.Top>
            <Styles.SurveyDescriptionImage src={descriptionImage} />
          </Styles.Top>
          <Styles.SurveyDescription>{description}</Styles.SurveyDescription>
          <Styles.SurveyOptionWrap>
            <Styles.SurveyOption onClick={handleTopOption}>{topOptionText}</Styles.SurveyOption>
            <Styles.SurveyOption onClick={handleBottomOption}>
              {bottomOptionText}
            </Styles.SurveyOption>
          </Styles.SurveyOptionWrap>
        </Styles.SurveyFormWrap>
      )}
    </SurveyWrap>
  );
};

export default Survey;
