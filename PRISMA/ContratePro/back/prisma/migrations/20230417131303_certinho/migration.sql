/*
  Warnings:

  - Added the required column `biografia` to the `tabelaProfissionais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tabelaprofissionais` ADD COLUMN `biografia` VARCHAR(191) NOT NULL;
