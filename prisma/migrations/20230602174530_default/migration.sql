/*
  Warnings:

  - You are about to drop the column `companyId` on the `client` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `Client_companyId_fkey`;

-- AlterTable
ALTER TABLE `client` DROP COLUMN `companyId`;
