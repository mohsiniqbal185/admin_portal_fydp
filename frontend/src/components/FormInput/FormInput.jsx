import { TextField } from "@mui/material";

const FormInput = ({label,value,type,name,setValue}) => {
    return ( 
        <>
        <TextField 
        className="textfield" 
        id={name} 
        label={label}
        sx={{input: { color: '#2c45a8' }}}
        variant="outlined"
        name={name} 
        value={value}
        onChange={setValue}
        type={type}
        required
        />
        </>
     );
}
 
export default FormInput;