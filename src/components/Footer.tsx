import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-brand">
          <a className="brand" href="/" aria-label="펫로그 홈">
            <BrandLogo />
            <span>
              <strong>펫로그</strong>
              <small>PetLog</small>
            </span>
          </a>
          <p>
            소중한 우리 반려동물의 마지막 순간,
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
          <a href="#popular-guides">정보 이야기</a>
          <a href="#memory">추모 공간</a>
          <a href="#community">커뮤니티</a>
          <a href="#guide">이용 안내</a>
        </div>
        <div className="footer-column">
          <h2>고객지원</h2>
          <a href="#faq">자주 묻는 질문</a>
          <a href="#notice">공지사항</a>
          <a href="#terms">이용약관</a>
          <a href="#privacy">개인정보처리방침</a>
        </div>
      </footer>
      <p className="copyright">© 2026 PetLog. All rights reserved.</p>
    </>
  )
}
