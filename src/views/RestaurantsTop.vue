<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div v-for="restaurant in restaurants" :key="restaurant.id"
    class="card mb-3" style="max-width: 540px; margin: auto">
      <div class="row no-gutters">
        <div class="col-md-4">
           <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              <img
                class="card-img"
                :src="restaurant.image | emptyImage"
              >
            </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
             class="btn btn-primary mr-2">Show
            </router-link>

            <button type="button" 
            v-if="restaurant.isFavorited"
            @click.stop.prevent="deleteFavorite(restaurant)"
            class="btn btn-danger mr-2">移除最愛</button>
            <button type="button"
            v-else
            @click.stop.prevent="addFavorite(restaurant)"
            class="btn btn-primary">加到最愛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import { emptyImageFilter } from "./../utils/mixins"
const dummyData = {
  "restaurants": [
    {
      id: 1,
      name: "Sheridan Howell",
      tel: "1-384-975-3985 x1113",
      address: "815 Marianna Branch",
      opening_hours: "08:00",
      description: "Fuga maiores veritatis ex tenetur vitae deleniti e",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.47941604041989",
      viewCounts: 3,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-27T10:17:25.000Z",
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$NaFxxKY/enRJ7qMRQafrK.4pWvCRLWHZft5m2Z3znhKV/amCvJPwm",
          isAdmin: true,
          image: null,
          createdAt: "2022-04-24T01:28:16.000Z",
          updatedAt: "2022-04-24T01:28:16.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 1,
            createdAt: "2022-04-25T05:59:14.000Z",
            updatedAt: "2022-04-25T05:59:14.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 50,
      name: "Jairo Stehr",
      tel: "1-864-793-1139",
      address: "66447 Bahringer Hill",
      opening_hours: "08:00",
      description: "culpa nisi provident",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.49644338384421",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Miss Candelario Streich",
      tel: "469-472-3247",
      address: "4584 Mercedes Mountain",
      opening_hours: "08:00",
      description: "Quibusdam quia magni et. Sunt rerum tempore earum ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.361486953481",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Winfield Cummerata II",
      tel: "938.643.8869 x3576",
      address: "24222 Verdie Villages",
      opening_hours: "08:00",
      description: "Ut non cupiditate.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.29592698833288",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Santina Ondricka",
      tel: "822.747.9851",
      address: "92600 Abe Underpass",
      opening_hours: "08:00",
      description: "Laborum cum et non et alias et nemo. Dolorem vitae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.23065752343802703",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Ellsworth Murray DDS",
      tel: "712.523.9320 x300",
      address: "623 Josianne Villages",
      opening_hours: "08:00",
      description: "Accusantium impedit et neque ut eligendi quam amet",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.262605722132555",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Ora Lehner",
      tel: "623-588-9304 x6199",
      address: "514 Nakia Circle",
      opening_hours: "08:00",
      description: "Quia aperiam qui. Quis eius quam voluptatem et. Vo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.270542003303163",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Deven Gerlach IV",
      tel: "(781) 910-6498 x2288",
      address: "19489 Hanna Plains",
      opening_hours: "08:00",
      description: "nemo itaque cumque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.6441038963306",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Randall Donnelly",
      tel: "924.197.2351",
      address: "7396 Rodriguez Expressway",
      opening_hours: "08:00",
      description: "Pariatur et velit qui aperiam voluptatem ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.84020116605934",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Katrina Wolf",
      tel: "846.296.6598",
      address: "527 Cleo Villages",
      opening_hours: "08:00",
      description: "Doloribus odio facere laborum fugit incidunt recus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.83243629329171",
      viewCounts: 0,
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};
export default {
  components: {
    NavTabs,
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurants :[] ,
    }
  },
  created() {
    this.fetchRestaurants ()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteFavorite (restaurant) {
      // this.restaurant = {
      //   ...this.restaurant,
      //   isFavorited : false,
      // }
      restaurant.isFavorited = false
      restaurant.FavoriteCount -= 1
    },
    addFavorite (restaurant) {
      // this.restaurant = {
      //   ...this.restaurant,
      //   isFavorited : true,
      // }
      restaurant.isFavorited = true
      restaurant.FavoriteCount += 1
    },
  }
};

</script>