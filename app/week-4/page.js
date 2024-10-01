
import NewItem from './new-item';
import Link from "next/link";

const Page = () => {
    return (
        <main className="text-center">
            <ul><li className="p-4 text-left hover:text-blue-600"><Link href="http://localhost:3000/">Home</Link></li></ul>
            <h1 className="font-bold p-3">Basic Interactivity</h1>
            <NewItem />
        </main>
    )

}

export default Page;