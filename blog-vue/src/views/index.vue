<template>
  <div class="index">
    <div class="welcome-speech">
      <div class="text">
        <p>你好，</p>
        <p>请叫我小江。</p>
        <p>我在这里记录我的生活 🙂</p>
        <p>很高兴认识你！</p>
        <div class="index">
          <button class="button"
                  type="button"
                  data-hover="MINECRAFT"><span>ENTRANCE</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="less" scoped>
.index {
  height: 100%;
  width: 100%;
  .welcome-speech {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 70%;
    height: 30%;
    margin: auto;
    .text {
      width: 50%;
      margin: auto;
      font-family: "SemiBold";
      p {
        line-height: 30px;
        color: @colorA;
      }
      p:nth-child(1) {
        font-size: @fontB;
      }
      p:nth-child(2) {
        font-size: @fontB;
      }
      p:nth-child(3),
      p:nth-child(4) {
        font-size: @fontG;
        color: @colorB;
      }
    }
    .index {
      border-top: 1px dotted @colorF;
      padding-top: 10px;
      color: @colorB;
      /* .button */
      .button {
        display: inline-block;
        position: relative;
        padding: 0.2em 0.3em;
        border: 2px dashed @colorB;
        overflow: hidden;
        text-decoration: none;
        font-size: @fontI;
        outline: none;
        color: @colorB;
        background: transparent;
        font-family: "raleway", sans-serif;
      }
      .button span {
        -webkit-transition: 0.6s;
        -moz-transition: 0.6s;
        -o-transition: 0.6s;
        transition: 0.6s;
        -webkit-transition-delay: 0.2s;
        -moz-transition-delay: 0.2s;
        -o-transition-delay: 0.2s;
        transition-delay: 0.2s;
      }
      .button:before,
      .button:after {
        content: "";
        position: absolute;
        top: 0.2em 0.3em;
        left: 0;
        width: 100%;
        text-align: center;
        opacity: 0;
        -webkit-transition: 0.4s, opacity 0.6s;
        -moz-transition: 0.4s, opacity 0.6s;
        -o-transition: 0.4s, opacity 0.6s;
        transition: 0.4s, opacity 0.6s;
      }
      /* :before */
      .button:before {
        content: attr(data-hover);
        -webkit-transform: translate(-150%, 0);
        -moz-transform: translate(-150%, 0);
        -ms-transform: translate(-150%, 0);
        -o-transform: translate(-150%, 0);
        transform: translate(-150%, 0);
      }
      /* :after */
      .button:after {
        content: attr(data-active);
        -webkit-transform: translate(150%, 0);
        -moz-transform: translate(150%, 0);
        -ms-transform: translate(150%, 0);
        -o-transform: translate(150%, 0);
        transform: translate(150%, 0);
      }
      /* Span on :hover and :active */
      .button:hover span,
      .button:active span {
        opacity: 0;
        -webkit-transform: scale(0.3);
        -moz-transform: scale(0.3);
        -ms-transform: scale(0.3);
        -o-transform: scale(0.3);
        transform: scale(0.3);
      }

      /* We show :before pseudo-element on :hover and :after pseudo-element on :active */
      .button:hover:before,
      .button:active:after {
        opacity: 1;
        -webkit-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
        -webkit-transition-delay: 0.4s;
        -moz-transition-delay: 0.4s;
        -o-transition-delay: 0.4s;
        transition-delay: 0.4s;
      }
      /* We hide :before pseudo-element on :active*/
      .button:active:before {
        -webkit-transform: translate(-150%, 0);
        -moz-transform: translate(-150%, 0);
        -ms-transform: translate(-150%, 0);
        -o-transform: translate(-150%, 0);
        transform: translate(-150%, 0);
        -webkit-transition-delay: 0s;
        -moz-transition-delay: 0s;
        -o-transition-delay: 0s;
        transition-delay: 0s;
      }
    }
  }
}
</style>