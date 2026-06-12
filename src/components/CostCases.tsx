import { Heart } from 'lucide-react'

const costCases = [
  {
    pet: '강아지 · 5kg',
    title: '개별 화장',
    total: '총 비용 42만원',
    details: ['기본 화장 35만원', '픽업 5만원', '추모 용품 2만원'],
    imageClass: 'cost-bg-1',
  },
  {
    pet: '고양이 · 4kg',
    title: '개별 화장',
    total: '총 비용 38만원',
    details: ['기본 화장 30만원', '픽업 5만원', '추모 용품 3만원'],
    imageClass: 'cost-bg-2',
  },
  {
    pet: '강아지 · 10kg',
    title: '개별 화장',
    total: '총 비용 58만원',
    details: ['기본 화장 50만원', '픽업 5만원', '추모 용품 3만원'],
    imageClass: 'cost-bg-3',
  },
]

export function CostCases() {
  return (
    <section className="cost-cases" id="cost-cases">
      <div className="section-heading">
        <h2>실제 비용 사례</h2>
        <a href="#cost-cases-more">더 많은 사례 보기</a>
      </div>
      <div className="cost-case-grid">
        {costCases.map((item) => (
          <article className={`cost-card ${item.imageClass}`} key={item.pet}>
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
          </article>
        ))}
        <article className="memorial-promo-card" id="memory">
          <div className="memorial-promo-copy">
            <span>
              추모 공간
              <Heart size={15} aria-hidden="true" />
            </span>
            <h3>
              우리 아이를 기억하는
              <br />
              추모 공간
            </h3>
            <p>
              따뜻한 추억을 간직하고,
              <br />
              마음을 나눌 수 있는 공간입니다.
            </p>
            <a href="#memory">추모 공간 둘러보기</a>
          </div>
        </article>
      </div>
    </section>
  )
}
