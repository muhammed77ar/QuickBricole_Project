export default function BricoleurSignUp(){
    return (
        <div className='my-9 min-h-screen max-w-[100%]  mt-0  overflow-hidden  '>
   <h1 className=' mx-auto title-color max-w-max title'>Sign Up</h1>
    <div className=' flex  justify-center items-center '>

      <form className="container mx-auto w-[90%] my-1 ">
        <div action="" className='grid grid-cols-6   h-max  md:px-9  gap-7 items-start'>
          <div className=' col-span-6 md:col-span-3  h-max flex flex-col  gap-3  mx-4'>
            <div className='flex flex-col gap-y-3 '>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" className='h-[40.647px]  px-[41px]'  placeholder='Enter your full name'/>
            </div>
            <div className='flex flex-col gap-y-3 '>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='h-[40.647px]  px-[41px]'  placeholder='Enter your Email'/>
            </div>
            <div className='flex flex-col gap-y-3 '>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" name="phone" id="phone" className='h-[40.647px]  px-[41px]'  placeholder='Enter your number'/>
            </div>
            <div className='flex flex-col gap-y-3 '>
            <label htmlFor="city">Location</label>
            <select name="city" id="city" className='h-[40.647px] px-[41px]'>
              <option value="city"> citys</option>
            </select>
            </div>
            <div className='flex flex-col gap-y-3 '>
            <label htmlFor="ceategory">Ctegory</label>
            <select name="ceategory" id="ceategory" className='h-[40.647px] max-w-full ps-[41px]'>
              <option value="ceategory" className='max-w-8'> ceategory</option>
            </select>
            </div>
            <div className='flex flex-col gap-y-3 '>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" className='h-[40.647px]  ps-[41px]'  placeholder='Enter your price'/>
            </div>
          </div>
            
          <div className='col-span-6 md:col-span-3 h-[300px]   '>
            <div className='w-full flex flex-col gap-2 h-full'>
              <label htmlFor="desc"> Description</label>
            <textarea name="desc" id="desc" className='w-full  p-3 px-[41px]  h-full' placeholder='Enter a description'/> 
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center md:justify-around w-full md:w-2/4 gap-5 items-center py-2 md:mx-auto my-3'>
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