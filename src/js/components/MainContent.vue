<template >
<section class="main">
  <section class="sidebar">
    <div class="top">
      <figure class="img">
        <img src="/dist/img/IMG_1985.jpg" alt="profile">
      </figure>
      <h2>فرحان فریدیان</h2>
    </div>
    <div class="mid">
      <div class="home" @click="scrollHandler('home')">
        <i class="fi-rr-home"></i>
        <p>خانه</p>
      </div>
      <div class="aboutMe" @click="scrollHandler('aboutMe')">
        <i class="fi-rr-home"></i>
        <p>درباره من</p>
      </div>
      <div class="mySkills" @click="scrollHandler('mySkills')">
        <i class="fi-rr-home"></i>
        <p>مهارت های من</p>
      </div>
      <div class="services" @click="scrollHandler('services')">
        <i class="fi-rr-home"></i>
        <p>خدمات</p>
      </div>
      <div class="works" @click="scrollHandler('works')">
        <i class="fi-rr-home"></i>
        <p>کار ها</p>
      </div>
      <div class="contactUs" @click="scrollHandler('contactUs')">
        <i class="fi-rr-home"></i>
        <p>ارتباط با ما</p>
      </div>
    </div>
    <div class="down">
      <div class="telegram">
        <a href="https://t.me/Frn_Farid" target="_blank">
          <i class="fi-brands-telegram"></i>
        </a>
      </div>
      <div class="discord">
        <a href="https://discord.com/farhan_fa" target="_blank">
          <i class="fi-brands-discord"></i>
        </a>
      </div>
      <div class="instagram">
        <a href="https://www.instagram.com/frn_farid/" target="_blank">
          <i class="fi fi-brands-instagram"></i>
        </a>
      </div>
      <div class="github">
        <a href="">
          <i class="fi-brands-github"></i>
        </a>
      </div>
    </div>
  </section>
  <section class="content">
    <div id="home" class="justForScroll">

    </div>
    <div class="home">
      <h1>فرحان فریدیان</h1>
      <h3>دانش آموز مدرسه شهید بهشتی و تازه کار در حوضه برنامه نویسی وب </h3>
    </div>
    <div id="aboutMe" class="justForScroll">

    </div>
    <div class="aboutMe">
      <div class="top">
        <h2>درباره من</h2>
      </div>
      <div class="mid">
        <div class="righ">
          <figure class="img">
            <img src="/dist/img/IMG_1985.jpg" alt="profile">
          </figure>
        </div>
        <div class="left">
          <div class="description">
            <h4>سلام،</h4>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
          </div>
          <div class="fildes">
            <div class="name">
              <p class="q">نام و نام خانوادگی : </p><p class="a">فرحان فریدیان</p>
            </div>
            <div class="dateOfBirth">
              <p class="q">تاریخ تولد :</p><p class="a">1386/8/28</p>
            </div>
            <div class="email">
              <p class="q">ایمیل :</p><p class="a">xD@email.com</p>
            </div>
            <div class="city">
              <p class="q">شهر :</p><p class="a"> بابل </p>
            </div>
            <div class="freelance">
              <p class="q">فریلنس :</p><p class="a">امکان پذیر</p>
            </div>
            <div class="education">
              <p class="q">مدرک :</p><p class="a">سیکل</p>
            </div>
          </div>
        </div>
      </div>
      <div class="down">
        <button class="aboutMe" role="button">دانلود رزومه</button>
        <button class="aboutMe" role="button" @click="scrollHandler('contactUs')">استخدام من</button>
      </div>
    </div>
    <div id="mySkills" class="justForScroll">

    </div>
    <div class="mySkills">
      <div class="top">
        <h2>مهارت های من</h2>
      </div>
      <div class="mid">
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع گیرد.</p>
      </div>
      <div class="down">
        <div class="skill">
          <div class="top">
            <span>HTML & CSS</span>
            <span>80%</span>
          </div>
          <div class="down">
            <div class="white">
              <div class="yellow eighty"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="top">
            <span>Vue</span>
            <span>30%</span>
          </div>
          <div class="down">
            <div class="white">
              <div class="yellow thirty"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="top">
            <span>طراحی وب</span>
            <span>60%</span>
          </div>
          <div class="down">
            <div class="white">
              <div class="yellow"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="top">
            <span>ادیت و گرافیک</span>
            <span>50%</span>
          </div>
          <div class="down">
            <div class="white">
              <div class="yellow fifty"></div>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="down">
        <div class="top">
          <div class="htmlCss">
            <div class="top">
              <h5>HTML & CSS</h5>
              <span>80%</span>
            </div>
            <div class="down">
              <div class="yellow"></div>
              <div class="white"></div>
            </div>
          </div>
          <div class="vue">
            <div class="top">
              <h5>Vue</h5>
              <span>40%</span>
            </div>
            <div class="down">
              <div class="yellow"></div>
              <div class="white"></div>
            </div>
          </div>
        </div>
        <div class="down">
          <div class="webDesign">
            <div class="top">
              <h5>طراحی وب</h5>
              <span>60%</span>
            </div>
            <div class="down">
              <div class="white">
                <div class="yellow"></div>
              </div>
            </div>
          </div>
          <div class="editGraphics">
            <div class="top">
              <h5>ادیت و گرافیک</h5>
              <span>50%</span>
            </div>
            <div class="down">
              <div class="yellow"></div>
              <div class="white"></div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
    <div class="stats">
      <div class="successfulProjects">
        <div class="icon">
          <i class="fi fi-rr-registration-paper"></i>
        </div>
        <h3>0</h3>
        <span>پروژه های موفق</span>
      </div>
      <div class="cupOfCoffee">
        <div class="icon">
          <i class="fi fi-rr-mug-hot-alt"></i>
        </div>
        <h3>1</h3>
        <span>فنجان قهوه</span>
      </div>
      <div class="happyCustomers">
        <div class="icon">
          <i class="fi fi-rr-grin-alt"></i>
        </div>
        <h3>0</h3>
        <span>مشتریان خوشحال</span>
      </div>
      <div class="awardsWon">
        <div class="icon">
          <i class="fi-rr-hat-winter"></i>
        </div>
        <h3>34</h3>
        <span>جوایز برنده شده</span>
      </div>
    </div>
    <div id="services" class="justForScroll">

    </div>
    <div class="services">
      <div class="top">
        <h2>خدمات</h2>
      </div>
      <div class="down">
        <div>
          <i class="fi fi-rr-globe"></i>
          <h3>طراحی وب</h3>
          <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
        </div>
        <div>
          <i class="fi fi-rr-text"></i>
          <h3>تایپ</h3>
          <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
        </div>
        <div>
          <i class="fi fi-rr-megaphone"></i>
          <h3>تبلیغات</h3>
          <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
        </div>
        <div>
          <i class="fi fi-rr-it-alt"></i>
          <h3>سئو</h3>
          <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
        </div>
        <div>
          <i class="fi fi-rr-copyright"></i>
          <h3>کپی رایت</h3>
          <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
        </div>
        <div>
          <i class="fi-rr-camera"></i>
          <h3>پشتیبانی</h3>
          <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
        </div>
      </div>
    </div>
    <div id="works" class="justForScroll">

    </div>
    <div class="workSamples">
      <div class="top">
        <h2>نمونه کار ها</h2>
      </div>
      <div class="mid">
        <a href="">
          <div class="work">
            <img src="/dist/img/crossstrikethroughdoneyes.jpg" alt="">
          </div>
        </a>
        <a href="">
          <div class="work">
            <img src="/dist/img/crossstrikethroughdoneyes.jpg" alt="">
          </div>
        </a>
        <a href="">
          <div class="work">
            <img src="/dist/img/crossstrikethroughdoneyes.jpg" alt="">
          </div>
        </a>
        <a href="">
          <div class="work">
            <img src="/dist/img/crossstrikethroughdoneyes.jpg" alt="">
          </div>
        </a>
        <a href="">
          <div class="work">
            <img src="/dist/img/crossstrikethroughdoneyes.jpg" alt="">
          </div>
        </a>
        <a href="">
          <div class="work">
            <img src="/dist/img/crossstrikethroughdoneyes.jpg" alt="">
          </div>
        </a>
      </div>
      <div class="down">
        <button class="showMore" role="button">نمایش بیشتر</button>
      </div>
    </div>
    <div id="contactUs" class="justForScroll">

    </div>
    <div class="connection">
      <div class="top">
        <h2>ارتباط</h2>
      </div>
      <div class="mid">
        <div class="nameEmail">
          <div class="name">
            <span>نام و نام خانوادگی</span>
          </div>
          <div class="email">
            <span>ایمیل</span>
          </div>
        </div>
        <div class="subject">
          <span>موضوع</span>
        </div>
        <div class="description">
          <span>پیام ...</span>
        </div>
      </div>
      <div class="down">
        <button class="sendMassage" role="button">ارسال پیام</button>
      </div>
    </div>
  </section>
</section>

</template>

<script setup>
  const scrollHandler = (id) => {
    document.getElementById(id).scrollIntoView({behavior: "smooth"})
  }
</script>

