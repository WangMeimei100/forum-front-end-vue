<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Sheridan Howell",
    tel: "1-384-975-3985 x1113",
    address: "815 Marianna Branch",
    opening_hours: "08:00",
    description:
      "Fuga maiores veritatis ex tenetur vitae deleniti earum rerum assumenda.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=97.47941604041989",
    viewCounts: 3,
    createdAt: "2022-04-24T01:28:16.000Z",
    updatedAt: "2022-04-27T10:17:25.000Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2022-04-24T01:28:16.000Z",
      updatedAt: "2022-04-24T01:28:16.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Assumenda voluptatem accusantium commodi veniam.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$NaFxxKY/enRJ7qMRQafrK.4pWvCRLWHZft5m2Z3znhKV/amCvJPwm",
          isAdmin: true,
          image: null,
          createdAt: "2022-04-24T01:28:16.000Z",
          updatedAt: "2022-04-24T01:28:16.000Z",
        },
      },
      {
        id: 51,
        text: "Enim explicabo laudantium sequi illo.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$DGliZ2sx9n0NMLxjkBtH0eASt0XW2uyaTWkTbGyXvHW/jahQE.0Cq",
          isAdmin: false,
          image: null,
          createdAt: "2022-04-24T01:28:16.000Z",
          updatedAt: "2022-04-24T01:28:16.000Z",
        },
      },
      {
        id: 101,
        text: "Animi neque qui vitae ad est at accusantium.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-04-24T01:28:16.000Z",
        updatedAt: "2022-04-24T01:28:16.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$DGliZ2sx9n0NMLxjkBtH0eASt0XW2uyaTWkTbGyXvHW/jahQE.0Cq",
          isAdmin: false,
          image: null,
          createdAt: "2022-04-24T01:28:16.000Z",
          updatedAt: "2022-04-24T01:28:16.000Z",
        },
      },
    ],
  },
};
export default {
  
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      },
      isLoading: true
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryName: Category ? Category.name : '未分類',
          commentsLength: Comments.length,
          viewCounts
        }
    }
  }
}

// 

</script>