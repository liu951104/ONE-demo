<template>
  <div class="bg-mask" v-show="loading">
  	<span class="icon-loading"></span>
  </div>
</template>

<script>
export default {
	name: 'loading',
	props: {
		loading: {
			type: Boolean,
			default: false
		}
	}
}
</script>
<style lang="scss">
  .bg-mask{
    background: rgb(255,255,255);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    .icon-loading {
      background-color: #fff;
      display: block;
      margin: 0;
      width: 2.5em;
      height: 2.5em;
      padding: .0625em;
      -webkit-border-radius: 2.25em;
      border-radius: 2.25em;
      background: url(../../assets/ajax-loader.gif);
      background-size: 2.575em 2.575em;
      opacity: 0.1;
      position: absolute;
      top:0;
      left: 0;
      right:0;
      bottom:0;
      margin: auto;
    }
  }

</style>
