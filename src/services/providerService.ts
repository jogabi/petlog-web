import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  type QueryConstraint,
} from 'firebase/firestore'
import { db } from '../lib/firebase'
import {
  funeralProviders,
  getMaxWeightKg,
  type FuneralProvider,
  type PetType,
  type WeightRange,
} from '../data/providers'

export type ProviderFilters = {
  region?: string
  petType?: PetType | ''
  weightRange?: WeightRange | ''
}

export function filterProviders(
  providers: FuneralProvider[],
  filters: ProviderFilters,
) {
  const maxWeight = getMaxWeightKg(filters.weightRange ?? '')

  return providers.filter((provider) => {
    const regionMatches = !filters.region || provider.region === filters.region
    const petMatches =
      !filters.petType || provider.supportedPetTypes.includes(filters.petType)
    const weightMatches = !maxWeight || provider.maxWeightKg >= maxWeight

    return regionMatches && petMatches && weightMatches
  })
}

export async function fetchFuneralProviders(filters: ProviderFilters = {}) {
  const constraints: QueryConstraint[] = [orderBy('rating', 'desc')]

  if (filters.region) {
    constraints.push(where('region', '==', filters.region))
  }

  const snapshot = await getDocs(
    query(collection(db, 'funeralProviders'), ...constraints),
  )

  const providers = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as FuneralProvider[]

  return filterProviders(providers, filters)
}

export function getLocalFuneralProviders(filters: ProviderFilters = {}) {
  return filterProviders(funeralProviders, filters)
}
