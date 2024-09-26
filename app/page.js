import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Web Dev 2 Demos</h1>
      <p>Web Dev 2 Demos</p>
      <ul>
        <li>
          <Link href="/week-2">Week 2</Link>
          <Link href="/week-3">Week 3</Link>
          <Link href="/week-4">Week 4</Link>
        </li>
      </ul>
    </div>
  );
}
