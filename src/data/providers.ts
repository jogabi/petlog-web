export type PetType = '강아지' | '고양이' | '기타'

export type WeightRange = '5kg 미만' | '5-10kg' | '10-20kg' | '20kg 이상'

export type FuneralProvider = {
  id: string
  name: string
  region: string
  district: string
  rating: number
  reviewCount: number
  basePrice: number
  priceLabel: string
  badge?: string
  supportedPetTypes: PetType[]
  maxWeightKg: number
  imageTone: number
}

export const regionOptions = [
  '서울',
  '경기',
  '인천',
  '부산',
  '대구',
  '대전',
  '광주',
  '울산',
  '세종',
  '강원',
  '충청',
  '전라',
  '경상',
  '제주',
] as const

export const petTypeOptions: PetType[] = ['강아지', '고양이', '기타']

export const weightOptions: WeightRange[] = [
  '5kg 미만',
  '5-10kg',
  '10-20kg',
  '20kg 이상',
]

export const funeralProviders: FuneralProvider[] = [
  {
    id: '21gram',
    name: '21그램',
    region: '서울',
    district: '강남구',
    rating: 4.9,
    reviewCount: 324,
    basePrice: 350000,
    priceLabel: '개별 화장 35만원~',
    badge: '인기',
    supportedPetTypes: ['강아지', '고양이'],
    maxWeightKg: 20,
    imageTone: 1,
  },
  {
    id: 'pet-forest',
    name: '펫포레스트',
    region: '경기',
    district: '용인시',
    rating: 4.8,
    reviewCount: 256,
    basePrice: 400000,
    priceLabel: '개별 화장 40만원~',
    supportedPetTypes: ['강아지', '고양이', '기타'],
    maxWeightKg: 30,
    imageTone: 2,
  },
  {
    id: 'pet-for-you',
    name: '펫포유',
    region: '서울',
    district: '강서구',
    rating: 4.7,
    reviewCount: 198,
    basePrice: 380000,
    priceLabel: '개별 화장 38만원~',
    supportedPetTypes: ['강아지', '고양이'],
    maxWeightKg: 15,
    imageTone: 3,
  },
  {
    id: 'rainbow-angel',
    name: '레인보우엔젤',
    region: '인천',
    district: '서구',
    rating: 4.8,
    reviewCount: 187,
    basePrice: 370000,
    priceLabel: '개별 화장 37만원~',
    supportedPetTypes: ['강아지', '고양이', '기타'],
    maxWeightKg: 25,
    imageTone: 4,
  },
]

export function getMaxWeightKg(weightRange: WeightRange | '') {
  if (weightRange === '5kg 미만') return 5
  if (weightRange === '5-10kg') return 10
  if (weightRange === '10-20kg') return 20
  if (weightRange === '20kg 이상') return 99
  return 0
}
