import { ChevronRight } from 'lucide-react'
import guideCtaFlower from '../assets/guide-cta-flower.png'

export function GuideCta() {
  return (
    <section className="guide-cta">
      <img
        className="cta-image"
        src={guideCtaFlower}
        alt=""
        aria-hidden="true"
      />
      <div className="guide-cta-copy">
        <h2>처음 이용하시나요?</h2>
        <p>장례 준비부터 추모까지, 모든 과정을 이용 가이드에서 확인해보세요.</p>
      </div>
      <a href="#guide">
        이용 가이드 보기
        <ChevronRight size={16} aria-hidden="true" />
      </a>
    </section>
  )
}
