import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import { TextInput,Loading,CustomButton } from '../components';
const ResetPassword = () => {
  const [errMsg,setErrMsg]=useState("");
  const [isSubmitting,setIsSubmitting]=useState(false);
  const {
    register,
    handleSubmit,
    formState:{errors},
  }=useForm({
    mode:"onChange",
  });
  const onSubmit=async(data)=>{

  }
  return (
    <div className='w-full h-[100vh] bg-bgColor flex items-center justify-center p-6'>
        <div className='bg-primary w-full md:w-1/3 2xl:w-1/4 px-6 py-8 shadow-md rounded-lg'>
          <p className='text-ascent-1 text-lg font-semibold'>Email address</p>
          <span className='text-sm text-ascent-2'>
            Enter email address associated with your account
          </span>
          <form action="" onSubmit={handleSubmit(onsubmit)} className='py-4 flex flex-col gap-5'>
                    <TextInput 
                        name="email" type="email" label="Email" placeholder="example@example.com"
                        register={register("email",{required: 'Email is required'})}
                        styles="w-full"
                        error={errors.email?errors.email.message:""}
                    />
                    {
                        errMsg?.message &&(
                            <span className={`text-sm ${errMsg?.status==="failed" ? "text-[#f64949fe]"
                                :"text-[#2ba150fe]"
                            } mt-0.5`}>
                                {errMsg.message}
                            </span>
                        )
                    }
                    {
                        isSubmitting ?(<Loading/>):( 
                                        <CustomButton 
                                            type='submit' title='Submit' containerStyles={`inline-flex justify-center bg-blue 
                                                text-white rounded-md px-8 py-3 text-base font-medium text-white outline-none`}
                                        />)
                    }
          </form>
        </div>
    </div>
  )
}

export default ResetPassword
