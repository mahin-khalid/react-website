import React from 'react'

function Contact() {

  return (
    <>
      <main className="flex flex-1 flex-col lg:flex-row">

   <div className="relative hidden lg:block lg:w-1/2">
      <div className="absolute inset-0 bg-cover bg-center"
         data-alt="Modern collaborative office space with natural lighting"
         style={{backgroundImage:"url('https://readymadeui.com/team-image.webp')"}}>
      </div>
   </div>
   <div
      className="flex w-full items-center justify-center px-4 py-6 lg:py-20 md:px-8 lg:w-1/2 xl:px-16">
      <div className="max-w-2xl mx-auto lg:w-full">
         <div className="mb-12">
            <h2 className="text-3xl font-black text-neutral-900 mb-6 md:text-4xl dark:text-slate-50 tracking-tight">
               Contact us
            </h2>
            <p className="text-base leading-relaxed text-neutral-600 dark:text-slate-400">
               Have a question, need support, or want to discuss your next project? We are here to help.
            </p>
         </div>

         <form className="grid gap-4 sm:grid-cols-2">
            <div>
               <label for="name"
                  className="mb-2 text-neutral-900 dark:text-slate-50 font-medium text-sm inline-block">Name</label>
               <input type="text" id="name" name="name" placeholder="John doe"
                  className="px-3 py-2.5 text-sm text-neutral-900 w-full rounded-xl bg-white outline-1 -outline-offset-1 outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
            </div>
            <div>
               <label for="email"
                  className="mb-2 text-neutral-900 dark:text-slate-50 font-medium text-sm inline-block">Email</label>
               <input type="email" id="email" name="email" placeholder="john@readymadeui.com"
                  className="px-3 py-2.5 text-sm text-neutral-900 w-full rounded-xl bg-white outline-1 -outline-offset-1 outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
            </div>
            <div>
               <label for="phone" className="mb-2 text-neutral-900 dark:text-slate-50 font-medium text-sm inline-block">Phone
                  number</label>
               <input type="number" id="phone" name="phone" placeholder="+11800-259-854"
                  className="px-3 py-2.5 text-sm text-neutral-900 w-full rounded-xl bg-white outline-1 -outline-offset-1 outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
            </div>
            <div>
               <label for="company"
                  className="mb-2 text-neutral-900 dark:text-slate-50 font-medium text-sm inline-block">Company</label>
               <input type="text" id="company" name="company" placeholder="XYZ pvt. ltd."
                  className="px-3 py-2.5 text-sm text-neutral-900 w-full rounded-xl bg-white outline-1 -outline-offset-1 outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
            </div>
            <div className="col-span-full">
               <div>
                  <label for="message"
                     className="mb-2 text-neutral-900 dark:text-slate-50 font-medium text-sm inline-block">Message</label>
                  <textarea placeholder="Write message" rows="6" type="text" id="message" name="message"
                     className="px-3 py-2.5 text-sm text-neutral-900 w-full rounded-xl bg-white outline-1 -outline-offset-1 outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"></textarea>
               </div>
               <button type="submit"
                  className="mt-6 w-full py-2.5 px-4 text-sm rounded-full font-semibold cursor-pointer text-white border border-blue-900 bg-blue-900 hover:bg-blue-950 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800">Send
                  message</button>
            </div>
         </form>
      </div>
   </div>
</main>
    </>
  )
}

export default Contact
