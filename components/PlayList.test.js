import { render, screen } from '@testing-library/react';
import PlayList from './PlayList';
import {server} from "../mocks/server";
import {rest} from "msw";
describe('Playlist', () => {
  test('Todo 라는 제목이 있다', () => {
    render(<TodoList />);
    const titleEl = screen.getByText('Todo');
    expect(titleEl).toBeInTheDocument();
  });

  test("에러가 났을 때 에러 메시지를 보여준다",async()=>{
    server.use(
      rest.get("https://jsonplaceholder.typicode.com/todos"),(req, res, ctx)=>{
        //이 경로로 API가 호출됐을 때,가로채서 목데이터를 응답해줄 것임
        return res(ctx.status(500),//http status code 넘기기
        //500으로 처리하면 모든 요청이 서버에러로 처리
        ) 
    }
    )
    render(<PlayList/>)
    const error= await screen.findByText("에러 발생")
    expect(error).toBeInTheDocument()
  });
  
  test('리스트가 잘나온다. ', async () => {
    render(<PlayList />);
    const list = await screen.findAllByRole('listitem'); //li
    expect(list).toHaveLength(3);
  });
  
});
