// 'use server'
// export async function authorizeUser(_prev_state, formData: FormData) {
//     const email = formData.get('email');
//     const password = formData.get('password');
//     let errors = [];
//     if (!email) {
//         errors.push("Email is required");
//     }
//     if (!password) {
//         errors.push("Password is required");
//     }
//     if (password?.length < 8) {
//         errors.push("Length of password must be greater than or equal 8");
//     }
//     if (errors.length > 0) {
//         return errors;
//     }

import { json } from "stream/consumers";

//     try {
//         const res = await fetch(`https://68624c9896f0cc4e34b91e08.mockapi.io/api/users`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ email, password })
//         });
//         if (!res.ok) {
//             throw new Error("Error in logging in user")
//         }
//         const response = await res.json();


//     } catch (err) {
//         console.error("Failed to fetch user", err);
//         return {
//             success: false,
//             data: null
//         }
//     }
// }

export async function authorizeUser (email:string ,password:string)
{
    if(!email || !password)
    {
        throw new Error("Email & password are required");
    }
    if(password.length<8)
    {
        throw new Error("Length of password must be atleast 8 letters");
    }
    try{
        const res  = await fetch(`https://68624c9896f0cc4e34b91e08.mockapi.io/api/users`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        }) ;
        const user = res.json();
          
    }catch(err)
    {
        console.log(err);
        return null;
    }
}