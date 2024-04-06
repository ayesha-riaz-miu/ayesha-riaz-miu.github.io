import { MouseEvent, useRef } from "react";

function App() {

    const usernameref = useRef<HTMLInputElement | null>(null)
    const passwordref = useRef<HTMLInputElement | null>(null)

    const login = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const username_value = usernameref.current?.value;
        const password_value = passwordref.current?.value;

        if (username_value == 'ayesha' && password_value == '123') {
            console.log('succese')
        }
        else {
            console.log('failed')
        }




    }

    return (
        <div>
           
            <form>
                username: <input ref={usernameref}></input>
                password:<input ref={passwordref}></input>
                <button onClick={login}>login</button>

            </form>
        </div>

    )

}

export default App;