<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row"> 
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <!-- 最新評論 NewestComments-->
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants'
import NewestComments from './../components/NewestComments'
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds () {
      try {
        const response = await restaurantsAPI.getFeeds()
        
        // 將從伺服器取得的 data 帶入 Vue 內
        const { restaurants, comments } = response.data
        this.restaurants = restaurants
        
        // 防止沒有restaurant或text資料
        this.comments = comments.filter(comment => comment.Restaurant && comment.text)
      } catch(error) {
        Toast.fire({
          icon: "error",
          title: "無法取得最新動態，請稍後再試",
        });
      }
    }
  }
}
</script>