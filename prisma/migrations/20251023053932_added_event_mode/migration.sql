-- CreateEnum
CREATE TYPE "EventMode" AS ENUM ('RANKED', 'CASUAL', 'UNRANKED');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "mode" "EventMode" NOT NULL DEFAULT 'RANKED';
