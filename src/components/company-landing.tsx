import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  Lightbulb,
  MousePointer2,
  Sparkles,
} from "lucide-react";

function LuceMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`luce-mark ${compact ? "compact" : ""}`} aria-hidden="true">
      <i /><i /><i /><i /><i />
    </span>
  );
}

function PixelPuppy({ sleepy = false }: { sleepy?: boolean }) {
  return (
    <svg
      className={`pixel-puppy ${sleepy ? "is-sleepy" : ""}`}
      viewBox="0 0 160 150"
      role="img"
      aria-label={sleepy ? "잠든 픽셀 강아지" : "꼬리를 흔드는 픽셀 강아지"}
      shapeRendering="crispEdges"
    >
      <g className="puppy-tail">
        <rect x="127" y="78" width="17" height="14" fill="#5b3d35" />
        <rect x="137" y="63" width="14" height="20" fill="#bd7659" />
        <rect x="128" y="57" width="14" height="13" fill="#e9a274" />
      </g>
      <g className="puppy-body">
        <rect x="43" y="69" width="82" height="52" rx="5" fill="#d98762" />
        <rect x="55" y="78" width="57" height="43" fill="#eba273" />
        <rect x="49" y="113" width="20" height="23" fill="#5b3d35" />
        <rect x="99" y="113" width="20" height="23" fill="#5b3d35" />
      </g>
      <g className="puppy-head">
        <rect x="34" y="25" width="25" height="32" fill="#8f503f" />
        <rect x="102" y="25" width="25" height="32" fill="#8f503f" />
        <rect x="44" y="32" width="73" height="66" rx="7" fill="#d98762" />
        <rect x="54" y="40" width="53" height="55" fill="#eba273" />
        <rect x="66" y="72" width="31" height="23" fill="#ffe4bd" />
        <g className="puppy-eyes">
          <rect x="61" y="57" width="8" height="10" fill="#332a28" />
          <rect x="94" y="57" width="8" height="10" fill="#332a28" />
        </g>
        <rect x="77" y="72" width="10" height="8" fill="#332a28" />
        <rect x="81" y="80" width="4" height="7" fill="#332a28" />
        <rect x="85" y="84" width="10" height="4" fill="#332a28" />
      </g>
      <rect x="37" y="88" width="88" height="8" fill="#f26b55" />
      <rect x="77" y="93" width="12" height="13" fill="#ffd55a" />
      {!sleepy && (
        <g className="puppy-heart" fill="#f26b55">
          <rect x="17" y="53" width="8" height="8" />
          <rect x="29" y="53" width="8" height="8" />
          <rect x="17" y="61" width="20" height="8" />
          <rect x="21" y="69" width="12" height="8" />
          <rect x="25" y="77" width="4" height="4" />
        </g>
      )}
    </svg>
  );
}

const values = [
  {
    number: "01",
    title: "작게 발견합니다.",
    english: "NOTICE THE LITTLE THINGS",
    copy: "무심코 지나치는 순간을 오래 바라봅니다. 좋은 제품의 시작은 작지만 분명한 관찰이라고 믿습니다.",
  },
  {
    number: "02",
    title: "따뜻하게 만듭니다.",
    english: "DESIGN WITH WARMTH",
    copy: "기술을 앞세우기보다 사람이 편안하게 느끼는 흐름, 표정, 한 문장을 먼저 생각합니다.",
  },
  {
    number: "03",
    title: "오래 다듬습니다.",
    english: "POLISH EVERY PIXEL",
    copy: "한 번의 반응과 한 픽셀의 차이까지 살핍니다. 작은 디테일이 결국 제품의 인상을 만듭니다.",
  },
];

const process = [
  ["01", "NOTICE", "일상에서 놓치기 쉬운 작은 불편과 기쁨을 발견합니다."],
  ["02", "SHAPE", "핵심 경험이 또렷해질 때까지 아이디어의 모양을 잡습니다."],
  ["03", "PLAY", "직접 만지고 움직여 보며 자연스러운 리듬을 찾아갑니다."],
  ["04", "POLISH", "출시 뒤에도 관찰하고, 더 다정한 경험으로 다듬습니다."],
];

