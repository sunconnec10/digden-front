<script setup lang="ts">
import { BREAK_POINT } from '~/assets/js/constants/breakPoint'
const { TOP } = useNavigation()

</script>
<template>
  <header>
    <div class="rakuten-header-logo">
      <p class="rakuten-header-logo-rakuken">
        <NuxtLink to="https://media.senior.rakuten.co.jp/rakuken/">
          <picture>
            <source
              srcset="https://media.senior.rakuten.co.jp/_nuxt/header_rakuken_logo_pc.cae9ea4a.svg"
              :media="`(max-width: ${BREAK_POINT} px)`"
              width="497"
              height="44"
            >
            <img
              alt="らく健 毎日の健康を、もっと楽しく。"
              width="174"
              height="32"
              src="https://media.senior.rakuten.co.jp/_nuxt/header_rakuken_logo_pc.cae9ea4a.svg"
            >
          </picture>
        </NuxtLink>
      </p>
      <p class="rakuten-header-logo-senior">
        <a
          class="rakuten-header-logo-senior-link"
          :href="TOP.link"
          ><img
          src="https://media.senior.rakuten.co.jp/_nuxt/header_senior_logo.5800d42e.svg"
          alt="楽天シニア"
        /></a>
      </p>
    </div>
    <nav class="rakuken-header-nav">
      <div class="rakuken-header-nav-inner">
        <ul class="rakuken-header-nav-list">
          <li class="rakuken-header-nav-item">
            <NuxtLink
              to="https://senior.rakuten.co.jp/feature/"
              class="rakuken-header-nav-link"
            >
              特集
            </NuxtLink>
          </li>
          <li class="rakuken-header-nav-item">
            <NuxtLink
              to="https://media.senior.rakuten.co.jp/rakuken/#ranking"
              class="rakuken-header-nav-link"
            >
              ランキング
            </NuxtLink>
          </li>
          <li class="rakuken-header-nav-item">
            <NuxtLink
              to="https://media.senior.rakuten.co.jp/rakuken/#recommend"
              class="rakuken-header-nav-link"
            >
              おすすめ
            </NuxtLink>
          </li>
          <li class="rakuken-header-nav-item">
            <NuxtLink
              to="https://media.senior.rakuten.co.jp/rakuken/#keywords" class="rakuken-header-nav-link">
              キーワードで探す
            </NuxtLink>
          </li>
          <li class="rakuken-header-nav-item">
            <NuxtLink
              to="https://media.senior.rakuten.co.jp/rakuken/column/label/nobinobi_kenko_club/" class="rakuken-header-nav-link">
              のびのび健康クラブ
            </NuxtLink>
          </li>
          <li class="rakuken-header-nav-item">
            <NuxtLink
              to="https://media.senior.rakuten.co.jp/rakuken/column/label/health_and_beauty/" class="rakuken-header-nav-link">
              健康コラム
            </NuxtLink>
          </li>
          </ul>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  border-top: 6px solid #4e9856;
  background-color: #ffffff;
}

.rakuten-header-logo {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @include pc {
    max-width: 650px;
    align-items: center;
  }
  @include sp {
    max-width: 300px;
    width: calc(274 / 360 * 100%);
    align-items: flex-end;
  }
}

.rakuten-header-logo-rakuken,
.rakuken-header-logo-senior {
  line-height: 0;
}

.rakuten-header-logo-rakuken {
  @include pc {
    width: calc(490 / 650 * 100%);
  }
  @include sp {
    width: calc(160 / 274 * 100%);
  }
}

.rakuten-header-logo-senior {
  transform:translateY(20%);
}

.rakuken-header-nav {
  background-color: #4e9886;
}

.rakuken-header-nav-inner {
  text-align: center;
}

.rakuken-header-nav-list {
  display: inline-flex;
  justify-content: center;
}

.rakuken-header-nav-link {
  color: white;
  font-weight: 700;
  text-decoration: none;
  word-break: keep-all;
  font-size: 18px;
  padding: 14px 24px;
}
</style>
