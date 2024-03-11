export interface ProductCharacteristic {
    name: string;
    value: string;
}

export interface ReviewModel {
    _id: string,
    name: string,
    title: string,
    description: string,
    rating: number,
    createdAt: Date;
}

export interface ProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    link: string;
    price: number;
    oldPrice: number;
    credit: number;
    description: string;
    characteristics: ProductCharacteristic[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    image: string;
    initialRating: number;
    reviews: ReviewModel[];
    reviewCount: number;
    reviewAvg?: number;
    advantages: string;
}