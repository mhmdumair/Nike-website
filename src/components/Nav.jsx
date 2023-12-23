import {headerLogo} from '../assets/images'
import { navLinks } from '../constans'
import {hamburger} from '../assets/icons'

const Nav = ({setMenu}) => {

  return (
    <header className='padding-x py-8 absolute z-10 w-full '>
        <nav className='flex justify-between max-container '>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={40}/>
            </a>
            <ul className='flex flex-1 items-center justify-center gap-16 max-lg:hidden'>
              
              {navLinks.map(item=>(
                <li key={item.label}>
                  <a className='font-montserrat leading-normal text-lg text-slate-gray'
                    href={item.href}> {item.label} 
                  </a>
                </li>
              ))}

            </ul>
            
            <div className='hidden max-lg:block cursor-pointer' id='hamburger' 
            onClick={()=>{setMenu(true)}}>
              <img src={hamburger} alt="hamburger" height={25} width={25}/>
            </div>

        </nav>
    </header>
  )
}

export default Nav