/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SkillTreeTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_SkillTreeTags" DROP CONSTRAINT "_SkillTreeTags_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_SkillTreeTags" DROP CONSTRAINT "_SkillTreeTags_B_fkey";

-- AlterTable
ALTER TABLE "SkillTree" ADD COLUMN     "tagId" TEXT,
ADD COLUMN     "tags" TEXT[];

-- DropTable
DROP TABLE "public"."Tag";

-- DropTable
DROP TABLE "public"."_SkillTreeTags";
