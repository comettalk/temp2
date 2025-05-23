import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db('forum');
  let res = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      <Link href={'/write'}><h3>Write</h3></Link>
      {
        res.map((a, i) => 
          <div className="list-item" key={i}>
            <Link href={'/detail/'+res[i]._id}><h4>{res[i].title}</h4></Link>
            <p>Sex.org</p>
          </div>
        ) }
    </div>
  )
} 