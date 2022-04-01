<template>
  <div class="p-3">
    <div class="flex justify-between">
      <div>
        <h4>Product List {{image_src}}</h4>
      </div>
      <div>
        <router-link to='/product-create'>Product Create</router-link>
      </div>
    </div>
    <hr class="mt-6 mb-6">
    <div class="min-h-screen py-5">
        <div class='overflow-x-auto w-full'>
            <table class='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                <thead class="bg-gray-900">
                    <tr class="text-white text-left">
                        <th class="font-semibold text-sm uppercase py-4 text-center">#</th>
                        <th class="font-semibold text-sm uppercase py-4">Name</th>
                        <th class="font-semibold text-sm uppercase py-4 text-center">Price</th>
                        <th class="font-semibold text-sm uppercase py-4 text-center">Image</th>
                        <th class="font-semibold text-sm uppercase py-4 text-center">Action</th>
                        <th class="font-semibold text-sm uppercase py-4"> </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="product, index in products" :key="product.id">
                      <td class="text-center">{{index+1}}</td>
                      <td>{{product.name}}</td>
                      <td class="text-center">{{product.price}}</td>
                      <td class="">
                        <div class="grid place-items-center">
                          <div class="w-20"><img class='object-cover p-1' alt='User avatar' :src="image_src+'/products/'+product.image" /></div>
                        </div>
                      </td>
                      <td class="text-center">
                        <router-link :to="'/products/'+product.id+'/edit'" class="inline-flex items-center p-1.5 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-1" title="Edit">
                         <span class="inline-flex items-center justify-center text-xs font-semibold text-white-800 rounded-full">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                           </svg>
                         </span>
                        </router-link>

                        <button type="button" class="inline-flex items-center p-1.5 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 m-1" title="View">
                         <span class="inline-flex items-center justify-center text-xs font-semibold text-white-800 rounded-full">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                             <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                           </svg>
                         </span>
                        </button>

                        <button type="button" class="inline-flex items-center p-1.5 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 m-1" title="Delete" @click="handleDelete(product.id)">
                         <span class="inline-flex items-center justify-center text-xs font-semibold text-white-800 rounded-full">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                             <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                           </svg>
                         </span>
                        </button>
                      </td>
                    </tr>
                </tbody>
            </table>
        </div>
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

      },

      handleDelete(id){
        if(confirm("Do you really want to delete?")){
          axios.delete('products/'+id);
          alert("Deleted successfully");
          this.getProducts();
        }
      }
    }
  }
</script>
<style>

</style>