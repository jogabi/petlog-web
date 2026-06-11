import { CheckSquare } from 'lucide-react'

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
        <article className="checklist-card">
          <CheckSquare size={34} />
          <h3>업체 선택 체크리스트</h3>
          <p>좋은 장례업체를 선택하는 핵심 체크포인트 7가지</p>
          <button type="button">확인하기</button>
        </article>
      </div>
    </section>
  )
}
