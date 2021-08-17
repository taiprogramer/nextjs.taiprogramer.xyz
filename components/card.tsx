export default function Card({ title, children }: { title: string; children: any}) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
