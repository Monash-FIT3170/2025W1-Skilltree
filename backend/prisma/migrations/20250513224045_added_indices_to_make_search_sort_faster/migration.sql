-- CreateIndex
CREATE INDEX "Community_creatorId_idx" ON "Community"("creatorId");

-- CreateIndex
CREATE INDEX "Event_communityId_idx" ON "Event"("communityId");

-- CreateIndex
CREATE INDEX "Event_userId_idx" ON "Event"("userId");

-- CreateIndex
CREATE INDEX "Event_experienceId_idx" ON "Event"("experienceId");

-- CreateIndex
CREATE INDEX "Experience_communityId_idx" ON "Experience"("communityId");

-- CreateIndex
CREATE INDEX "Experience_userId_idx" ON "Experience"("userId");

-- CreateIndex
CREATE INDEX "Feedback_userId_idx" ON "Feedback"("userId");

-- CreateIndex
CREATE INDEX "Feedback_postId_idx" ON "Feedback"("postId");

-- CreateIndex
CREATE INDEX "Leaderboard_communityId_idx" ON "Leaderboard"("communityId");

-- CreateIndex
CREATE INDEX "Post_communityId_idx" ON "Post"("communityId");

-- CreateIndex
CREATE INDEX "Post_authorId_idx" ON "Post"("authorId");

-- CreateIndex
CREATE INDEX "SkillForest_userId_idx" ON "SkillForest"("userId");

-- CreateIndex
CREATE INDEX "SkilltreeNode_communityId_idx" ON "SkilltreeNode"("communityId");

-- CreateIndex
CREATE INDEX "SkilltreeNode_experienceId_idx" ON "SkilltreeNode"("experienceId");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");

-- CreateIndex
CREATE INDEX "Verification_communityId_idx" ON "Verification"("communityId");

-- CreateIndex
CREATE INDEX "Verification_userId_idx" ON "Verification"("userId");

-- CreateIndex
CREATE INDEX "Verification_postId_idx" ON "Verification"("postId");