export function CompanyLanding() {
  return (
    <div className="luce-site" id="top">
      <a className="skip-link" href="#main">본문으로 건너뛰기</a>

      <header className="site-header">
        <div className="site-container header-inner">
          <a className="brand" href="#top" aria-label="LUCE 홈">
            <LuceMark compact />
            <span>LUCE</span>
            <small>DIGITAL PRODUCT STUDIO</small>
          </a>
          <nav aria-label="주요 메뉴">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#way">Our way</a>
          </nav>
          <a className="header-cta" href="#direction">
            LUCE 알아보기 <ArrowDownRight size={15} />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero site-container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow"><i /> SMALL IDEAS, WARM TECHNOLOGY</span>
            <h1 id="hero-title">작은 즐거움이<br />오래 <span>빛나도록.</span></h1>
            <p>LUCE는 기술에 온기를 더해<br />일상에 자연스럽게 머무는 디지털 경험을 만듭니다.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                우리가 만드는 것 <ArrowRight size={18} />
              </a>
              <a className="text-link" href="#about">
                LUCE의 생각 <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="hero-note">
              <span className="mini-puppy"><PixelPuppy sleepy /></span>
              <p>작은 아이디어도 오래 바라보면<br /><b>누군가의 다정한 하루가 됩니다.</b></p>
              <Sparkles size={18} />
            </div>
          </div>

          <div className="hero-visual" role="img" aria-label="LUCE가 만든 디지털 공간에서 픽셀 강아지가 빛을 바라보는 모습">
            <span className="visual-sticker">MADE WITH<br /><b>WARM HEART</b></span>
            <div className="studio-window">
              <div className="window-top">
                <span className="window-dots"><i /><i /><i /></span>
                <span>luce.lab / a little light</span>
                <span className="window-plus">+</span>
              </div>
              <div className="window-scene">
                <div className="pixel-sun"><i /><i /><i /><i /></div>
                <div className="cloud cloud-one" />
                <div className="cloud cloud-two" />
                <span className="scene-label"><i /> TODAY&apos;S LITTLE JOY</span>
                <span className="speech">오늘도 같이 만들자!<i /></span>
                <div className="puppy-stage"><PixelPuppy /></div>
                <div className="pixel-grass grass-one" />
                <div className="pixel-grass grass-two" />
                <div className="pixel-flower flower-one" />
                <div className="pixel-flower flower-two" />
                <span className="coordinates">37°N · WARM &amp; BRIGHT</span>
              </div>
              <div className="window-bottom">
                <span><Heart size={13} fill="currentColor" /> HUMAN FIRST</span>
                <span>DETAILS MATTER</span>
                <span><Check size={13} /> BUILT WITH CARE</span>
              </div>
            </div>
            <div className="floating-card card-cursor"><MousePointer2 size={18} fill="currentColor" /><span>반응하는 순간</span></div>
            <div className="floating-card card-idea"><Lightbulb size={18} /><span>작은 아이디어</span></div>
          </div>
        </section>

        <div className="message-strip" aria-hidden="true">
          <div>
            <Sparkles size={15} />
            <span>WE MAKE DIGITAL MOMENTS FEEL ALIVE</span><i>✦</i>
            <span>작은 순간을 살아 있게</span><Heart size={15} fill="currentColor" />
            <span>TECHNOLOGY WITH A WARM HEART</span><i>✦</i>
            <span>오래 곁에 두고 싶은 경험</span>
          </div>
        </div>

        <section className="about site-container" id="about" aria-labelledby="about-title">
          <div className="about-intro">
            <div className="section-label"><span>01</span><p>ABOUT LUCE</p></div>
            <div className="about-copy">
              <span className="dictionary">LUCE <i>[luːtʃe]</i> — LIGHT</span>
              <h2 id="about-title">기술은 조용하게,<br />경험은 <em>선명하게.</em></h2>
              <div className="about-paragraphs">
                <p>
                  LUCE는 사람의 일상 가까이에서 빛나는 제품을 만드는 작은 디지털 프로덕트 스튜디오입니다.
                  복잡한 기술을 앞에 내세우기보다, 누군가가 웃고 편안해지는 순간에 집중합니다.
                </p>
                <p>
                  이름처럼 거창한 조명보다는 책상 한편의 작은 불빛이고 싶습니다. 매일 다시 찾게 되는 이유를
                  섬세하게 만들고, 그 경험이 오래 머물도록 끝까지 다듬습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span className="value-number">{value.number}</span>
                <div className="value-icon" aria-hidden="true"><i /><i /><i /></div>
                <small>{value.english}</small>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="site-container">
            <div className="section-heading">
              <div className="section-label"><span>02</span><p>OUR WORK</p></div>
              <div>
                <h2 id="work-title">우리의 첫 번째 작은 빛.</h2>
                <p>일상에 자연스럽게 스며드는 경험을 제품으로 증명합니다.</p>
              </div>
            </div>

            <article className="project-card">
              <div className="project-art">
                <span className="project-index">LUCE PRODUCT · 01</span>
                <div className="desktop-frame">
                  <div className="desktop-bar"><span><i /><i /><i /></span><b>MY DESKTOP</b></div>
                  <div className="desktop-wallpaper">
                    <span className="desktop-greeting">오늘도 네 곁에 있을게!</span>
                    <div className="desktop-puppy"><PixelPuppy /></div>
                    <span className="cursor-path" aria-hidden="true">· · · · ·</span>
                    <MousePointer2 className="desktop-cursor" size={27} fill="white" />
                    <span className="desktop-time">10:24</span>
                  </div>
                </div>
                <span className="project-caption"><i /> YOUR LITTLE PIXEL COMPANION</span>
              </div>

              <div className="project-copy">
                <span className="project-kicker">PUPPYRUBY · 퍼피루비</span>
                <h3>화면 위를 산책하는<br />나만의 작은 친구.</h3>
                <p>
                  마우스 움직임, 클릭, 타이핑에 반응하는 픽셀 강아지입니다. 다른 일을 하는 순간에도 방해하지
                  않고 조용히 곁을 지키며 평범한 화면에 작고 귀여운 리듬을 더합니다.
                </p>
                <ul>
                  <li><Check size={14} /> 움직임에 반응하는 인터랙션</li>
                  <li><Check size={14} /> 취향대로 고르는 픽셀 친구</li>
                  <li><Check size={14} /> 입력 내용을 기록하지 않는 설계</li>
                </ul>
                <div className="project-signoff">
                  <span>FROM A TINY PIXEL,<br /><b>TO A DAILY COMPANION.</b></span>
                  <Heart size={21} fill="currentColor" />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="way site-container" id="way" aria-labelledby="way-title">
          <div className="way-heading">
            <div className="section-label"><span>03</span><p>HOW WE WORK</p></div>
            <div>
              <span className="eyebrow"><i /> OUR QUIET WAY OF MAKING</span>
              <h2 id="way-title">서두르지 않고,<br />좋은 이유를 쌓아갑니다.</h2>
            </div>
          </div>

          <ol className="process-list">
            {process.map(([number, title, copy]) => (
              <li key={number}>
                <span className="process-number">{number}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
                <ArrowDownRight size={20} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>

        <section className="direction" id="direction" aria-labelledby="direction-title">
          <div className="site-container direction-inner">
            <div className="direction-doodle" aria-hidden="true">
              <span className="doodle-ray ray-one" />
              <span className="doodle-ray ray-two" />
              <span className="doodle-ray ray-three" />
              <PixelPuppy />
            </div>
            <div className="direction-copy">
              <span className="eyebrow"><i /> NEXT LITTLE LIGHT</span>
              <h2 id="direction-title">작고 분명한 행복을<br />계속 만들겠습니다.</h2>
              <p>첫 번째 제품 PuppyRuby에서 시작해,<br />매일의 표정을 조금 더 밝히는 경험으로 나아갑니다.</p>
            </div>
            <a className="round-link" href="#top" aria-label="페이지 맨 위로">
              <ArrowUpRight size={25} />
              <span>BACK TO<br />THE LIGHT</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <a className="brand footer-brand" href="#top" aria-label="LUCE 홈">
            <LuceMark compact /><span>LUCE</span>
          </a>
          <p>Technology with a warm heart.</p>
          <span>© LUCE. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </div>
  );
}
