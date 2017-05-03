export class Property {
  id: number;
  created: string;
  title: string;
  default_rate: number;
  spring_rate: number;
  summer_rate: number;
  fall_rate: number;
  winter_rate: number;
  guests: number;
  beds: number;
  baths: number;
  description: string;
  amenities: string;
  house_rules: string;
  address: string;
  map_embed_src: string;
  images: [{}];
  reviews: [{}];
  special_rates: [{}];
  bookings: [{}];
  unavailable_dates: [{}];
}
