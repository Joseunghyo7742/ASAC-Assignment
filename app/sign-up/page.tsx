'use client';

import { useState } from 'react';
import { Container } from '@radix-ui/themes';
// import * as Dialog from '@radix-ui/react-dialog';
interface SignUpFormState {
  name: string;
  email: string;
  password: string;
  checkPw: string;
}

const page: React.FC<SignUpFormState> = () => {
  const [formData, setFormData] = useState<SignUpFormState>({
    name: '',
    email: '',
    password: '',
    checkPw: '',
  });

  return (
    <Container className="">
      aa
    </Container>
  );
};

export default page;
