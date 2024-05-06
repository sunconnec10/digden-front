<script setup lang="ts">

</script>
<template>
  <footer class="rakuken-footer">
    <div class="rakuken-footer-upper">
      <div class="rakuken-footer-upper-inner">
        <p class="rakuken-footer-screenshot">
          <img
            src="https://media.senior.rakuten.co.jp/_nuxt/footer_screen.4ecee237.png"
            alt="楽天シニアアプリ画面"
          >
        </p>
        <p class="rakuken-footer-circle">
          <img
            src="https://media.senior.rakuten.co.jp/_nuxt/footer_circle.89719c58.svg"
            alt="200万ダウンロード"
          >
        </p>
        <p class="rakuken-footer-slogan">
          <picture>
            <source
              srcset="https://media.senior.rakuten.co.jp/_nuxt/footer_slogan_pc.e9a9e9c8.svg"
              media="(max-width: 640px)"
              width="335"
              height="65"
            >
            <img
              alt="健康生活応援アプリ"
              width="679"
              height="99"
              loading="lazy"
              src="https://media.senior.rakuten.co.jp/_nuxt/footer_slogan_pc.e9a9e9c8.svg"
            >
          </picture>
        </p>
        <p class="rakuken-footer-text">
          <picture>
            <source
              srcset="https://media.senior.rakuten.co.jp/_nuxt/footer_text_sp.c7c7f9ed.svg"
              media="(max-width: 640px)"
              width="192"
              height="98"
              >
            <img
              alt="歩数計で毎日の活動をチェック 健康管理で日々の変化を記録 イベント参加で趣味や仲間を発見" width="576"
              height="78"
              loading="lazy"
              src="https://media.senior.rakuten.co.jp/_nuxt/footer_text_pc.b748262e.svg"
            >
          </picture>
        </p>
        <ul class="rakuken-footer-download-list">
          <li class="rakuken-footer-download-list-item is-ios">
            <a href="https://app.adjust.com/16x0csn2?fallback=https://itunes.apple.com/jp/app/%E6%A5%BD%E5%A4%A9%E3%82%B7%E3%83%8B%E3%82%A2/id1451690957?mt=8" target="_blank" class="rakuken-footer-download-list-link">
              <img src="https://media.senior.rakuten.co.jp/_nuxt/app_download_ios.840cc809.png">
            </a>
          </li>
          <li class="rakuken-footer-download-list-item is-android">
          <a href="https://app.adjust.com/16czy3f0" target="_blank" class="rakuken-footer-download-list-link">
            <img src="https://media.senior.rakuten.co.jp/_nuxt/app_download_android.9f7c3b0b.png">
          </a>
          </li>
        </ul>
        <p class="rakuken-footer-qr">
          <img src="https://media.senior.rakuten.co.jp/_nuxt/footer_qr.8ebd7890.svg">
        </p>
        <p class="rakuken-footer-background">
          <picture>
            <source
              srcset="https://media.senior.rakuten.co.jp/_nuxt/footer_bg_sp.a0cbcd51.svg"
              media="(max-width: 640px)"
              width="434"
              height="121"
              >
            <img
              alt="背景"
              width="449"
              height="183"
              loading="lazy"
              src="https://media.senior.rakuten.co.jp/_nuxt/footer_bg_sp.a0cbcd51.svg"
            >
          </picture>
        </p>
      </div>
    </div>
    <div class="rakuken-footer-lower">
      <div class="rakuken-footer-lower-inner">
        <ul class="rakuken-footer-nav-list">
          <li class="rakuken-footer-nav-list-item">
            <a class="rakuken-footer-nav-list-link" href="https://mobile.rakuten.co.jp/corporate/" target="_blank">
              企業情報
            </a>
          </li>
          <li class="rakuken-footer-nav-list-item">
              <a class="rakuken-footer-nav-list-link" href="https://privacy.rakuten.co.jp/" target="_blank">
              個人情報保護方針</a>
          </li>
          <li class="rakuken-footer-nav-list-item">
              <a class="rakuken-footer-nav-list-link" href="https://corp.rakuten.co.jp/careers/" target="_blank">
              採用情報</a>
          </li>
          <li class="rakuken-footer-nav-list-item">
              <a class="rakuken-footer-nav-list-link" href="https://senior.rakuten.co.jp/trademark/" target="_self">
              商標・登録商標について</a>
          </li>
          <li class="rakuken-footer-nav-list-item">
            <a class="rakuken-footer-nav-list-link" href="https://senior.rakuten.co.jp/transactions/" target="_self">
            特定商取引法に基づく表記</a>
          </li>
        </ul>
        <p class="rakuken-footer-green-logo">
          <a href="https://corp.rakuten.co.jp/event/climateaction/#slide_1?scid=wi_senior_gogreen_footer" target="_blank">
            <img src="https://media.senior.rakuten.co.jp/_nuxt/logo_go-green-together.a1f5bb50.svg" alt="Go Green Together 本サービスは再生エネルギー100%" width="220" height="56" loading="lazy">
          </a>
        </p>
        <p class="rakuken-footer-copy-right">
          <small>
            © Rakuten Mobile, Inc.
          </small>
        </p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.rakuken-footer-upper {
    background-color: #fffcf4;
    border-bottom: 14px solid #4e9886;
    overflow: hidden;

    @include pc {
      padding: 0 6%;
    }
}

