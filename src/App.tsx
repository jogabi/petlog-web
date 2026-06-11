import { useEffect, useMemo, useRef, useState } from 'react'
import { CostCases } from './components/CostCases'
import { Footer } from './components/Footer'
import { GuideCta } from './components/GuideCta'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PopularGuides } from './components/PopularGuides'
import { ProvidersSection } from './components/ProvidersSection'
import {
  SearchPanel,
  type OpenDropdown,
} from './components/SearchPanel'
import { QuickLinks } from './components/QuickLinks'
import { funeralProviders } from './data/providers'
import {
  getLocalFuneralProviders,
  type ProviderFilters,
} from './services/providerService'
import './App.css'

const defaultFilters: Required<ProviderFilters> = {
  region: '',
  petType: '',
  weightRange: '',
}

function App() {
  const compareSectionRef = useRef<HTMLDivElement>(null)
  const [filters, setFilters] = useState(defaultFilters)
  const [appliedFilters, setAppliedFilters] = useState(defaultFilters)
  const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null)
  const [hasCompared, setHasCompared] = useState(false)

  const comparedProviders = useMemo(
    () => getLocalFuneralProviders(appliedFilters),
    [appliedFilters],
  )

  const visibleProviders = hasCompared ? comparedProviders : funeralProviders

  useEffect(() => {
    if (!openDropdown) return

    const closeDropdownOnOutsideClick = (event: PointerEvent) => {
      const target = event.target

      if (!(target instanceof Element)) {
        setOpenDropdown(null)
        return
      }

      const activeSelect = target.closest('[data-dropdown]')

      if (activeSelect?.getAttribute('data-dropdown') === openDropdown) {
        return
      }

      setOpenDropdown(null)
    }

    document.addEventListener('pointerdown', closeDropdownOnOutsideClick)

    return () => {
      document.removeEventListener('pointerdown', closeDropdownOnOutsideClick)
    }
  }, [openDropdown])

  const updateFilter = <K extends keyof typeof filters>(
    key: K,
    value: (typeof filters)[K],
  ) => {
    setFilters((current) => ({ ...current, [key]: value }))
    setOpenDropdown(null)
  }

  const handleCompare = () => {
    setAppliedFilters(filters)
    setHasCompared(true)
    compareSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <main className="app-shell">
      <Header />
      <Hero />
      <SearchPanel
        filters={filters}
        openDropdown={openDropdown}
        onDropdownChange={setOpenDropdown}
        onFilterChange={updateFilter}
        onCompare={handleCompare}
      />
      <ProvidersSection
        sectionRef={compareSectionRef}
        providers={visibleProviders}
        hasCompared={hasCompared}
        filters={filters}
      />
      <QuickLinks />
      <CostCases />
      <GuideCta />
      <PopularGuides />
      <Footer />
    </main>
  )
}

export default App
