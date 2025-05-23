import { connectDB } from '@/util/database';
import { MongoClient } from 'mongodb';

export default async function Home() {

  const client = await connectDB;
  const db = client.db('forum');
  let res = await db.collection('post').find().toArray();
  console.log(res);
  return (
    <div>

    </div>
  );
}
