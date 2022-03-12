import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import SurveyForm from '../components/surveyForm';
import { setResultOnSurvey } from '../utils/setResultOnSurvey';

const SurveyWrap = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
`;

const Survey = () => {
  const [surveyNo, setSurveyNo] = useState(1);
  const [characterPoint, setCharacterPoint] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('/images/survey1');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [description, setDescription] = useState('');
  const [topOptionText, setTopOptionText] = useState<React.ReactNode>(<div></div>);
  const [bottomOptionText, setBottomOptionText] = useState<React.ReactNode>(<div></div>);

  const handleNextSurvey = useCallback(() => {
    if (surveyNo < Number(process.env.REACT_APP_SURVEY_COUNT)) {
      setSurveyNo((pre) => pre + 1);
      return;
    }
    const resultType = setResultOnSurvey(characterPoint);
    window.location.href = `/result/${resultType}`;
    return;
  }, [characterPoint, surveyNo]);

  const handleTopOption = useCallback(() => {
    setCharacterPoint((pre) => pre + 1);
    handleNextSurvey();
  }, [handleNextSurvey]);
  const handleBottomOption = useCallback(() => {
    setCharacterPoint((pre) => pre - 1);
    handleNextSurvey();
  }, [handleNextSurvey]);

  const handleSurveyInforByNo = useCallback(
    (
      imageUrl: string,
      bgColor: string,
      description: string,
      topOptionText: React.ReactNode,
      botOptionText: React.ReactNode
    ) => {
      setBackgroundImage(imageUrl);
      setBackgroundColor(bgColor);
      setDescription(description);
      setTopOptionText(topOptionText);
      setBottomOptionText(botOptionText);
    },
    []
  );

  useEffect(() => {
    switch (surveyNo) {
      case 1:
        handleSurveyInforByNo('', '#ffffff', '나는', '활발한 사람이다', '조용한 사람이다');
        break;
      case 2:
        handleSurveyInforByNo(
          '',
          '#ffffff',
          '사람들과 말할 때',
          '여러 사람들과 말을 많이 한다.',
          '소수의 사람들과 말한다.'
        );
        break;
      case 3:
        handleSurveyInforByNo(
          '',
          '#ffffff',
          '어떤 일을 할 때',
          '할 일을 찾아서 한다. ',
          <div>주어진 업무만 한다.</div>
        );
        break;
      case 4:
        handleSurveyInforByNo(
          '',
          '#ffffff',
          '사람들은 종종 나에게',
          '활동적이고 진취적이라고 한다. ',
          '배려심이 많고 섬세하다고 한다.'
        );
        break;
      case 5:
        handleSurveyInforByNo('', '#ffffff', '나는 팀을', '이끄는 사람이다.', '도우는 사람이다. ');
        break;
      case 6:
        handleSurveyInforByNo(
          '',
          '#ffffff',
          '불합리한 일을 겪을 경우',
          '아닌걸 아니라고 말한다.',
          '참고 넘어간다.'
        );
        break;
      case 7:
        handleSurveyInforByNo('', '#ffffff', '나는 주로', '이상을 꿈꾼다.', '현실을 본다. ');
        break;
      case 8:
        handleSurveyInforByNo(
          '',
          '#ffffff',
          '무언가를 이룰 때',
          '정한 목표를 꼭 이뤄낸다.',
          '정한 목표를 자주 바꾼다. '
        );
        break;
      case 9:
        handleSurveyInforByNo(
          '',
          '#ffffff',
          '다른 사람이 나를 볼 때',
          '진취적이고 열정있는 사람으로 봤으면 한다.',
          '예리하고 꼼꼼한 사람으로 봤으면 한다.'
        );
        break;
    }
  }, [surveyNo]);

  return (
    <SurveyWrap>
      <SurveyForm
        backgroundColor={backgroundColor}
        descriptionImage={backgroundImage}
        description={description}
        topOptionText={topOptionText}
        bottomOptionText={bottomOptionText}
        handleTopOption={handleTopOption}
        handleBottomOption={handleBottomOption}
      />
    </SurveyWrap>
  );
};

export default Survey;
