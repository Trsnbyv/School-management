import Button from "../../components/Button"
import Input from "../../components/Input"

function Signup() {
  return (
    <div className="bg-[#FCFAFA] h-[100vh] flex flex-col justify-center items-center">
        <h2 className="text-[36px] text-[#4F4F4F] font-semibold leading-[44px] mb-[53px]">Welcome, Sign up</h2>
        <form className="w-[512px] bg-white flex flex-col justify-center items-center pt-[72px] pb-[100px]">
            <div className="w-[238px] text-center">
              <p className="text-[16px] text-[#667085] font-medium leading-[25px] mb-[34px]">
                 It is our great pleasure to have you on board!
              </p>
            </div>
            <Input placeholder={'Enter your Email'} type={'email'} extraStyle={'mb-[14px]'} name={'email'}/>
            <Input placeholder={'Create your Login'} type={'text'} extraStyle={'mb-[14px]'} name={'login'}/>
            <Input placeholder={'Create your Password'} type={'password'} extraStyle={'mb-[34px]'} name={'password'}/>
            <Button title={'Sign up'} type={'submit'}/>
        </form>
    </div>
  )
}

export default Signup
