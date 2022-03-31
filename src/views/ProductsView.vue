<template>
  <div class="p-3">
    <div class="flex justify-between">
      <div>
        <h4>Product List</h4>
      </div>
      <div>
        <router-link to='/'>Create Product</router-link>
      </div>
    </div>
    <hr class="mt-6 mb-6">
    <div class="flex flex-col">
      <table class="min-w-full border">
        <thead class="bg-gray-900 border-b">
          <tr>
            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              #
            </th>
            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              Product Name
            </th>
            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              Price
            </th>
            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              Image
            </th>
            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100" v-for="product, index in products" :key="product.id">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{index+1}}</td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {{product.name}}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {{product.price}}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              @fat
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              @fat
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return{
        products: []
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
