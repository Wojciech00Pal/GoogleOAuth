import React from 'react'

const UserCard = ({userInfo}) => {

  console.log(userInfo);
  return (
    <div>
    <div className='flex justify-center'>
      <div className=' sm:w-[450px] max-sm:w-[250px] max-sm:mt-[20px] bg-white rounded-[20px] text-[50px] max-sm:text-[25px] shadow-2xl  px-6 py-4 ' >
        Hi <span className='text-blue-600 italic' >{userInfo.givenName} </span>
      </div>
    </div>
      <div className='bg-white rounded-lg shadow-2xl px-2 py-2 mt-4'>
        <p className='font-inter'>Info about you from Google service:</p>
      </div>
      <div className='flex justify-center mt-8 '>
      <img className=" border-[#6d6de3] border-[2px] sm:w-[250px] sm:h-[250px] max-sm:w-76 max-sm:h-76" src={userInfo.imageUrl}  alt="User Image" />

      </div>
      <div className='h-6 flex justify-center '>
      <table className='max-sm:mt-6 sm:mt-14 shadow-2xl'>
        <thead className='border-3'>
          <tr className='tr'>
            <th className='th'>Name</th>
            <th className='th'>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className='tr'>
            <td className='th'>Email</td>
            <td className='th'><p>{userInfo.email}</p></td>
          </tr>
          <tr className='tr'>
            <td className='th'>Family Name</td>
            <td className='th'>{userInfo.familyName || "-"}</td>
          </tr>
          <tr className='tr'>
            <td className='th'>Given Name</td>
            <td className='th'>{userInfo.givenName}</td>
          </tr>
          <tr className='tr'>
            <td className='th'>Google Id</td>
            <td className='th'>{userInfo.googleId}</td>
          </tr>
        </tbody>
      </table>

      </div>
    </div>
  )
}

export default UserCard