'use client';
import { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useModalDispatch, useModalState } from '@/components/ModalProvider';

const page = () => {
  //useEffect(() => console.log('Rendered'));

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check_pw, setCheckPw] = useState('');

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkPwRef = useRef<HTMLInputElement>(null);

  const dispatch = useModalDispatch();
  const state = useModalState();

  //유효성 검증
  const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(email);
  const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/.test(password);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'check_pw') {
      setCheckPw(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let modalTitle = '';
    let modalMessage = '';
    if (isValidEmail && isValidPassword && password === check_pw) {
      console.log(`save email as ${email}`);
      console.log(`save password as ${password}`);
    } else if (!isValidEmail) {
      emailRef.current?.focus();
      modalTitle = 'Email Error';
      modalMessage = 'Invalid Email formation. Check it again!';
    } else if (!isValidPassword) {
      passwordRef.current?.focus();
      modalTitle = 'Password Error';
      modalMessage = 'Invalid pssword formtion. Check it again!';
    } else {
      checkPwRef.current?.focus();
      modalTitle = 'Password miss matched';
      modalMessage = 'Confirm password again';
    }
    dispatch({
      type: 'OPEN_MODAL',
      payload: { title: modalTitle, message: modalMessage },
    });
      state.modalRef.current?.showModal();
  };

  return (
    <div className="px-5 pt-3 h-[70%] w-[70%] border border-neutral-700  rounded-md bg-white ">
      <Typography className="text-neutral-800 heading" variant="h4">
        Welcome!
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-required "
          name="email"
          label="Email"
          placeholder="seunghyoJo@example.com"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          inputRef={emailRef}
          error={!isValidEmail}
          helperText={isValidEmail ? '' : '이메일 형식에 맞춰주세요.'}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          inputRef={passwordRef}
          error={!isValidPassword}
          helperText={
            isValidPassword ? '' : '8자 이상, 특수문자 1개 이상, 영문 대소문자 1개 이상 포함'
          }
        />
        <TextField
          id="outlined-password-input"
          label="Confirm password"
          name="check_pw"
          type="password"
          autoComplete="current-password"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          error={!isValidPassword || password !== check_pw}
          helperText={isValidPassword ? '' : '비밀번호를 한번 더 입력해주세요.'}
          inputRef={checkPwRef}
        />
        <Button className="text-white bg-black hover:bg-emerald-800" type="submit" color="success">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default page;
