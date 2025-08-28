"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Calendar } from "lucide-react";
import { communities } from "@/lib/mocks";
import { useRouter } from "next/navigation";

export default function CommunitiesPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Communities</h1>
        <p className="text-muted-foreground mt-2">
          Discover and join communities that match your interests and skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => (
          <Card key={community._id} className="h-full flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    {community.community}
                  </CardTitle>
                </div>
              </div>
              <CardDescription className="line-clamp-3">
                {community.text}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  <span>
                    {Math.round(
                      Math.random() * 1000 + 1000 // Mock member count
                    ).toLocaleString()}{" "}
                    members
                  </span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>
                    {Math.round(
                      Math.random() * 1000 + 1000 // Mock member count
                    ).toLocaleString()}{" "}
                    posts
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <div className="flex gap-2 w-full">
                <Button
                  onClick={() => alert(`Joining ${community.community}`)}
                  className="flex-1"
                  size="sm"
                >
                  Join Community
                </Button>
                <Button
                  onClick={() => router.push("/communities/posts")}
                  variant="outline"
                  size="sm"
                >
                  View Details
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {communities.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold mb-2">No communities found</h3>
          <p className="text-muted-foreground mb-4">
            There are no communities available at the moment.
          </p>
          <Button>Create Community</Button>
        </div>
      )}
    </div>
  );
}
