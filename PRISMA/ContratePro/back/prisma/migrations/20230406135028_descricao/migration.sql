/*
  Warnings:

  - Added the required column `descricao` to the `tabela_Profissionais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tabela_profissionais` ADD COLUMN `descricao` VARCHAR(191) NOT NULL;
