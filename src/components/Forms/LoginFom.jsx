import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom';



const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required(),
    password: Yup.string().min(8, 'Too Short!').max(10, 'Tpp Long!').required()
})


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
   
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    toggle:false,
                    checked: [],
                }}

                onSubmit={values => {
                    console.log(values)
                }}
                // validationSchema={LoginSchema}
            >

                {
                    ({ errors, touched }) => (
                        <div className='bg-white ' >
                            <Form className='flex flex-col gap-3' >
                                <div className='flex flex-col gap-3' >
                                    <div>
                                        <p className='text-slate-600 font-dm-font text-sm font-semibold' >Email</p>
                                    </div>
                                    <div className='bg-white border border-stone-500 py-3 rounded-xl w-96' >
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter Email"
                                            className="pl-2 w-full py-2 rounded-xl outline-none font-dm-font"

                                        />
                                    </div>
                                    <div>
                                        {errors.email && touched.email ? (
                                            <div><p className="text-red-500 font-dm-sans text-sm "  >{errors.email}</p></div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div>
                                        <p className='text-slate-600 font-dm-font text-sm font-semibold' >Password</p>
                                    </div>
                                    <div className='bg-white border border-stone-500 py-3 rounded-xl w-96 flex items-center ' >
                                        <Field
                                            id="password"
                                            name="password"
                                            type={showPassword ? ("text") : ("password")}
                                            placeholder="Enter password"
                                            className="pl-2 w-full py-2 rounded-3xl outline-none font-dm-font"

                                        />

{
                                    showPassword ?
                                        (
                                            <div className="pr-5" >
                                                <FaEyeSlash onClick={() => { setShowPassword(!showPassword) }} />
                                            </div>) :
                                        (
                                            <div className="pr-5">
                                                <FaRegEye onClick={() => setShowPassword(!showPassword)} />
                                            </div>)
                                }
                                    </div>
                                    <div>
                                    {errors.password && touched.password ? (
                                    <div><p className="text-red-500 font-dm-sans text-sm" >{errors.password}</p></div>
                                ) : null}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className='text-slate-600 font-dm-font text-sm font-semibold'>Forgot Password?</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Link to="/home/analytics" >
                                        <button  className='bg-[#F99494] text-white w-96 py-3 rounded-xl' >
                                            <p className='font-dm-font' >Sign In</p>
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    )
                }

            </Formik>
        </>
    )
}

export default LoginForm