import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProfileImage from '../components/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import styles from './index.module.scss'

// TOOD: make this pull 10 random photos from FB
const IMAGES = [];

const IndexPage = () => (
  <Layout>
    <SEO title="主页" keywords={['尔湾爱修基督教会', '爾灣愛修基督教會 - 仁愛 喜樂 和平 健康 昌盛 卓越']} />
    <section className={styles.theFoldBg} id="home">
      <div className={styles.title}>
        <h1 className="text-center">这是一个仁爱，喜乐，和平的教会</h1>
      </div>
    </section>
    <section id="visit">
      <div className="container vertical-padding">
        <div className="row">
          <div className="col-xs-12 col-s-6">
            <iframe
              allowFullScreen
              frameBorder="0"
              height="450"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1655.7612175396564!2d-117.79207706069626!3d33.69118064301656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x845c6270e3641907!2sDeerfield+Community+Park!5e0!3m2!1sen!2sus!4v1552177274732"
              style={{ border: 0, margin: 0 }}
              title="Irvine Agape Christian Church map"
              width="100%"
            />
          </div>
          <div className={`${styles.timetable} col-xs-12 col-s-6 center-content`}>
            <b>时间</b>: 10:00AM - 11:00AM PT
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div className="container">
        <div className={`${styles.aboutBg} offset-container`}>
          <div className={styles.title}>
            <h1>教會簡介</h1>
          </div>
        </div>
        <div className={styles.introCard}>
          <div className={styles.imageBadge}>
            <ProfileImage />
          </div>
          <p>
            我們的教會，於2012年7月7日正式成立。我們是一個溫馨的教會，有仁愛、喜樂、和平充滿在我們的當中。
            我們的成員，來自中國、台灣和其他各地。我們彼此關懷，互相扶持，在愛的肢体裡成長，共同追求豐盛的生命。
            我們竭誠地歡迎您，加入我們这屬灵的家庭，共享主的恩典。
          </p>
          <p>
            我們的牧者，陳極星牧師與青素萍師母，於2008年7月，從愛修園國際领袖學院畢業後，領受了聖灵的更新，被
            神感動來建造这個教會。
          </p>
          <p>
            我們感謝北加州南湾愛修教會，給我們屬灵的幫助，並感謝愛修園國際领袖學院，提供我們很多的支援，幫助我們裝備聖徒。
            使我們在聖經的真理與聖灵的充滿上，均衡追求，在恩賜的運用，與灵命的更新上一齊並重。
          </p>
          <p>
            教會異象
            <br />
            藉聖父，聖子，聖靈的引導，本爾灣愛修基督教會，以傳揚耶穌基督的真理，引領罪人得救，並以心靈和誠實敬拜獨一真神。
            <br />
            藉著聖經之教訓，及聖靈的恩膏，來彰顯神的能力及作為，有神蹟奇事，有聖靈恩賜及醫治釋放，並勉勵信徒彼此相愛，互相扶持，培養靈命長進。
            <br />
            同時成全聖徒，發揮各人恩賜，各盡其職，在聖靈引導下在各地開拓，建立教會，並延續發展福音事工，來完成主所託付的大使命。
            <br />
            本教會門戶開放，不分宗派，以基督之心為心，天父之事為念，高舉基督的旌旗，向萬國萬民傳揚福音，領人歸入永生
            神榮耀的國度。
          </p>
        </div>
        <div className="divider" />
      </div>
    </section>
    <section>
      <div className="container">
        <Carousel autoPlay infiniteLoop>
          {
            IMAGES.map(({src, alt}) => (
              <div key={alt}>
                <img className={styles.carouselImage} alt={alt} src={src} />
              </div>
            ))
          }
        </Carousel>
      </div>
    </section>
  </Layout>
)

export default IndexPage
