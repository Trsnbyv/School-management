// import { NotificationIcon, NoTeachersImg } from "../../assets/images";
// import LogoutButton from "../../components/LogoutButton";
// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { TeachersContext } from "../../context/TeachersContext";

// function Teachers() {
//   const { teachers, setTeachers } = useContext(TeachersContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
//     if (storedTeachers.length > 0) {
//       setTeachers(storedTeachers);
//     }
//   }, [setTeachers]);

//   const handleAddTeachers = () => {
//     navigate("/teacher-modal");
//   };
//   const handleDelete = (index) => {
//     const updatedTeachers = teachers.filter((_, i) => i !== index);
//     setTeachers(updatedTeachers);
//     localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
//   };

//   return (
//     <div className="w-[82%] overflow-y-auto h-[100vh]">
//       <div className="bg-[#FCFAFA] w-[100%] flex justify-end px-[125px] py-[25px]">
//         <div className="flex items-center gap-[16px]">
//           <img
//             src={NotificationIcon}
//             alt="notification icon"
//             width={28}
//             height={28}
//           />
//           <LogoutButton />
//         </div>
//       </div>
//       <div className="flex justify-between items-center pl-[39px] pr-[125px] py-[14px]">
//         <p className="text-[20px] leading-[24px] font-medium text-[#4F4F4F]">
//           Teachers
//         </p>
//         <button
//           onClick={handleAddTeachers}
//           className="mt-4 bg-[#509CDB] hover:bg-blue-600 duration-300 text-white px-4 py-2 rounded"
//         >
//           Add Teachers
//         </button>
//       </div>

