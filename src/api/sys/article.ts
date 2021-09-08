import { Article } from '/@/store/modules/article';
import { defHttp } from '/@/utils/http/axios'

export interface GetArticleListModel {
  count: number;
  data: Article[];
  page: number;
  pageCount: number;
  total: number;
}

export function loadArticleList() {
  return defHttp.get<GetArticleListModel>({ url: '/article' });
}