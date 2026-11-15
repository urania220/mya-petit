export type Language = 'en' | 'pt';

export type MenuCategory =
  | 'toasts'
  | 'pancakes'
  | 'wraps'
  | 'burgers'
  | 'bowls'
  | 'shakes'
  | 'drinks'
  | 'brunch';

export interface MenuItem {
  id: string;
  name: string;
  namePt?: string;
  nameEn?: string;
  category: MenuCategory;
  descriptionEn: string;
  descriptionPt: string;
  price: string;
  tag?: string;
  isVegan?: boolean;
  isVegetarian?: boolean;
  isGlutenFreeFriendly?: boolean;
  image?: string;
  uberEatsUrl?: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}
