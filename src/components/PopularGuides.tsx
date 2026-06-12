const popularGuides = [
  {
    title: '강아지 화장 비용 총정리 (2026년 기준)',
    description: '지역별 평균 비용과 업체별 비용 비교',
    tone: 1,
  },
  {
    title: '반려동물 장례 절차 처음부터 마무리까지',
    description: '처음이라도 이해하기 쉽게 단계별로 알려드려요',
    tone: 3,
  },
  {
    title: '개별화장 vs 단체화장 어떤 선택이 맞을까요?',
    description: '차이점과 장단점, 후기까지 한눈에 비교',
    tone: 6,
  },
  {
    title: '반려동물을 추모하는 다양한 방법',
    description: '일상 속에서 반려동물을 기억하는 방법들',
    tone: 4,
  },
]

export function PopularGuides() {
  return (
    <section className="popular-guides" id="popular-guides">
      <div className="section-heading">
        <h2>정보 이야기</h2>
        <a href="#popular-guides-more">더보기</a>
      </div>
      <div className="popular-guide-grid">
        {popularGuides.map((guide) => (
          <article className="popular-guide-card" key={guide.title}>
            <div className={`image-placeholder popular-guide-image tone-${guide.tone}`} />
            <div>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
