<script lang="ts" setup>
import { BREAK_POINT } from '~/assets/js/constants/breakPoint'

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
        >
        </a>
        <img src="https://media.senior.rakuten.co.jp/_nuxt/header_senior_logo.5800d42e.svg" alt="楽天シニア">
      </p>
    </div>
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

.rakuten-header-logo-rakuken {
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



</style>
