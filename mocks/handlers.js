 import { rest } from 'msw'
// import { FEATURED_PLAYLISTS_DATA } from './data/featured-playlists-data'
export const handlers = [
//   // rest.get("https://jsonplaceholder.typicode.com/todos"),(req, res, ctx)=>{
//   //   //이 경로로 API가 호출됐을 때,가로채서 목데이터를 응답해줄 것임
//   //   return res(ctx.status(200),//http status code 넘기기
//   //   //500으로 처리하면 모든 요청이 서버에러로 처리
//   //     ctx.json([ //돌려줄 응답값
//   //       {
//   //         id:1,
//   //         title:"청소",
//   //         completed:true,
//   //       },
//   //       {
//   //         id:2,
//   //         title:"설거지",
//   //         completed: true,
//   //       }
//   //     ])) 
//   // }
//   rest.get("https://seungpotify/featured-playlists",(req,res,ctx)=>{
//     return res(ctx.status(200),
//     ctx.json(FEATURED_PLAYLISTS_DATA))
//   })
]