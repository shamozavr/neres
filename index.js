const imageContainer = document.querySelector('.image-container');

const catAPI = 'live_TON8wIExMJQDuszyAanEZfhtV5NWfiFkkbyxXWXBT4Itwsg4PK29DdKb6M0q2fuA'
const catURL = 'https://api.thecatapi.com/v1/images/search?api_key=' + catAPI;

const dogAPI = 'live_LHiKRQvwdrBBrU7arXPKx0mLbhHXzG2B2yA2PIA11U4FIo1rjowdgSJWnX4PKl8M';
const dogURL = 'https://api.thedogapi.com/v1/images/search?api_key=' + dogAPI;

const ronMemeURL = 'https://media.tenor.com/nmZuZ_yKeaUAAAAM/throw-out-rage.gif'

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderImage(url) {
  imageContainer.insertAdjacentHTML("beforeend", `
    <img class= "meme__image" src = "${url}">
    `)
}

function aprilsFool() {
  const mainContainer = document.querySelector('.main')
  const allCardLinks = document.querySelectorAll('.list__link')
  const boardingCardLink = document.querySelector('.list__link--boarding');
  const risksCardLink = document.querySelector('.list__link--risks');
  const kycCardLink = document.querySelector('.list__link--kyc');
  const curSchemesCardLink = document.querySelector('.list__link--cur-schemes');
  const bankCardLink = document.querySelector('.list__link--banks');
  const crmCardLink = document.querySelector('.list__link--crmcard');
  const refreshCardLink = document.querySelector('.list__link--refresh');
  const residenceCardLink = document.querySelector('.list__link--residence');
  const detailsChangeCardLink = document.querySelector('.list__link--details-change');
  const returnsChangeCardLink = document.querySelector('.list__link--returns');
  const accountingCardLink = document.querySelector('.list__link--accounting');
  const lawCardLink = document.querySelector('.list__link--law');
  const faqCardLink = document.querySelector('.list__link--faq');
  const portalsCardLink = document.querySelector('.list__link--portals');

  const rickURL1 = 'https://media.tenor.com/CWgfFh7ozHkAAAAM/rick-astly-rick-rolled.gif';
  const gtaSAURL = 'https://i.imgflip.com/2z2mls.jpg';
  const riskURL = 'https://i.imgflip.com/5c27et.jpg';
  const spiderManURL = 'https://i.imgflip.com/aml6a.jpg';
  const jewishTrollURL = 'https://i.imgflip.com/b89x1.jpg';
  const southParkBankURL = 'https://imgflip.com/s/meme/Aaaaand-Its-Gone.jpg';
  const robertDJURL = 'https://imgflip.com/s/meme/Face-You-Make-Robert-Downey-Jr.jpg';
  const surveyURL = 'https://i.imgflip.com/9i7wyk.jpg';
  const refreshURL = 'https://i.imgflip.com/uas9h.jpg';
  const gypsyDance = 'https://media.tenor.com/F7Cd9OI_XRQAAAAM/kid-meme.gif';
  const shaqURL = 'https://media.tenor.com/KF09K-K62W0AAAAM/surprised-sorprendido.gif';
  const backToFutureURL = 'https://i.imgflip.com/2vthz.jpg';
  const officeAccountantURL = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXFkNjl6dzFtOGNzbnJkMGZtNnNoeTN1ZThmMTVyYW9jOTh4b3Q0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SEWEmCymjv8XDbsb8I/giphy.gif';
  const phoenixLawyerURL = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ280cmp3NzlkYm9vYzRmbzJncmVpNmN3ZWQybHAzeWhycmtyMXB0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qhz457RnSVQNL6qLb3/giphy.gif';
  const questionMeme = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjab1OL0hAQU_JnKnYEt7vTlWgHYOMhNm-MikXIOyKWoRGlEpfllgbsKsyBOxKh0XHPZM&usqp=CAU';
  const rickAndMorty = 'https://i.pinimg.com/originals/fa/16/51/fa16514fbec646d08f51e1bd5fdc6ab5.gif';

  allCardLinks.forEach((el) => {
    el.style.backgroundSize = 'cover';
    el.style.color = '#fff'
    el.querySelector('.list__header').style.color = '#fff';
    el.querySelector('.list__text').style.color = '#fff';
    el.style.textShadow = '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
  })


  mainContainer.style.backgroundImage = `URL(${rickURL1})`;
  mainContainer.style.backgroundSize = 'cover';

  boardingCardLink.style.backgroundImage = `URL(${gtaSAURL})`;
  bankCardLink.style.backgroundImage = `URL(${southParkBankURL})`;

  risksCardLink.style.backgroundImage = `URL(${riskURL})`;
  risksCardLink.style.backgroundSize = 'contain';
  risksCardLink.style.backgroundPosition = 'center';

  kycCardLink.style.backgroundImage = `URL(${spiderManURL})`;
  curSchemesCardLink.style.backgroundImage = `URL(${jewishTrollURL})`;
  crmCardLink.style.backgroundImage = `URL(${surveyURL})`;
  refreshCardLink.style.backgroundImage = `URL(${refreshURL})`;
  residenceCardLink.style.backgroundImage = `URL(${gypsyDance})`;
  detailsChangeCardLink.style.backgroundImage = `URL(${shaqURL})`;
  returnsChangeCardLink.style.backgroundImage = `URL(${backToFutureURL})`;
  accountingCardLink.style.backgroundImage = `URL(${officeAccountantURL})`;
  lawCardLink.style.backgroundImage = `URL(${phoenixLawyerURL})`;
  faqCardLink.style.backgroundImage = `URL(${questionMeme})`;
  portalsCardLink.style.backgroundImage = `URL(${rickAndMorty})`;

  renderImage(rickURL1)
}

