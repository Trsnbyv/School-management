import { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { TeachersContext } from "../../context/TeachersContext";
import { NotificationIcon,HatIcon,PhoneIcon,MailIcon } from "../../assets/images";
import LogoutButton from "../../components/LogoutButton";

function TeacherDetailModal() {
  const { id } = useParams();
  const { teachers } = useContext(TeachersContext);
  const teacher = teachers[id];
  const navigate = useNavigate();

  if (!teacher) {
    return <p>Teacher not found</p>;
  }

  return (
    <div className="w-[82%] overflow-y-auto h-[100vh]">
    <div className="bg-[#FCFAFA] w-[100%] flex items-center justify-between px-[125px] py-[25px]">
      <button  onClick={() => navigate(-1)} className="back-btn bg-[#152259] text-white px-3 py-3 rounded">
        <p className="ml-[25px] font-semibold">Back</p>
      </button>
      <div className="flex items-center gap-[16px]">
        <img
          src={NotificationIcon}
          alt="notification icon"
          width={28}
          height={28}
        />
        <LogoutButton />
      </div>
    </div>
    <div className="px-[200px] py-[63px] flex items-center gap-[105px]">
        <div className="flex flex-col  items-center w-[280px]">
           <img src={teacher.image} width={280} height={280}  alt={teacher.fullName} className="mb-[50px]" />
           <h3 className="text-[16px] leading-[19px] text-[#1A1A1A] font-bold mb-1">{teacher.fullName}</h3>
           <p className="text-[14px] leading-[17px] text-[#A7A7A7] font-bold mb-[40px]">{teacher.subject}</p>
           <div className="flex gap-[25px]">
            <Link to={`mailto:${teacher.email}`}>
              <img src={HatIcon} alt="contact icon" width={60} height={60}/>
            </Link> 
            <Link to={`tel:${teacher.age}`}>
              <img src={PhoneIcon} alt="contact icon" width={60} height={60}/>
            </Link> 
            <Link to={`mailto:${teacher.email}`}>
              <img src={MailIcon} alt="contact icon" width={60} height={60}/>
            </Link> 
           </div>
        </div>
        <div className="w-[335px]">
            <span className="text-[16px] leading-[19px] text-[#1A1A1A] font-semibold= mb-[16px]">About</span>
            <p className="text-[16px] leading-[21px] text-[#A7A7A7] font-medium mb-[30px]">{teacher.about}</p>
            <div className="flex gap-[142px] items-center ml-[14px]">
                <div className="flex flex-col">
                   <span className="text-[12px] leading-[14px] text-[#1A1A1A] font-semibold">Age</span>
                   <p  className="text-[14px] leading-[17px] text-[#A7A7A7] font-medium">{teacher.age}</p>
                </div>
                <div className="flex flex-col">
                   <span className="text-[12px] leading-[14px] text-[#1A1A1A] font-semibold">Gender</span>
                   <p  className="text-[14px] leading-[17px] text-[#A7A7A7] font-medium">{teacher.gender}</p>
                </div>
            </div>
         </div>
       </div>
    </div>
  );
}

export default TeacherDetailModal;
