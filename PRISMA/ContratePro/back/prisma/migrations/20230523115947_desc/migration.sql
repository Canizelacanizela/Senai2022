/*
  Warnings:

  - Added the required column `imagem` to the `UserCliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usercliente` ADD COLUMN `imagem` VARCHAR(191) NOT NULL;
