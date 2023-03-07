/*
  Warnings:

  - You are about to drop the column `id_user` on the `motorista` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `motorista` DROP FOREIGN KEY `Motorista_id_user_fkey`;

-- AlterTable
ALTER TABLE `motorista` DROP COLUMN `id_user`;
