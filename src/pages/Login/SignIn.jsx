import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Context } from "../../context/Context";

function SignIn() {
  const { setToken } = useContext(Context);

  const defaultData = {
    login: "saidkomil",
    password: "123",
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    };

    const storedUser = JSON.parse(localStorage.getItem("user")) || defaultData;

    if (storedUser.login === data.login && storedUser.password === data.password) {
      setToken(data);
      e.target.reset();
    } else {
      toast.error("Incorrect username or password");
    }
  };

  return (
    <div className="bg-[#FCFAFA] h-[100vh] flex flex-col justify-center items-center">
      <Toaster position="top-right" reverseOrder={false}/>
      <h2 className="text-[36px] text-[#4F4F4F] font-semibold leading-[44px] mb-[53px]">
        Welcome, Log into your account
      </h2>
      <form onSubmit={handleSubmitLogin} className="w-[512px] bg-white flex flex-col justify-center items-center pt-[72px] pb-[39px]">
        <div className="w-[238px] text-center">
          <p className="text-[16px] text-[#667085] font-medium leading-[25px] mb-[34px]">
            It is our great pleasure to have you on board!
          </p>
        </div>
        <Input
          placeholder={"Enter your Login"}
          type={"text"}
          extraStyle={"mb-[14px]"}
          name={"login"}
        />
        <Input
          placeholder={"Enter your Password"}
          type={"password"}
          extraStyle={"mb-[14px]"}
          name={"password"}
        />
        <Button title={"Login"} extraStyle={"mb-[14px]"} type={"submit"} />
        <Link to={'/sign-up'} className="text-[12px] leading-[24px] font-bold text-[#2D88D4]">
          Sign up
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
