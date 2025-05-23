import { connectDB } from '@/util/database'

export default async function handler(req, response){
  if(req.method == 'POST'){
    if(req.body.title == ''){
      return response.status(500).json('제목써라');
    }
    if(req.body.content == ''){
      return response.status(500).json('내용써라');
    }
    let db = (await connectDB).db('forum');
    let result = db.collection('post').insertOne(req.body);
    response.redirect(302, '/list');
  }
}
