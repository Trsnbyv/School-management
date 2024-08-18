import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TeachersContext } from "../../context/TeachersContext";
import { NotificationIcon } from "../../assets/images";
import LogoutButton from "../../components/LogoutButton";

const TeacherModal = () => {
  const [teacherInfo, setTeacherInfo] = useState({
    fullName: "",
    email: "",
    subject: "",
    about: "",
    class: "",
    gender: "",
    age: "",
    image: null,
  });

  const { setTeachers } = useContext(TeachersContext);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeacherInfo({ ...teacherInfo, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setTeacherInfo({ ...teacherInfo, image: null });
  };

  const handleSave = () => {
    setTeachers((prevTeachers) => [...prevTeachers, teacherInfo]);

    const existingTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    localStorage.setItem(
      "teachers",
      JSON.stringify([...existingTeachers, teacherInfo])
    );

    navigate("/teachers");
  };

  return (
    <div className="w-[82%] overflow-y-auto h-[100vh]">
      <div className="bg-[#FCFAFA] w-[100%] flex justify-end px-[125px] py-[25px]">
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
      <form>
        <div className="flex justify-between items-center mb-[29px] pl-[39px] pr-[125px] py-[14px]">
          <p className="text-[20px] leading-[24px] font-medium text-[#4F4F4F]">
            Add teacher
          </p>
          <button
            onClick={handleSave}
            className="bg-[#509CDB] text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
        <div className="flex pl-[39px] gap-[60px]">
          <div>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Full Name
              <input
                type="text"
                placeholder="Full Name"
                required
                value={teacherInfo.fullName}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, fullName: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] focus:border-[#509CDB] duration-300 focus:placeholder:text-[#509CDB] py-[13px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-black"
              />
            </label>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Email Address
              <input
                type="email"
                placeholder="Email Address"
                required
                value={teacherInfo.email}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, email: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] focus:border-[#509CDB] duration-300 focus:placeholder:text-[#509CDB] py-[13px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-black"
              />
            </label>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Subject
              <input
                type="text"
                placeholder="Subject"
                required
                value={teacherInfo.subject}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, subject: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] focus:border-[#509CDB] duration-300 focus:placeholder:text-[#509CDB] py-[13px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-black"
              />
            </label>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              About
              <input
                type="text"
                placeholder="About"
                required
                value={teacherInfo.about}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, about: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] focus:border-[#509CDB] duration-300 focus:placeholder:text-[#509CDB] pt-[13px] pb-[142px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-black"
              />
            </label>
          </div>
          <div>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Class
              <input
                type="text"
                placeholder="Class"
                required
                value={teacherInfo.class}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, class: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] focus:border-[#509CDB] duration-300 focus:placeholder:text-[#509CDB] py-[13px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-black"
              />
            </label>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Class
              <select
                type="text"
                required
                value={teacherInfo.gender}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, gender: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] focus:border-[#509CDB] duration-300 focus:text-[#509CDB] py-[13px] pl-[10px] mb-[36px] w-[407px] outline-none rounded-[4px] text-[#8A8A8A]"
              >
                <option>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            <label className="font-medium text-[14px] leading-[17px] text-[#8A8A8A] flex flex-col gap-[5px]">
              Age
              <input
                required
                type="number"
                placeholder="Age"
                value={teacherInfo.age}
                onChange={(e) =>
                  setTeacherInfo({ ...teacherInfo, age: e.target.value })
                }
                className="border-[#A7A7A7] border-[0.5px] focus:border-[#509CDB] duration-300 focus:placeholder:text-[#509CDB] py-[13px] pl-[10px] mb-[59px] w-[407px] outline-none rounded-[4px] text-black"
              />
            </label>
            {teacherInfo.image && (
              <div className="mb-4">
                <img
                  src={teacherInfo.image}
                  alt="Teacher"
                  className="w-16 h-16 mb-2"
                />
                <button
                  onClick={removeImage}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove Image
                </button>
              </div>
            )}
            {!teacherInfo.image && (
              <label className="text-[18px] cursor-pointer leading-[22px] text-[#4F4F4F] font-medium">
                Import Img
                <input
                  required
                  type="file"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeacherModal;
