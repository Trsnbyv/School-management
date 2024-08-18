import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import toast, { Toaster } from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      login: e.target.login.value,
      password: e.target.password.value,
    };
    
    localStorage.setItem("user", JSON.stringify(data));
    
    e.target.reset();
    toast.success("Registration successful!");
    
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="bg-[#FCFAFA] h-[100vh] flex flex-col justify-center items-center">
      <Toaster position="top-right" reverseOrder={false}/>
      <h2 className="text-[36px] text-[#4F4F4F] font-semibold leading-[44px] mb-[53px]">Welcome, Sign up</h2>
      <form onSubmit={handleSubmitSignup} className="w-[512px] bg-white flex flex-col justify-center items-center pt-[72px] pb-[100px]">
        <div className="w-[238px] text-center">
          <p className="text-[16px] text-[#667085] font-medium leading-[25px] mb-[34px]">
            It is our great pleasure to have you on board!
          </p>
        </div>
        <Input placeholder={"Enter your Email"} type={"email"} extraStyle={"mb-[14px]"} name={"email"} />
        <Input placeholder={"Create your Login"} type={"text"} extraStyle={"mb-[14px]"} name={"login"} />
        <Input placeholder={"Create your Password"} type={"password"} extraStyle={"mb-[34px]"} name={"password"} />
        <Button title={"Sign up"} type={"submit"} />
      </form>
    </div>
  );
}

export default Signup;
