import { ChevronRight } from 'lucide-react'

export function GuideCta() {
  return (
    <section className="guide-cta">
      <div className="guide-cta-copy">
        <h2>좋은 장례업체를 고르는 7가지 기준</h2>
        <p>장례 준비부터 추모까지, 모든 과정을 이용 가이드에서 확인해보세요.</p>
      </div>
      <a href="#guide">
        체크리스트 보기
        <ChevronRight size={16} aria-hidden="true" />
      </a>
    </section>
  )
}
