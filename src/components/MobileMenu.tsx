import {
  BookOpen,
  Building2,
  Calculator,
  ChevronRight,
  Clock,
  Headphones,
  Heart,
  MessageCircle,
  Settings,
  UserRound,
  X,
  type LucideIcon,
} from 'lucide-react'

type MobileMenuItem = {
  label: string
  href: string
  icon: LucideIcon
}

const mainMenuItems: MobileMenuItem[] = [
  { label: '업체 비교', href: '#compare', icon: Building2 },
  { label: '비용 가이드', href: '#cost-cases', icon: Calculator },
  { label: '장례 절차', href: '#popular-guides', icon: BookOpen },
  { label: '함께 읽는 글', href: '#popular-guides', icon: BookOpen },
  { label: '추모 공간', href: '#memory', icon: Heart },
  { label: '커뮤니티', href: '#community', icon: MessageCircle },
  { label: '고객센터', href: '#customer-center', icon: Headphones },
]

const activityMenuItems: MobileMenuItem[] = [
  { label: '찜한 업체', href: '#saved-providers', icon: Heart },
  { label: '최근 본 업체', href: '#recent-providers', icon: Clock },
]

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="mobile-menu-overlay" role="presentation" onClick={onClose}>
      <aside
        id="mobile-menu"
        className="mobile-menu-panel"
        aria-label="모바일 메뉴"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mobile-menu-header">
          <button className="mobile-menu-close" type="button" aria-label="메뉴 닫기" onClick={onClose}>
            <X size={25} />
          </button>
        </div>

        <a className="mobile-login-card" href="#login" onClick={onClose}>
          <span className="mobile-login-icon" aria-hidden="true">
            <UserRound size={24} />
          </span>
          <span>
            <strong>로그인 / 회원가입</strong>
            <small>펫로그에 로그인하고 더 많은 서비스를 이용해보세요.</small>
          </span>
        </a>

        <nav className="mobile-menu-list" aria-label="모바일 주요 메뉴">
          {mainMenuItems.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} onClick={onClose}>
              <Icon size={24} aria-hidden="true" />
              <span>{label}</span>
              <ChevronRight size={20} aria-hidden="true" />
            </a>
          ))}
        </nav>

        <nav className="mobile-menu-list mobile-menu-activity" aria-label="활동 메뉴">
          {activityMenuItems.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} onClick={onClose}>
              <Icon size={24} aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <nav className="mobile-menu-list mobile-menu-settings" aria-label="설정 메뉴">
          <a href="#settings" onClick={onClose}>
            <Settings size={24} aria-hidden="true" />
            <span>설정</span>
          </a>
        </nav>

        <a className="mobile-menu-cta" href="#memory" onClick={onClose}>
          <span>
            <strong>소중한 추억을 간직하는 공간</strong>
            <small>추모 공간에서 아이를 기억하고 마음을 나눠보세요.</small>
            <b>
              추모 공간 바로가기
              <ChevronRight size={16} aria-hidden="true" />
            </b>
          </span>
          <i aria-hidden="true" />
        </a>
      </aside>
    </div>
  )
}
