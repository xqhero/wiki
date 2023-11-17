<template>
    <div class="contacts-wrap">
        <div class="item" @click="navto"><i class="icon iconfont reco-message"></i></div>
    </div>
</template>
<script>
    export default {
        name: 'contacts',
        data () {
            return {
                linkTo: LINKTO
            }
        },
        methods: {
            navto () {
                window.location.href = this.$withBase(this.linkTo)
            }
        }
    }
</script>
<style lang="stylus" scoped>
.contacts-wrap
    position fixed
    right 0rem
    width 4rem
    height 10rem
    border-radius 0.25rem
    top 50%
    margin-top -2.5rem

    .item
        background-color: var(--background-color)
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2)
        box-shadow: var(--box-shadow)
        position: relative
        display: inline-block;
        text-align: center;
        cursor: pointer;
        width: 2.5rem;
        height: 2.5rem;
        margin-bottom: 8px;
        border-radius: 100%;
        line-height: 2.5rem;
        &::hover
            background: #d5dbe7;
        .icon
            position absolute
            top 0
            bottom 0
            left 0
            right 0
            margin auto
            width 26px
            height 26px
            fill $accentColor
            font-size 26px
            text-align center
            vertical-align middle
            line-height 26px
</style>