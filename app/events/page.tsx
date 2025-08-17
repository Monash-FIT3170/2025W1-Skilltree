import RecentEvents from "@/components/RecentEvents";

export default function EventsIndexPage() {
  return (
    <main className="container mx-auto px-6 py-8">
      <RecentEvents limit={8} />
    </main>
  );
}
