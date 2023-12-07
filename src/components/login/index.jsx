import React from 'react'
import { Link } from 'react-router-dom'
import { icon } from '../../assets/images'
import { useForm } from 'react-hook-form';
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Login = () => {

  const {register, handleSubmit,  formState: {errors}} = useForm({})
  const formSubmit = data => {
    console.log(data);
  }

  return (
    <div id='contacts' className='pt-[30px] mt-[300px]'>
        <div className="container">
            <div className="grid  lg:grid-cols-2 items-center gap-[120px]">
              <div className='text-black'>
                  <p className='text-3xl md:text-[70px] leading-[60px font-medium'>Are you with us?</p>
                  <p className='text-lg md:text-3xl font-medium mt-[30px] md:mt-[74px]'>Then please fill out the <span className='text-[#7CFE5B]'><Link to='#'> registration <br className='md:block'/> form</Link></span> for our bootcamp.</p>
                  <div className='hidden md:block'>
                    <img src={icon} alt="" className='h-[138px] w-[122px] block ml-auto' />
                    <img src={icon} alt="" className='h-[168px] w-[209px] mx-auto' />
                    <img src={icon} alt=""  className='h-[72px] w-[82px]'/>
                  </div>
              </div>
              <div className='w-full'>
                <form onSubmit={handleSubmit(formSubmit)} className='space-y-[22px] md:space-y-[48px]'>
                      <div>
                        <input type='text' {...register('name', {required: {value: true, message:'Valid is requred!'}})} className='w-full rounded-[50px] p-[20px] md:p-[32px] bg-[#343538]' placeholder='Name'/>
                        <p className='text-red-500'>{errors.name?.message}</p>
                      </div>
                      <div>
                        <input type='text' {...register('email', {required: {value: true, message:'Valid is requred!'}, validate: {
                          checkEmail: event =>{
                            return event.includes('@') || 'Required with "@"'
                          }
                        }})} className='w-full rounded-[50px] p-[20px] md:p-[32px] bg-[#343538]' placeholder='Email'/>
                        <p className='text-red-500'>{errors.email?.message}</p>
                      </div>
                      <div>
                        <input type='text' {...register('location', {required: {value: true, message:'Valid is requred!'}})} className='w-full rounded-[50px] p-[20px] md:p-[32px] bg-[#343538]' placeholder='Where do you live?'/>
                        <p className='text-red-500'>{errors.location?.message}</p>
                      </div>
                      <div>
                        <button type='submit' className='flex items-center justify-center gap-3 bg-[#7CFE5B] text-black font-normal text-lg md:text-[22px] rounded-[50px] py-[30px] w-full  md:px-[89px]'>To participate <MdOutlineArrowRightAlt  size='24'/></button>
                      </div>
                </form>
              </div>
            </div>
            <p className='mt-[176px] text-black text-[38px] md:text-8xl text-center font-medium tracking-[2.7px]'>Discover the Power of AI: Unleash Your Potential!</p>
        </div>
    </div>
  )
}

export default Login