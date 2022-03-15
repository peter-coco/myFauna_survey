export const setSurveyContents = (surveyNo: number): [string, string, string, string] => {
  let description;
  let descriptionImage;
  let topOptionText;
  let bottomOptionText;

  if (surveyNo === 1) {
    description = '나는';
    descriptionImage = '/images/survey_logo1.jpeg';
    topOptionText = '활발한 사람이다';
    bottomOptionText = '조용한 사람이다';
  } else if (surveyNo === 2) {
    description = '흥미로운 일이 생기면';
    descriptionImage = '/images/survey_logo2.jpeg';
    topOptionText = ' 일단 행동으로 옮긴다.';
    bottomOptionText = '생각하는 시간을 가진다.';
  } else if (surveyNo === 3) {
    description = '불합리한 일을 겪을 경우';
    descriptionImage = '/images/survey_logo3.jpeg';
    topOptionText = '아닌걸 아니라고 말한다.';
    bottomOptionText = '참고 넘어간다.';
  } else if (surveyNo === 4) {
    description = '혼자있을 때';
    descriptionImage = '/images/survey_logo4.jpeg';
    topOptionText = '친구들과 약속을 잡고 나간다.';
    bottomOptionText = '집에서 취미활동을 한다.';
  } else if (surveyNo === 5) {
    description = '내가 좋아하는 취미활동은';
    descriptionImage = '/images/survey_logo5.jpeg';
    topOptionText = '활동적이고 액티브한 것 ';
    bottomOptionText = '정적이고 편안한 것';
  } else if (surveyNo === 6) {
    description = '내가 좋아하는 공간은';
    descriptionImage = '/images/survey_logo6.jpeg';
    topOptionText = '놀이동산, 공원, 야구장';
    bottomOptionText = '미술관, 서점, 카페';
  } else if (surveyNo === 7) {
    description = '나는 슬프거나 화날 때';
    descriptionImage = '/images/survey_logo7.jpeg';
    topOptionText = '친구들과 함께 나누며 푼다.';
    bottomOptionText = '감정의 원인에 대해 생각한다.';
  } else if (surveyNo === 8) {
    description = '내 의견을 말할 때';
    descriptionImage = '/images/survey_logo8.jpeg';
    topOptionText = '나에게 필요한 걸 생각하며 말한다.';
    bottomOptionText = '상대방의 기분을 생각하며 말한다.';
  } else if (surveyNo === 9) {
    description = '낯선 사람이 나에게 말을 걸면 ';
    descriptionImage = '/images/survey_logo1.jpeg';
    topOptionText = '같이 신나게 떠든다.';
    bottomOptionText = '얘기를 듣고 공감한다.';
  } else if (surveyNo === 10) {
    description = '여러 사람과 있을 때';
    descriptionImage = '/images/survey_logo8.jpeg';
    topOptionText = '두루두루 말을 많이 한다.';
    bottomOptionText = '소수의 사람들과 말한다. ';
  } else if (surveyNo === 11) {
    description = '사람들은 종종 나에게 ';
    descriptionImage = '/images/survey_logo7.jpeg';
    topOptionText = '활동적이고 진취적이라고 한다.';
    bottomOptionText = '배려심이 많고 섬세하다고 한다.';
  } else if (surveyNo === 12) {
    description = '어떤 일을 할 때';
    descriptionImage = '/images/survey_logo6.jpeg';
    topOptionText = '할 일을 찾아서 한다.';
    bottomOptionText = '주어진 업무만 한다.';
  } else if (surveyNo === 13) {
    description = '나는 팀을';
    descriptionImage = '/images/survey_logo5.jpeg';
    topOptionText = '이끄는 사람이다.';
    bottomOptionText = '도우는 사람이다.';
  } else if (surveyNo === 14) {
    description = '나는 주로';
    descriptionImage = '/images/survey_logo4.jpeg';
    topOptionText = '이상을 꿈꾼다.';
    bottomOptionText = '현실을 본다.';
  } else if (surveyNo === 15) {
    description = '무언가를 이룰 때';
    descriptionImage = '/images/survey_logo3.jpeg';
    topOptionText = '정한 목표를 꼭 이뤄낸다. ';
    bottomOptionText = '정한 목표를 자주 바꾼다.';
  } else if (surveyNo === 16) {
    description = '나는 다른 사람이 나를 볼 때';
    descriptionImage = '/images/survey_logo2.jpeg';
    topOptionText = '진취적이고 열정있는 사람으로 봤으면 한다.';
    bottomOptionText = '예리하고 꼼꼼한 사람으로 봤으면 한다.';
  } else if (surveyNo === 17) {
    description = '내가 더 끌리는 말은';
    descriptionImage = '/images/survey_logo9.jpeg';
    topOptionText = '결코 끌 수 없는 열정으로 삶을 살아라.';
    bottomOptionText = '겨울이 오면 봄이 멀지 않으리.';
  } else {
    description = '다른 사람이 나를 볼 때';
    descriptionImage = '/images/survey_logo9.jpeg';
    topOptionText = '진취적이고 열정있는 사람으로 봤으면 한다.';
    bottomOptionText = '예리하고 꼼꼼한 사람으로 봤으면 한다.';
  }

  return [description, descriptionImage, topOptionText, bottomOptionText];
};
