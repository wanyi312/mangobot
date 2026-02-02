<template>
  <div class="contactus">
    <div class="contactus-visit">
      <div class="contactus-visit-left">
        <div class="contactus-visit-left-logo"></div>
        <div class="contactus-visit-left-title">
          Visit the Mangobot<br />Showroom
        </div>
        <div class="contactus-visit-left-desc">
          See our robots live, explore real capabilities, and discuss use cases
          tailored to your needs.
        </div>
      </div>
      <div class="contactus-visit-right">
        <div class="contactus-visit-right-title">Choose Visit Type</div>
        <div class="contactus-visit-right-options">
          <div
            v-for="(item, index) in visitTypes"
            :key="item.name"
            class="contactus-visit-right-option"
            :class="{
              'contactus-visit-right-option-active': visitActive === index,
            }"
            @click="visitActive = index"
          >
            <div class="contactus-visit-right-option-info">
              <div class="contactus-visit-right-option-name">
                {{ item.name }}
              </div>
              <div class="contactus-visit-right-option-time">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="8.75"
                    stroke="#9A9A9A"
                    stroke-width="1.5"
                  />
                  <path
                    d="M11.25 6.125C11.25 5.71079 10.9142 5.375 10.5 5.375C10.0858 5.375 9.75 5.71079 9.75 6.125H10.5H11.25ZM12.3428 11.2822C12.0499 10.9893 11.5751 10.9893 11.2822 11.2822C10.9893 11.5751 10.9893 12.0499 11.2822 12.3428L11.8125 11.8125L12.3428 11.2822ZM12.5947 13.6553C12.8876 13.9482 13.3624 13.9482 13.6553 13.6553C13.9482 13.3624 13.9482 12.8876 13.6553 12.5947L13.125 13.125L12.5947 13.6553ZM10.5 6.125H9.75V9.1875H10.5H11.25V6.125H10.5ZM11.8125 11.8125L11.2822 12.3428L12.5947 13.6553L13.125 13.125L13.6553 12.5947L12.3428 11.2822L11.8125 11.8125ZM11.8125 10.5H11.0625C11.0625 10.8107 10.8107 11.0625 10.5 11.0625V11.8125V12.5625C11.6391 12.5625 12.5625 11.6391 12.5625 10.5H11.8125ZM10.5 11.8125V11.0625C10.1893 11.0625 9.9375 10.8107 9.9375 10.5H9.1875H8.4375C8.4375 11.6391 9.36091 12.5625 10.5 12.5625V11.8125ZM9.1875 10.5H9.9375C9.9375 10.1893 10.1893 9.9375 10.5 9.9375V9.1875V8.4375C9.36091 8.4375 8.4375 9.36091 8.4375 10.5H9.1875ZM10.5 9.1875V9.9375C10.8107 9.9375 11.0625 10.1893 11.0625 10.5H11.8125H12.5625C12.5625 9.36091 11.6391 8.4375 10.5 8.4375V9.1875Z"
                    fill="#9A9A9A"
                  />
                </svg>
                <span>{{ item.duration }}</span>
              </div>
            </div>
            <div class="contactus-visit-right-option-radio">
              <div class="contactus-visit-right-option-radio-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contactus-withus">
      <div class="contactus-withus-title">Connect with us</div>
      <div class="contactus-withus-social">
        <a
          v-for="(item, index) in socialList"
          :key="item.name"
          :href="item.link"
          target="_blank"
          class="contactus-withus-social-item"
          @mouseenter="active = index"
          :class="{ 'contactus-withus-social-item-active': index === active }"
        >
          <img :src="item.icon" :alt="item.name" />
          <span v-if="index === active">{{ item.name }}</span>
        </a>
      </div>
    </div>
    <div class="contactus-faq">
      <div class="contactus-faq-title">Frequently Asked Questions</div>
      <div class="contactus-faq-list">
        <!-- 左侧列 01, 02, 03 -->
        <div class="contactus-faq-col">
          <div
            v-for="(item, index) in faqList.slice(0, 3)"
            :key="index"
            class="contactus-faq-item"
            :class="{ 'contactus-faq-item-active': faqActive === index }"
            @click="faqActive = faqActive === index ? -1 : index"
          >
            <div class="contactus-faq-item-header">
              <div class="contactus-faq-item-num">
                {{ String(index + 1).padStart(2, "0") }}
              </div>
              <div class="contactus-faq-item-question">{{ item.question }}</div>
              <div class="contactus-faq-item-icon">
                {{ faqActive === index ? "×" : "+" }}
              </div>
            </div>
            <div v-if="faqActive === index" class="contactus-faq-item-answer">
              {{ item.answer }}
            </div>
          </div>
        </div>
        <!-- 右侧列 04, 05, 06 -->
        <div class="contactus-faq-col">
          <div
            v-for="(item, index) in faqList.slice(3, 6)"
            :key="index + 3"
            class="contactus-faq-item"
            :class="{ 'contactus-faq-item-active': faqActive === index + 3 }"
            @click="faqActive = faqActive === index + 3 ? -1 : index + 3"
          >
            <div class="contactus-faq-item-header">
              <div class="contactus-faq-item-num">
                {{ String(index + 4).padStart(2, "0") }}
              </div>
              <div class="contactus-faq-item-question">{{ item.question }}</div>
              <div class="contactus-faq-item-icon">
                {{ faqActive === index + 3 ? "×" : "+" }}
              </div>
            </div>
            <div v-if="faqActive === index + 3" class="contactus-faq-item-answer">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contactus-away">
      <div class="contactus-away-title">
        The Future Is a<br />
        Conversation Away
      </div>
      <div class="contactus-away-desc">
        Many organizations started with curiosity. One conversation later, they
        had clarity. Let's find yours.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Placeholder icons - replace with actual icons
