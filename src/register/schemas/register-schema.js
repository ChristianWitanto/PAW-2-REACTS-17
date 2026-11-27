import {z} from 'zod' ;

const registerSchema = z.object({
    name : z.string().trim().min(3,"Nama Minimal 3 Karakter"),
    email : z.email(),
    password : z.string().min(8,"Password Minimal 8 Karakter")
})

export default registerSchema