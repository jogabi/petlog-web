import {
  BadgeDollarSign,
  Bell,
  BookOpen,
  Building2,
  Calculator,
  ChevronDown,
  Heart,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Navigation,
  PawPrint,
  Search,
  Star,
} from 'lucide-react'
import bannerImage from './assets/banner.png'
import './App.css'

const features = [
  {
    icon: Building2,
    title: '전국 업체 비교',
    description: '지역별 서비스별 비교하고 선택하세요',
  },
  {
    icon: BadgeDollarSign,
    title: '실시간 비용 비교',
    description: '투명한 가격 정보로 합리적인 선택을 도와드려요',
  },
  {
    icon: Heart,
    title: '추모 커뮤니티',
    description: '우리 아이를 기억하고 이야기를 나눌 수 있어요',
  },
]

const providers = [
  {
    name: '21그램',
    area: '서울 강남구',
    rating: '4.9',
    reviews: '324',
    price: '개별 화장 35만원~',
    badge: '인기',
  },
  {
    name: '펫포레스트',
    area: '경기 용인시',
    rating: '4.8',
    reviews: '256',
    price: '개별 화장 40만원~',
  },
  {
    name: '펫포유',
    area: '서울 강서구',
    rating: '4.7',
    reviews: '198',
    price: '개별 화장 38만원~',
  },
  {
    name: '레인보우엔젤',
    area: '인천 서구',
    rating: '4.8',
    reviews: '187',
    price: '개별 화장 37만원~',
  },
]

const stories = [
  {
    title: '우리 몽이가 떠난 지 30일',
    body: '아직도 실감이 나지 않지만, 여기에서 이야기하니 조금은 마음이 놓여요.',
    likes: 124,
    comments: 36,
    time: '2시간 전',
  },
  {
    title: '21그램 이용 후기',
    body: '친절하게 잘 안내해주셔서 감사했어요. 마지막까지 편안하게 보내줄 수 있었어요.',
    likes: 89,
    comments: 24,
    time: '5시간 전',
  },
  {
    title: '개별 화장 비용 문의드려요',
    body: '5kg 강아지 기준으로 비용이 어떻게 될까요? 경기 지역 위주로 알아보고 있어요.',
    likes: 23,
    comments: 15,
    time: '1일 전',
  },
]

const quickLinks = [
  {
    icon: BookOpen,
    title: '장례 절차 안내',
    description: '처음이라 막막하신가요? 절차를 쉽게 안내해드려요',
  },
  {
    icon: Calculator,
    title: '비용 가이드',
    description: '아이 체중별 예상 비용을 확인해보세요',
  },
  {
    icon: MessageCircle,
    title: '자주 묻는 질문',
    description: '많이 궁금해하시는 질문들을 모아놨어요',
  },
  {
    icon: Navigation,
    title: '찾아오시는 길',
    description: '업체별 위치와 교통편을 한눈에 확인하세요',
  },
]

const regions = [
  '서울',
  '경기',
  '인천',
  '부산',
  '대구',
  '대전',
  '광주',
  '울산',
  '세종',
  '강원',
  '충청',
  '전라',
  '경상',
  '제주',
]

