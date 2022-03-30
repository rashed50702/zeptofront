<template>
  <section class="py-10 bg-slate-100">
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
          <div class="flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-slate-200 border-2 border-green-300">
            <div class="rounded-t mb-0 px-6 py-3">
              <div class="text-center mb-2">
                <h6 class="text-gray-600 text-sm font-bold">
                  Sign Up With
                </h6>
              </div>
              <div class="btn-wrapper text-center">
                <button
                  class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style="transition: all 0.15s ease 0s;">
                    <img alt="..." class="w-5 mr-1" src="../assets/img/github.svg"/>Github</button>
                <button
                  class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style="transition: all 0.15s ease 0s;">
                    <img alt="..." class="w-5 mr-1" src="../assets/img/google.svg"/>Google</button>
              </div>

              <hr class="mt-6 border-b-1 border-gray-400" />
            </div>

            <div class="flex-auto px-4 lg:px-6 py-6 pt-0">
              <div class="text-gray-500 text-center mb-2 font-bold">
                <small>Or create your new account</small>
              </div>
              <form action="#">
                <div class="relative w-full mb-2">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2">Name</label>
                  <input type="text" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Name" style="transition: all 0.15s ease 0s;"/>
                </div>
                <div class="relative w-full mb-2">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2">Email</label>
                  <input type="email" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Email" style="transition: all 0.15s ease 0s;"/>
                </div>
                <div class="relative w-full mb-2">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2">Password</label>
                  <input type="password" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Password" style="transition: all 0.15s ease 0s;"/>
                </div>
                <div class="relative w-full mb-2">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2">Confirm Password</label>
                  <input type="password" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Confirm Password" style="transition: all 0.15s ease 0s;"/>
                </div>
                <div>
                  <label class="inline-flex items-center cursor-pointer">
                    <input id="customCheckLogin" type="checkbox" class="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5" style="transition: all 0.15s ease 0s;"/>
                    <span class="ml-2 text-sm font-semibold text-gray-700">I want to receive newsletters from this website.</span>
                  </label>
                </div>
                <div class="text-center mt-6">
                  <button class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="button" style="transition: all 0.15s ease 0s;">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
               
        </div>
      </div>
    </div>
  </section>
</template>
