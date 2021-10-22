import { useHistory, Link } from 'react-router-dom'
import {useState} from 'react';



function Signup({setCurrentUser}) {
    
    
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
    
    // const goToLogin = ()=> {
    //     history.push('/login')
    // }
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation
          })
        })
          .then(res => {
            if (res.ok) {
              res.json().then(user => {
                setCurrentUser(user)
                history.push('/characters')
              })
            } else {
              history.push('/characters')
              res.json().then(errors => {
                console.error(errors)
              })
            }
          })
      }

    
    return (
        <div className="authForm">
            
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <p>
                <label 
                    htmlFor="username"
                >
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    className="input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </p>
                <p>
                <label 
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    type="password"
                    name=""
                    value={password}
                    className="input"
                    onChange={(e) => setPassword(e.target.value)}
                />
                </p>
                <p>
                <label 
                    htmlFor="password_confirmation"
                >
                    Password Confirmation
                </label>
                <input
                    type="password"
                    name="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                </p>
                <p><button type="submit">Sign Up</button></p>
                <p>-- Already have an account? --</p>
                <p><Link to="/">Log In</Link></p>
            </form>
    
            

        </div>
    )
}

export default Signup;