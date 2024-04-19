export default function EditPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return <div>User {id}</div>;
}
