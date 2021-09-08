import { GetArticleListModel } from './../../api/sys/article';
import { defineStore } from 'pinia';
import { loadArticleList } from '/@/api/sys/article';

export interface Article {
  id: number | null;
  status: number;
  tags: string;
  title: string;
  content: string;
  judgerId: number | null;
  authors: string;
  ctime: Date | null
  user?: {
    id: number,
    name: string,
  }
}

interface ArticleState {
  articleList: Article[],
  count: number,
  page: number,
  pageCount: number,
  total: number,
}

// 这里用的store似乎和以前用的不同，这个store不需要提供mutations，
// 直接在actions中定义方法即可
export const useArticleStore = defineStore({
  id: 'app-article',
  state: (): ArticleState => ({
    articleList: [],
    count: 0,
    page: 0,
    pageCount: 0,
    total: 0
  }),
  actions: {
    setArticleList(articleState: GetArticleListModel) {
      this.articleList = articleState.data;
      this.page = articleState.page;
      this.pageCount = articleState.pageCount;
      this.total = articleState.total;
      this.count = articleState.count;
    },

    async getArticleList() {
      const res = await loadArticleList();
      this.setArticleList(res);
    }
  },

})