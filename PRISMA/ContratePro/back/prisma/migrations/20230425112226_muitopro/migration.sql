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
    `id_coment` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoriaProfissoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_categoria` VARCHAR(191) NOT NULL,

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

-- CreateTable
CREATE TABLE `Propostas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `proposta` VARCHAR(191) NOT NULL,
    `id_cliente` INTEGER NOT NULL,
    `id_profissional` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserProfissionais` ADD CONSTRAINT `UserProfissionais_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `categoriaProfissoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserProfissionais` ADD CONSTRAINT `UserProfissionais_id_coment_fkey` FOREIGN KEY (`id_coment`) REFERENCES `avaliaProfisional`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliaProfisional` ADD CONSTRAINT `avaliaProfisional_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `UserCliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliaProfisional` ADD CONSTRAINT `avaliaProfisional_id_profissional_fkey` FOREIGN KEY (`id_profissional`) REFERENCES `UserProfissionais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Propostas` ADD CONSTRAINT `Propostas_id_profissional_fkey` FOREIGN KEY (`id_profissional`) REFERENCES `UserProfissionais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Propostas` ADD CONSTRAINT `Propostas_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `UserCliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
