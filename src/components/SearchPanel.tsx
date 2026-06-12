import { ChevronDown, LockKeyhole, MapPin, PawPrint } from 'lucide-react'
import {
  petTypeOptions,
  regionOptions,
  weightOptions,
  type PetType,
  type WeightRange,
} from '../data/providers'
import type { ProviderFilters } from '../services/providerService'

export type OpenDropdown = 'region' | 'petType' | 'weight' | null

type FilterKey = keyof Required<ProviderFilters>

type SearchPanelProps = {
  filters: Required<ProviderFilters>
  openDropdown: OpenDropdown
  onDropdownChange: (dropdown: OpenDropdown) => void
  onFilterChange: <K extends FilterKey>(
    key: K,
    value: Required<ProviderFilters>[K],
  ) => void
  onCompare: () => void
}

function toggleDropdown(
  current: OpenDropdown,
  target: Exclude<OpenDropdown, null>,
) {
  return current === target ? null : target
}

export function SearchPanel({
  filters,
  openDropdown,
  onDropdownChange,
  onFilterChange,
  onCompare,
}: SearchPanelProps) {
  return (
    <section className="search-panel" aria-label="장례 서비스 검색">
      <div className="search-copy">
        우리 반려동물에게
        <br />
        맞는 장례 서비스를
        <br />
        찾아보세요
      </div>
      <div className="select-field" data-dropdown="region">
        <span>지역 선택</span>
        <button
          type="button"
          aria-expanded={openDropdown === 'region'}
          onClick={() => onDropdownChange(toggleDropdown(openDropdown, 'region'))}
        >
          <MapPin size={19} />
          {filters.region || '지역을 선택하세요'}
          <ChevronDown size={18} />
        </button>
        {openDropdown === 'region' ? (
          <div className="dropdown-menu">
            <button type="button" onClick={() => onFilterChange('region', '')}>
              전체 지역
            </button>
            {regionOptions.map((region) => (
              <button
                type="button"
                key={region}
                onClick={() => onFilterChange('region', region)}
              >
                {region}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div className="select-field" data-dropdown="petType">
        <span>반려동물 종류</span>
        <button
          type="button"
          aria-expanded={openDropdown === 'petType'}
          onClick={() => onDropdownChange(toggleDropdown(openDropdown, 'petType'))}
        >
          <PawPrint size={20} />
          {filters.petType || '종류를 선택하세요'}
          <ChevronDown size={18} />
        </button>
        {openDropdown === 'petType' ? (
          <div className="dropdown-menu">
            <button type="button" onClick={() => onFilterChange('petType', '')}>
              전체 종류
            </button>
            {petTypeOptions.map((petType) => (
              <button
                type="button"
                key={petType}
                onClick={() => onFilterChange('petType', petType as PetType)}
              >
                {petType}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div className="select-field" data-dropdown="weight">
        <span>체중 선택</span>
        <button
          type="button"
          aria-expanded={openDropdown === 'weight'}
          onClick={() => onDropdownChange(toggleDropdown(openDropdown, 'weight'))}
        >
          <LockKeyhole size={18} />
          {filters.weightRange || '체중을 선택하세요'}
          <ChevronDown size={18} />
        </button>
        {openDropdown === 'weight' ? (
          <div className="dropdown-menu">
            <button
              type="button"
              onClick={() => onFilterChange('weightRange', '')}
            >
              전체 체중
            </button>
            {weightOptions.map((weight) => (
              <button
                type="button"
                key={weight}
                onClick={() => onFilterChange('weightRange', weight as WeightRange)}
              >
                {weight}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <button className="compare-button" type="button" onClick={onCompare}>
        업체 비교하기
      </button>
    </section>
  )
}
