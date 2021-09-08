<template>
  <PageWrapper :class="prefixCls" title="文章列表">
    <div :class="`${prefixCls}__top`">
      <a-row :gutter="12">
        <a-col :span="8" :class="`${prefixCls}__top-col`">
          <div>总计投稿</div>
          <p>{{ store.total }}</p>
        </a-col>
        <a-col :span="8" :class="`${prefixCls}__top-col`">
          <div>通过投稿</div>
          <p>32</p>
        </a-col>
        <a-col :span="8" :class="`${prefixCls}__top-col`">
          <div>待审投稿</div>
          <p>24</p>
        </a-col>
      </a-row>
    </div>
    <div :class="`${prefixCls}__content`">
      <a-list :pagination="pagination">
        <template v-for="(item, idx) in store.articleList" :key="item.id">
          <a-list-item class="list">
            <a-list-item-meta>
              <!-- <template #avatar>
                <Icon class="icon" v-if="item.icon" :icon="item.icon" :color="item.color" />
              </template> -->
              <template #title>
                <span>{{ item.title }}</span>
                <!-- <div class="extra" v-if="item.extra">
                  {{ item.extra }}
                </div> -->
              </template>
              <template #description>
                <div class="description">
                  {{ item.content.substr(0, 10) }}
                </div>
                <div class="info">
                  <div><span>投稿者</span>{{ item.authors }}</div>
                  <div><span>投稿时间</span>{{ item.ctime }}</div>
                </div>
                <div class="progress info">
                  <div><span>文章状态</span>{{ item.status }}</div>
                </div>
                <!-- <div class="progress">
                  <Progress :percent="item.percent" status="active" />
                </div> -->
              </template>
            </a-list-item-meta>
            <template #actions>
              <span
                @click="$router.push(`/articles/view/${idx}`)"
                class="text-blue-400 cursor-pointer"
                >审阅</span
              >
            </template>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
import { Progress, Row, Col } from 'ant-design-vue';
import { defineComponent } from 'vue';
import Icon from '/@/components/Icon/index';
import { cardList } from './data';
import { PageWrapper } from '/@/components/Page';
import { List } from 'ant-design-vue';
import { useArticleStore } from '/@/store/modules/article';

export default defineComponent({
  components: {
    Icon,
    Progress,
    PageWrapper,
    [List.name]: List,
    [List.Item.name]: List.Item,
    AListItemMeta: List.Item.Meta,
    [Row.name]: Row,
    [Col.name]: Col,
  },
  setup() {
    const store = useArticleStore();
    store.getArticleList();    

    return {
      prefixCls: 'list-basic',
      list: cardList,
      pagination: {
        show: true,
        pageSize: 3,
      },
      store
    };
  },
});
</script>
<style lang="less" scoped>
.list-basic {
  &__top {
    padding: 24px;
    text-align: center;
    background-color: @component-background;

    &-col {
      &:not(:last-child) {
        border-right: 1px dashed @border-color-base;
      }

      div {
        margin-bottom: 12px;
        font-size: 14px;
        line-height: 22px;
        color: @text-color;
      }

      p {
        margin: 0;
        font-size: 24px;
        line-height: 32px;
        color: @text-color;
      }
    }
  }

  &__content {
    padding: 24px;
    margin-top: 12px;
    background-color: @component-background;

    .list {
      position: relative;
    }

    .icon {
      font-size: 40px !important;
    }

    .extra {
      position: absolute;
      top: 20px;
      right: 15px;
      font-weight: normal;
      color: @primary-color;
      cursor: pointer;
    }

    .description {
      display: inline-block;
      width: 40%;
    }

    .info {
      display: inline-block;
      width: 30%;
      text-align: center;

      div {
        display: inline-block;
        padding: 0 20px;

        span {
          display: block;
        }
      }
    }

    .progress {
      display: inline-block;
      width: 15%;
      vertical-align: top;
    }
  }
}
</style>
