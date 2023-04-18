/*
  Warnings:

  - Added the required column `id_profissional` to the `Propostas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `propostas` ADD COLUMN `id_profissional` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Propostas` ADD CONSTRAINT `Propostas_id_profissional_fkey` FOREIGN KEY (`id_profissional`) REFERENCES `tabelaProfissionais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
