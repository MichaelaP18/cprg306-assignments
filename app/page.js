import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Web Dev 2 Demos</h1>
      <ul>
        <li className="p-4 hover:text-blue-600"><Link href="/week-2">Week 2</Link></li>
        <li className="p-4 hover:text-blue-600"><Link href="/week-3">Week 3</Link></li>
        <li className="p-4 hover:text-blue-600"><Link href="/week-4">Week 4</Link></li>
        <li className="p-4 hover:text-blue-600"><Link href="/week-5">Week 5</Link></li>
      </ul>
    </div>
  );
}
