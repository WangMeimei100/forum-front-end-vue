import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')


export default {
  // 帶入需要的參數
  getRestaurants ({ page, categoryId }) {
    //會得到像"page=1&categoryId=3"的物件，要透過toString()變成字串使用
    const searchParams = new URLSearchParams({ page, categoryId })
    // 這裡 return 的會是一個 Promise
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFeeds (){
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRestaurants () {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }

}