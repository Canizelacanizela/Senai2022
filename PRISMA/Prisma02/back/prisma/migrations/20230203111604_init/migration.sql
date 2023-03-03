-- CreateTable
CREATE TABLE `Vendas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `id_vendedor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalhes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_produtos` INTEGER NOT NULL,
    `id_venda` INTEGER NOT NULL,
    `quantidade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_id_vendedor_fkey` FOREIGN KEY (`id_vendedor`) REFERENCES `Vendedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalhes` ADD CONSTRAINT `Detalhes_id_produtos_fkey` FOREIGN KEY (`id_produtos`) REFERENCES `Produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalhes` ADD CONSTRAINT `Detalhes_id_venda_fkey` FOREIGN KEY (`id_venda`) REFERENCES `Vendas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
