import googleImg from '../imgs/googleimg.png' 
import fbImg from '../imgs/facebookimg.png' 

export default function ClientSignUp(){
    return (<div className='min-h-screen w-full  max-w-[100%]  mt-0  overflow-hidden '>
   <h1 className=' mx-auto title-color max-w-max title'>Sign Up</h1>
    <div className='   justify-center items-center '>

      <form className="container mx-auto w-[90%] md:w-[60%] my-1 ">
        <div action="" className='grid grid-cols-6   h-max  md:px-9  gap-6 items-start'>
          <div className='col-span-6 flex flex-col md:flex-row  md:px-3 mx-auto gap-2'>
            <span className='py-2 border  border-t-2 border-x-2 rounded-md border-blue-300 w-[300px]  flex items-center justify-center'><img src={fbImg}alt='imgfb'/>sign up with facebook</span>
            <span className='py-2 border border-t-2 border-x-2 rounded-md border-blue-300 w-[300px] flex items-center justify-center'><img src={googleImg}alt='imgGoogle'/> sign up with google</span>
          </div>
          <div className='col-span-6 text-center text-gray-400'> -OR-</div>
          <div className=' col-span-6   h-max  felx flex-col gap-[15px]  '>
            <div className='flex flex-col gap-y-2 '>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" className='h-[40.647px]  px-[41px]'  placeholder='Enter your full name'/>
            </div>
            <div className='flex flex-col gap-y-2 '>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='h-[40.647px]  px-[41px]'  placeholder='Enter your Email'/>
            </div>
            <div className='flex flex-col gap-y-2 '>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" name="phone" id="phone" className='h-[40.647px]  px-[41px]'  placeholder='Enter your number'/>
            </div>
            <div className='flex flex-col gap-y-2 '>
            <label htmlFor="city">Location</label>
            <select name="city" id="city" className='h-[40.647px] px-[41px]'>
              <option value="city"> citys</option>
            </select>
            </div>
            
            
          </div>
          
        </div>
        <div className='flex flex-col md:flex-row justify-center md:justify-around w-full my-[15px]  gap-5 items-center py-2 mx-auto'>
          <button type='submit ' className='p-3 w-[50%] bg-[#1E88E5] rounded-md text-white shadow-xl shadow-black/20'>Sign Up</button>
          <div>
            <span className='text-[21.16px] font-semibold'>i have account <a href="#login" className='text-[#1E88E5] hover:underline'>Login</a> </span>
          </div>
        </div>
      </form>
    </div>
  </div>
    )
}