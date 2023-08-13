import { TextField } from "@mui/material";

const FormInput = ({label,value,type,name,setValue,disabled,multiple,accept}) => {
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
        disabled={disabled}
        inputProps={multiple}
        accept={accept}
        />
        </>
     );
}
 
export default FormInput;