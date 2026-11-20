import { createBrowserRouter } from 'react-router'
import PublicLayout from '../layouts/PublicLayout'
import { Home } from 'lucide-react'

const router = createBrowserRouter([
  {
    path: '/',
    Component : PublicLayout,
    children : [
        {
            index: true,
            lazy: async() => {
                const module = await import("../pages/home/Home")

                return{
                    Component : module.default
                }
            }
        },
        {
            path: '/about',
            lazy: async() => {
                const module = await import("../pages/about/About")

                return{
                    Component : module.default
                }
            }
        }
    ]
    
  },
])

export default router