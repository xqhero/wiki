<template>
    <div class="post-container">
        <div class="post-card" v-for="page in pages" :key="page.path" @click="handleClick(page.path)">
          <img class="article-image" :src="$withBase(page.frontmatter.thumb)" />
          <div class="page-detail">
            <div class="page-title">{{ page.title }}</div>
            <div class="page-author">
              <div class="author"><i class="iconfont reco-account"></i>{{ page.frontmatter.author }} </div>
              <div class="date"><i class="iconfont reco-date"></i> {{ page.frontmatter.date.substring(0, 10) }}</div>
            </div>
          </div>
        </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        pages: []
      }
    },
    mounted() {
      console.log(this.$site)
      this.$site.pages.forEach(page => {
         if (page.frontmatter.type 
             && page.frontmatter.type == 'article'
             && page.frontmatter.thumb) {
          this.pages.push(page)
         }
      })
    },
    methods: {
      handleClick(path) {
        this.$router.push(path)
      }
    }
  }
  </script>
  <style lang="stylus"  scoped>
  .post-container {
    padding: 1.2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 2%; 
  }
  .post-card {
    flex-basis: 30%;
    max-width: 30%;
    border: 1px solid #f1f1f1;
    border-radius: 0.5rem;
    padding: 10px;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all .5s ease .1s;
  }

  .post-card:hover {
    transform: scale(1.1);/*使用scale变换函数进行放大*/
    border-color: $accentColor;
  }

  .article-image {
    max-width: 100%;
  }
  .page-detail {
    padding: 0.5rem;
  }

  .page-title {
    font-size: 1.2rem;
    line-height: 2.4rem;
    height: 2.4rem;
    font-weight: 600;
  }

  .page-author {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .date {
    text-align: right;
    width: 120px;
    flex: 0 0  auto;
  }
  i {
    margin-right: 0.2rem;
  }
  </style>