<template>
  <div id="app">
    <header class="header">
      <i v-if="!flag" class="one-icon one-icon-menu menu" @click="allToggle()"></i>
  		<h5>一个</h5>
  	</header>
    <aside class="aside" :class="{open:open,docked:docked}" @click="allToggle()">
  		<ul>
  			<li>
  				<span>图文</span>
  			</li>
        <li>
  				<span>阅读</span>
  			</li>
        <li>
  				<span>音乐</span>
  			</li>
        <li>
  				<span>影视</span>
  			</li>
        <li>
  				<span>关于</span>
  			</li>
  			<!-- <li :class="{chose:num == index+2}" v-for="(x, index) in list" @click="change(index+2,x.id)">
  				<span>{{x.name}}</span>
  				<i class="iconfont " :class="{'iconcolor icon-ic_star_black':num == index+2,'icon-ic_star':num != index+2}" />
  			</li>
  			<li @click="jump()">
  				<span>项目地址</span>
  				<i class="iconfont icon-github" />
  			</li> -->
  		</ul>
  		<!-- <div class="cover" @touchmove="prevent"></div> -->
  	</aside>
    <transition :name="transitionName">
  		<keep-alive>
  			<router-view class="app-view" :class="{'app-view-hidden':docked}"></router-view>
  		</keep-alive>
  	</transition>
  </div>
</template>

<script>
import api from './api/index'
export default {
  data() {
		return {
			list: [],
			open: false,
			docked: false,
      flag:false,
      todayId:0,
			transitionName: 'slide-left'
		}
	},
  created(){
    api.getIdList().then(res =>
      this.todayId = res.data.data[0]
    )

  },
	watch: {
		'$route' (to, from) {
			this.transitionName = to.path != "/article" ? 'slide-right' : 'slide-left';
		}
	},
  methods: {
    allToggle() {
			if (!this.open) {
				this.docked = true;
				this.open = true;
			} else {
				this.open = false;
				let vue = this;
				setTimeout(function() {
					vue.docked = false;
				}, 300);
			}
		},
    getOneList:function(id){

    }
	}
}
</script>

<style lang="scss">
@import "./assets/base.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50vw, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0.1;
    -webkit-transform: translate(-50vw, 0);
}
.app-view {
    z-index: 1;
    width: 100vw;
    height: 93vh;
    margin-top: 7vh;
    background: #f0f4f4;
    overflow: auto;
    position: absolute;
    transition: transform 0.3s ease;
    -webkit-overflow-scrolling: touch;
}
.app-view-hidden {
    overflow: hidden;
}
.header {
    width: 100%;
    background: #fff;
    height: 7vh;
    text-align: left;
    line-height: 7vh;
    z-index: 9;
    // padding-left: 5%;
    position: fixed;
    h5{
      text-align: center;
      width: 100%;
      position: absolute;
      z-index: 2;
      left: 0;
      top:0;
      letter-spacing: 5px;

    }
}
.aside {
    z-index: 11;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    visibility: hidden;
    &::-webkit-scrollbar {
        display: none!important;
        width: 0!important;
        height: 0!important;
        -webkit-appearance: none;
        opacity: 0!important;
    }
    ul {
        margin: 0;
        float: left;
        width: 45%;
        height: 100%;
        padding: 1.3rem 0.5rem 0.5rem;
        overflow: auto;
        background: #fff;
        transform: translate(-100%,0);
        transition: transform 0.3s ease;
        text-shadow: 0 1px 0 #111;
        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {
            display: none!important;
            width: 0!important;
            height: 0!important;
            -webkit-appearance: none;
            opacity: 0!important;
        }
    }
    li {
        cursor: pointer;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
        text-shadow: none;
        font-weight: lighter;
        margin-top: 25px;
        &.chose {
            color: #FFD300;
        }
    }
    .cover {
        width: 100%;
        height: 100%;
        opacity: 0;
        display: none;
        background: rgba(172,185,201,0.40);
        transition: opacity 0.3s ease;
    }
    &.open {
        ul {
            transform: translate(0);
        }
        .cover {
            opacity: 1;
        }
    }
    &.docked {
        visibility: visible;
        .cover {
            display: block;
        }
    }

}
.circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255,255,255,0.80);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    right: 5%;
    bottom: 5vw;
    position: fixed;
    z-index: 10;
    i {
        top: 50%;
        left: 50%;
        font-size: 0.6rem;
        color: #ACB9C9;
        transform: translate(-50%, -50%);
        position: absolute;
    }
}
@media screen and (min-width: 640px) {
    .app-view {
        width: 640px;
        left: 50%;
        transform: translate(-50%,0);
    }
    .aside ul {
        width: 350px;
    }
}
</style>
