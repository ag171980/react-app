import {useState} from 'react'
import {createContext} from 'react'
export const Context = createContext()
const Provider = Context.Provider

export const Contexto= ({children})=>{
    const[data, setData] = useState(JSON.parse(window.localStorage.getItem('userData')))
    
    const Global={
    data,
    setData,
    
    
    }
    return(
        <Provider value={Global}>
        {children}
       </Provider>
    )
    
}