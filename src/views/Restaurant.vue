<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail
    :initial-restaurant="restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments 
    :restaurant-comments="restaurantComments"
    @after-delete-comment="afterDeleteComment"
/>
    <!-- 新增評論 CreateComment -->
    <CreateComment
    :restaurant-id="restaurant.id"
    @after-create-comment="afterCreateComment"/>
  </div>
</template> 

<script>
import RestaurantDetail from './../components/RestaurantDetail'
import RestaurantComments from './../components/RestaurantComments'
import CreateComment from './../components/CreateComment'

const dummyData = {

    "restaurant": {
        "id": 1,
        "name": "Sheridan Howell",
        "tel": "1-384-975-3985 x1113",
        "address": "815 Marianna Branch",
        "opening_hours": "08:00",
        "description": "Fuga maiores veritatis ex tenetur vitae deleniti earum rerum assumenda.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.47941604041989",
        "viewCounts": 3,
        "createdAt": "2022-04-24T01:28:16.000Z",
        "updatedAt": "2022-04-27T10:17:25.106Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z"
        },
        "FavoritedUsers": [
            {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$NaFxxKY/enRJ7qMRQafrK.4pWvCRLWHZft5m2Z3znhKV/amCvJPwm",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z",
                "Favorite": {
                    "UserId": 1,
                    "RestaurantId": 1,
                    "createdAt": "2022-04-25T05:59:14.000Z",
                    "updatedAt": "2022-04-25T05:59:14.000Z"
                }
            }
        ],
        "LikedUsers": [
            {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$NaFxxKY/enRJ7qMRQafrK.4pWvCRLWHZft5m2Z3znhKV/amCvJPwm",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z",
                "Like": {
                    "UserId": 1,
                    "RestaurantId": 1,
                    "createdAt": "2022-04-25T05:59:16.000Z",
                    "updatedAt": "2022-04-25T05:59:16.000Z"
                }
            }
        ],
        "Comments": [
            {
                "id": 101,
                "text": "Animi neque qui vitae ad est at accusantium.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$DGliZ2sx9n0NMLxjkBtH0eASt0XW2uyaTWkTbGyXvHW/jahQE.0Cq",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-04-24T01:28:16.000Z",
                    "updatedAt": "2022-04-24T01:28:16.000Z"
                }
            },
            {
                "id": 51,
                "text": "Enim explicabo laudantium sequi illo.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$DGliZ2sx9n0NMLxjkBtH0eASt0XW2uyaTWkTbGyXvHW/jahQE.0Cq",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-04-24T01:28:16.000Z",
                    "updatedAt": "2022-04-24T01:28:16.000Z"
                }
            },
            {
                "id": 1,
                "text": "Assumenda voluptatem accusantium commodi veniam.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-04-24T01:28:16.000Z",
                "updatedAt": "2022-04-24T01:28:16.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$NaFxxKY/enRJ7qMRQafrK.4pWvCRLWHZft5m2Z3znhKV/amCvJPwm",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-04-24T01:28:16.000Z",
                    "updatedAt": "2022-04-24T01:28:16.000Z"
                }
            }
        ]
    },
    "isFavorited": true,
    "isLiked": true
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name:'Restaurant',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
   data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }
      this.restaurantComments = dummyData.restaurant.Comments
    },
     afterDeleteComment (commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    },
    // 
    afterCreateComment (payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>