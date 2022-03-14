import React, { useEffect } from 'react';
import styled from 'styled-components';

export const ShareResult = styled.img`
  width: 58px;
  height: 58px;
  cursor: pointer;
`;

declare global {
  interface Window {
    Kakao: any;
  }
}
const KakaoShareButton = () => {
  const shareButtonLogo = '/images/kakaoLogo.png';

  useEffect(() => {
    initKakao();
  }, []);

  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
    }
  };

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다

    const imageUrl = '/images/kakaoShareLogo.png';
    window.Kakao.Link.sendDefault({
      // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
      objectType: 'feed',
      content: {
        title: '나의 동물타입 심리테스트',
        description: '#나의동물타입 #심리테스트 #메타인지',
        imageUrl: 'https://ifh.cc/g/t1S66R.jpg',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      // social: {
      //   likeCount: 77,
      //   commentCount: 55,
      //   sharedCount: 333,
      // },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return <ShareResult onClick={createKakaoButton} src={shareButtonLogo} />;
};

export default KakaoShareButton;
