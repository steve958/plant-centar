export interface Item{
    id?: string,
    image: string,
    name: string,
    description?: string;
    category?: string;
    quantity_in_stock?: string;
    price: string;
    quantity?:number;
}