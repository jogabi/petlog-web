import { HeartHandshake } from 'lucide-react'

export function Footer() {
  return (
    <>
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
      </footer>
      <p className="copyright">© 2024 PetLog. All rights reserved.</p>
    </>
  )
}
