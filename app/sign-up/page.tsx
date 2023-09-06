'use client';
import { useState, useRef } from 'react';
import { Typography, TextField} from '@mui/material';
import { useModalDispatch, useModalState } from '@/components/ModalProvider';

const Signup_Form_Field = [
  {
    id: 'field1',
    name: 'email',
    label: 'Email',
    placeholder: 'user@example.com',
    pattern: '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$/',
    errorTitle: 'Check Email',
    errorMessage: 'Invalid email format or empty',
  },
  {
    id: 'field2',
    name: 'password',
    type:'password',
    label: 'Password',
    placeholder: 'Password',
    pattern:   "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
    errorTitle: 'Check Password',
    errorMessage: 'Invalid password format or empty',
  },
  {
    id: 'field3',
    name: 'confirm_password',
    type:'password',
    label: 'confirm_password',
    placeholder: 'type your password again',
    pattern: "^(?=.*[!@#\\$%\\^&\\*\\(\\)\\-\\+=\\{\\}\\[\\]\\|;:'\",.<>?\\/`~a-z])(?=.*[A-Z]).{8,}$",
    errorTitle: 'Check Password',
    errorMessage: 'Password is unmatched!',
  },
];
interface registerForm {
  email: string;
  password: string;
  confirm_password: string;
}
const initialForm = {
  email: '',
  password: '',
  confirm_password: '',
};

const page = () => {
  const [formValues, setFormValues] = useState<registerForm>(initialForm);
  const inputTarget =  useRef<(HTMLInputElement | null)[]>([]); //두가지타입이 한 배열에 공존
  
  //const inputTarget =  useRef<HTMLInputElement[] | null[]>([]); //배열 자체에 둘 중 하나의 타입만 
  const dispatch = useModalDispatch();
  const state = useModalState();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    for (const element in formValues) {
      if (element === name) setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const invalidField = (inputTarget.current )?.filter(
      (reference)=> reference?.value==="" || !reference?.validity.valid
      );
    console.log(invalidField[0]);
    
    //첫번째 오류부분만 모달을 띄운다! 나중에 다 띄우고싶다면 인덱스만 조작해주면 됨. 
    if (invalidField[0]) {
      invalidField[0].focus();
      const invalidFieldName= invalidField[0].name;
      console.log("invalidFieldIdName",invalidFieldName)
      const matchingField= Signup_Form_Field.find((field)=>field.name===invalidFieldName)
      console.log("matchingField",matchingField);
      // 패턴이 유효하지 않은 입력 필드에 포커스 주기
      dispatch({
        type: 'OPEN_MODAL',
        payload: {
          title: matchingField?.errorTitle,
          message: matchingField?.errorMessage,
        },
      });
      state.modalRef.current?.showModal();
    }
    else{
      console.log("userRegistered", formValues);
    }
  }
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
            inputRef={(ref) => (inputTarget.current[index] = ref)}
            margin="normal"
            inputProps={{
              pattern: item.pattern,
              // errortitle: item.errorTitle,
              // errormessage: item.errorMessage,
              type: item.type || undefined
            }}
            fullWidth
          />
        ))}
        <button className="w-[80%] py-3 font-bold text-black transition bg-green-500 border border-transparent rounded-full self-center mg-px-3  hover:opacity-75" type="submit" >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default page;
