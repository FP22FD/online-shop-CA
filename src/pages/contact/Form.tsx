import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect } from 'react';

type FormValues = {
  fullName: string;
  subject: string;
  message: string;
  email: string;
};

const schema: yup.ObjectSchema<FormValues> = yup
  .object({
    fullName: yup
      .string()
      .required('Please enter your full name')
      .min(3, 'Your first name should be at least 3 characters')
      .max(24, 'Your first name cannot be longer than 24 characters'),

    subject: yup
      .string()
      .required('Please enter the subject')
      .min(3, 'The subject must be least 3 characters')
      .max(20, 'The subject name cannot be longer than 20 characters'),

    message: yup
      .string()
      .required('Please enter your message')
      .min(3, 'Your message should be at least 3 characters')
      .max(100, 'Your message cannot be longer than 100 characters'),

    email: yup.string().required('Please enter your email address').email('Please type a valid email'),
  })
  .required();

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onFormSubmit(data: FormValues) {
    console.log(data);
  }

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const inputClassNames =
    'w-full rounded-md bg-secondary-light border border-secondary-light focus:ring focus:ring-primary-light focus:outline-0 border focus:border-primary p-2';
  const labelClassNames = 'block mb-1';
  const errorClassNames = 'text-error text-sm pt-1';

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col py-6 space-y-6 md:p-6" noValidate>
      <label htmlFor="fullname" className={labelClassNames}>
        <span>Full name</span>
        <input
          {...register('fullName')}
          id="fullname"
          name="fullName"
          type="text"
          aria-label="fullname"
          placeholder="type your name"
          className={inputClassNames}
        />
        {errors.fullName?.message && <p className={errorClassNames}>{errors.fullName?.message}</p>}
      </label>

      <label htmlFor="email" className={labelClassNames}>
        <span>Email address</span>
        <input
          {...register('email')}
          id="email"
          name="email"
          type="text"
          aria-label="email"
          placeholder="type your email"
          className={inputClassNames}
        />
        {errors.email?.message && <p className={errorClassNames}>{errors.email?.message}</p>}
      </label>

      <label htmlFor="subject" className={labelClassNames}>
        <span>Subject</span>
        <input
          {...register('subject')}
          id="subject"
          name="subject"
          type="text"
          aria-label="subject"
          placeholder="type the subject"
          className={inputClassNames}
        />
        {errors.subject?.message && <p className={errorClassNames}>{errors.subject?.message}</p>}
      </label>

      <label htmlFor="message" className={labelClassNames}>
        <span>Message</span>
        <textarea
          {...register('message')}
          id="message"
          name="message"
          aria-label="message"
          rows={6}
          className={inputClassNames}
        ></textarea>
        {errors.message?.message && <p className={errorClassNames}>{errors.message?.message}</p>}
      </label>

      <button
        type="submit"
        className="self-center px-8 py-3 text-sm rounded ring-[1px] bg-primary-light ring-primary-light ring-inset text-primary-dark font-bold hover:bg-primary hover:text-neutral-light transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
