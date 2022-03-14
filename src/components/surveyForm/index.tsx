import React, { useEffect, useState } from 'react';
import * as Styles from './index.style';

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
  return (
    <Styles.SurveyFormWrap backgroundImage={backgroundImage}>
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
