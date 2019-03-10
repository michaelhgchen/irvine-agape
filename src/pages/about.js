import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './about.module.scss';

const IMAGES = [
  {
    alt: 'lunch at home',
    src: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53617054_2041278102608569_7058094914873065472_n.jpg?_nc_cat=103&_nc_ht=scontent-sjc3-1.xx&oh=fe16f9a9038310f64a45c92fd142d13e&oe=5D0BB1CB',
  },
  {
    alt: 'baptism',
    src: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/52134303_2021565291246517_8429506010032373760_n.jpg?_nc_cat=104&_nc_ht=scontent-sjc3-1.xx&oh=dd44a4a2fae94401103d0cc32d6e1cf9&oe=5D23110F',
  },
  {
    alt: 'Pastor Chen delivering a message',
    src: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/51141401_1990966230973090_5830775613102751744_n.jpg?_nc_cat=102&_nc_ht=scontent-sjc3-1.xx&oh=5a77386f43029a6695e22352c249c5c8&oe=5D0BC3BA',
  },
  {
    alt: 'group picture after a service',
    src: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/46878959_1898130546923326_1867169824287752192_n.jpg?_nc_cat=110&_nc_ht=scontent-sjc3-1.xx&oh=979526f27e2250edefbaca37c0240802&oe=5D1EA1EF',
  },
  {
    alt: 'lunch after service',
    src: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/42518939_1811576422245406_7766408603363180544_n.jpg?_nc_cat=103&_nc_ht=scontent-sjc3-1.xx&oh=f63ebf159dc886447d5da3c1418b1fdd&oe=5D2266A8',
  }
];

const AboutPage = () => (
  <Layout>
    <SEO title="教會簡介" />
    <Carousel autoPlay>
      {
        IMAGES.map(({src, alt}) => (
          <div key={alt}>
            <img className={styles.carouselImage} alt={alt} src={src} />
          </div>
        ))
      }
    </Carousel>
    <h1>教會簡介</h1>
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
  </Layout>
)

export default AboutPage
