import React, { useEffect, useState } from 'react';
import * as Styles from './index.style';
import ReactAudioPlayer from 'react-audio-player';

const SurveyForm = ({
  backgroundImage,
  description,
  descriptionImageUrl,
  topOptionText,
  bottomOptionText,
  handleTopOption,
  handleBottomOption,
}: {
  backgroundImage: string;
  description: string;
  descriptionImageUrl: string;
  topOptionText: React.ReactNode;
  bottomOptionText: React.ReactNode;
  handleTopOption: () => void;
  handleBottomOption: () => void;
}) => {
  const soundTrack = '/sound/survey_sound.m4a';

  // console.log(backgroundImage, descriptionImageUrl);
  return (
    <Styles.SurveyFormWrap backgroundImage={backgroundImage}>
      <ReactAudioPlayer src={soundTrack} autoPlay controls={false} loop={true} volume={0.05} />
      <Styles.Top>
        <Styles.SurveyDescriptionImage src={descriptionImageUrl} />
      </Styles.Top>
      <Styles.SurveyDescription>{description}</Styles.SurveyDescription>
      <Styles.SurveyOptionWrap>
        <Styles.SurveyOption onClick={handleTopOption}>{topOptionText}</Styles.SurveyOption>
        <Styles.SurveyOption onClick={handleBottomOption}>{bottomOptionText}</Styles.SurveyOption>
      </Styles.SurveyOptionWrap>
    </Styles.SurveyFormWrap>
  );
};

export default SurveyForm;
