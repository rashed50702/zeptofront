<template>
  <div class="p-3">
    <div class="flex justify-between">
      <div>
        <h4>Add New Product</h4>
      </div>
      <div>
        <router-link to='/products'>Product List</router-link>
      </div>
    </div>
    <hr class="mt-6 mb-6">
    <div class="min-h-screen py-5">
      <form action="#" class="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white overflow-hidden border-2 p-5">
        <div class="relative w-full mb-2">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2">Product Name</label>
          <input type="text" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Product Name" style="transition: all 0.15s ease 0s;"/>
        </div>
        <div class="relative w-full mb-2">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2">Price</label>
          <input type="text" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Price" style="transition: all 0.15s ease 0s;"/>
        </div>
        <div class="relative w-full mb-2">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2">Image</label>
          <input type="file" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" style="transition: all 0.15s ease 0s;"/>
        </div>
        <div class="text-right mt-6">
          <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 p-2">
            <span class="inline-flex items-center justify-center text-xs font-semibold text-white-800 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>SAVE DATA
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return{
        products: [],
      }
    },
    created: function(){
      this.getProducts();
    },
    methods:{
      getProducts(){
        // console.log("hello");
        axios.get('products').then((response) => {
          this.products = response.data;
          console.log(response);
        });

      }
    }
      }
</script>
<style>

</style>