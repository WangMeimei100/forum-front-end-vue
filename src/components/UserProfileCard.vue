<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="user.image | emptyImage"
          width="300px"
          height="300px"
        >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ user.name }}
          </h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{ user.commentsLength }}</strong> 已評論餐廳</li>
            <li><strong>{{ user.favoritedRestaurantsLength }}</strong> 收藏的餐廳</li>
            <li><strong>{{ user.followingsLength }}</strong> followings (追蹤者)</li>
            <li><strong>{{ user.followersLength }}</strong> followers (追隨者)</li>
          </ul>
          <!--  -->
          <template v-if="isCurrentUser">
            <router-link
              :to="{ name: 'user-edit', params: { id: user.id } }"
              class="btn btn-primary"
            >
              Edit
            </router-link>
          </template>
          <template v-else>
            <button
              v-if="isFollowed"
              type="button"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowing(user.id)"
            >
              <!-- 這有帶參數，試過不帶入也可以，但應該是為了之後判斷是誰加追蹤用 -->
              取消追蹤
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFollowing(user.id)"
            >
              追蹤
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins' 

export default {
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true
    },
    isCurrentUser: {
      type: Boolean,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed
    }
  },
  methods: {
    addFollowing () {
      this.isFollowed = true
    },
    deleteFollowing () {
      this.isFollowed = false
    }
  }
};
</script>