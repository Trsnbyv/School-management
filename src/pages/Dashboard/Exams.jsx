import { NotificationIcon } from "../../assets/images";
import LogoutButton from "../../components/LogoutButton";

function Exams() {
  return (
    <div className="w-[82%] overflow-y-auto h-[100vh]">
      <div className="bg-[#FCFAFA] w-[100%] flex justify-between px-[125px] py-[25px]">
        <h2 className="text-[36px] text-[#4F4F4F] font-semibold">Exams</h2>
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
    </div>
  );
}

export default Exams;
