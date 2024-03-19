<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="autoplayConfig"
    :pagination="paginationConfig"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>多樣性： 我們擁有各種各樣的寶可夢招式，涵蓋了所有屬性和戰鬥風格，無論你是喜歡攻擊、防守還是特殊技能，你都能找到適合你寶可夢的招式。</swiper-slide>
    <swiper-slide>品質保證： 我們的招式機經過嚴格的測試和品質控制，確保每一個招式的威力和可靠性都是最高水準的。你可以放心購買，讓你的寶可夢在戰鬥中保持領先優勢。</swiper-slide>
    <swiper-slide>專業服務： 我們擁有專業的寶可夢訓練師團隊，隨時為你提供專業的建議和支持。無論是選擇適合你寶可夢的招式，還是戰鬥策略的制定，我們都會竭盡全力為你服務。</swiper-slide>
    <!-- <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide> -->
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import './style.css'

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      modules: [Autoplay, Pagination, Navigation],
      autoplayConfig: {
        delay: 5000,
        disableOnInteraction: true
      },
      paginationConfig: {
        clickable: true
      }
    }
  }
}
</script>
