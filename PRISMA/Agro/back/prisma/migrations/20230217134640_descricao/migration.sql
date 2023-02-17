/*
  Warnings:

  - You are about to drop the column `CNH` on the `motorista` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `motorista` table. All the data in the column will be lost.
  - Added the required column `marca` to the `Frota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_veiculo` to the `ManutencaoV` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnh` to the `Motorista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Motorista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_veiculo` to the `OperacaoV` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `frota` ADD COLUMN `marca` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `manutencaov` ADD COLUMN `id_veiculo` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `motorista` DROP COLUMN `CNH`,
    DROP COLUMN `senha`,
    ADD COLUMN `cnh` VARCHAR(191) NOT NULL,
    ADD COLUMN `cpf` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `operacaov` ADD COLUMN `id_veiculo` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `tipo` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `ManutencaoV` ADD CONSTRAINT `ManutencaoV_id_veiculo_fkey` FOREIGN KEY (`id_veiculo`) REFERENCES `Frota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OperacaoV` ADD CONSTRAINT `OperacaoV_id_veiculo_fkey` FOREIGN KEY (`id_veiculo`) REFERENCES `Frota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
