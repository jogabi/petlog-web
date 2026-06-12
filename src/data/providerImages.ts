import providerDummy1 from '../assets/providers/provider-dummy-1.png'
import providerDummy2 from '../assets/providers/provider-dummy-2.png'
import providerDummy3 from '../assets/providers/provider-dummy-3.png'
import providerDummy4 from '../assets/providers/provider-dummy-4.png'
import providerDummy5 from '../assets/providers/provider-dummy-5.png'
import providerDummy6 from '../assets/providers/provider-dummy-6.png'
import providerDummy7 from '../assets/providers/provider-dummy-7.png'
import providerDummy8 from '../assets/providers/provider-dummy-8.png'

export const providerImages = [
  providerDummy1,
  providerDummy2,
  providerDummy3,
  providerDummy4,
  providerDummy5,
  providerDummy6,
  providerDummy7,
  providerDummy8,
] as const

export const visibleProviderImages = providerImages.slice(0, 4)
export const moreProviderImages = providerImages.slice(4)
