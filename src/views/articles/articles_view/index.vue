<template>
  <PageWrapper v-if="articleContent" :title="'审阅文章'">
    <div class="px-3 md:px-7 bg-white py-5">
      <div class="py-5 mb-3 border-b-2">
        <h1 class="text-4xl font-bold" v-text="articleContent.title"></h1>
        <div class="text-gray-400">
          <span class="mx-1">
            {{ articleContent.authors }}
          </span>
          <span class="float-right">投稿时间：{{ articleContent.ctime }}</span>
        </div>
      </div>
      <div v-html="articleContent.content"></div>
    </div>
    <div class="text-right whitespace-nowrap mt-2 bg-white p-2">
      <a-button class="mx-2" type="success">通过投稿</a-button>
      <a-button class="mx-2" type="warning">打回投稿</a-button>
      <a-button class="mx-2" type="error">删除投稿</a-button>
    </div>
  </PageWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { articleContent } from './data';
import { PageWrapper } from '/@/components/Page';
import { useRoute } from 'vue-router'
import { useArticleStore } from '/@/store/modules/article';

export default defineComponent({
  components: {
    PageWrapper,
  },
  setup() {
    const store = useArticleStore();
    const route = useRoute();
    // console.log(route.params.id)
    let articleContent;
    if (typeof route.params.id === 'string') {
      articleContent = store.articleList[parseInt(route.params.id)];
    }
    return {
      articleContent,
    };
  },
});
</script>

<style scoped>
</style>