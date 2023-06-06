/*
  Warnings:

  - Added the required column `companyId` to the `ProductSale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productsale` ADD COLUMN `companyId` VARCHAR(191) NOT NULL;
