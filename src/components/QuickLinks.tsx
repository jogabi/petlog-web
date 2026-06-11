import { BookOpen, Calculator, MessageCircle, Navigation } from 'lucide-react'

const quickLinks = [
  {
    icon: BookOpen,
    title: '장례 절차 안내',
    description: '처음이라 막막하신가요? 절차를 쉽게 안내해드려요',
  },
  {
    icon: Calculator,
    title: '비용 가이드',
    description: '아이 체중별 예상 비용을 확인해보세요',
  },
  {
    icon: MessageCircle,
    title: '자주 묻는 질문',
    description: '많이 궁금해하시는 질문들을 모아놨어요',
  },
  {
    icon: Navigation,
    title: '업체 선택 가이드',
    description: '후회 없는 선택을 위한 체크포인트를 확인하세요',
  },
]

export function QuickLinks() {
  return (
    <section className="quick-links" id="guide">
      {quickLinks.map(({ icon: Icon, title, description }) => (
        <a href="#guide" key={title}>
          <span>
            <Icon size={26} />
          </span>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </a>
      ))}
    </section>
  )
}
