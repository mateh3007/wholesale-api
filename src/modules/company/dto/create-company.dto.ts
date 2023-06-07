export class CreateCompanyDto {
  id?: string;
  name: string;
  password: string;
  address: string;
  email: string;
  phone: string;
  cnpj: string;
  balance: number;
}
