import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Bell,
  BookOpen,
  Calculator,
  CheckSquare,
  ChevronDown,
  CircleDollarSign,
  Heart,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Navigation,
  PawPrint,
  Search,
  ShieldCheck,
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
    icon: CircleDollarSign,
    title: '실제 비용 비교',
    description: '업체별 실제 비용을 한눈에 비교해보세요',
  },
  {
    icon: ShieldCheck,
    title: '투명한 정보 제공',
    description: '서비스와 후기를 기반으로 정확한 정보를 제공합니다',
  },
  {
    icon: Heart,
    title: '후회 없는 선택',
    description: '우리 아이에게 가장 좋은 선택을 할 수 있도록 도와드려요',
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
    title: '업체 선택 가이드',
    description: '후회 없는 선택을 위한 체크포인트를 확인하세요',
  },
]

const costCases = [
  {
    pet: '강아지 · 5kg',
    title: '개별 화장',
    total: '총 비용 42만원',
    details: ['기본 화장 35만원', '픽업 5만원', '추모 용품 2만원'],
    tone: 5,
  },
  {
    pet: '고양이 · 4kg',
    title: '개별 화장',
    total: '총 비용 38만원',
    details: ['기본 화장 30만원', '픽업 5만원', '추모 용품 3만원'],
    tone: 6,
  },
  {
    pet: '강아지 · 10kg',
    title: '개별 화장',
    total: '총 비용 58만원',
    details: ['기본 화장 50만원', '픽업 5만원', '추모 용품 3만원'],
    tone: 7,
  },
]

const popularGuides = [
  {
    title: '강아지 화장 비용 총정리 (2026년 기준)',
    description: '지역별 평균 비용과 업체별 비용 비교',
    tone: 1,
  },
  {
    title: '반려동물 장례 절차 처음부터 마무리까지',
    description: '처음이라도 이해하기 쉽게 단계별로 알려드려요',
    tone: 3,
  },
  {
    title: '개별화장 vs 단체화장 어떤 선택이 맞을까요?',
    description: '차이점과 장단점, 후기까지 한눈에 비교',
    tone: 6,
  },
  {
    title: '아이를 추모하는 다양한 방법',
    description: '일상 속에서 아이를 기억하는 방법들',
    tone: 4,
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

      if (!(target instanceof Element)) {
        setOpenDropdown(null)
        return
      }

      const activeSelect = target.closest('[data-dropdown]')

      if (activeSelect?.getAttribute('data-dropdown') === openDropdown) {
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
          <a href="#guide">이용 가이드</a>
          <a href="#community">커뮤니티</a>
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
            투명한 정보와 비교로
            <br />
            후회 없는 선택을 도와드릴게요.
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
        <div className="select-field" data-dropdown="region">
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
        <div className="select-field" data-dropdown="petType">
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
        <div className="select-field" data-dropdown="weight">
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

      <section className="providers-section" id="compare" ref={compareSectionRef}>
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
            <a href="#more">전체 업체 보기</a>
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
                    <div className="provider-tags">
                      {provider.id === '21gram' ? (
                        <>
                          <span>개별 화장</span>
                          <span>픽업 가능</span>
                          <span>추모관</span>
                        </>
                      ) : provider.id === 'pet-forest' ? (
                        <>
                          <span>개별 화장</span>
                          <span>수목장</span>
                          <span>픽업 가능</span>
                        </>
                      ) : provider.id === 'pet-for-you' ? (
                        <>
                          <span>개별 화장</span>
                          <span>유골 보관</span>
                        </>
                      ) : (
                        <>
                          <span>개별 화장</span>
                          <span>추모실 보유</span>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              조건에 맞는 업체가 아직 없어요. 조건을 조금 넓혀서 다시 비교해보세요.
            </div>
          )}
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

      <section className="cost-cases" id="cost-cases">
        <div className="section-heading">
          <h2>실제 비용 사례</h2>
          <a href="#cost-cases-more">더 많은 사례 보기</a>
        </div>
        <div className="cost-case-grid">
          {costCases.map((item) => (
            <article className="cost-card" key={item.pet}>
              <div className="cost-copy">
                <span>{item.pet}</span>
                <h3>{item.title}</h3>
                <strong>{item.total}</strong>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className={`image-placeholder cost-image tone-${item.tone}`} />
            </article>
          ))}
          <article className="checklist-card">
            <CheckSquare size={34} />
            <h3>업체 선택 체크리스트</h3>
            <p>좋은 장례업체를 선택하는 핵심 체크포인트 7가지</p>
            <button type="button">확인하기</button>
          </article>
        </div>
      </section>

      <section className="guide-cta">
        <div className="image-placeholder cta-image tone-3" />
        <div>
          <h2>처음 이용하시나요?</h2>
          <p>장례 준비부터 추모까지, 모든 과정을 이용 가이드에서 확인해보세요.</p>
        </div>
        <a href="#guide">이용 가이드 보기</a>
      </section>

      <section className="popular-guides" id="popular-guides">
        <div className="section-heading">
          <h2>인기 가이드</h2>
          <a href="#popular-guides-more">더보기</a>
        </div>
        <div className="popular-guide-grid">
          {popularGuides.map((guide) => (
            <article className="popular-guide-card" key={guide.title}>
              <div className={`image-placeholder popular-guide-image tone-${guide.tone}`} />
              <div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </div>
            </article>
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
