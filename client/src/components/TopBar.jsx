import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { TbSocial } from 'react-icons/tb';
import { BsMoon,BsSunFill } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import TextInput from './TextInput';
import CustomButton from './CustomButton';
import { useForm } from 'react-hook-form';
import { setTheme } from '../redux/theme';
import { Logout } from '../redux/userSlice';
const TopBar = () => {
    const {theme}=useSelector(state=>state.theme);
    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const {register,
        handleSubmit,
        formState:{errors}}=useForm();
    const handleTheme=()=>{
        const themeValue=theme==="light"?"dark":"light";
        dispatch(setTheme(themeValue))
    }
    const handleSearch=async(data)=>{

    };
  return (
    <div className='topbar w-full flex items-center justify-between py-3
                    md:py-6 px-4 bg-primary'>
        <Link to='/' className='flex gap-2 items-center'>
            <div className='p-1 md:p-2 bg-[#065ad8] rounded text-white'>
                <TbSocial/>
            </div>
            <span className='text-xl md:text-2xl text-[#065ad8] font-semibold'>
                ShareFun
            </span>
        </Link>
        <form action="" className='hidden md:flex items-center justify-center'
                    onSubmit={handleSubmit(handleSearch)}>
            <TextInput 
                placeholder="Search..."
                register={register("Search")}
                styles="w-[18rem] rounded-l-full lg:w-[38rem] py-3"
            />
            <CustomButton 
                type='Search' title='Search' containerStyles='bg-[#0444a4] text-white rounded-r-full px-6 py-2.5 mt-2'/>
            
        </form>
        {/* ICONS */}
        <div className='flex gap-4 items-center text-ascent-1 text-md md:text-xl'>
            <button onClick={()=>handleTheme()}>
                {theme?<BsMoon/>:<BsSunFill/>}
            </button>
            <div className='hidden lg:flex'>
                <IoMdNotificationsOutline/>
            </div>
            <div>
                <CustomButton 
                    onClick={()=>dispatch(Logout())}
                    title="Log Out"
                    containerStyles='text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2
                                    border border-[#666] rounded-full'/>
            </div>
        </div>
      
    </div>
  )
}

export default TopBar
