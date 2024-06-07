
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
// import logo from "../asset/logo.png";
import logo from "../asset/movieologo.jpg";
import userIcon from "../asset/user.png";
import { navigation } from '../constants/Navigation';



const Header = () => {
    const location = useLocation()
    const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")

    const [searchInput, setSearchInput ] = useState(removeSpace)
    const navigate = useNavigate()
   

    // console.log("location",location.search.slice(3))
    useEffect(() => {
        if (searchInput) {
            navigate(`/search?q=${searchInput}`)   
        }
     
    }, [searchInput])
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (<>
      <header className='fixed top-0 h-16 w-full bg-black bg-opacity-50 z-40'>
          <div className='container mx-auto px-3 flex items-center h-full'>
              <Link to={'/'}>
                  <img src={logo} alt='logo' className='h-12 w-28 rounded-md'/>
              </Link>
              <nav className=' hidden lg:flex items-center gap-2 ml-5'>
                  {
                      navigation.map((nav, index) => {
                              return(
                                  <div>
                                      <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-50"}`}>
                                          {nav.label}
                                      </NavLink>
                              </div>
                              )
                      })
                  }
              </nav>
              <div className='ml-auto flex items-center gap-5'>
                  <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                      <input
                          type='text'
                          placeholder='Search here....'
                          className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                          onChange={(e) => setSearchInput(e.target.value)}
                          value={searchInput}
                      />
                      <button className='text-2xl text-white'>
                      <IoIosSearch />
                      </button>
                  </form>
                  <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                      <img
                          src={userIcon}
                      width='w-full,h-full'
                      />
                  </div>
              </div>
          </div>  
      </header>
    </>)
}

export default Header
