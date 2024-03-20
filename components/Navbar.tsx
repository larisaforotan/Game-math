import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   route: string
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link href={route}>
         <a>
            <span
               className=' text-base font-bold cursor-pointer hover:text-green'
               onClick={() => setActive(name)}>
               {name}
            </span>
         </a>
      </Link>
   ) : null
}

const Navbar = () => {
   const { pathname } = useRouter()

   const [active, setActive] = useState('')

   //later
   useEffect(() => {
      if (pathname === '/') setActive('درباره من')
      else if(pathname === '/jozveh') setActive("جزوه")
      else if(pathname === '/pdf') setActive("گام‌به‌گام")
      else if(pathname === '/video') setActive("ویدیو")
   }, [pathname])

   return (
      <div className='flex items-center justify-between px-5 py-3 my-3'>
         <span className='text-lg font-bold border-b-4 md:text-2xl border-green'>
            {active}
         </span>

         <div className='text-base font-normal md:text-xl  flex  items-center gap-16' >
            <NavItem
               active={active}
               setActive={setActive}
               name='درباره من'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='جزوه'
               route='/jozveh'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name="گام‌به‌گام"
               route='/pdf'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='ویدیو'
               route='/video'
            />
         
         </div>
      </div>
   )
}

export default Navbar
