import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import './SignUpForm.scss'
import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const initialValue = {firstName:'',lastName:'',email:'',contactNumber:'',password:'',confirmPassword:'',cnic:''}

const SignUpForm = () => {
    const [values,setValues] = useState(initialValue);
    const navigate = useNavigate()

    function handleform(e){
        e.preventDefault()
        alert(values.firstName)
    }

    function handleInputs(e){
        setValues({...values,[e.target.name]:e.target.value})
    }

    const inputs = [
        {label:'First Name',name:'firstName',type:'text',value:values.firstName},
        {label:'Last Name',name:'lastName',type:'text',value:values.lastName},
        {label:'Email',name:'email',type:'email',value:values.email},
        {label:'Contact Number',name:'contactNumber',type:'number',value:values.contactNumber},
        {label:'Password',name:'password',type:'password',value:values.password},
        {label:'Confirm Password',name:'confirmPassword',type:'password',value:values.confirmPassword},
        {label:'CNIC',name:'cnic',type:'number',value:values.cnic}
    ]

    return ( 
        <div className="sign-up-form-container">
            <div className="sign-up-form">
                <div className="logo-img">
                    <PersonOutlineOutlinedIcon style={{color:"#fff",fontSize:'2.5rem'}}/>
                </div>
                <h2>Sign Up</h2>
                <form onSubmit={handleform}>
                    {/* <div className="sign-up-fields"> */}
                        {inputs.map((input)=>(
                                <div className="input-box" key={input.name}>
                                    <FormInput id={input.name} label={input.label} name={input.name} value={input.value} setValue={handleInputs} type={input.type}/>
                                </div>
                            ))}
                    {/* </div> */}
                    <div className="form-btn">
                        <button>Sign Up</button>
                    </div>
                </form>
                <h4 className="new-link">Already have an account? <Link to="/login">Sign In</Link></h4>
                <h5 className="copyright-form">&copy; Asaan REITurns</h5>
            </div>
        </div>
     );
}
 
export default SignUpForm;