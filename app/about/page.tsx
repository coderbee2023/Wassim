import Image from 'next/image'
function page() {
  return (
  <div>
    <div className='flex flex-row justify-center '>
      <div className=" border-r-4 border-blue-600">
        <Image src="/mypic.jpeg" width={400} height={400} alt={'picture of me'}/>
      </div>
      <div className="flex flex-col w-2/3 p-3 gap-2">
        <div className='text-4xl font-bold'>So Who Am I ?</div>
        <div className='text-xl font-medium '>Djobbi <span className='text-blue-600'>Wassim</span></div>
        <div><strong><span className='text-blue-600'>Full</span>stack <span className='text-blue-600'>Dev</span>eloper,<span className='text-blue-600'>IT</span> Student</strong></div>
        <div className='bg-zinc-700'>Hello there, I am Wassim Djobbi, a Business Computing student enrolled at Higher School of Digital Economy, University of Manouba. With a passion for programming, I spend hours every day searching and learning about the latest technologies to build a solid computing background. As my favorite quote goes, "A man's worth is no greater than the worth of his ambitions." It is my ambition to become a skilled software developer and leverage technology to create a positive impact in the world around me. I am determined to use my skills and knowledge to contribute towards making the world a better place using today's cutting-edge technologies.</div>
        <div className='flex flex-row justify-between'>
          <div><strong className='text-blue-600'>Work :</strong><br />Web Developer at <a className='text-blue-600' href="https://hortensia-agency.com">Hortensia agency</a></div>
          <div><strong className='text-blue-600'>Education :</strong><br /><span className='text-blue-600'>E</span>-Business Student at <a className='text-blue-600' href="esen.tn">Esen Manouba</a></div>
          <div></div>
        </div>
        <div className=''><strong>Email:</strong> <br /><span className='text-zinc-500'>Djobbiwassim5<span className='text-white'>@</span>gmail.com</span></div>
        
      </div>
    </div>
    <div className='flex flex-col mt-12'>
      <div className='text-4xl font-bold mb-10 text-center '>Experience</div>
      <div className='flex flex-col items-start w-full '>
        <div>
        <div className='flex flex-col items-center justify-center'>
            <div className=' p-3 border-2 border-white rounded-full'><Image src="/uni.png" height={40}width={40}alt='picture' /></div>
          <div className='translate-x-1/2 flex flex-row'>
            <div className="w-1 h-20 bg-white"></div>
            <div className='flex flex-col p-2'>
              <div>2022-2023</div>
              <div>bachelor degree in E-Business</div>
            </div>
         </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='  p-3 border-2 border-white rounded-full'><Image src="/internship.png" height={40}width={40}alt='picture' /></div>
          <div className='translate-x-1/2 flex flex-row'>
            <div className="w-1 h-20 bg-white"></div>
            <div className='flex flex-col p-2'>
              <div>2023-2024</div>
              <div>Internship Web-Developer at Hortensia Agency</div>
            </div>
         </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className=' p-3 border-2 border-blue-800 rounded-full'><Image src="/work.png" height={40}width={40}alt='picture' /></div>
          <div className='translate-x-1/2 flex flex-row'>
            <div className="w-1 h-20 bg-blue-800"></div>
            <div className='flex flex-col p-2'>
              <div>2023-2024</div>
              <div>Web-Developer at Hortensia-Agency</div>
            </div>
         </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page