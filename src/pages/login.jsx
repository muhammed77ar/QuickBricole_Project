
import googleImg from '../imgs/googleimg.png'
import fbImg from '../imgs/facebookimg.png'

export default function Login(){
  return <>
   <div className='min-h-screen w-full  max-w-[100%]  mt-0  overflow-hidden  py-12'>
    
   <h1 className=' mx-auto title-color max-w-max title'>Login</h1>
    <div className=' flex   justify-center items-center  '>

    <form className="container mx-auto w-[80%] md:mex-w-[10%] my-1 border border-red-300">
        <div className='grid grid-cols-6   h-max  md:px-9  gap-6 items-start'>
          <div className='col-span-6 flex flex-col md:flex-row  md:px-3 mx-auto gap-2'>
            <span className='py-2 border  border-t-2 border-x-2 rounded-md border-blue-300 w-[300px]  flex items-center justify-center'><img src={fbImg}alt='imgfb'/>login with facebook</span>
            <span className='py-2 border border-t-2 border-x-2 rounded-md border-blue-300 w-[300px] flex items-center justify-center'><img src={googleImg}alt='imgGoogle'/> login with google</span>
          </div>
          <div className='col-span-6 text-center text-gray-400'> -OR-</div>
          <div className=' col-span-6 h-max  flex flex-col gap-y-[19px]   '>
           
            <div className='flex flex-col gap-y-2 '>
            <label htmlFor="email">Email or user name</label>
            <input type="email" name="email" id="email" className='h-[40.647px]  px-[41px]'  placeholder='Enter your Email or username'/>
            </div>
            <div className='flex flex-col gap-y-2 '>
            <label htmlFor="phone">Password</label>
            <input type="password" name="phone" id="phone" className='h-[40.647px]  px-[41px]'  placeholder='Enter your password'/>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center md:justify-around w-full my-[15px]  gap-5 items-center py-2 mx-auto'>
          <button type='submit ' className='p-3 w-[50%] bg-[#1E88E5] rounded-md text-white shadow-xl shadow-black/20'>Login</button>
          <div>
            <span className='text-[21.16px] font-semibold'>i don't have account <a href="#signup" className='text-[#1E88E5] hover:underline'>Sign UP</a> </span>
          </div>
        </div>
      </form>
    </div>
  </div>
  </>
}