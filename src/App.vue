<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@font-face {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-display: block;
  unicode-range: U+000-5FF;
  src: local("SourceSansPRo"), url("/fonts/SourceSansPro/SourceSansPro-Regular.ttf") format("truetype");
}
.loading{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, transparent 40%, $color-principal);
    animation: animate 2s linear infinite;
}
@keyframes animate
{
    0%
    {
        transform: rotate(0deg);
    }
    100%
    {
        transform: rotate(360deg);
    }
}
.loading:before{
    content: '';
    position: absolute;
    top: 6px;
    bottom: 6px;
    right: 6px;
    left: 6px;
    background: #fff;
    border-radius: 50%;
    z-index: 1000;
}
.loading:after{
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background: linear-gradient(45deg, transparent, transparent 40%, $color-principal);
    border-radius: 50%;
    z-index: 1000;
    z-index: 1;
    filter: blur(30px);
}
.text-wait{
    margin-top: 60px;
    margin-bottom: 0;
    font-size: 26px;
    font-weight: 500;
    font-style: italic;
    color: rgba(0, 0, 0, 0.7);
}
</style>
