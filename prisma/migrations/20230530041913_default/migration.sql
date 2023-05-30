/*
  Warnings:

  - A unique constraint covering the columns `[cnpj_cpf]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cnpj]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Client_cnpj_cpf_key` ON `Client`(`cnpj_cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `Company_cnpj_key` ON `Company`(`cnpj`);