//       {teachers.length === 0 ? (
//         <div className="flex justify-center flex-col items-center">
//           <img src={NoTeachersImg} alt="No Teachers" width={340} height={255} />
//           <p className="text-center text-[28px] leading-[34px] text-[#4F4F4F] text-semibold mb-1 mt-[9px]">
//             No Teachers at this time
//           </p>
//           <p className="text-center text-[14px] leading-[17px] text-[#4F4F4F] text-medium">
//             Teachers will appear here after they enroll in your school.
//           </p>
//         </div>
//       ) : (
//         <table className="bg-white ml-[24px]">
//           <thead>
//             <tr>
//               <th className="text-start w-[180px] text-[14px] leading-[16px] font-bold text-[#424242]">
//                 Name
//               </th>
//               <th className="text-start w-[136px] text-[14px] leading-[16px] font-bold text-[#424242]">
//                 Subject
//               </th>
//               <th className="text-start w-[169px] text-[14px] leading-[16px] font-bold text-[#424242]">
//                 Class
//               </th>
//               <th className="text-start w-[297px] text-[14px] leading-[16px] font-bold text-[#424242]">
//                 Email
//               </th>
//               <th className="text-start w-[320px] text-[14px] leading-[16px] font-bold text-[#424242]">
//                 Gender
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {teachers.map((teacher, index) => (
//               <tr
//                 key={index}
//                 style={{
//                   backgroundColor:
//                     (index + 1) % 2 === 0 ? "#EBF6FF80" : "white",
//                 }}
//                 className="w-full"
//               >
//                 <td className="flex items-center gap-2 pl-2 py-3">
//                   {teacher.image ? (
//                     <img
//                       src={teacher.image}
//                       width={34}
//                       height={34}
//                       alt="Teacher"
//                       className="w-[34px] h-[34px] rounded-[50%]"
//                     />
//                   ) : (
//                     "No Image"
//                   )}
//                   <span className="text-[14px] leading-[16px] font-medium text-gray-900">
//                     {teacher.fullName}
//                   </span>
//                 </td>
//                 <td className="text-[14px] leading-[16px] font-medium text-gray-900">
//                   {teacher.subject}
//                 </td>
//                 <td className="text-[14px] leading-[16px] font-medium text-gray-900">
//                   {teacher.class}
//                 </td>
//                 <td className="text-[14px] leading-[16px] font-medium text-gray-900">
//                   {teacher.email}
//                 </td>
//                 <td className="text-[14px] leading-[16px] font-medium text-gray-900">
//                   {teacher.gender}
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="bg-red-500 text-white px-4 py-2 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default Teachers;


import { NotificationIcon, NoTeachersImg } from "../../assets/images";
import LogoutButton from "../../components/LogoutButton";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TeachersContext } from "../../context/TeachersContext";

function Teachers() {
  const { teachers, setTeachers } = useContext(TeachersContext);
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    if (storedTeachers.length > 0) {
      setTeachers(storedTeachers);
    }
  }, [setTeachers]);

  const handleAddTeachers = () => {
    navigate("/teacher-modal");
  };

  const handleDelete = (index) => {
    const updatedTeachers = teachers.filter((_, i) => i !== index);
    setTeachers(updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <div className="flex justify-between items-center pl-[39px] pr-[125px] py-[14px]">
        <p className="text-[20px] leading-[24px] font-medium text-[#4F4F4F]">
          Teachers
        </p>
        <button
          onClick={handleAddTeachers}
          className="bg-[#509CDB] hover:bg-blue-600 duration-300 text-white px-4 py-2 rounded"
        >
          Add Teachers
        </button>
      </div>

      <div className="flex justify-between items-center pl-[36px] pr-[125px] pb-[11px]">
        <input
          type="text"
          placeholder="Search for a teachers by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-transparent border-[1px] focus:border-[#509CDB] bg-[#FCFAFA] placeholder:text-[#8A8A8A] duration-300 focus:placeholder:text-[#509CDB] py-[13px] pl-[10px] w-full outline-none rounded-[4px] text-black"
        />
      </div>

      {filteredTeachers.length === 0 ? (
        <div className="flex justify-center flex-col items-center">
          <img src={NoTeachersImg} alt="No Teachers" width={340} height={255} />
          <p className="text-center text-[28px] leading-[34px] text-[#4F4F4F] text-semibold mb-1 mt-[9px]">
            No Teachers at this time
          </p>
          <p className="text-center text-[14px] leading-[17px] text-[#4F4F4F] text-medium">
            Teachers will appear here after they enroll in your school.
          </p>
        </div>
      ) : (
        <table className="bg-white ml-[36px] mb-[30px]">
          <thead>
            <tr>
              <th className="text-start w-[180px] text-[14px] leading-[16px] font-bold text-[#424242]">
                Name
              </th>
              <th className="text-start w-[136px] text-[14px] leading-[16px] font-bold text-[#424242]">
                Subject
              </th>
              <th className="text-start w-[169px] text-[14px] leading-[16px] font-bold text-[#424242]">
                Class
              </th>
              <th className="text-start w-[297px] text-[14px] leading-[16px] font-bold text-[#424242]">
                Email
              </th>
              <th className="text-start w-[240px] text-[14px] leading-[16px] font-bold text-[#424242]">
                Gender
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredTeachers.map((teacher, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor:
                    (index + 1) % 2 === 0 ? "#EBF6FF80" : "white",
                }}
                className="w-full"
              >
                <td className="flex items-center gap-2 pl-2 py-3">
                  {teacher.image ? (
                    <img
                      src={teacher.image}
                      width={34}
                      height={34}
                      alt="Teacher"
                      className="w-[34px] h-[34px] rounded-[50%]"
                    />
                  ) : (
                    "No Image"
                  )}
                  <span className="text-[14px] capitalize leading-[16px] font-medium text-gray-900">
                    {teacher.fullName}
                  </span>
                </td>
                <td className="text-[14px] capitalize leading-[16px] font-medium text-gray-900">
                  {teacher.subject}
                </td>
                <td className="text-[14px] leading-[16px] font-medium text-gray-900">
                  {teacher.class}
                </td>
                <td className="text-[14px] leading-[16px] font-medium text-gray-900">
                  {teacher.email}
                </td>
                <td className="text-[14px] leading-[16px] font-medium text-gray-900">
                  {teacher.gender}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Teachers;

