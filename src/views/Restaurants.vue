<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id"
      :initialRestaurant="restaurant"/>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
    :categoryId="categoryId"
    :currentPage="currentPage"
    :totalPage="totalPage"
    :previousPage="previousPage"
    :nextPage="nextPage"/>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'


const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Sheridan Howell",
            "tel": "1-384-975-3985 x1113",
            "address": "815 Marianna Branch",
            "opening_hours": "08:00",
            "description": "Fuga maiores veritatis ex tenetur vitae deleniti e",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.47941604041989",
            "viewCounts": 1,
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-25T05:59:56.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z"
            },
            "isFavorited": true,
            "isLiked": true
        },
        {
            "id": 2,
            "name": "Aida Bogan",
            "tel": "496.645.7587 x9275",
            "address": "5327 Sim Valleys",
            "opening_hours": "08:00",
            "description": "Temporibus atque officiis dicta.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.56842860829168",
            "viewCounts": 1,
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-25T06:01:04.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Maud Crooks",
            "tel": "989-695-6081 x82329",
            "address": "856 Renner Inlet",
            "opening_hours": "08:00",
            "description": "suscipit",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.39768197158438",
            "viewCounts": 0,
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Elenora Hintz",
            "tel": "074-145-2622 x622",
            "address": "3350 Salma River",
            "opening_hours": "08:00",
            "description": "voluptates",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.22397353871966",
            "viewCounts": 0,
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Mrs. Breanne Terry",
            "tel": "358.529.5665 x60812",
            "address": "5673 Hassan Walks",
            "opening_hours": "08:00",
            "description": "Quia odio non porro officia. Delectus doloribus fa",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.27604384102513",
            "viewCounts": 0,
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Judah Blanda",
            "tel": "748-035-9503 x987",
            "address": "52638 Victoria Viaduct",
            "opening_hours": "08:00",
            "description": "Distinctio assumenda voluptas quo rerum nihil inci",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.89951851723809",
            "viewCounts": 0,
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Leann Kuvalis",
            "tel": "1-240-085-3650 x063",
            "address": "9240 Lemke Drive",
            "opening_hours": "08:00",
            "description": "Aspernatur in ullam. Maiores quia sint aliquam dis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.677589387613406",
            "viewCounts": 0,
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Jacinto Schuppe",
            "tel": "770-873-9471 x693",
            "address": "94853 Brando Circle",
            "opening_hours": "08:00",
            "description": "Libero porro qui nobis hic in quam reiciendis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.151121313211554",
            "viewCounts": 0,
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Miss Terrance Franecki",
            "tel": "758-810-4527 x41908",
            "address": "392 Heathcote Unions",
            "opening_hours": "08:00",
            "description": "Omnis nesciunt ratione vero dolores odit omnis eum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.764172353988105",
            "viewCounts": 0,
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Henri Kuvalis",
            "tel": "1-055-293-5634",
            "address": "14275 Christy Pines",
            "opening_hours": "08:00",
            "description": "Non error eos molestiae aut nihil doloremque delen",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.3422262994060352",
            "viewCounts": 0,
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
    data () {
      return {
        restaurants: [],
        categories: [],
        categoryId: -1,
        currentPage: 1,
        totalPage: [],
        previousPage: -1,
        nextPage: -1
    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }

  }
}
</script>