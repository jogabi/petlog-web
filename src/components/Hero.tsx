import { CircleDollarSign, Heart, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: CircleDollarSign,
    title: '실제 비용 비교',
    description: '업체별 실제 비용을 한눈에 비교해보세요',
  },
  {
    icon: ShieldCheck,
    title: '투명한 정보 제공',
    description: '서비스와 후기를 기반으로 정확한 정보를 제공합니다',
  },
  {
    icon: Heart,
    title: '후회 없는 선택',
    description: '우리 아이에게 가장 좋은 선택을 할 수 있도록 도와드려요',
  },
]

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          소중한 우리 아이의 마지막 순간,
          <br />
          <span className="hero-accent">펫로그</span>가 함께합니다
        </h1>
        <p className="lead">
          투명한 정보와 비교로
          <br />
          후회 없는 선택을 도와드릴게요.
        </p>
        <div className="feature-row">
          {features.map(({ icon: Icon, title, description }) => (
            <article className="feature-item" key={title}>
              <span className="feature-icon">
                <Icon size={25} />
              </span>
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
