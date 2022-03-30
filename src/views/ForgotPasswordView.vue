<template>
  <section class="py-10 bg-slate-100">
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
          <div class="flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-slate-200 border-2 border-green-300">
            <div class="flex-auto px-4 lg:px-6 py-6">
              <form action="#">
                <div class="relative w-full mb-2">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2">Email</label>
                  <input type="email" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Email" style="transition: all 0.15s ease 0s;"/>
                </div>
                <div class="text-center mt-6">
                  <button class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="button" style="transition: all 0.15s ease 0s;">Send Password Reset Link</button>
                </div>
              </form>
            </div>
          </div>
               
        </div>
      </div>
    </div>
  </section>
</template>
