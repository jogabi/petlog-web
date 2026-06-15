import { BrandLogo } from './BrandLogo'

function NaverBlogIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5.4 4.2h13.2A2.4 2.4 0 0 1 21 6.6v8.5a2.4 2.4 0 0 1-2.4 2.4h-4.3L12 20.2l-2.3-2.7H5.4A2.4 2.4 0 0 1 3 15.1V6.6a2.4 2.4 0 0 1 2.4-2.4Zm2.25 4.15v5.15h2.83c1.24 0 2.07-.63 2.07-1.68 0-.7-.38-1.19-1.02-1.43.48-.25.76-.7.76-1.27 0-.94-.74-1.47-1.95-1.47H7.65Zm1.24 1.02h1.29c.54 0 .84.23.84.65s-.3.66-.84.66H8.89V9.37Zm0 2.2h1.46c.62 0 .95.25.95.72 0 .46-.33.7-.95.7H8.89v-1.42Zm4.65-3.92v5.85h1.21v-5.85h-1.21Zm2.2 0v5.85h1.21v-2.04h.82l1.12 2.04h1.37l-1.3-2.25c.74-.27 1.15-.88 1.15-1.73 0-1.17-.79-1.87-2.15-1.87h-2.22Zm1.21 1.04h.88c.67 0 1.03.29 1.03.83s-.36.84-1.03.84h-.88V8.69Z" />
    </svg>
  )
}

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
            <a href="#naver-blog" aria-label="네이버 블로그">
              <NaverBlogIcon />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h2>서비스</h2>
          <a href="#compare">업체 비교</a>
          <a href="#popular-guides">함께 읽는 글</a>
          <a href="#memory">추모 공간</a>
          <a href="#community">커뮤니티</a>
          <a href="#customer-center">고객센터</a>
        </div>
        <div className="footer-column" id="customer-center">
          <h2>고객센터</h2>
          <a href="#notice">공지사항</a>
          <a href="#terms">이용약관</a>
          <a href="#privacy">개인정보처리방침</a>
        </div>
      </footer>
      <p className="copyright">© 2026 PetLog. All rights reserved.</p>
    </>
  )
}
