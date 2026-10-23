import React from 'react'





function Home() {




  return (
    <>
    <div className="relative isolate overflow-hidden bg-white dark:bg-neutral-900">
  
   <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/4 -left-48 h-[34rem] w-[30rem] rounded-full bg-blue-400/30 blur-3xl dark:bg-blue-500/20"></div>
      <div className="absolute top-1/4 -right-48 h-[34rem] w-[30rem] rounded-full bg-blue-400/30 blur-3xl dark:bg-blue-500/20"></div>
   </div>
   <div className="*:bg-none! *:bg-transparent!">
      
     
    
      <section className="px-4 md:px-8 mt-12">
         <div className="max-w-7xl mx-auto">
            <div className="grid justify-center items-center gap-x-12 gap-y-16 lg:grid-cols-2">
               <div>
                  <div className="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                     <p className="mb-2 font-medium text-blue-950 text-sm uppercase dark:text-blue-500"><span
                           className="rotate-90 inline-block mr-2">|</span> Built to Grow with You</p>
                     <h1 className="text-4xl text-neutral-900 font-black !leading-tight mb-6 md:text-5xl dark:text-slate-50 tracking-tight">
                        Empower Brand with Human-Centered Solutions</h1>
                     <p className="text-neutral-600 text-lg leading-relaxed dark:text-slate-400">Showcase your products and
                        connect with your audience. Our all-in-one platform helps you manage operations and boost
                        visibility — whether you're in fashion, beauty, wellness, or beyond.</p>

                     <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                        <a href="#"
                           className="py-2.5 px-4 text-sm rounded-full font-semibold text-white border border-blue-900 bg-blue-900 hover:bg-blue-950 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800">
                           Get Started Free
                        </a>
                        <a href="#"
                           className="py-2.5 px-4 text-neutral-900 text-sm font-semibold rounded-full bg-white border border-neutral-300 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-slate-50 dark:hover:bg-neutral-700">
                           Explore Features
                        </a>
                     </div>
                  </div>

                  <div className="mt-12">
                     <div className="grid gap-x-4 gap-y-6 text-center sm:grid-cols-3 lg:text-left">
                        <div className="flex flex-col">
                           <h5 className="text-blue-950 font-semibold text-2xl mb-2 dark:text-blue-500">10+</h5>
                           <p className="text-base text-neutral-600 font-medium dark:text-slate-400">Years Experience</p>
                        </div>
                        <div className="flex flex-col">
                           <h5 className="text-blue-950 font-semibold text-2xl mb-2 dark:text-blue-500">890</h5>
                           <p className="text-base text-neutral-600 font-medium dark:text-slate-400">Cases Solved</p>
                        </div>
                        <div className="flex flex-col">
                           <h5 className="text-blue-950 font-semibold text-2xl mb-2 dark:text-blue-500">250</h5>
                           <p className="text-base text-neutral-600 font-medium dark:text-slate-400">Business Partners</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="columns-2 space-y-4">
                  <div className="break-inside-avoid">
                     <img src="https://readymadeui.com/images/face-primer-category.webp" alt="face-primer-category"
                        className="w-full h-full object-cover object-top rounded-2xl max-h-[360px]" />
                  </div>
                  <div className="break-inside-avoid">
                     <img src="https://readymadeui.com/images/product6.webp" alt="product6"
                        className="w-full h-full object-cover object-top rounded-2xl max-h-[360px]" />
                  </div>
                  <div className="break-inside-avoid">
                     <img src="https://readymadeui.com/images/product2.webp" alt="product2"
                        className="w-full h-full object-cover object-top rounded-2xl max-h-[360px]" />
                  </div>
                  <div className="break-inside-avoid">
                     <img src="https://readymadeui.com/images/skin-glow-category.webp" alt="skin-glow-category"
                        className="w-full h-full object-cover object-top rounded-2xl max-h-[360px]" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</div>
      
    </>
  )
}

export default Home