.rakuken-footer-upper-inner {
    margin: 0 auto;
    position: relative;
    z-index: 2;

    @include pc {
      aspect-ratio: 1232 / 237;
      max-width: 1232px;
    }
}

.rakuken-footer-background, .rakuken-footer-circle, .rakuken-footer-download-list, .rakuken-footer-qr, .rakuken-footer-screenshot, .rakuken-footer-slogan, .rakuken-footer-text {
    line-height: 0;
    position: absolute;
}
.rakuken-footer-background img, .rakuken-footer-circle img, .rakuken-footer-download-list img, .rakuken-footer-qr img, .rakuken-footer-screenshot img, .rakuken-footer-slogan img, .rakuken-footer-text img {
    width: 100%;
}

.rakuken-footer-screenshot {
    top: 0;
    // bottom: .5%;
    left: 0;
    overflow: hidden;

    @include pc {
      aspect-ratio: 1.05 / 1;
      width: 20.5357142857%;
    }
}

.rakuken-footer-circle {
  @include pc {
    bottom: .5%;
    left: -6.7%;
    width: 11.6883116883%;
  }
}

.rakuken-footer-background {
  @include pc {
    bottom: 0;
    left: -10%;
    width: 36.4448051948%;
  }
}

.rakuken-footer-slogan {
  @include pc {
    left: 25.974025974%;
    top: 9%;
    width: 55.1136363636%;
  }
}

.rakuken-footer-text {
  @include pc {
    left: 26%;
    bottom: 0;
    width: 46.7532467532%;
  }
}

.rakuken-footer-download-list {
  @include pc {
    left: 75%;
    text-align: right;
    top: 57.5%;
    width: 9.9837662338%;
  }
}

.rakuken-footer-download-list-item.is-ios {
  width: 82%;
  @include pc {
    margin-left: auto;
    margin-right: 0;
  }
}

.rakuken-footer-qr {
    position: absolute;
    right: -3%;
    top: 31%;
    width: 11.8506493506%;
}

.rakuken-footer-lower {
  background-color: #f8f8f8;

  @include pc {
    padding: 28px 24px;
  }
}

.rakuken-footer-lower-inner {
  margin: 0 auto;

  @include pc {
    text-align: center;
  }
}

.rakuken-footer-nav-list {
  display: flex;
  justify-content: center;
  margin: 0 auto 8px;
}

.rakuken-footer-nav-list-item {
  margin: 0 12px;
}

.rakuken-footer-nav-list-link {
  color: #686868;
  display: block;
  font-size: 10px;
  padding: 4px 0;
  text-decoration: none;
}

</style>
