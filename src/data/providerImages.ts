import provider1 from '../assets/providers/provider-1.png'
import provider2 from '../assets/providers/provider-2.png'
import provider3 from '../assets/providers/provider-3.png'
import provider4 from '../assets/providers/provider-4.png'
import provider5 from '../assets/providers/provider-5.png'
import provider6 from '../assets/providers/provider-6.png'
import provider7 from '../assets/providers/provider-7.png'
import provider8 from '../assets/providers/provider-8.png'

export const providerImages = [
  provider1,
  provider2,
  provider3,
  provider4,
  provider5,
  provider6,
  provider7,
  provider8,
] as const

export const visibleProviderImages = providerImages.slice(0, 4)
