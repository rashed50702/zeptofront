<template>
  <div class="home">
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-3 gap-4">
          <div class="..."><h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Featured Products</h2></div>
          <div class="...">
            <input
              type="text"
              class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              placeholder="Search Product By Name"
              v-model="search"
            />
          </div>
          <div class="...">
            <select class="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" v-model="sortBy">
                    <option value="highesttolowest" selected>Highest To Lowest</option>
                    <option value="lowesttohighest">Lowest To Highest</option>
                </select>
          </div>
        </div>
        
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in filteredProducts" :key="product.id" class="group relative border-solid border-2 border-indigo-100">
            <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img :src="image_src+'/products/'+product.image" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
            </div>
            <div class="mt-4 flex justify-between p-1">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0" />
                      {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Add To Cart</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  data(){
    return{
      products: [],
      search: '',
      sortBy: 'highesttolowest'
    }
  },

  created(){
    this.loadProducts();
  },

  computed:{
    filteredProducts(){
      return this.products.filter((prod) =>{
        return prod.name.toLowerCase().match(this.search.toLowerCase())
      }).sort((a, b) =>{
        if (this.sortBy =='highesttolowest'){
          return b.price-a.price;
        }else if (this.sortBy =='lowesttohighest'){
          return a.price-b.price;
        }
      });
    }
  },

  methods:{
    loadProducts(){
      axios.get('products').then((response) => {
        this.products = response.data;
        console.log(response);
      });
    }
  }
}
</script>
