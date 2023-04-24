/*
  Warnings:

  - You are about to drop the `avalia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clientes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tabelaprofissionais` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_cliente` to the `Propostas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `avalia` DROP FOREIGN KEY `Avalia_id_cliente_fkey`;

-- DropForeignKey
ALTER TABLE `avalia` DROP FOREIGN KEY `Avalia_id_profissional_fkey`;

-- DropForeignKey
ALTER TABLE `propostas` DROP FOREIGN KEY `Propostas_id_profissional_fkey`;

-- DropForeignKey
ALTER TABLE `tabelaprofissionais` DROP FOREIGN KEY `tabelaProfissionais_id_categoria_fkey`;

-- AlterTable
ALTER TABLE `propostas` ADD COLUMN `id_cliente` INTEGER NOT NULL;

-- DropTable
DROP TABLE `avalia`;

-- DropTable
DROP TABLE `clientes`;

-- DropTable
DROP TABLE `tabelaprofissionais`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `UserCliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserProfissionais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `biografia` VARCHAR(191) NOT NULL,
    `porhora` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `id_categoria` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `avaliaProfisional` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cliente` INTEGER NOT NULL,
    `comentario` VARCHAR(191) NOT NULL,
    `id_profissional` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserProfissionais` ADD CONSTRAINT `UserProfissionais_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `categoriaProfissoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliaProfisional` ADD CONSTRAINT `avaliaProfisional_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `UserCliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliaProfisional` ADD CONSTRAINT `avaliaProfisional_id_profissional_fkey` FOREIGN KEY (`id_profissional`) REFERENCES `UserProfissionais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Propostas` ADD CONSTRAINT `Propostas_id_profissional_fkey` FOREIGN KEY (`id_profissional`) REFERENCES `UserProfissionais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Propostas` ADD CONSTRAINT `Propostas_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `UserCliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
