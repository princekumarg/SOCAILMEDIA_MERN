import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FriendsCard, Loading, PostCard, ProfileCard, TopBar } from '../components';
import { posts } from '../assets/data';

const Profile = () => {
  const {id} =useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state)=>state.user);
  const [userInfo,setUserInfo]=useState(user);
  // const {posts}=useSelector((state)=>state.posts);
  const [loading,setLoading]=useState(false);
  const handelDelete=()=>{}
  const handelLikePost=()=>{}
  return (
    <>
      <div className='home w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor 
            lg:rounded-lg h-screen overflow-hidden'>
              <TopBar/>
        <div className='w-full flex gap-2 lg:gap-4 md:pl-4 pt-5 pb-10 h-full'>
          <div className='hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto'>
            <ProfileCard user={userInfo}/>
            <div className='block lg:hidden'>
                <FriendsCard friends={userInfo?.friends}/>
            </div>
          </div>
          <div className='flex-1 h-fulls px-4 flex flex-col gap-6
                    overflow-y-auto rounded-lg'>
                {loading ? (<Loading/>):posts?.length>0 ?(
                  posts?.map((post)=>(
                    <PostCard key={post?._id} post={post}
                      user={user} deletePost={handelDelete}
                      likePost={handelLikePost}/>
                  ))
                ):(<div className='flex w-full h-full items-center justify-center'>
                  <p className='text-lg text-ascent-2'>Not Post Available</p>
                </div>)}
              </div>
          <div className='hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto'>
            <FriendsCard friends={userInfo?.friends}/>
          </div> 
        </div>   
      </div>
    </>
  )
}

export default Profile
