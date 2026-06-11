import { Bell, HeartHandshake, Search } from 'lucide-react'

export function Header() {
  return (
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
  )
}
