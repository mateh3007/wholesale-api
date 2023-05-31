/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `OrderItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Client_id_key` ON `Client`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Company_id_key` ON `Company`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Order_id_key` ON `Order`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `OrderItem_id_key` ON `OrderItem`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Product_id_key` ON `Product`(`id`);
