'use client';
import { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useModalDispatch, useModalState } from '@/components/ModalProvider';

const Signup_Form_Field = [
  {
    id: 'field1',
    name: 'email',
    label: 'Email',
    placeholder: 'user@example.com',
    pattern: '(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$/)',
    errorTitle:'Check Email',
    errorMessage: 'Invalid email format!',
  },
  {
    id: 'field2',
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    pattern: '(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,})',
    errorTitle:'Check Password',
    errorMessage: 'Invalid password format!',
  },
  {
    id: 'field3',
    name: 'confirm_password',
    label: 'Confirm password',
    placeholder: 'type your password again',
    pattern: '(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,})',
    errorTitle:'Check Password',
    errorMessage: 'Password is unmatched!',
  },
];
interface registerForm {
  email: string;
  password: string;
  confirm_password:string;
}
const initialForm = {
  email: '',
  password: '',
  confirm_password:''
};

const page = () => {
  const [formValues, setFormValues] = useState<registerForm>(initialForm);
  const inputTarget =  useRef<HTMLInputElement[] | null[]>([]);
  const dispatch = useModalDispatch();
  const state = useModalState();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    for(const element in formValues){
      if(element===name)
        setFormValues({...formValues, [name]:value})
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const invalidField = inputTarget.current?.filter((reference:HTMLInputElement)=>!reference?.validity.valid);
    
    console.log(invalidField) 
    
    // if (invalidField) {
    //   // 패턴이 유효하지 않은 입력 필드에 포커스 주기
    //   invalidField.focus();
    //   dispatch({
    //     type: 'OPEN_MODAL',
    //     payload: {
    //       title: {invalidField.errorTitle},
    //       message: {invalidField.errorMessage},
    //     },
    //   });
    //   state.modalRef.current?.showModal();
    
  };

  return (
    <div className="px-5 pt-3 h-[70%] w-[70%] border border-neutral-700  rounded-md bg-white ">
      <Typography className="text-neutral-800 heading" variant="h4">
        Welcome!
      </Typography>
      <form onSubmit={handleSubmit}>
        {Signup_Form_Field.map((item, index) => (
          <TextField
            key={item.id}
            name={item.name}
            label={item.label}
            placeholder={item.placeholder}
            onChange={handleInputChange}
            //element는 현재 요소를 참조 즉 TextField
            inputRef={(element) => {
              inputTarget.current[index] = element;
            }}
            margin="normal"
            inputProps={{pattern:item.pattern, errorTitle:item.errorTitle, errorMessage:item.errorMessage}}
          />
        ))}
        <Button className="text-white bg-black hover:bg-emerald-800" type="submit" color="success">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default page;