function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="펫로그 홈">
          <HeartHandshake className="brand-mark" aria-hidden="true" />
          <span>
            <strong>펫로그</strong>
            <small>PetLog</small>
          </span>
        </a>
        <nav className="nav" aria-label="주요 메뉴">
          <a href="#compare">업체 비교</a>
          <a href="#funeral">장례 정보</a>
          <a href="#memory">추모 공간</a>
          <a href="#community">커뮤니티</a>
          <a href="#guide">이용 가이드</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="검색">
            <Search size={22} />
          </button>
          <button className="icon-button" type="button" aria-label="알림">
            <Bell size={21} />
          </button>
          <button className="login-button" type="button">
            로그인
          </button>
        </div>
      </header>

      <section className="hero-section">
        <img className="hero-image" src={bannerImage} alt="" />
        <div className="hero-content">
          <h1>소중한 우리 아이의 마지막 순간, 펫로그가 함께합니다</h1>
          <p className="lead">
            전국 반려동물 장례업체 비교부터 추모 공간까지 한 곳에서.
          </p>
          <div className="feature-row">
            {features.map(({ icon: Icon, title, description }) => (
              <article className="feature-item" key={title}>
                <span className="feature-icon">
                  <Icon size={25} />
                </span>
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="search-panel" aria-label="장례 서비스 검색">
        <div className="search-copy">
          우리 아이에게
          <br />
          맞는 장례 서비스를
          <br />
          찾아보세요
        </div>
        <label className="select-field">
          <span>지역 선택</span>
          <button type="button">
            <MapPin size={19} />
            지역을 선택하세요
            <ChevronDown size={18} />
          </button>
        </label>
        <label className="select-field">
          <span>아이 종류</span>
          <button type="button">
            <PawPrint size={20} />
            아이 종류를 선택하세요
            <ChevronDown size={18} />
          </button>
        </label>
        <label className="select-field">
          <span>아이 체중</span>
          <button type="button">
            <LockKeyhole size={18} />
            체중을 선택하세요
            <ChevronDown size={18} />
          </button>
        </label>
        <button className="compare-button" type="button">
          업체 비교하기
        </button>
      </section>

      <section className="main-grid">
        <div className="providers-section" id="compare">
          <div className="section-heading">
            <h2>추천 장례업체</h2>
            <a href="#more">더보기</a>
          </div>
          <div className="provider-grid">
            {providers.map((provider, index) => (
              <article className="provider-card" key={provider.name}>
                <div className={`image-placeholder provider-image tone-${index + 1}`}>
                  <button type="button" aria-label={`${provider.name} 관심 업체`}>
                    <Heart size={19} />
                  </button>
                </div>
                <div className="provider-body">
                  <div className="provider-title">
                    <h3>{provider.name}</h3>
                    {provider.badge ? <span>{provider.badge}</span> : null}
                  </div>
                  <p className="meta">
                    <MapPin size={14} />
                    {provider.area}
                  </p>
                  <p className="rating">
                    <Star size={15} fill="currentColor" />
                    <strong>{provider.rating}</strong>
                    <span>({provider.reviews})</span>
                  </p>
                  <p className="price">{provider.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="stories-section" id="community">
          <div className="section-heading">
            <h2>따뜻한 추모 이야기</h2>
            <a href="#stories">더보기</a>
          </div>
          <div className="story-list">
            {stories.map((story, index) => (
              <article className="story-item" key={story.title}>
                <div className={`image-placeholder story-thumb tone-${index + 5}`} />
                <div>
                  <h3>{story.title}</h3>
                  <p>{story.body}</p>
                  <div className="story-meta">
                    <span>
                      <Heart size={13} />
                      {story.likes}
                    </span>
                    <span>
                      <MessageCircle size={13} />
                      {story.comments}
                    </span>
                    <time>{story.time}</time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="quick-links" id="guide">
        {quickLinks.map(({ icon: Icon, title, description }) => (
          <a href="#guide" key={title}>
            <span>
              <Icon size={26} />
            </span>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="region-bar" aria-label="지역별 찾기">
        <h2>지역별 찾기</h2>
        <div>
          {regions.map((region) => (
            <button type="button" key={region}>
              {region}
            </button>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <a className="brand" href="/" aria-label="펫로그 홈">
            <HeartHandshake className="brand-mark" aria-hidden="true" />
            <span>
              <strong>펫로그</strong>
              <small>PetLog</small>
            </span>
          </a>
          <p>
            소중한 우리 아이의 마지막 순간,
            <br />
            펫로그가 함께합니다.
          </p>
        </div>
        <div className="footer-column">
          <h2>서비스</h2>
          <a href="#compare">업체 비교</a>
          <a href="#funeral">장례 정보</a>
          <a href="#memory">추모 공간</a>
          <a href="#guide">이용 가이드</a>
        </div>
        <div className="footer-column">
          <h2>고객지원</h2>
          <a href="#faq">자주 묻는 질문</a>
          <a href="#notice">공지사항</a>
          <a href="#terms">이용약관</a>
          <a href="#privacy">개인정보처리방침</a>
        </div>
        <div className="footer-column">
          <h2>회사 정보</h2>
          <a href="#company">회사소개</a>
          <a href="#partner">제휴 문의</a>
          <a href="#ads">광고 문의</a>
        </div>
        <div className="footer-column contact">
          <h2>고객센터 1577-1234</h2>
          <p>평일 09:00 - 18:00</p>
          <p>점심 12:00 - 13:00</p>
          <p>주말 및 공휴일 휴무</p>
        </div>
      </footer>
      <p className="copyright">© 2024 PetLog. All rights reserved.</p>
    </main>
  )
}

export default App
