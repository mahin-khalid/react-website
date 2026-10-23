import React from 'react'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import {BrowserRouter ,Routes ,Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
<BrowserRouter>

<nav
   className="flex py-2 px-4 md:px-8 bg-white border-b border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 min-h-[68px] relative z-20"
   aria-label="Main navigation">
   <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 w-full">
     <Link> <a href="#"
         className="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg">
         <span className="sr-only">Your Company</span>
         <img src="https://readymadeui.com/logo-alt.svg" alt="readymadeui logo" className="h-9 w-auto" />
      </a></Link>

      <div id="collapseMenu" tabindex="-1"
         className="hidden lg:block max-lg:bg-white dark:max-lg:bg-neutral-900 max-lg:border-l max-lg:border-neutral-300 dark:max-lg:border-neutral-700 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-xl max-lg:overflow-auto max-sm:w-full z-50 outline-none">

         <div
            className="py-2 px-4 flex justify-between items-center border-b border-neutral-300 sticky top-0 bg-white dark:border-neutral-700 dark:bg-neutral-900 lg:hidden max-lg:min-h-[68px]">
            <a href="#"
               className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg">
               <span className="sr-only">Your Company</span>
               <img src="https://readymadeui.com/logo-alt.svg" alt="readymadeui logo" className="h-9 w-auto" />
            </a>
            <button type="button" aria-controls="collapseMenu" id="toggleClose"
               className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg">
               <span className="sr-only">Close main menu</span>
               <svg xmlns="http://www.w3.org/2000/svg" className="size-4 fill-neutral-900 dark:fill-slate-50"
                  aria-hidden="true" viewBox="0 0 329.269 329">
                  <path
                     d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                     data-original="#000000" />
               </svg>
            </button>
         </div>

         <ul
            className="flex flex-col gap-8 font-semibold text-sm text-neutral-900 dark:text-slate-50 lg:flex-row max-lg:p-6 lg:ml-12">
            <li>

        <Link to='/'><a 
                  className="hover:text-blue-950 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg"
                  aria-current="page">Home</a></Link>
            </li>
            <li>
            <Link to='/about'>  <a 
                  className="hover:text-blue-950 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg">About</a></Link>
            </li>
            <li>
            <Link to='/services'>  <a 
                  className="hover:text-blue-950 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg">Services</a></Link>
            </li>
            <li>
            <Link to='/contact'>   <a 
                  className="hover:text-blue-950 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg">Contact</a></Link>
            </li>
            
         </ul>
      </div>

      <div className="flex items-center gap-4 ml-auto">

         <div className="flex items-center gap-4 pr-2">
            <a href="#"
               className="flex flex-col items-center justify-center gap-0.5 text-[13px] font-semibold text-neutral-900 hover:text-blue-950 dark:text-slate-50 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg">
               <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg"
                     className="cursor-pointer fill-current dark:fill-current inline w-5 h-5" viewBox="0 0 64 64"
                     aria-hidden="true">
                     <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000" />
                  </svg>
                  <span
                     className="absolute left-auto -ml-1 -top-0.5 rounded-full bg-red-500 px-1 py-0 text-xs text-white font-medium">2</span>
               </div>
               <span>Wishlist</span>
            </a>

            <a href="#"
               className="flex flex-col items-center justify-center gap-0.5 text-[13px] font-semibold text-neutral-900 hover:text-blue-950 dark:text-slate-50 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg">
               <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg"
                     className="cursor-pointer fill-current dark:fill-current inline w-5 h-5" viewBox="0 0 489 489"
                     aria-hidden="true">
                     <path
                        d="m440.1 422.7-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z"
                        data-original="#000000" />
                  </svg>
                  <span
                     className="absolute left-auto -ml-1 -top-0.5 rounded-full bg-red-500 px-1 py-0 text-xs text-white font-medium">3</span>
               </div>
               <span>Cart</span>
            </a>
         </div>


         <a href="#"
            className="py-2 px-3.5 text-sm rounded-full font-semibold cursor-pointer text-white border border-blue-900 bg-blue-900 hover:bg-blue-950 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800">Sign
            up</a>

         <button type="button" aria-controls="collapseMenu" aria-expanded="false" aria-haspopup="true" id="toggleOpen"
            className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg">
            <span className="sr-only">Open main menu</span>
            <svg className="size-7 fill-neutral-900 dark:fill-slate-50" aria-hidden="true" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
            </svg>
         </button>
      </div>
   </div>
</nav>
<Routes>
<Route  path='/' element={<Home/>}/>
<Route  path='/about' element={<About/>}  />
<Route   path='/services' element={<Service/>} />
<Route  path='/contact' element={<Contact/>}  />

</Routes>

</BrowserRouter>


    </>
  )
}

export default App
