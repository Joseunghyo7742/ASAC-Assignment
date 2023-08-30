'use client';

import { useEffect, useState, useRef } from 'react';
import { Typography, TextField, Button } from '@mui/material';

interface SignUpFormState {
  email: string;
  password: string;
  checkPw: string;
}

const page: React.FC<SignUpFormState> = () => {
  useEffect(() => console.log('Rendered'));

  const [formData, setFormData] = useState<SignUpFormState>({
    email: '',
    password: '',
    checkPw: '',
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkPwRef = useRef<HTMLInputElement>(null);
  //유효성 검증
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailRef && console.log(emailRef);
    const { name, value } = e.target;
    if (name === 'email') {
      const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,2}$/;
      if (!isValidEmail) {
        emailRef.current && emailRef.current.focus();
      }
    } else if (name == 'password') {
      //8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개
      const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
      if (!isValidPassword) {
        passwordRef.current && passwordRef.current.focus();
      }
    }
  };
  return (
    <div className="px-5 pt-3 h-[50%] w-[70%] border border-neutral-700  rounded-md bg-white ">
      <Typography className="text-neutral-800 heading" variant="h4">
        Welcome!
      </Typography>
      <form>
        <TextField
          required
          id="outlined-required "
          name="email"
          label="Email"
          placeholder="seunghyoJo@example.com"
          fullWidth
          margin="normal"
          inputRef={emailRef}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-password-input"
          label="Confirm password"
          name="check_pw"
          type="password"
          autoComplete="current-password"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="success">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default page;
