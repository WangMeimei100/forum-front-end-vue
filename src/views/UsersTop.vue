<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img
            :src="user.image | emptyImage"
            width="140px"
            height="140px"
          >
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="cancelFollow(user)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.stop.prevent="addFollow(user)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import { emptyImageFilter } from './../utils/mixins'

const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$NaFxxKY/enRJ7qMRQafrK.4pWvCRLWHZft5m2Z3znhKV/amCvJPwm",
            "isAdmin": true,
            "image": "https://www.easyatm.com.tw/img/a/5ec/nBnauM3XzIDNyAzNyYzMzIzM2MTM3ETO0kTMwADMwAjMxAzL2MzLxYzLt92YucmbvRWdo5Cd0FmLwE2LvoDc0RHa.jpg",
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$wW0J2C.uUY80yJ3oX0i11.vrMEMhqZ3ufqabZXfjzwvbwyGfeVlS2",
            "isAdmin": false,
            "image": "https://i0.wp.com/pic.q6u.com/d/file/20200515/1589545823460065.png",
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$DGliZ2sx9n0NMLxjkBtH0eASt0XW2uyaTWkTbGyXvHW/jahQE.0Cq",
            "isAdmin": false,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH23DQOg0U7C6P8798kEBQHfFWGVLpr_sx6oQSIFDDNTYsnQj_rEBJo-3XnF5LbdWB-z8&usqp=CAU",
            "createdAt": "2022-04-24T01:28:16.000Z",
            "updatedAt": "2022-04-24T01:28:16.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}
// const STORAGE_KEY = 'forum-vue-usersTop'

export default {
  mixins: [emptyImageFilter],
  components: {
    NavTabs
  },
  data () {
    return {
      users : [],
    }
  },
  created() {
    this.fetchTops()
  },
  methods: {
    fetchTops() {
      this.users = dummyData.users 
    },
     addFollow (user) {
      
        user.isFollowed = true
        // console.log('addFollow', user.FollowerCount)
        user.FollowerCount += 1
        
      },
      cancelFollow (user) {
        // this.user = {
        //   ...this.user,
        //   isFollowed : false,
        // }
        user.isFollowed = false
        // console.log('cancelFollow', user.FollowerCount)
        user.FollowerCount -= 1
          
      },
    },
}
</script>