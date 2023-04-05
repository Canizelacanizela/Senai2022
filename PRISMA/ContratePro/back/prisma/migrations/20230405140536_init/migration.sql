-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria_Profissoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_categoria` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tabela_Profissionais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_p` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `preco_h` DOUBLE NOT NULL,
    `id_categoria` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Qualifica` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_quali` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Avalia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_profissional` INTEGER NOT NULL,
    `id_cliente` INTEGER NOT NULL,
    `comentario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tabela_Profissionais` ADD CONSTRAINT `tabela_Profissionais_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `categoria_Profissoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avalia` ADD CONSTRAINT `Avalia_id_profissional_fkey` FOREIGN KEY (`id_profissional`) REFERENCES `tabela_Profissionais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avalia` ADD CONSTRAINT `Avalia_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