function valentinesDay() {
  renderImage('https://media.tenor.com/mG_JwVBC_JUAAAAM/happy-valentines-day-petals.gif')
}

async function imageUploader() {
  const randomNumber = getRandomArbitrary(0, 1);
  console.log(randomNumber)

  if (randomNumber === 0) {
    try {
      //запрос картинки котика
      const resp = await fetch(catURL);
      if (resp.ok) {
        const data = await resp.json();
        const url = data[0].url;
        renderImage(url)
      } else {
        try {
          //запрос картинки собакена
          const resp = await fetch(dogURL);
          if (resp.ok) {
            const data = await resp.json();
            const url = data[0].url;
            renderImage(url)
          } else {
            renderImage(ronMemeURL);
            throw new Error('off the limit')
          }
        } catch (error) {
          console.error(error)
        }
      }
    } catch (error) {
      console.error(error)
    }
  } else if (randomNumber === 1) {
    try {
      //запрос картинки собакена
      const resp = await fetch(dogURL);
      if (resp.ok) {
        const data = await resp.json();
        const url = data[0].url;
        renderImage(url)
      } else {
        try {
          //запрос картинки котика
          const resp = await fetch(catURL);
          if (resp.ok) {
            const data = await resp.json();
            const url = data[0].url;
            renderImage(url)
          } else {
            renderImage(ronMemeURL);
            throw new Error('off the limit')
          }
        } catch (error) {
          console.error(error)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
}

function addSnowFlakes() {
  document.querySelector('html').insertAdjacentHTML("beforeend", `
<style>

.snowflake {
  color: #fff;
  font-size: 1em;
  font-family: Arial, sans-serif;
  text-shadow: 0 0 5px #000;
}

.snowflake,.snowflake .inner{animation-iteration-count:infinite;animation-play-state:running}@keyframes snowflakes-fall{0%{transform:translateY(0)}100%{transform:translateY(110vh)}}@keyframes snowflakes-shake{0%,100%{transform:translateX(0)}50%{transform:translateX(80px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;user-select:none;cursor:default;pointer-events:none;animation-name:snowflakes-shake;animation-duration:3s;animation-timing-function:ease-in-out}.snowflake .inner{animation-duration:10s;animation-name:snowflakes-fall;animation-timing-function:linear}.snowflake:nth-of-type(0){left:1%;animation-delay:0s}.snowflake:nth-of-type(0) .inner{animation-delay:0s}.snowflake:first-of-type{left:10%;animation-delay:1s}.snowflake:first-of-type .inner,.snowflake:nth-of-type(8) .inner{animation-delay:1s}.snowflake:nth-of-type(2){left:20%;animation-delay:.5s}.snowflake:nth-of-type(2) .inner,.snowflake:nth-of-type(6) .inner{animation-delay:6s}.snowflake:nth-of-type(3){left:30%;animation-delay:2s}.snowflake:nth-of-type(11) .inner,.snowflake:nth-of-type(3) .inner{animation-delay:4s}.snowflake:nth-of-type(4){left:40%;animation-delay:2s}.snowflake:nth-of-type(10) .inner,.snowflake:nth-of-type(4) .inner{animation-delay:2s}.snowflake:nth-of-type(5){left:50%;animation-delay:3s}.snowflake:nth-of-type(5) .inner{animation-delay:8s}.snowflake:nth-of-type(6){left:60%;animation-delay:2s}.snowflake:nth-of-type(7){left:70%;animation-delay:1s}.snowflake:nth-of-type(7) .inner{animation-delay:2.5s}.snowflake:nth-of-type(8){left:80%;animation-delay:0s}.snowflake:nth-of-type(9){left:90%;animation-delay:1.5s}.snowflake:nth-of-type(9) .inner{animation-delay:3s}.snowflake:nth-of-type(10){left:25%;animation-delay:0s}.snowflake:nth-of-type(11){left:65%;animation-delay:2.5s}
</style>
<div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
</div>
`)
}

function main() {
  const day = new Date().getDate();
  const month = new Date().getMonth();

  if (day === 1 && month === 11) {
    addSnowFlakes()
  }

  if (day === 28 && month === 0) {
    aprilsFool()
    return
  }

  if (day === 14 && month === 1) {
    valentinesDay()
    return
  }

  imageUploader()
}

// main();

document.querySelectorAll('.list__span--copy').forEach((el) => {
  el.addEventListener('click', (evt) => {
    evt.preventDefault();
    navigator.clipboard.writeText(evt.target.textContent);
  })
})

