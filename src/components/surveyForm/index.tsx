import React, { useEffect, useState } from 'react';
import * as Styles from './index.style';

const SurveyForm = ({
  backgroundColor,
  descriptionImage,
  description,
  topOptionText,
  bottomOptionText,
  handleTopOption,
  handleBottomOption,
}: {
  backgroundColor: string;
  descriptionImage: string;
  description: string;
  topOptionText: React.ReactNode;
  bottomOptionText: React.ReactNode;
  handleTopOption: () => void;
  handleBottomOption: () => void;
}) => {
  return (
    <Styles.SurveyFormWrap backgroundColor={backgroundColor}>
      <Styles.Top>
        <Styles.SurveyDescriptionImage src={descriptionImage} />
      </Styles.Top>
      <Styles.Bottom>
        <Styles.SurveyDescription>{description}</Styles.SurveyDescription>
        <Styles.SurveyOptionWrap>
          <Styles.SurveyOption onClick={handleTopOption}>{topOptionText}</Styles.SurveyOption>
          <Styles.SurveyOption onClick={handleBottomOption}>{bottomOptionText}</Styles.SurveyOption>
        </Styles.SurveyOptionWrap>
      </Styles.Bottom>
    </Styles.SurveyFormWrap>
  );
};

export default SurveyForm;