import linkedinIcon from "@/assets/linkedin.svg";
import xIcon from "@/assets/x.svg";
import instagramIcon from "@/assets/instagram.svg";
import tiktokIcon from "@/assets/TikTok.svg";
import youtubeIcon from "@/assets/youtube.svg";
const active = ref(0);
const visitActive = ref(1);

const faqActive = ref(1);

const faqList = ref([
  {
    question: "How much does Mangobot cost?",
    answer:
      "Pricing varies based on model and configuration. Contact us for a personalized quote.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Typically 2-4 weeks from order to operation, including installation, integration, and training.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide with local support in major markets.",
  },
  {
    question: "Can I see Mangobot before committing?",
    answer: "Absolutely! Visit our showroom or request a live demo.",
  },
  {
    question: "What kind of maintenance is required?",
    answer:
      "Minimal maintenance with regular software updates and occasional hardware checks.",
  },
  {
    question: "Can I customize Mangobot for my specific needs?",
    answer:
      "Yes, we offer extensive customization options to fit your requirements.",
  },
]);

const visitTypes = ref([
  { name: "Showroom Tour", duration: "15 min" },
  { name: "Live Robot Demo", duration: "30 min" },
  { name: "Business Consultation", duration: "45 min" },
]);

const socialList = ref([
  { name: "LinkedIn", icon: linkedinIcon, link: "https://linkedin.com" },
  { name: "X", icon: xIcon, link: "https://x.com" },
  { name: "Instagram", icon: instagramIcon, link: "https://instagram.com" },
  { name: "TikTok", icon: tiktokIcon, link: "https://tiktok.com" },
  { name: "YouTube", icon: youtubeIcon, link: "https://youtube.com" },
]);
</script>

