<template>
  <div id="app">
    <header class="header">
      <i v-if="!flag" class="o-icon o-icon-menu menu" @click="allToggle()"></i>
  		<h5>一个</h5>
  	</header>
    <aside class="aside" :class="{open:open,docked:docked}" @click="allToggle()">
  		<ul>
  			<li @click="change('/')">
  				<span>图文</span>
  			</li>
        <li @click="change('/read')">
  				<span>阅读</span>
  			</li>
        <li @click="change('/music')">
  				<span>音乐</span>
  			</li>
        <li @click="change('/movie')">
  				<span>影视</span>
  			</li>
        <li>
  				<span>关于</span>
  			</li>
  			<li @click="jump()">
  				<span>项目地址</span>
  			</li>
  		</ul>
  		<!-- <div class="cover" @touchmove="prevent"></div> -->
  	</aside>
    <transition :name="transitionName">
  		<router-view class="app-view" :class="{'app-view-hidden':docked}"></router-view>
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

  },
	watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
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
    jump(){
      location.href = 'https://github.com/liu951104/ONE-demo';
    },
    change(path){
      this.$router.push(path)
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
    font-size: 20px;
    overflow: auto;
    position: absolute;
    transition: transform 0.3s ease;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none!important;
        width: 0!important;
        height: 0!important;
        -webkit-appearance: none;
        opacity: 0!important;
    }
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
        color: rgba(0, 0, 0, 0.9);
        text-shadow: none;
        font-weight: lighter;
        margin-top: 25px;
        &.chose {
            color: #FFD300;
        }
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
