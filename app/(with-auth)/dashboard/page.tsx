import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Check, Trash2 } from "lucide-react";
import React from "react";

const DashboardPage = () => {
	return (
		<div className="w-full h-full flex justify-between items-center">
			<div className="flex flex-col gap-5 fixed p-5 pr-0 bottom-0 top-20 left-0 w-1/3">
				<Input placeholder="Enter your todo..." />
				<Textarea
					placeholder="Enter your todo description..."
					className="h-24"
				/>
				<Button>Add todo</Button>
			</div>
			<ScrollArea className="p-5 fixed top-20 right-0 bottom-0 left-1/3 w-2/3 h-full max-h-[calc(100vh-5rem)]">
				{Array.from({ length: 10 }).map((_, i) => (
					<Card className="mb-5" key={i}>
						<CardHeader>
							<CardTitle>Walk the dog</CardTitle>
							<CardDescription>
								Added by <span className="text-blue-500">Aditya Tripathi</span>{" "}
								on{" "}
								<span className="text-blue-500">
									{new Date().toLocaleDateString()}
								</span>
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
								vel at soluta praesentium repellendus in, corrupti quam, cum
								placeat, itaque expedita. Adipisci illo beatae ex, laudantium
								molestiae ipsum ut perferendis exercitationem modi, odit, ullam
								libero aliquid dolorum sint. Repellendus aperiam unde excepturi
								odit incidunt facilis dignissimos, ipsa voluptatum. Aliquid,
								sunt.
							</p>
						</CardContent>
						<CardFooter className="flex justify-end gap-5">
							<Button className="aspect-square min-w-36">
								Mark as done <Check />
							</Button>
							<Button
								className="aspect-square min-w-36"
								variant={"destructive"}
							>
								Delete the todo <Trash2 />
							</Button>
						</CardFooter>
					</Card>
				))}
			</ScrollArea>
		</div>
	);
};

export default DashboardPage;
