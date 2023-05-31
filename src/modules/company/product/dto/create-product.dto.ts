export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  amount: number;
  category?: string;
  brand?: string;
  supplier?: string;
  companyId: string;
}
