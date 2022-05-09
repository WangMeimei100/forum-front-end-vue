import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow (datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage (src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}
/*
  filters: {      
      fromNow(datetime) {
        if(!datetime) {
          return `---${datetime}--`
        }
        else {
          return moment(datetime).fromNow()
        }
      }
    }
    // 縮寫
     filters: {
      fromNow(datetime) {
        if(!datetime) 
        return `---${datetime}--`
      
        return moment(datetime).fromNow()
        
      }
    }
*/
