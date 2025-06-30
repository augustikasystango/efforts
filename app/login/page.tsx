import { useActionState } from "react"
import { authorizeUser } from "../actions/auth"

export default function LoginPage()
{
    const [state,formAction]= useActionState(authorizeUser,null)
    return (
        <>
         <form action={formAction}>
            <input name="email" type="email" placeholder="Enter your email"/>
            <input name="password" type="password" placeholder="Enter your password"/>
            {
                state?.success && (<p>User logged in successfully</p>)
            }
            {state?.errors && (<p>User does not exist </p>)}
         </form>
        </>
    )
}