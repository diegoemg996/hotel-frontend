import {useState} from 'react'
import apiDB from '../../api/apiDB';
import { useNavigate  } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { ReactSession } from 'react-client-session';
import '../login/login.css';


export const Login = () => {

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: ""
  })


  const [error, setError] = useState('');

  const {email, password} = values;

  const navigate = useNavigate ();

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(handleValidation()){
      setError("Todos los campos deben de estar llenos")
      return
    }
    handleLogin();
    
  }

  const handleLogin = ()=>{

    apiDB.post(`/usuarios/login`, {email, password}).then(({data}) =>{
      ReactSession.setStoreType("localStorage");
      ReactSession.set("token", data.token);
      setError("")
      navigate('/', { state: data })
    }).catch(({response})=>{
      setError(response.data.msg)
    })
  }

  const handleValidation = ()=>{
     return (email === "" && password === "") ? true : false;
  }


  return (
    <div className='login__main'>
      <div className='login__form-container'>

        <form className='login__form' autoComplete="off" onSubmit={handleSubmit}>
          <p className='login__text'>Login</p>
          <input 
            type="text" 
            placeholder='Correo'
            value={email}
            name="email"
            onChange={handleInputChange}

          />
          <input 
            type="password" 
            placeholder='Contraseña'
            value={password}
            name="password"
            onChange={handleInputChange}
          />
          
          {error !==  "" && <p className='login__error'>{error}</p>}

          <p className="login__text-signin">¿No tienes cuenta?<span onClick={()=>{navigate('/signin')}}>Registrate</span></p>
          
          <input type="submit" className='login__submit' value="Ingresar"/>
        </form>
      </div>

    </div>
  )
}
