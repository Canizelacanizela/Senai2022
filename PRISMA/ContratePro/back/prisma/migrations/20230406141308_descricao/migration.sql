/*
  Warnings:

  - You are about to drop the `categoria_profissoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tabela_profissionais` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `avalia` DROP FOREIGN KEY `Avalia_id_profissional_fkey`;

-- DropForeignKey
ALTER TABLE `tabela_profissionais` DROP FOREIGN KEY `tabela_Profissionais_id_categoria_fkey`;

-- DropTable
DROP TABLE `categoria_profissoes`;

-- DropTable
DROP TABLE `tabela_profissionais`;

-- CreateTable
CREATE TABLE `categoriaProfissoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_categoria` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tabelaProfissionais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_p` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `preco_h` DOUBLE NOT NULL,
    `id_categoria` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tabelaProfissionais` ADD CONSTRAINT `tabelaProfissionais_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `categoriaProfissoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avalia` ADD CONSTRAINT `Avalia_id_profissional_fkey` FOREIGN KEY (`id_profissional`) REFERENCES `tabelaProfissionais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
