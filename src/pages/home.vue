<template>
	<div style="height: 100%;width: 100%">
		<div class="home myScroll">
			<!--觉得没必要分离成组件-->
			<div>
				<div v-show=topTip class="scroll_top">
					下拉刷新
				</div>
				<div class="banner">
					<swiper class="banner-swiper">
						<swiper-slide class='slide' v-for='item in getBannerList'>
							<a target='_blank' :href="item.url">
								<img :src="item.imageUrl" alt="">
							</a>
						</swiper-slide>
					</swiper>
				</div>
				<div class="now-playing">
					<div class="item" v-for='item in getNowPlaying'>
						<!--<router-link :to="{name:'detail',params:{id:item.id}}">-->
						<router-link :to="{name:'detail',params:{id:item.id}}">
							<img :src="item.cover.origin" alt="">
							<div class="desc">
								<div class="info">
									<h4>{{item.name}}</h4>
									<p>{{item.cinemaCount}}家影院上映 {{item.watchCount}}人购票</p>
									<div class="count">{{item.grade}}</div>
								</div>
							</div>
						</router-link>
					</div>
					<router-link :to="{name:'film',params:{type:'now-playing'}}" class="go-more">
						更多热映电影
					</router-link>
					<div class="coming-soon">
						<div class="item clear" v-for='item in getComingSoon'>
							<!--<router-link :to="{name:'detail',params:{id:item.id}}">-->
							<img :src="item.cover.origin" alt="">
							<div class="desc">
								<div class="info">
									<h4>{{item.name}}</h4>
								</div>
								<div class="time">{{item.premiereAt|formatDate}}</div>
							</div>
							<!--</router-link>-->
						</div>
						<router-link :to="{name:'film',params:{type:'coming-soon'}}" class="go-more">
							更多即将上映电影
						</router-link>
					</div>
				</div>

			</div>
		</div>
		<div class="go-top" @click="toTop" v-show="goTopTypes">
			<img src="../../static/img/xxx.jpg">
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
	import iScroll from '../../static/js/iscroll-probe.js'
	export default {
		name: 'name',
		data() {
			return {
				swiperOption: {
					autoplay: 3000,
					autoHeight: true
				},
				topTip: false,
				goTopTypes: false,
				thisScroll: null
			}
		},
		created: function () {
			var _this = this
			var htmlUpdata = false;
			this.$store.commit('SET_TITLE_NAME', '卖座的电影')
			//调用getters 去ajax数据
			if (this.getBannerList.length == 0) {
				console.log('读取banner')
				this.$store.dispatch('getBannerLists')
			}
			if (this.getNowPlaying.length == 0) {
				console.log('热映电影')
				this.$store.dispatch('getNowPlayings')
			}
			if (this.getComingSoon.length == 0) {
				console.log('热映电影')
				this.$store.dispatch('getComingSoons')
			}
			setTimeout(function () {
				var myScroll = new iScroll('.myScroll', {
					scrollY: true, //竖直方向的滚动条
					freeScroll: true,
					probeType: 3,
					mouseWheel: true,
					bounce: true
				});
				_this.thisScroll = myScroll
				myScroll.on('scroll', function () {
					//往下划了一段距离
					if (this.y > 40) {
						_this.topTip = true
					}
					if (this.y > 50) {
						htmlUpdata = true
					}
				});
				myScroll.on('scrollEnd', function () {
					_this.topTip = false;
					if (htmlUpdata) {
						window.location.reload();
					}
					//距离下边50px
					if (this.y < this.maxScrollY + 50) {
						//刷新 重新计算
						//myScroll.refresh();
					}
					if (this.y < -200) {
						//_this.$store.dispatch('goTopShow', true)
						_this.goTopTypes = true
					} else {
						//_this.$store.dispatch('goTopShow', false)
						_this.goTopTypes = false
					}
				});
			}, 300)
		},
		computed: {
			//取到ajax的数据
			...mapGetters(['getBannerList','getNowPlaying','getComingSoon'])
		},
		components: {
			swiper, swiperSlide
		},
		methods: {
			toTop() {
				this.thisScroll.scrollTo(0, 0) 
			}
		},
		filters: {
			formatDate: function (time) {
				let date = new Date(time * 1),
					month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
					day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

				return `${month}月${day}日上映`
			}
		},

	}

</script>

<style scoped>
	.home {
		height: 100%;
		width: 100%;
	}
	
	.displayNone {
		display: none;
	}
	
	.myScroll {
		z-index: -1;
		height: 100%;
		width: 100%;
	}
	
	.banner {
		width: 100%;
	}
	
	.banner-swiper {
		width: 100%;
	}
	
	.slide {
		width: 100%;
	}
	
	.slide img {
		width: 100%;
	}
	
	.now-playing {
		width: 100%;
	}
	
	.now-playing .item {
		padding: 10px 20px;
	}
	
	.now-playing .item img {
		width: 100%;
	}
	
	.go-more {
		width: 1.5rem;
		height: 0.4rem;
		text-align: center;
		line-height: 0.4rem;
		background: #ff6600;
		margin: 0 auto;
		border-radius: 0.2rem;
		color: #000000;
		font-size: 0.16rem;
	}
	
	.item>a {
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
	}
	
	.item .info {
		position: relative;
	}
	
	.item .info>h4 {
		font-size: 0.12rem;
		font-weight: bold;
	}
	
	.item .info>p {
		font-size: 0.1rem;
	}
	
	.count {
		position: absolute;
		right: 0.05rem;
		top: 0;
		font-size: 0.2rem;
		color: #f78360;
		font-weight: 500;
		line-height: 0.4rem;
	}
	
	.scroll_top {
		text-align: center;
		background: #333;
		color: #ffffff;
	}
	
	.go-top {
		position: fixed;
		bottom: 50px;
		right: 50px;
		width: 40px;
		height: 40px;
		z-index: 5;
	}
	
	.go-top>img {
		width: 100%;
		height: 100%;
	}
</style>