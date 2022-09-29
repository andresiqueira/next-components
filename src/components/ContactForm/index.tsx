import React, { useRef, useEffect, useState  } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

interface FormValues {
  user_name: string,
  user_email: string,
  message: string,
}

const schema = yup.object().shape({
  user_name: yup.string().required('Digite um nome').min(3, 'Nome deve conter pelo menos 3 caracteres'),
  user_email: yup.string().email('E-mail inválido').required('Digite um e-mail'),
  message: yup.string().required('Digite uma mensagem'),
})

export const ContactForm = () => {
  const [responseCodeAPI, setResponseCodeAPI] = useState<string | null>(null)
  console.log('Estado', responseCodeAPI);
  
  const form = useRef<HTMLFormElement | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });

  const message = (res: string | null) => res

  useEffect(() => {
    message(responseCodeAPI)
    const timeOut = setTimeout(() => setResponseCodeAPI(null), 3000)
    return () => clearTimeout(timeOut)
  },[responseCodeAPI])

  const sendEmail = (e: FormValues) => {
    emailjs.sendForm('service', 'template', form.current!, 'public_key')
      .then((result) => {
        setResponseCodeAPI(result.text)
      }, (error) => {
        console.log(error.text);
      });
      reset({
        user_name: '',
        user_email: '',
        message: ''
      }) 
  };

  return (
    <form 
      className= 'text-white flex flex-col lg:w-[600px] gap-7 box-border overflow-hidden'
      ref={form}
      onSubmit={handleSubmit(sendEmail)}>

      <div className='flex flex-col gap-1 relative'>
        <label>Nome</label>
        <input {...register("user_name")} className='text-gray-800 rounded-md p-3' />
        {errors?.user_name && <p className='text-red-400 text-sm absolute bottom-[-25px]'>{errors.user_name.message}</p>}
      </div>

      <div className='flex flex-col gap-1 relative'>
        <label>E-mail</label>
        <input {...register("user_email") } className='text-gray-800 rounded-md p-3' />
        {errors?.user_email && <p className='text-red-400 text-sm absolute bottom-[-25px]'>{errors.user_email.message}</p>}
      </div>
      <div className='flex flex-col gap-1 relative'>
        <label>Mensagem</label>
        <textarea {...register("message")} rows={8} className='text-gray-800 rounded-md p-3' />
        {errors?.message && <p className='text-red-400 text-sm absolute bottom-[-25px]'>{errors.message.message}</p>}
      </div>
      <button type='submit' className='bg-orange-600 rounded-md p-3 mt-2'>Enviar</button>
      <p className='text-red-400 text-sm '>{message(responseCodeAPI)}</p>
    </form>
  );
};