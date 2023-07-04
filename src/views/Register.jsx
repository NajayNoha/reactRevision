import React, { useState }from 'react';


const Register = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const handleSubmit = (e) => {
        if(!globalValidation()) {
            e.preventDefault()
        }

        return globalValidation() 
        // alert('submitted')
    }
    const globalValidation = () => {
        if(!validateName()){
            alert('first name Or last name is not valid ');
            return false;
        }
        if (!validatePw()) {
            alert('password is not valid');
            return false;
        }
        if (!validateEmail()) {
            alert('email is not valid ');
            return false ;
        }
        return true
        
    }
    const validateName = () =>{
        const reg = /^[a-zA-Z\s]+$/i
        const fn = reg.test(fname);
        const ln = reg.test(lname);
        return fn && ln;
    }
    const validatePw = () => {
        return pw.length<8 && pw.length >4;

    }
    const validateEmail = () =>{
        const reg = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        return reg.test(email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={fname} onChange={(e)=>{setFname(e.target.value)}}/>
                </div>
                <div>
                    <label >Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={lname} onChange={(e)=>{setLname(e.target.value)}} />
                </div>
                <div>
                    <label >Email:</label>
                    <input type="text" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label >Password:</label>
                    <input type="password" id="password" name="password" value={pw} onChange={(e)=>{setPw(e.target.value)}}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
