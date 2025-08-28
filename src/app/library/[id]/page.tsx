// app/library/[id]/page.tsx
type Props = {
  params: { id: string };
};

export default async function BookDetail({ params }: Props) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { next: { revalidate: 60 } }
  );
  const book = await res.json();

  return (
    <main className="p-6">
      <div className="grid grid-cols-2 gap-2">
        <div></div>
      </div>
      <h1 className="text-xl font-bold">{book.title}</h1>
      <p>{book.body}</p>
      <button className="mt-4 border px-4 py-2 rounded bg-blue-500 text-white">
        📖 Mượn sách
      </button>
    </main>
  );
}
