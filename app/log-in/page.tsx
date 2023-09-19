'use client';
import axios from 'axios';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { useModalDispatch, useModalState } from '@/components/ModalProvider';
import { setToken } from '@/lib/store/userSlice';

interface FormData {
  userEmail: string;
  userPassword: string;
}
const testUser = {
  id: 'helloworld@test.com',
  password: 'Qwer!234',
};

const page = () => {
  const dispatch = useModalDispatch();
  const state = useModalState();
  const { register, handleSubmit } = useForm<FormData>();
  const CLIENT_ID = process.env.NEXT_PUBLIC_SP_CLIENT_ID;
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_SP_CLIENT_SECRET;

  //Form 제출시 실행되는 함수.
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.userEmail === testUser.id && data.userPassword === testUser.password) {
      console.log('log in success!');

      const dispatch = useDispatch();
      //access token 요청
      axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      })
        .then((response) => {
          const data = response.data;
          dispatch(
            setToken({
              CLIENT_ID: CLIENT_ID,
              CLIENT_SECRENT: CLIENT_SECRET,
              ACCESS_TOKEN: data.access_token,
            }),
          );
          console.log('dispatch setToken');
        })
        .catch((error) => console.log("Couldn't get Token", error));
    } else {
      dispatch({
        type: 'OPEN_MODAL',
        payload: { title: '회원정보 오류', message: '이메일 또는 비밀번호가 일치하지 않습니다.' },
      });
      state.modalRef.current?.showModal();
    }
  };
  //Form에서 에러가 났을 때 실행되는 함수.
  const onError = (errors: FieldErrors<FormData>) => {
    const errorMessage = Object.values(errors)[0];
    console.log('value', errorMessage);
    dispatch({
      type: 'OPEN_MODAL',
      payload: { title: '로그인 오류', message: errorMessage.message },
    });
    state.modalRef.current?.showModal();
    console.log('Form errors', errors);
  };
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className=" w-[40%]  flex flex-col items-center gap-3 px-3 py-4 rounded-md bg-neutral-900">
        <h1 className="text-2xl font-bold">Log in</h1>
        <form
          className="flex flex-col w-full gap-1 px-20 "
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
        >
          <label className="text-sm font-semibold ">Email</label>
          <input
            className="px-2 py-0.5 mb-2"
            placeholder="test@email.com"
            {...register('userEmail', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
          />
          <label className="text-sm font-semibold">Password</label>
          <input
            className="px-2 py-0.5 mb-3"
            type="password"
            {...register('userPassword', {
              required: '비밀번호 입력은 필수입니다.',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,
                message: '비밀번호 형식에 맞지 않습니다.',
              },
            })}
          />
          <button
            className=" w-[80%] py-3 font-bold text-black transition bg-green-500 border border-transparent rounded-full self-center mg-px-3 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-75"
            type="submit"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
