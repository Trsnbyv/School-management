import {NotificationIcon} from '../../assets/images/index'
import LogoutButton from '../../components/LogoutButton'
import {AddAdminsIcon,AddClassesIcon,AddStudentsIcon} from '../../assets/images/index'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="w-[82%] overflow-y-auto h-[100vh]">
      <div className="bg-[#FCFAFA] w-[100%] flex justify-between px-[125px] mb-[53px] py-[25px]">
        <div className="flex flex-col">
          <p className="text-[16px] leading-[19px] font-medium text-[#424242]">Learn  how to launch faster</p>
          <p className="text-[16px] leading-[19px] font-medium text-[#424242]">watch our webinar for tips from our experts and get a limited time offer.</p>
        </div>
        <div className='flex items-center gap-[16px]'>
          <img src={NotificationIcon} alt="notification icon" width={28} height={28} />
          <LogoutButton/>
        </div>
      </div>
      <div className="container w-[770px] mx-auto">
        <h2 className='text-[36px] leading-[44px] text-[#4F4F4F] font-semibold mb-[23px]'>
          Welcome to your dashboard, Udemy school
        </h2>
        <a className='text-[24px] pl-[105px] leading-[29px] text-[#4F4F4F] font-semibold' href="#">
          Uyo/school/@teachable.com
        </a>
        <ul className='flex flex-col gap-[51px] pt-[68px] pr-[148px] pl-[90px]'>
          <li>
            <Link className='flex items-start gap-[20px]'>
             <img src={AddAdminsIcon} alt="Add list icon" width={36} height={36} />
             <div className='flex flex-col gap-[16px]'>
               <h3 className='text-[24px] leading-[29px] text-[#4F4F4F] text-medium'>
                 Add other admins  
               </h3>
               <p className='text-[14px] leading-[18px] text-[#4F4F4F]'>
                Create rich course content and coaching products for your students.
                When you give them a pricing plan, they’ll appear on your site!
               </p>
             </div>
            </Link>
          </li>
          <li>
            <Link className='flex items-start gap-[20px]'>
             <img src={AddClassesIcon} alt="Add list icon" width={36} height={36} />
             <div className='flex flex-col gap-[16px]'>
               <h3 className='text-[24px] leading-[29px] text-[#4F4F4F] text-medium'>
                 Add classes  
               </h3>
               <p className='text-[14px] leading-[18px] text-[#4F4F4F]'>
                Create rich course content and coaching products for your students.
                When you give them a pricing plan, they’ll appear on your site!
               </p>
             </div>
            </Link>
          </li>
          <li>
            <Link to={'/students'} className='flex items-start gap-[20px]'>
             <img src={AddStudentsIcon} alt="Add list icon" width={36} height={36} />
             <div className='flex flex-col gap-[16px]'>
               <h3 className='text-[24px] leading-[29px] text-[#4F4F4F] text-medium'>
                 Add students  
               </h3>
               <p className='text-[14px] leading-[18px] text-[#4F4F4F]'>
                Create rich course content and coaching products for your students.
                When you give them a pricing plan, they’ll appear on your site!
               </p>
             </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
