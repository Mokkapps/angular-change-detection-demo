export interface Hero {
  id: string;
  name: string;
  details: HeroDetails;
}

export interface HeroDetails {
  age: number;
  country: string;
}
