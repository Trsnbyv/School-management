import { NavLink } from 'react-router-dom';
import SiteLogo from '../assets/images/site-logo.svg'
import {BillingIcon,DashboardIcon,ExamsIcon,FeaturesIcon,SettingsIcon,StudentsIcon} from '../assets/images/index'
function Navbar() {
  return (
    <div className="w-[18%] overflow-y-auto bg-[#152259] pt-[26px] flex flex-col items-center h-[100vh]">
      <img src={SiteLogo} alt="sitelogo" width={65} height={65} className='mb-[22px]'/>
      <p className='text-[14px] leading-[17px] font-semibold text-white mb-[40px]'>Udemy Inter. school</p>
      <ul className='flex flex-col items-center gap-[8px] pt-[16px] border-[#BDBDBD] border-t-[1px] w-full'>
        <li className='dashboard-item'>
          <NavLink to={'/'} className={'duration-500 w-[192px] py-3 pl-[16px] rounded-[4px] flex items-center gap-[16px]'}>
            <img src={DashboardIcon} alt="dashboard" width={16} height={16} />
            <span className='text-[14px] leading-[17px] font-semibold text-white'>Dashboard</span>
          </NavLink>
        </li>
        <li className='dashboard-item'>
          <NavLink to={'/teachers'} className={'duration-500 w-[192px] py-3 pl-[16px] rounded-[4px] flex items-center gap-[16px]'}>
            <img src={DashboardIcon} alt="dashboard" width={16} height={16} />
            <span className='text-[14px] leading-[17px] font-semibold text-white'>Teachers</span>
          </NavLink>
        </li>
        <li className='dashboard-item'>
          <NavLink to={'/students'} className={'duration-500 w-[192px] py-3 pl-[16px] rounded-[4px] flex items-center gap-[16px]'}>
            <img src={StudentsIcon} alt="dashboard" width={16} height={16} />
            <span className='text-[14px] leading-[17px] font-semibold text-white'>Students</span>
          </NavLink>
        </li>
        <li className='dashboard-item'>
          <NavLink to={'/billing'} className={'duration-500 w-[192px] py-3 pl-[16px] rounded-[4px] flex items-center gap-[16px]'}>
            <img src={BillingIcon} alt="dashboard" width={16} height={16} />
            <span className='text-[14px] leading-[17px] font-semibold text-white'>Billing</span>
          </NavLink>
        </li>
        <li className='dashboard-item'>
          <NavLink to={'/settings'} className={'duration-500 w-[192px] py-3 pl-[16px] rounded-[4px] flex items-center gap-[16px]'}>
            <img src={SettingsIcon} alt="dashboard" width={16} height={16} />
            <span className='text-[14px] leading-[17px] font-semibold text-white'>Settings and profile</span>
          </NavLink>
        </li>
        <li className='dashboard-item'>
          <NavLink to={'/exams'} className={'duration-500 w-[192px] py-3 pl-[16px] rounded-[4px] flex items-center gap-[16px]'}>
            <img src={ExamsIcon} alt="dashboard" width={16} height={16} />
            <span className='text-[14px] leading-[17px] font-semibold text-white'>Exams</span>
          </NavLink>
        </li>
        <li className='dashboard-item'>
          <NavLink to={'/features'} className={'mt-[114px] duration-500 w-[192px] py-3 pl-[16px] rounded-[4px] flex items-center'}>
            <img src={FeaturesIcon} alt="dashboard" width={16} height={16} />
            <span className='text-[14px] ml-[16px] mr-[26px] leading-[17px] font-semibold text-white'>Features</span>
            <span className='text-[10px] leading-[12px] font-semibold py-[1px] px-[8px] rounded-[8px] bg-[#B9D7F1]'>NEW</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
