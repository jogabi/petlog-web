import { useEffect, useState } from 'react'
import { Bell, Menu, Search } from 'lucide-react'
import { BrandLogo } from './BrandLogo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMobileMenuOpen])

  return (
    <>
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
          <a href="#popular-guides">함께 읽는 글</a>
          <a href="#memory">추모 공간</a>
          <a href="#community">커뮤니티</a>
          <a href="#customer-center">고객센터</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="검색">
            <Search size={22} />
          </button>
          <button className="icon-button" type="button" aria-label="알림">
            <Bell size={21} />
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
          <button className="login-button" type="button">
            로그인
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
