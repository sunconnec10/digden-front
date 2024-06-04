<script setup lang="ts">
const route = useRoute()
const {data: contentData, error: cotentError } = await useFetch(
  `/api/content/${route.params.id}`,
  {
    server: true,
    initialCache: false,
    headers: useRequestHeaders(),
    onResponseError({ response }) {
      statusCode = response.status
    },
  }
)

</script>
<template>
<div class="rakuken-column-detail">
  <article class="rakuken-column-detail-main">
    <div class="column-detail-head-thumbnail">
      <p class="main-visual">
        <img
          :src="contentData.data.image_url"
          alt=""
          loading="lazy"
          width="640"
          height="400"
        >
      </p>
    </div>
    <div class="column-detail-head">
      <div class="column-detail-head-title">
        <h1 class="column-detail-head-title-text">
            {{ contentData.data.title }}
        </h1>
      </div>
      <ul class="rakuken-keyword-list">
        <li
          v-for="(label, index) in contentData.data.labels"
          :key="index"
          class="rakuken-keyword-list-item rakuken-keyword-list-mini"
        >
          <a
            href="/rakuken/column/label/health_and_beauty/"
            class="rakuken-keyword-list-link"
          >
            #{{ label.title }}
          </a>
        </li>
      </ul>
      <div class="column-detail-head-update">
        <div class="column-detail-head-update-text">
          更新日：{{ contentData.data.content_updated_date }}
        </div>
      </div>
    </div>
    <div class="column-detail-inner">
      <section>
        <div
          v-for="(content, index) in contentData.data.content_details"
          :key="index"
        >
          <h2
            v-if="content.body_title"
            class="column-contents-title"
          >
            {{ content.body_title }}
          </h2>
          <p
            v-if="content.body_text"
            class="column-contents-list-text"
            v-html="content.body_text"
          />
          <figure v-if="content.image_url" class="column-contents-image">
            <img
              :src="content.image_url"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </div>
  </article>
</div>
</template>

<style scoped>

.rakuken-column-detail {
  margin: 0 auto;
  max-width: 1278px;
}

.rakuken-column-detail-main {
  margin: 0 auto;
  width: 100%;
  max-width: 850px;
}

.main-visual > img {
  width: 100%;
}

.column-detail-head {
  margin: 32px 48px 48px;
  border-bottom: 1px solid #c3c3c3;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
}

.column-detail-head-title {
  background-color: #fff;
  padding-bottom: 10px;
}

.column-detail-head-title-text {
  font-size: 24px;
  font-weight: 400;
  position: relative;
  margin: 0px;
}

.rakuken-keyword-list {
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 5px;
}

.rakuken-keyword-list-link {
  padding: 6px 20px;
  background-color: #fff;
  border: 1px solid #585858;
  border-radius: 300px;
  color: #333;
  display: block;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all .3s ease-in-out;
  white-space: nowrap;
}

.rakuken-keyword-list-item.rakuken-keyword-list-mini {
  margin: 0 10px 10px 0;
}

.column-detail-inner {
  margin: 0 48px;
  padding: 0;
}

.column-contents-title {
  font-size: 20px;
  font-weight: 700;
  margin: 55.5px 0 16px;
  margin-bottom: 23.5px;
  padding-left: 16px;
  position: relative;
}

.column-contents-title:before {
  background: #4e9886;
  border-radius: 5px;
  content: "";
  height: calc(100% + 15px);
  left: -3px;
  position: absolute;
  top: -7.5px;
  width: 6px;
}

.column-contents-body-text {
  margin-bottom: 16px;
}

.column-contents-image {
  margin: 0;
  margin-bottom: 16px;
}

.column-contents-image img {
  width: 100%;
}

</style>
