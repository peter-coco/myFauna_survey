import React, { useEffect } from 'react';
import styled from 'styled-components';

export const ShareResult = styled.button`
  height: 64px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 0;

  &:focus-within {
    background-color: #a6a6a6;
    color: #676767;
  }
  &:hover {
    background-color: #a6a6a6;
    color: #676767;
  }
  width: 220px;
`;

declare global {
  interface Window {
    Kakao: any;
  }
}
const KakaoShareButton = () => {
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
        title: '작심삼일 심리테스트',
        description: '#작심삼일 #심리테스트 #메타인지',
        imageUrl: 'https://ifh.cc/g/KXfoE6.png',
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

  return <ShareResult onClick={createKakaoButton}>카카오톡 공유</ShareResult>;
};

export default KakaoShareButton;
