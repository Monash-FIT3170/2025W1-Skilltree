type PageProps = { params: { id: string } };

export default function Page({ params }: PageProps) {
  // minimal placeholder; add your SkillTree here later if desired
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Skilltree</h1>
        <p className="text-muted-foreground mt-2">ID: {params.id}</p>
      </div>
    </main>
  );
}