import { ResultContent } from '../types/resultContet';
export const setResultContents = (type: string): ResultContent => {
  switch (type) {
    case 'raccon':
      return {
        mainColor: '#AFBC8F',
        logoImage: '/images/result_raccon.jpeg',
        animalTitle: (
          <div>
            <span>호기심 많은 연구자</span>
            <br />
            말랑말랑 너부리
          </div>
        ),
        animalSubTitle: '세상에는 흥미로운게 너무 많아!',
        animalDescription: (
          <div>
            <div>• 특이하다는 말을 많이 들어요.</div>
            <div>• 궁금한 게 생기면 행동하고 봐요.</div>
            <div>• 누가 나를 좋아하든 말든 크게 관심이 없어요.</div>
            <div>• 하고 싶은 일은 꼭 해야 해요.</div>
            <div>• 밖에 나가서 돌아다니는 걸 좋아해요.</div>
            <div>• 관심사가 많아요.</div>
            <div>• 그래서 누구든 말할 거리가 넘쳐요.</div>
            <div>• 새로운 사람을 만나는 것에 거부감이 없어요.</div>
            <div>• 가끔 백치미를 보일 때가 있어요.</div>
            <div>• 친구에게 현실적인 해결책을 제시해요.</div>
          </div>
        ),
        letterTitle: '💌      너부리가 보내는 편지      💌',
        letter: (
          <div>
            요즘 네가 가장 관심 있는 게 뭐야?
            <br />
            나는 요즘 솜사탕을 깨끗하게 씻어 먹는 방법에 대해서 고민중이야. 물로 닦아내도 순식간에
            사라져버리더라고! 그래서 여러 친구와 만나서 아이디어를 얻고 있어.
            <br />
            가끔 친구들이 나에게 말해.
            <br />
            '너는 궁금한 게 왜 이리 많아?'라고 말이지.
            <br />
            나도 내가 궁금한 게 왜 많은지는 찾지 못했어.
            <br />
            그렇지만 남들과 달라서 좋은 점은
            <br /> '내 방식대로 세상을 바라보는 시선'이 생겼다는 거야.
            <br /> 내가 나로 있을 때 가장 행복한 것 같아. 너도 그렇지?
            <br /> 나답게 너답게 우리답게 즐겁게 삶을 살아가 보자.
            <br /> 안녕!
          </div>
        ),
        letterImage: '/images/result_paper_raccon.jpeg',
        likeImageUrl: '/images/result_hamster.jpeg',
        likeDescription: (
          <div>
            사랑스러운 협동가
            <br /> 말랑말랑 햄찌
          </div>
        ),
        likeLinkUrl: '/result/hamster',
        dislikeImageUrl: '/images/result_fox.jpeg',
        dislikeDescription: (
          <div>
            여유로운 휴식가 <br />
            말랑말랑 여우리
          </div>
        ),
        dislikeLinkUrl: '/result/fox',
      };
    case 'fox':
      return {
        mainColor: '#87504B',
        logoImage: '/images/result_fox.jpeg',
        animalTitle: (
          <div>
            <span>여유로운 휴식가</span>
            <br />
            말랑말랑 여우리
          </div>
        ),
        animalSubTitle: '급할 필요가 있어? 천천히 가자',
        animalDescription: (
          <div>
            <div>• 차 한 잔 마시는 여유를 가지고 있어요.</div>
            <div>• 어떤 일이든 조급하지 않고 차분하게 진행해요.</div>
            <div>• 은근한 고집이 있어요.</div>
            <div>• 굳이 새로운 사람을 사귀려고 하지 않아요.</div>
            <div>• 그렇다고 흠 잡힐 행동을 하지도 않아요.</div>
            <div>• 그래서 주변 사람과 두루두루 잘 지내요.</div>
            <div>• 좋아하는 사람과 싫어하는 사람이 명확해요.</div>
            <div>• 좋아하는 사람의 의견을 존중해줘요.</div>
            <div>• 누구와 경쟁하는 걸 좋아하지 않아요.</div>
            <div>• 나만의 페이스 유지를 중요하게 생각해요.</div>
          </div>
        ),
        letterTitle: '💌      여우리가 보내는 편지      💌',
        letter: (
          <div>
            차 한잔하기 좋은 날이다.그렇지?
            <br />
            요즘 친구들 너무 바쁘게 사는 거 같지 않아?
            <br /> 꼭 그렇게 서두르지 않아도 될 거 같은데 말이지.
            <br />
            나만의 페이스를 유지하고
            <br /> 하고자 하는 일을 준비한다면
            <br />
            꼭 이뤄낼 수 있을 거야.
            <br /> 남들보다 좀 느리면 어때?
            <br /> 내가 행복한 게 가장 중요한걸.
            <br />
            난 경쟁이 싫어. 걸어가면서 주변에 꽃도 보고, 하늘도 보고, 좋아하는 음식도 먹으면서
            <br /> 잔잔한 호수처럼 지내고 싶어. 너도 그렇지?
            <br /> 나만의 속도로 천천히, 천천히, 삶을 음미해보자. 좋은 하루 보내.
          </div>
        ),
        letterImage: '/images/result_paper_fox.jpeg',
        likeImageUrl: '/images/result_bear.jpeg',
        likeDescription: (
          <div>
            푸근한 대인배
            <br /> 말랑말랑 곰쥬
          </div>
        ),
        likeLinkUrl: '/result/bear',
        dislikeImageUrl: '/images/result_raccon.jpeg',
        dislikeDescription: (
          <div>
            호기심 많은 연구자
            <br /> 말랑말랑 너부리
          </div>
        ),
        dislikeLinkUrl: '/result/raccon',
      };
    case 'dog':
      return {
        mainColor: '#FFA985',

        logoImage: '/images/result_dog.jpeg',
        animalTitle: (
          <div>
            <span>만인의 에너자이저</span>
            <br />
            말랑말랑 멍무이
          </div>
        ),
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 주변 사람을 즐겁게 하는 밝은 에너지가 있어요.</div>
            <div>• 사람과 함께 있으면서 에너지를 얻어요.</div>
            <div>• 누구에게든 사랑받고 관심받는 걸 좋아해요.</div>
            <div>• 타인의 선택을 존중해줘요.</div>
            <div>• 내가 직접 무언가를 하겠다고 나서지는 않아요.</div>
            <div>• 관심이 생기면 적극적으로 호감을 표현해요.</div>
            <div>• 타인이 싫어하는 행동은 하지 않으려고 해요.</div>
            <div>• 혼자 있을 때 쉽게 우울해져요.</div>
            <div>• 조금 낯가림을 타지만 금방 친해져요.</div>
            <div>• 상처를 잘 받으면서도 쉽게 사람을 믿어요.</div>
          </div>
        ),
        letterTitle: '💌      멍무이가 보내는 편지      💌',
        letter: (
          <div>
            안녕? 만나서 반가워.
            <br />
            나는 너와 닮은 멍무이라고 해.
            <br /> 요즘 어떻게 지내? 난 늘 새로운 오늘을 살고 있어.
            <br />
            어떤 사람을 만날지,
            <br /> 어떤 대화를 할지 새로운 것이 넘쳐나잖아!
            <br />
            가끔 다른 친구들로 인해서 상처받는 날도 오지만, 서로 다르기 때문에 그런 거라 생각하고
            받아들이고 있어.
            <br /> 누군가를 싫어하고 미워하는 거보다는 친구를 있는 그대로 좋아할 때 힘이 나는 것
            같아!
            <br /> 너도 그렇지? <br />늘 즐겁고, 행복한 하루를 보내길 바랄게.
            <br /> 응원해 멍멍!
          </div>
        ),
        letterImage: '/images/result_paper_dog.jpeg',
        likeImageUrl: '/images/result_rabbit.jpeg',
        likeDescription: (
          <div>
            개성강한 힙스터
            <br /> 말랑말랑 토토
          </div>
        ),
        likeLinkUrl: '/result/rabbit',
        dislikeImageUrl: '/images/result_bear.jpeg',
        dislikeDescription: (
          <div>
            푸근한 대인배
            <br /> 말랑말랑 곰쥬
          </div>
        ),
        dislikeLinkUrl: '/result/bear',
      };
    case 'bear':
      return {
        mainColor: '#DF724B',

        logoImage: '/images/result_bear.jpeg',
        animalTitle: (
          <div>
            <span>푸근한 대인배</span>
            <br />
            말랑말랑 곰쥬
          </div>
        ),
        animalSubTitle: '괜찮아. 누구든 실수할 수 있어.',
        animalDescription: (
          <div>
            <div>• 각자의 개성을 존중해요.</div>
            <div>• 좋은 게 좋은거지라고 넘기는 경우가 많아요.</div>
            <div>• 주변에 좋아하는 사람이 많아요.</div>
            <div>• 어떤 의견이든 존중해주고 들어줘요.</div>
            <div>• 자기 의견을 고집하지 않아요.</div>
            <div>• 부탁을 거절하지 못해요.</div>
            <div>• 쉽게 화내지 않아요.</div>
            <div>• 급하게 행동하지 않고 느긋해요.</div>
            <div>• 남을 편하게 해주는 매력이 있어요.</div>
            <div>• 친구의 아픔을 잘 공감하고 위로해줘요.</div>
          </div>
        ),
        letterTitle: '💌      곰쥬가 보내는 편지      💌',
        letter: (
          <div>
            반가워. 너는 친구를 어떻게 생각하니?
            <br />
            나에게 친구란 하나의 책과도 같아.
            <br />
            각자 다른 이야기가 있고
            <br /> 그걸 들을 때 이런 삶도 있다는 걸 느껴.
            <br />
            그래서 누구도 쉽게 싫어할 수 없는 거 같아.
            <br />
            완벽한 사람은 없으니까.
            <br /> 그래서 친구들이 나에게 고민을
            <br /> 자주 털어놓는 거 같아.
            <br /> 있는 그대로의 자신을 존중해주니까.
            <br /> 나도 흥미롭고 좋아.
            <br /> 그렇지만 내 페이스는 꼭 유지하고 있어.
            <br /> 우리 어떤 순간에서든 자신을 잃지는 말자.
            <br /> 그리고 친구들을 변함없이 아끼고 좋아하자. 응원할게!
          </div>
        ),
        letterImage: '/images/result_paper_bear.jpeg',
        likeImageUrl: '/images/result_fox.jpeg',
        likeDescription: (
          <div>
            여유로운 휴식가
            <br /> 말랑말랑 여우리
          </div>
        ),
        likeLinkUrl: '/result/fox',
        dislikeImageUrl: '/images/result_dog.jpeg',
        dislikeDescription: (
          <div>
            만인의 에너자이저
            <br /> 말랑말랑 멍무이
          </div>
        ),
        dislikeLinkUrl: '/result/dog',
      };
    case 'cow':
      return {
        mainColor: '#87CBC5',

        logoImage: '/images/result_cow.jpeg',
        animalTitle: (
          <div>
            <span>차분한 평화주의자</span>
            <br />
            말랑말랑 소소
          </div>
        ),
        animalSubTitle: '난 변치 않아.',
        animalDescription: (
          <div>
            <div>• 사시사철 푸른 소나무 같은 면모가 있어요.</div>
            <div>• 어떠한 분쟁도 짜증도 일으키지 않아요.</div>
            <div>• 함부로 비난하고 판단하지 않아요.</div>
            <div>• 타인을 욕하는 걸 아주 싫어해요.</div>
            <div>• 그래서 남 욕은 절대 하지 않아요.</div>
            <div>• 어떤 친구든 무한신뢰를 줘요.</div>
            <div>• 우직하고 듬직해요.</div>
            <div>• 가끔 답답할 때도 있어요. </div>
            <div>• 과묵하고 조용해요.</div>
            <div>• 친구가 속상해할 때 말없이 곁에 있어 줘요.</div>
          </div>
        ),
        letterTitle: '💌     소소가 보내는 편지      💌',
        letter: (
          <div>
            ....안녕? 오늘도 하늘이 참 맑다.
            <br />
            그래서 산책을 다녀왔는데, 길가에 꽃이 활짝폈어.
            <br />
            나비도 날아다니고
            <br /> 바람도 산들산들 불어서 기분이 참 좋더라.
            <br />
            포근한 풍경이 너무 좋아서 <br />
            나도 모르게 한참을 걸어버렸어.
            <br />
            그러다 보니까 문득 네가 생각났어.
            <br /> 요즘 힘들다고 했잖아.
            <br /> 그래서 내가 최근 보았던 풍경에 대해서 말해봤어.
            <br /> 마음이 편안해지고 잡생각이 사라지더라.
            <br /> 오늘 하루도 최선을 다하자. 늘 잘해왔듯이.
          </div>
        ),
        letterImage: '/images/result_paper_cow.png',
        likeImageUrl: '/images/result_hedgehog.jpeg',
        likeDescription: (
          <div>
            고독한 사색가
            <br /> 말랑말랑 고슴이
          </div>
        ),
        likeLinkUrl: '/result/hedgehog',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
      };
    case 'hamster':
      return {
        mainColor: '#FDAAC5',
        logoImage: '/images/result_hamster.jpeg',
        animalTitle: (
          <div>
            <span>사랑스러운 협동가 </span>
            <br />
            말랑말랑 햄찌
          </div>
        ),
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 원하는 목표를 위해 끊임없이 노력해요.</div>
            <div>• 친구들에게 내가 하고 싶은걸 자주 말해요.</div>
            <div>• 혼자서 하는 것보다는 같이 하는 걸 좋아해요.</div>
            <div>• 낯가림을 타지만 친해지면 성격이 돌변해요.</div>
            <div>• 가끔 놀라울 정도로 활발해요.</div>
            <div>• 소심해지면 한없이 소심해져요.</div>
            <div>• 생각을 정리할 수 있는 공간이 꼭 필요해요.</div>
            <div>• 가끔 소식이 뚝 끊겼다가 나타나요.</div>
            <div>• 소수의 친구와 친하게 지내요.</div>
            <div>• 비밀이 많아요.</div>
          </div>
        ),
        letterTitle: '💌         햄찌가 보내는 편지       💌',
        letter: (
          <div>
            우리 같이 해바라기 씨 가지러 가지 않을래?
            <br />
            최근에 혼자 돌아다니다가
            <br /> 해바라기밭을 발견했지 뭐야.
            <br />
            그래서 혼자서 씨를 들고 오려고 했는데
            <br /> 볼주머니가 터질 거 같아서 못 했어.
            <br />
            같이 가면서 어떻게 지냈는지 알려줘.
            <br /> 한동안 연락이 없었잖아.
            <br />
            말 못하는 거라면 굳이 말하지 않아도 돼.
            <br /> 만약 말하게 되더라도 걱정하지 마.
            <br /> 비밀 완전 보장! 알지?
            <br /> 기다리고 있을게. 연락해줘! 오늘도 힘내자!
          </div>
        ),
        letterImage: '/images/result_paper_hamster.jpeg',
        likeImageUrl: '/images/result_raccon.jpeg',
        likeDescription: (
          <div>
            호기심 많은 연구자
            <br /> 말랑말랑 너부리
          </div>
        ),
        likeLinkUrl: '/result/raccon',
        dislikeImageUrl: '/images/result_rabbit.jpeg',
        dislikeDescription: (
          <div>
            개성강한 힙스터
            <br /> 말랑말랑 토토
          </div>
        ),
        dislikeLinkUrl: '/result/rabbit',
      };
    case 'rabbit':
      return {
        mainColor: '#DA9185',

        logoImage: '/images/result_rabbit.jpeg',
        animalTitle: (
          <div>
            <span>개성강한 힙스터</span>
            <br />
            말랑말랑 토토
          </div>
        ),
        animalSubTitle: '철저한 자기관리는 필수지!',
        animalDescription: (
          <div>
            <div>• 개성이 뚜렷해요.</div>
            <div>• 좋아하는 것과 싫어하는 게 명확해요.</div>
            <div>• 신경 쓰는 게 있어도 티를 내지 않아요.</div>
            <div>• 좋아하는 친구한테 의지를 많이 해요.</div>
            <div>• 고민을 말하지 않아요. 혼자서 생각해요.</div>
            <div>• 같이 일할 때 협업을 중요하게 생각해요.</div>
            <div>• 가끔 욱해요.</div>
            <div>• 친구 기분을 많이 신경 쓰고 챙겨줘요.</div>
            <div>• 바쁠 때는 일에만 집중하고 다른 건 신경 안 써요.</div>
            <div>• 나만의 공간을 중요하게 생각해요.</div>
          </div>
        ),
        letterTitle: '💌     토토가 보내는 편지     💌',
        letter: (
          <div>
            요즘 나는 바쁘게 지내고 있어.
            <br />
            할 일이 많아졌거든. 그래서 연락을 자주 못했어.
            <br />
            일하고 자고.. 계속 반복하다보니
            <br /> 시간이 어떻게 흘러갔는지도 모르겠네.
            <br />
            넌 어떻게 지냈어? 우리 한 번 만나야지.
            <br />
            바빠도 이해해.
            <br /> 나는 너가 잘 되는게 좋고,
            <br /> 우리는 언제든 만날 수 있으니까 걱정하지마.
            <br />
            시간 될 때 연락줘. 우리 자주 가는 단골집 있잖아.
            <br /> 거기가서 당근 스프랑 주스 마시자.
            <br />
            스트레스 관리 잘 하고 건강한 모습으로 보자.
          </div>
        ),
        letterImage: '/images/result_paper_rabbit.jpeg',
        likeImageUrl: '/images/result_dog.jpeg',
        likeDescription: (
          <div>
            만인의 에너자이저
            <br /> 말랑말랑 멍무이
          </div>
        ),
        likeLinkUrl: '/result/dog',
        dislikeImageUrl: '/images/result_hamster.jpeg',
        dislikeDescription: (
          <div>
            사랑스러운 협동가
            <br /> 말랑말랑 햄찌
          </div>
        ),
        dislikeLinkUrl: '/result/hamster',
      };
    case 'cat':
      return {
        mainColor: '#959595',

        logoImage: '/images/result_cat.jpeg',
        animalTitle: (
          <div>
            <span>은근한 최강자 </span>
            <br />
            말랑말랑 냠미
          </div>
        ),
        animalSubTitle: '나를 귀찮게 하지마.',
        animalDescription: (
          <div>
            <div>• 조용하지만 존재감이 있어요.</div>
            <div>• 주변에 챙겨주는 사람이 많아요.</div>
            <div>• 날카로운 직관력과 통찰력을 가지고 있어요.</div>
            <div>• 친구의 선을 지켜줘요.</div>
            <div>• 과한 친절을 부리지 않아요.</div>
            <div>• 혼자 있는 시간을 즐겨요.</div>
            <div>• 취미가 많아요.</div>
            <div>• 가끔 불쑥 여행을 떠나곤 해요.</div>
            <div>• 친구들에게 자주 안부 연락이 와요.</div>
            <div>• 눈치가 빠르고 말을 잘해요.</div>
          </div>
        ),
        letterTitle: '💌     냠미가 보내는 편지     💌',
        letter: (
          <div>
            하루종일 집에서만 있다 보니까
            <br /> 시간 가는 줄 몰랐어.
            <br />
            혼자서 할 게 너무 많아.
            <br />
            노래도 듣고, 책도 읽고,
            <br /> 게임도 하고, 요리도 하고 등등
            <br />
            너도 그렇지?
            <br /> 친구들은 안 만나냐고?
            <br />
            알잖아.
            <br /> 친구들이 좋긴 한데 가끔 만나야 좋은 거 같아.
            <br /> 그 이상은 뭔가 피곤하고 귀찮을 때가 종종 있어.
            <br /> 나한테는 내 시간이 가장 중요해서 말이지~
            <br /> 우리 너무 신경을 쓰지 말자.
            <br /> 연락할 사람은 연락하게 돼 있잖아?
            <br /> 나만의 시간을 즐기자고.
          </div>
        ),
        letterImage: '/images/result_paper_cat.jpeg',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자 <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_hedgehog.jpeg',
        dislikeDescription: (
          <div>
            고독한 사색가
            <br />
            말랑말랑 고슴이
          </div>
        ),
        dislikeLinkUrl: '/result/hedgehog',
      };
    case 'hedgehog':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        animalTitle: (
          <div>
            <span>고독한 사색가</span>
            <br />
            말랑말랑 고슴이
          </div>
        ),
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 말수가 적고 수줍음을 잘 타요.</div>
            <div>• 자기만의 세계가 있어요.</div>
            <div>• 자주 멍을 때려요.</div>
            <div>• 의식의 흐름대로 생각하고 행동해요.</div>
            <div>• 행동과 말을 조심해요.</div>
            <div>• 말할까, 말까를 10번 넘게 고민해요.</div>
            <div>• 무슨 생각해? 라는 말을 자주 들어요.</div>
            <div>• 고독을 즐길 줄 알아요.</div>
            <div>• 외로움을 안 타요.</div>
            <div>• 누군가에게 피해를 주는 걸 싫어해요.</div>
          </div>
        ),
        letterTitle: '💌     고슴이가 보내는 편지      💌',
        letter: (
          <div>
            우리는 왜 생각할까? 무엇을 위해서 우리는 존재할까.
            <br />
            하늘에 물어보지만, 답을 찾을 수는 없는 것 같아.
            <br /> 그래서 계속 나만의 답을 찾아다니고 있어.
            <br /> 이런 생각을 누군가에게 말하기는 조심스럽더라고.
            <br />
            왜냐고 물어본다면….
            <br /> 나를 이해해주지 않을 거 같아서 그래.
            <br /> 난 혼자만의 생각이 너무 소중하고 중요하거든.
            <br />
            그리고 생각의 과정이 즐거워.
            <br /> 가끔 끝도 없는 고독함에 빠지기도 하지만
            <br /> 오히려 내가 존재하는 이유를 알려주기도 해.
            <br />
            너한테만은 말할 수 있을 거 같아서 이렇게 편지해.
            <br /> 어디서든 너를 응원하고 있을게. 기죽지 마.
          </div>
        ),
        letterImage: '/images/result_paper_hedgehog.jpeg',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자
            <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
      };
    default:
      return {
        mainColor: '#FFA985',

        logoImage: '/images/result_dog.jpeg',
        animalTitle: (
          <div>
            <span>만인의 에너자이저</span>
            <br />
            말랑말랑 멍무이
          </div>
        ),
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 주변 사람을 즐겁게 하는 밝은 에너지가 있어요.</div>
            <div>• 사람과 함께 있으면서 에너지를 얻어요.</div>
            <div>• 누구에게든 사랑받고 관심받는 걸 좋아해요.</div>
            <div>• 타인의 선택을 존중해줘요.</div>
            <div>• 내가 직접 무언가를 하겠다고 나서지는 않아요.</div>
            <div>• 관심이 생기면 적극적으로 호감을 표현해요.</div>
            <div>• 타인이 싫어하는 행동은 하지 않으려고 해요.</div>
            <div>• 혼자 있을 때 쉽게 우울해져요.</div>
            <div>• 조금 낯가림을 타지만 금방 친해져요.</div>
            <div>• 상처를 잘 받으면서도 쉽게 사람을 믿어요.</div>
          </div>
        ),
        letterTitle: '💌      멍무이가 보내는 편지      💌',
        letter: (
          <div>
            안녕? 만나서 반가워.
            <br />
            나는 너와 닮은 멍무이라고 해.
            <br /> 요즘 어떻게 지내?
            <br />
            난 늘 새로운 오늘을 살고 있어.
            <br />
            어떤 사람을 만날지, 어떤 대화를 할지 새로운 것이 넘쳐나잖아!
            <br />
            가끔 다른 친구들로 인해서 상처받는 날도 오지만, 서로 다르기 때문에 그런 거라 생각하고
            받아들이고 있어.
            <br /> 누군가를 싫어하고 미워하는 거보다는 친구를 있는 그대로 좋아할 때 힘이 나는 것
            같아!
            <br /> 너도 그렇지? 늘 즐겁고, 행복한 하루를 보내길 바랄게. 응원해 멍멍!
          </div>
        ),
        letterImage: '/images/result_paper_dog.jpeg',
        likeImageUrl: '/images/result_rabbit.jpeg',
        likeDescription: (
          <div>
            개성강한 힙스터
            <br /> 말랑말랑 토토
          </div>
        ),
        likeLinkUrl: '/result/rabbit',
        dislikeImageUrl: '/images/result_bear.jpeg',
        dislikeDescription: (
          <div>
            푸근한 대인배
            <br /> 말랑말랑 곰쥬
          </div>
        ),
        dislikeLinkUrl: '/result/bear',
      };
  }
};
