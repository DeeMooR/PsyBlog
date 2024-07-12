export interface IService {
  id: number,
  name: string,
  price: number,
  time: string,
}

export interface IFAQ {
  id: number,
  title: string,
  text: string,
}

export interface ICard {
  id: number,
  title: string,
  text: string,
  image: string,
  date: string,
}

export interface IShortCard {
  id: number,
  title: string,
  description: string,
  image: string,
  date: string,
}