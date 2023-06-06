/*
  Warnings:

  - Added the required column `productName` to the `ProductSale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productsale` ADD COLUMN `productName` VARCHAR(191) NOT NULL;
