/*
  Warnings:

  - You are about to alter the column `ativo` on the `equipamentos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `equipamentos` MODIFY `ativo` INTEGER NOT NULL;
