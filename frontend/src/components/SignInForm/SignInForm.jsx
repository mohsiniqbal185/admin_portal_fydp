import "./SignInForm.scss"
import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormInput from "../FormInput/FormInput";
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import axios from "axios";
// import useAuthStore from "../../context/AuthContext";

axios.defaults.withCredentials = true;

const credentials = {email:'test@mail.com',password:'1234'}

const initialValue = {email:'',password:''}

const SignInForm = ({loggedIn,setLoggedIn}) => {
    const [values,setValues] = useState(initialValue);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate()
    // const setUser = useAuthStore((state) => state.setUser);

    async function handleform(e){
        e.preventDefault()
        const user = await fetchUser(values)
        setLoading(true);

        if (user.status == 200){
            if (values.email == user.data.email){
                setTimeout(()=>{
                    setUser(user.data)
                    setLoading(false)
                    setLoggedIn(true)
                },1000)
            }
        }else{
            setTimeout(()=>{
                setLoading(false)
                alert('Wrong email or password!')
                setValues(initialValue)
            },1000)
        }
        
    }

    // fetch user from database
    const fetchUser = async (values) => {
        try {
            const res = await axios.post("/auth/login", values )
            return res
        } catch (error) {
            return error
        }
    }



    useEffect(()=>{
        if(loggedIn){
            navigate('/')
        }
    },[loggedIn])

    function handleInputs(e){
        setValues({...values,[e.target.name]:e.target.value})
    }

    const inputs = [
        {label:'Email',name:'email',type:'email',value:values.email},
        {label:'Password',name:'password',type:'password',value:values.password},
    ]
    
    return ( 
        <div className="sign-in-form-container">
            <div className="sign-in-form">
                <div className="logo-img">
                    <PersonOutlineOutlinedIcon style={{color:"#fff",fontSize:'2.5rem'}}/>
                </div>
                <h2>Sign In</h2>
                <form onSubmit={handleform}>
                    {inputs.map((input)=>(
                        <div className="input-box" key={input.name}>
                            <FormInput label={input.label} name={input.name} value={input.value} setValue={handleInputs} type={input.type}/>
                        </div>
                    ))}
                <div className="form-btn">
                    <button>Sign In &nbsp;{loading && <AutorenewOutlinedIcon color="white"/>}</button>
                </div>
                </form>
                <h4 className="new-link">Create a new account? <Link to="/sign-up">Sign Up</Link></h4>
                <h5 className="copyright-form">&copy; Asaan REITurns</h5>
            </div>
        </div>
     );
}
 
export default SignInForm;