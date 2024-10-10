import ItemList from './item-list';
import Link from "next/link";

const Page = () => {
  return (
    <main>
      <ul><li className="p-4 text-left hover:text-blue-600"><Link href="http://localhost:3000/">Home</Link></li></ul>
      <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
      </div>
    </main>
  );
};

export default Page;