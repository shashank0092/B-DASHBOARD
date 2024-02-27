import LoginForm from "../../components/Forms/LoginFom"
import LOGINIMAGE from "../../assets/LoginImage.png"

const Login = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-40" >
                <div className="flex flex-col gap-20 p-28" >
                    <div className="flex flex-col justify-center items-center" >
                        <div>
                            <p className="text-slate-600 font-dm-font text-xl font-semibold" >Sign in</p>
                        </div>
                        <div>
                            <p className="text-slate-600 font-dm-font text-lg font-semibold" >Welcome back! please fill your details</p>
                        </div>
                    </div>
                    <div>
                        <LoginForm />
                    </div>
                    
                </div>
                <div >
                    <div className="w-5/6 mt-10 border " >
                        <img src={LOGINIMAGE} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login