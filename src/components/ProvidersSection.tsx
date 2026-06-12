import { Heart, MapPin, Star } from 'lucide-react'
import type { RefObject } from 'react'
import type { FuneralProvider } from '../data/providers'
import type { ProviderFilters } from '../services/providerService'

type ProvidersSectionProps = {
  sectionRef: RefObject<HTMLDivElement | null>
  providers: FuneralProvider[]
  hasCompared: boolean
  filters: Required<ProviderFilters>
}

function getProviderTags(providerId: string) {
  if (providerId === '21gram') return ['개별 화장', '픽업 가능', '추모관']
  if (providerId === 'pet-forest') return ['개별 화장', '수목장', '픽업 가능']
  if (providerId === 'pet-for-you') return ['개별 화장', '유골 보관']
  return ['개별 화장', '추모실 보유']
}

export function ProvidersSection({
  sectionRef,
  providers,
  hasCompared,
  filters,
}: ProvidersSectionProps) {
  const resultText = hasCompared
    ? `${providers.length}개 업체가 조건에 맞아요`
    : '추천 장례업체'

  return (
    <section className="providers-section" id="compare" ref={sectionRef}>
      <div className="section-heading">
        <div>
          <h2>{resultText}</h2>
          {hasCompared ? (
            <p className="filter-summary">
              {[filters.region, filters.petType, filters.weightRange]
                .filter(Boolean)
                .join(' · ') || '전체 조건'}
            </p>
          ) : null}
        </div>
        <a href="#more">전체 업체 보기</a>
      </div>
      {providers.length > 0 ? (
        <div className="provider-grid">
          {providers.map((provider) => (
            <article className="provider-card" key={provider.id}>
              <div
                className={`image-placeholder provider-image tone-${provider.imageTone}`}
              >
                <img src={provider.imageSrc} alt={`${provider.name} 장례식장 이미지`} />
                <button type="button" aria-label={`${provider.name} 관심 업체`}>
                  <Heart size={19} />
                </button>
              </div>
              <div className="provider-body">
                <div className="provider-title">
                  <h3>{provider.name}</h3>
                  {provider.badge ? <span>{provider.badge}</span> : null}
                </div>
                <p className="meta">
                  <MapPin size={14} />
                  {provider.region} {provider.district}
                </p>
                <p className="rating">
                  <Star size={15} fill="currentColor" />
                  <strong>{provider.rating.toFixed(1)}</strong>
                  <span>({provider.reviewCount})</span>
                </p>
                <p className="price">{provider.priceLabel}</p>
                <div className="provider-tags">
                  {getProviderTags(provider.id).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          조건에 맞는 업체가 아직 없어요. 조건을 조금 넓혀서 다시 비교해보세요.
        </div>
      )}
    </section>
  )
}
