type NewsDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black uppercase tracking-tight text-pink-400">
          News Detail
        </h1>
        <p className="mt-4 text-slate-300">
          Slug: {params.slug}
        </p>
      </div>
    </main>
  );
}
