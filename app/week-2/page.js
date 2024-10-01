import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
    return (
      <main>
        <ul><li className="p-4 text-left hover:text-blue-600"><Link href="http://localhost:3000/">Home</Link></li></ul>
        <h1>Shopping List</h1>
        <StudentInfo></StudentInfo>
      </main>
    );
}