<style lang="less" scoped>
.contactus {
  width: 1440px;
  margin: 0 auto;

  &-visit {
    display: flex;
    width: 950px;
    height: 529px;
    padding: 24px;
    margin: 0 auto;
    // align-items: flex-start;
    align-content: space-between;
    gap: 32px;
    flex-wrap: wrap;
    box-sizing: border-box;

    &-left {
      display: flex;
      width: 435px;
      flex-direction: column;
      align-items: flex-start;
      gap: 51px;
      flex-shrink: 0;
      padding: 24px;
      box-sizing: border-box;

      &-logo {
        width: 160.828px;
        height: 66.985px;
        aspect-ratio: 160.83/66.99;
        background: url("@/assets/logo.png") 50% / cover no-repeat;
      }

      &-title {
        color: var(--Color-4, #1a1e1d);

        /* H3 */
        font-family: Manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px; /* 115.625% */
      }

      &-desc {
        color: var(--Color-5, #9a9a9a);
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 161.111% */
      }
    }

    &-right {
      display: flex;
      width: 435px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      flex-shrink: 0;

      &-title {
        color: var(--Color-4, #1a1e1d);

        /* H3 */
        font-family: Manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px; /* 115.625% */
      }

      &-options {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      &-option {
        color: var(--Color-4, #1a1e1d);
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;
        position: relative;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        width: 435px;
        border-radius: var(--Sizes-Border-Radius-BR-5, 16px);
        border: 1px solid var(--Colors-Neutrals-Neutral-400, #d9dbe9);
        background: var(--Colors-Neutrals-White, #fff);

        /* Shadows/Neutrals/Neutral 01 */
        box-shadow: 0 0.5px 1px 0 rgba(25, 33, 61, 0.04);
        box-sizing: border-box;
        padding: 24px;
        background: #fff;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          border: 1px solid var(--Linear, #ef536b);
        }

        &-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        &-name {
          color: var(--Color-4, #1a1e1d);
          font-variant-numeric: ordinal;
          font-feature-settings: "dlig" on;

          /* H5 */
          font-family: Manrope;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 29px; /* 161.111% */
        }

        &-time {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #a1a1aa;
          font-family: Manrope;
          font-size: 14px;
          font-weight: 400;

          svg {
            width: 21px;
            height: 21px;
          }
          span {
            display: flex;
            padding: 4px 6px 4px 4px;
            justify-content: center;
            align-items: center;
            gap: 4px;
            border-radius: 16px;
            border: 0.5px solid var(--Colors-Neutrals-Neutral-400, #d9dbe9);
            background: var(--Colors-Neutrals-Neutral-200, #fbfbfe);

            /* Shadows/Neutrals/Neutral 01 */
            box-shadow: 0 0.5px 1px 0 rgba(25, 33, 61, 0.04);
          }
        }

        &-radio {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          position: absolute;
          right: 18px;
          top: 18px;
          border: 1px solid var(--Colors-Neutral-400, #d9dbe9);
          background: var(--Colors-Neutral-100, #fff);
          gap: var(--checkboxes-radio-toogles-gaps-gap-regular, 6px);
          &-inner {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: transparent;
            transition: all 0.2s ease;
          }
        }

        &-active {
          .contactus-visit-right-option-time {
            color: #ef536b;
            span {
              border-radius: 16px;
              border: 0.5px solid var(--Colors-Primary-HUE-Purple-300, #d2ceff);
              background: var(--Colors-Primary-HUE-Purple-100, #f9f8ff);

              /* Shadows/Primary HUE/Primary 01 */
              box-shadow: 0 0.5px 1px 0 rgba(74, 58, 255, 0.07);
            }
          }

          .contactus-visit-right-option-radio {
            border-color: #ffff;
            border-radius: var(--checkboxes-radio-toogles-toggle-pill, 200px);
            background: var(
              --Linear,
              linear-gradient(270deg, #ef536b 0%, #f79355 100%)
            );

            &-inner {
              width: 8px;
              height: 8px;
              background: #fff;
            }
          }
        }
      }
    }
  }

  &-withus {
    width: 1362px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0;

    &-title {
      color: #0f0f0f;
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;

      /* H1 */
      font-family: Manrope;
      font-size: 72px;
      font-style: normal;
      font-weight: 600;
      line-height: 84px; /* 116.667% */
      letter-spacing: -2px;
    }

    &-social {
      display: flex;
      align-items: center;
      gap: 12px;

      &-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        height: 52px;
        padding: 0 20px;
        border-radius: 8px;
        border: 1px solid #e4e4e7;
        background: #fff;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.2s ease;

        img {
          width: 20px;
          height: 20px;
        }

        span {
          color: #fff;
          font-family: Manrope;
          font-size: 16px;
          font-weight: 500;
        }

        &-active {
          border-radius: 14px;
          background: var(
            --Linear,
            linear-gradient(270deg, #ef536b 0%, #f79355 100%)
          );
          img {
            filter: brightness(0) invert(1);
          }

          &:hover {
            background: linear-gradient(90deg, #ea580c 0%, #db2777 100%);
          }
        }
      }
    }
  }

  &-faq {
    width: 1362px;
    margin: 0 auto;
    box-sizing: border-box;

    &-title {
      color: #0f0f0f;
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;

      /* H1 */
      font-family: Manrope;
      font-size: 72px;
      font-style: normal;
      font-weight: 600;
      line-height: 84px; /* 116.667% */
      letter-spacing: -2px;
      margin-bottom: 34px;
    }

    &-list {
      display: flex;
      gap: 16px;
    }

    &-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    &-item {
      width: 633px;
      min-height: 73px;
      display: flex;
      padding: 32px 20px;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;
      border-bottom: 1px solid var(--Border, #dcdcdc);
      cursor: pointer;
      transition: all 0.3s ease;

      &-header {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 45px;
      }

      &-num {
        color: var(--Colors-Neutrals-Neutral-500, #a0a3bd);

        /* H5 */
        font-family: Geist;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 32.338px; /* 101.057% */
      }

      &-question {
        flex: 1;
        color: var(--Colors-Neutrals-Neutral-800, #170f49);
        leading-trim: both;
        text-edge: cap;

        /* H5 */
        font-family: Manrope;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px; /* 154.167% */
      }

      &-icon {
        color: #71717a;
        font-size: 28px;
        font-weight: 300;
        line-height: 32px;
        text-align: center;
      }

      &-answer {
        color: var(--Description, #757d89);
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 161.111% */
      }

      &-active {
        border-radius: 24px;
        background: #fff6e4;
        flex-direction: column;
        border-bottom-width: 0px;

        .contactus-faq-item-num {
          color: var(--Color, #FCB62E);
        }

        .contactus-faq-item-question {
          color: var(--Color, #fcb62e);
          leading-trim: both;
          text-edge: cap;

          /* H5 */
          font-family: Manrope;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 37px; /* 154.167% */
        }
        .contactus-faq-item-answer {
           width: 444px;
           position: relative;
           left: -10px;
           
        }

        .contactus-faq-item-icon {
          color: var(--Color, #FCB62E);
        }
      }
    }
  }

  &-away {
    width: 1362px;
    margin: 25px auto 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 165px 123px 100px 104px;
    box-sizing: border-box;

    &-title {
      width: 576px;
      color: #18181b;
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;

      /* H2 */
      font-family: Manrope;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: 65px; /* 135.417% */
      letter-spacing: -2px;
    }

    &-desc {
      width: 571px;
      color: #000;
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 31px; /* 172.222% */
    }
  }
}
</style>