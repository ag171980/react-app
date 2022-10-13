import {useState} from 'react'
import {createContext} from 'react'
export const Context = createContext()
const Provider = Context.Provider

export const Contexto= ({children})=>{
    const[account, setAccount]= useState([{email:'admin@gmail.com', contraseña:1234}])
    const[log, setLog]= useState([])
    const[True,setTrue]=useState(false)
     const agregarCuenta = (obj)=>{
        setAccount(obj)
     }
     const logIn= (obj)=>{
      setLog(obj)
     }
    const Global={
    agregarCuenta,
    account,
    logIn,
    log,
    True,
    setTrue
    }
    return(
        <Provider value={Global}>
        {children}
       </Provider>
    )
    
}