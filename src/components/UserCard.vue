<template>
  <div class="row text-center">
    <div v-for="user in users"
         :key="user.id"
         class="col-3"
         :initialUser="User"
    >
      <a href="#">
        <img
          :src="user.image |emptyImage"
          width="140px"
          height="140px"
        >
      </a>
      <h2>{{ user.name }}</h2>
      <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
      <p class="mt-3">
        <button
          v-if="user.isFollowed === true"
          type="button"
          class="btn btn-danger"
          @click.stop.prevent="cancelFollow"
        >
          取消追蹤
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary"
          @click.stop.prevent="addFollow"
        >
          追蹤
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
    mixins: [emptyImageFilter],

}
</script>