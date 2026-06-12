import { Bell, Search } from 'lucide-react'
import { BrandLogo } from './BrandLogo'

export function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="펫로그 홈">
        <BrandLogo />
        <span>
          <strong>펫로그</strong>
          <small>PetLog</small>
        </span>
      </a>
      <nav className="nav" aria-label="주요 메뉴">
        <a href="#compare">업체 비교</a>
        <a href="#popular-guides">정보 이야기</a>
        <a href="#memory">추모 공간</a>
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
