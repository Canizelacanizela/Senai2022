/*
  Warnings:

  - Added the required column `descricao` to the `UserCliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usercliente` ADD COLUMN `descricao` VARCHAR(191) NOT NULL;
