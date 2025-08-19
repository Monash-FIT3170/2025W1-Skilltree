-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('MEMBER', 'ADMIN', 'EXPERT');

-- CreateEnum
CREATE TYPE "public"."VerificationStatus" AS ENUM ('PENDING', 'VERIFIED', 'REJECTED');

-- CreateEnum
CREATE TYPE "public"."EventType" AS ENUM ('RANKED', 'UNRANKED');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT,
    "name" TEXT,
    "profilePicture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Community" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "creatorId" TEXT NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CommunityMembership" (
    "communityId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'MEMBER',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommunityMembership_pkey" PRIMARY KEY ("communityId","userId")
);

-- CreateTable
CREATE TABLE "public"."SkillTree" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "communityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SkillTree_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SkillTreeNode" (
    "id" TEXT NOT NULL,
    "skillTreeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "masteryCriteria" TEXT NOT NULL,
    "parentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SkillTreeNode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Post" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "attachmentUrl" TEXT,
    "authorId" TEXT NOT NULL,
    "communityId" TEXT NOT NULL,
    "skillTreeNodeId" TEXT,
    "verificationStatus" "public"."VerificationStatus" NOT NULL DEFAULT 'PENDING',
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Verification" (
    "postId" TEXT NOT NULL,
    "verifierId" TEXT NOT NULL,
    "feedbackText" TEXT,
    "isApproved" BOOLEAN NOT NULL,
    "weight" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Verification_pkey" PRIMARY KEY ("postId","verifierId")
);

-- CreateTable
CREATE TABLE "public"."ExperiencePoint" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "communityId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "metric" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "postId" TEXT,
    "eventId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExperiencePoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SkillForest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "creatorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SkillForest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Leaderboard" (
    "id" TEXT NOT NULL,
    "communityId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "metric" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Leaderboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LeaderboardEntry" (
    "leaderboardId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeaderboardEntry_pkey" PRIMARY KEY ("leaderboardId","userId")
);

-- CreateTable
CREATE TABLE "public"."Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "eventType" "public"."EventType" NOT NULL DEFAULT 'UNRANKED',
    "communityId" TEXT NOT NULL,
    "experiencePayout" INTEGER,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_SkillTreeFollowers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_SkillTreeFollowers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_SkillForestTrees" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_SkillForestTrees_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "public"."User"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Community_name_key" ON "public"."Community"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Community_slug_key" ON "public"."Community"("slug");

-- CreateIndex
CREATE INDEX "Community_creatorId_idx" ON "public"."Community"("creatorId");

-- CreateIndex
CREATE INDEX "CommunityMembership_userId_idx" ON "public"."CommunityMembership"("userId");

-- CreateIndex
CREATE INDEX "SkillTree_communityId_idx" ON "public"."SkillTree"("communityId");

-- CreateIndex
CREATE INDEX "SkillTreeNode_skillTreeId_idx" ON "public"."SkillTreeNode"("skillTreeId");

-- CreateIndex
CREATE INDEX "Post_authorId_idx" ON "public"."Post"("authorId");

-- CreateIndex
CREATE INDEX "Post_communityId_idx" ON "public"."Post"("communityId");

-- CreateIndex
CREATE INDEX "Post_skillTreeNodeId_idx" ON "public"."Post"("skillTreeNodeId");

-- CreateIndex
CREATE INDEX "Verification_verifierId_idx" ON "public"."Verification"("verifierId");

-- CreateIndex
CREATE INDEX "ExperiencePoint_userId_idx" ON "public"."ExperiencePoint"("userId");

-- CreateIndex
CREATE INDEX "ExperiencePoint_communityId_idx" ON "public"."ExperiencePoint"("communityId");

-- CreateIndex
CREATE INDEX "SkillForest_creatorId_idx" ON "public"."SkillForest"("creatorId");

-- CreateIndex
CREATE UNIQUE INDEX "Leaderboard_communityId_name_key" ON "public"."Leaderboard"("communityId", "name");

-- CreateIndex
CREATE INDEX "LeaderboardEntry_userId_idx" ON "public"."LeaderboardEntry"("userId");

-- CreateIndex
CREATE INDEX "Event_communityId_idx" ON "public"."Event"("communityId");

-- CreateIndex
CREATE INDEX "_SkillTreeFollowers_B_index" ON "public"."_SkillTreeFollowers"("B");

-- CreateIndex
CREATE INDEX "_SkillForestTrees_B_index" ON "public"."_SkillForestTrees"("B");

-- AddForeignKey
ALTER TABLE "public"."CommunityMembership" ADD CONSTRAINT "CommunityMembership_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "public"."Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CommunityMembership" ADD CONSTRAINT "CommunityMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillTree" ADD CONSTRAINT "SkillTree_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "public"."Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillTreeNode" ADD CONSTRAINT "SkillTreeNode_skillTreeId_fkey" FOREIGN KEY ("skillTreeId") REFERENCES "public"."SkillTree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillTreeNode" ADD CONSTRAINT "SkillTreeNode_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."SkillTreeNode"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "public"."Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_skillTreeNodeId_fkey" FOREIGN KEY ("skillTreeNodeId") REFERENCES "public"."SkillTreeNode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Verification" ADD CONSTRAINT "Verification_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Verification" ADD CONSTRAINT "Verification_verifierId_fkey" FOREIGN KEY ("verifierId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExperiencePoint" ADD CONSTRAINT "ExperiencePoint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillForest" ADD CONSTRAINT "SkillForest_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Leaderboard" ADD CONSTRAINT "Leaderboard_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "public"."Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LeaderboardEntry" ADD CONSTRAINT "LeaderboardEntry_leaderboardId_fkey" FOREIGN KEY ("leaderboardId") REFERENCES "public"."Leaderboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LeaderboardEntry" ADD CONSTRAINT "LeaderboardEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "public"."Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_SkillTreeFollowers" ADD CONSTRAINT "_SkillTreeFollowers_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."SkillTree"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_SkillTreeFollowers" ADD CONSTRAINT "_SkillTreeFollowers_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_SkillForestTrees" ADD CONSTRAINT "_SkillForestTrees_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."SkillForest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_SkillForestTrees" ADD CONSTRAINT "_SkillForestTrees_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."SkillTree"("id") ON DELETE CASCADE ON UPDATE CASCADE;
