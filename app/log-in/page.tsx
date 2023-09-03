'use client';
import { useModalDispatch, useModalState } from '@/components/ModalProvider';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';

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
  //Form 제출시 실행되는 함수.
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.userEmail === testUser.id && data.userPassword === testUser.password) {
      console.log('log in success!');
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
    console.log(typeof(errors))
    const errorMessage= errors.userEmail?.message || errors.userPassword?.message;
    dispatch({
      type: 'OPEN_MODAL',
      payload: { title: '로그인 오류', message: errorMessage}});
    state.modalRef.current?.showModal();
    console.log('Form errors', errors);
  };
  return (
    <div>
      <h1>Log In Form</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <label>Email</label>
        <input
          placeholder="test@email.com"
          {...register('userEmail', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
        />
        <label>Password</label>
        <input
          type="password"
          {...register('userPassword', {
            required: '비밀번호 입력은 필수입니다.',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,
              message: '비밀번호 형식에 맞지 않습니다.',
            },
          })}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default page;
