/**
 * Create bu zechun.chen on 2016/12/22
 * api配置
 */
import axios from 'axios'
var url=""
export default {
    /**
     * 根据请求的时间戳获取banner列表
     */
    getBannerList:function(cb){

        axios.get('../../static/data/Banner.json').then(function(res){
            if(res.status >= 200 && res.status <300){
                cb(res.data)
            }
        }).catch((error) => {
            // new Error('desc');
            return Promise.reject(error)
        })
    },
    /**
     * 获取首页热映电影
     */
    getNowPlaying:function(cb){
		axios.get('../../static/data/NowPlayList.json').then(function(res){
			if(res.status >= 200 && res.status <300){
				cb(res.data)
			}
		}).catch((error) => {
			return Promise.reject(error)
		})
    },
    /**
     * 获取热映列表
     */
    getNowPlayList:function(cb){
        axios.get('../../static/data/NowPlayList01.json').then(function(res){
			if(res.status >= 200 && res.status <300){
				cb(res.data)
			}
		}).catch((error) => {
			return Promise.reject(error)
		})
    },
    /**
     * 获取首页即将上映电影
     */
    getComingSoon:function(cb){
        axios.get('../../static/data/ComingList.json').then(function(res){
			if(res.status >= 200 && res.status < 300){
				cb(res.data)
			}
		}).catch((error) => {
			return Promise.reject(error)
		})
    },
    /**
     * 获取即将上映列表
     */
    getComingList:function(cb){
        axios.get('../../static/data/ComingList01.json').then(function(res){
			if(res.status >= 200 && res.status < 300){
				cb(res.data)
			}
		}).catch((error) => {
			return Promise.reject(error)
		})
    },
    /**
     * 根据id获取相关影片信息
     */
    getFilmDetail:function(id,cb){
        
        axios.get('../../static/data/FilmDetail.json').then(function(res){
        //axios.get('http://m.maizuo.com/v4/api/film/3572?__t=1488073069214').then(function(res){
        //axios.get(url + 'film/' + id + '?__t=' + new Date()*1).then(function(res){
            if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    },
    /**
     * 获取相关影院
     */
    getCinemaList:function(id,cb){
        axios.get(url + 'film/' + id + '/cinema?__t=' + new Date()*1).then(function(res){
            if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    },
    /**
     * 根据影片id跟影院id获取相关电影票时段
     */
    getScheduleList:function(filmid,cinemaid,cb){
        // http://m.maizuo.com/v4/api/schedule?__t=1482575127866&film=3410&cinema=199
        axios.get(url + 'schedule?__t=' + new Date()*1 + '&film=' + filmid + '&cinema=' + cinemaid).then(function(res){
            if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}
