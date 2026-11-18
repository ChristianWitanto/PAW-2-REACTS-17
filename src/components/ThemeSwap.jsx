import { Moon, Sun } from 'lucide-react'
import React, {useEffect, useState} from 'react'

const ThemeSwap = () => {
    const [isDark, setIsDark] = useState(false)
    
    const HandleTheme = () => {
        setIsDark(!isDark)
    }

    useEffect(()=>{
        document.documentElement.dataset.theme = isDark ? 'retro' : 'valentine'
    },[isDark])

    if(isDark){
        return <button className='btn btn-circle' onClick={HandleTheme}>
            <Sun/>
        </button>
    }
    return <button className='btn btn-circle' onClick={HandleTheme}>
            <Moon/>
        </button>
    
}

export default ThemeSwap;