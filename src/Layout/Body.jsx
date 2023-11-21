import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../components/UserCard';

const Body = () => {

  const userInfo  = useSelector((state) => state.userInfoStore.user);

  useEffect(() => {
  }, [userInfo]); 

  return (
    <div className='flex align-top justify-center text-center font font-inter max-lg:text-sm lg:text-4xl  bg-mode  text-bluenight p-8'>
        { (userInfo !== undefined) ? (
            <div >
                <UserCard
                userInfo={userInfo}
                />
            </div>
        ):(
          <div className='max-sm:py-[60px]'>
            <p>Please <span className='text-blue-400 font-bold'>
               Log in </span><br/>
               to see your google data</p>
          </div>
        )}
    </div>
  )
}

export default Body