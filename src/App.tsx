import { useEffect, useMemo, useRef, useState } from 'react'
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
import {
  getLocalFuneralProviders,
  type ProviderFilters,
} from './services/providerService'
import {
  funeralProviders,
  petTypeOptions,
  regionOptions,
  weightOptions,
  type PetType,
  type WeightRange,
} from './data/providers'
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

type OpenDropdown = 'region' | 'petType' | 'weight' | null

const defaultFilters: Required<ProviderFilters> = {
  region: '',
  petType: '',
  weightRange: '',
}

function App() {
  const compareSectionRef = useRef<HTMLDivElement>(null)
  const searchPanelRef = useRef<HTMLElement>(null)
  const [filters, setFilters] = useState(defaultFilters)
  const [appliedFilters, setAppliedFilters] = useState(defaultFilters)
  const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null)
  const [hasCompared, setHasCompared] = useState(false)

  const comparedProviders = useMemo(
    () => getLocalFuneralProviders(appliedFilters),
    [appliedFilters],
  )

  const visibleProviders = hasCompared ? comparedProviders : funeralProviders
  const resultText = hasCompared
    ? `${visibleProviders.length}개 업체가 조건에 맞아요`
    : '추천 장례업체'

  useEffect(() => {
    if (!openDropdown) return

    const closeDropdownOnOutsideClick = (event: PointerEvent) => {
      const target = event.target

      if (
        target instanceof Node &&
        searchPanelRef.current?.contains(target)
      ) {
        return
      }

      setOpenDropdown(null)
    }

    document.addEventListener('pointerdown', closeDropdownOnOutsideClick)

    return () => {
      document.removeEventListener('pointerdown', closeDropdownOnOutsideClick)
    }
  }, [openDropdown])

  const updateFilter = <K extends keyof typeof filters>(
    key: K,
    value: (typeof filters)[K],
  ) => {
    setFilters((current) => ({ ...current, [key]: value }))
    setOpenDropdown(null)
  }

  const handleCompare = () => {
    setAppliedFilters(filters)
    setHasCompared(true)
    compareSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

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

      <section
        className="search-panel"
        aria-label="장례 서비스 검색"
        ref={searchPanelRef}
      >
        <div className="search-copy">
          우리 아이에게
          <br />
          맞는 장례 서비스를
          <br />
          찾아보세요
        </div>
        <div className="select-field">
          <span>지역 선택</span>
          <button
            type="button"
            aria-expanded={openDropdown === 'region'}
            onClick={() =>
              setOpenDropdown((current) =>
                current === 'region' ? null : 'region',
              )
            }
          >
            <MapPin size={19} />
            {filters.region || '지역을 선택하세요'}
            <ChevronDown size={18} />
          </button>
          {openDropdown === 'region' ? (
            <div className="dropdown-menu">
              <button type="button" onClick={() => updateFilter('region', '')}>
                전체 지역
              </button>
              {regionOptions.map((region) => (
                <button
                  type="button"
                  key={region}
                  onClick={() => updateFilter('region', region)}
                >
                  {region}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="select-field">
          <span>아이 종류</span>
          <button
            type="button"
            aria-expanded={openDropdown === 'petType'}
            onClick={() =>
              setOpenDropdown((current) =>
                current === 'petType' ? null : 'petType',
              )
            }
          >
            <PawPrint size={20} />
            {filters.petType || '아이 종류를 선택하세요'}
            <ChevronDown size={18} />
          </button>
          {openDropdown === 'petType' ? (
            <div className="dropdown-menu">
              <button type="button" onClick={() => updateFilter('petType', '')}>
                전체 종류
              </button>
              {petTypeOptions.map((petType) => (
                <button
                  type="button"
                  key={petType}
                  onClick={() => updateFilter('petType', petType as PetType)}
                >
                  {petType}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="select-field">
          <span>아이 체중</span>
          <button
            type="button"
            aria-expanded={openDropdown === 'weight'}
            onClick={() =>
              setOpenDropdown((current) =>
                current === 'weight' ? null : 'weight',
              )
            }
          >
            <LockKeyhole size={18} />
            {filters.weightRange || '체중을 선택하세요'}
            <ChevronDown size={18} />
          </button>
          {openDropdown === 'weight' ? (
            <div className="dropdown-menu">
              <button
                type="button"
                onClick={() => updateFilter('weightRange', '')}
              >
                전체 체중
              </button>
              {weightOptions.map((weight) => (
                <button
                  type="button"
                  key={weight}
                  onClick={() =>
                    updateFilter('weightRange', weight as WeightRange)
                  }
                >
                  {weight}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <button className="compare-button" type="button" onClick={handleCompare}>
          업체 비교하기
        </button>
      </section>

      <section className="main-grid">
        <div className="providers-section" id="compare" ref={compareSectionRef}>
          <div className="section-heading">
            <div>
              <h2>{resultText}</h2>
              {hasCompared ? (
                <p className="filter-summary">
                  {[filters.region, filters.petType, filters.weightRange]
                    .filter(Boolean)
                    .join(' · ') || '전체 조건'}
                </p>
              ) : null}
            </div>
            <a href="#more">더보기</a>
          </div>
          {visibleProviders.length > 0 ? (
            <div className="provider-grid">
              {visibleProviders.map((provider) => (
                <article className="provider-card" key={provider.id}>
                  <div
                    className={`image-placeholder provider-image tone-${provider.imageTone}`}
                  >
                    <button
                      type="button"
                      aria-label={`${provider.name} 관심 업체`}
                    >
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
                      {provider.region} {provider.district}
                    </p>
                    <p className="rating">
                      <Star size={15} fill="currentColor" />
                      <strong>{provider.rating.toFixed(1)}</strong>
                      <span>({provider.reviewCount})</span>
                    </p>
                    <p className="price">{provider.priceLabel}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              조건에 맞는 업체가 아직 없어요. 조건을 조금 넓혀서 다시 비교해보세요.
            </div>
          )}
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
          {regionOptions.map((region) => (
            <button
              type="button"
              key={region}
              onClick={() => {
                setFilters((current) => ({ ...current, region }))
                setAppliedFilters((current) => ({ ...current, region }))
                setHasCompared(true)
              }}
            >
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
          <div className="social-icons" aria-label="소셜 링크">
            <a href="#instagram" aria-label="인스타그램">
              ig
            </a>
            <a href="#facebook" aria-label="페이스북">
              f
            </a>
          </div>
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
