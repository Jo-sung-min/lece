import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { brands } from "@/lib/brands";
import { business } from "@/lib/business";
import { BusinessFooter } from "@/components/business-footer";
import { ScrollExperience } from "@/components/scroll-experience";

export function CompanyLanding() {
  return (
    <ScrollExperience>
      <a className="skip-link" href="#main">본문으로 건너뛰기</a>
      <header className="site-header">
        <div className="site-container header-inner">
          <a className="wordmark" href="#top" aria-label="LUCE 홈">luce.</a>
          <nav className="chapter-nav" aria-label="서비스 바로가기">
            {brands.map((brand, index) => (
              <a href={`#${brand.id}`} data-chapter-link={brand.id} key={brand.id} aria-label={`${brand.korean} 소개로 이동`}>
                <span className="nav-number">0{index + 1}</span><span>{brand.name}</span>
              </a>
            ))}
          </nav>
          <a className="contact-link" href={`mailto:${business.email}`}>문의하기 <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="reading-progress" aria-hidden="true" />
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="site-container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> A LITTLE MORE POSSIBILITY</p>
              <h1 id="hero-title">일상을 넓히는<br /><span>네 가지 가능성.</span></h1>
              <p className="hero-description">나를 알아가고, 새로운 일을 만나고,<br />취향을 발견하고, 마음을 나누는 곳.<br /><strong>LUCE가 만드는 일상입니다.</strong></p>
              <a className="explore-link" href="#fatell">우리의 서비스 만나보기 <span><ArrowDown size={18} aria-hidden="true" /></span></a>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="hero-orbit" />
              <div className="hero-art-word">luce.</div>
              <div className="hero-screens">
                {brands.map((brand, index) => (
                  <div className={`hero-screen hero-screen-${index + 1}`} key={brand.id}>
                    <Image src={brand.image} alt="" width={1280} height={800} unoptimized loading="eager" />
                    <span>{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-bottom">
              <span>서로 다른 서비스, 하나의 루체</span>
              <span>SCROLL TO EXPLORE <ArrowDown size={13} aria-hidden="true" /></span>
            </div>
          </div>
        </section>

        <div className="chapters">
          {brands.map((brand, index) => (
            <section className={`brand-chapter theme-${brand.id}`} id={brand.id} key={brand.id} data-chapter aria-labelledby={`${brand.id}-title`}>
              <div className="chapter-stage">
                <div className="chapter-watermark" aria-hidden="true">{brand.name}</div>
                <div className="site-container chapter-inner">
                  <div className="chapter-topline"><span>0{index + 1} <i>/</i> 04</span><span>{brand.category}</span></div>
                  <div className="chapter-content">
                    <div className="chapter-copy">
                      <p className="chapter-brand">{brand.name}<span>{brand.korean}</span></p>
                      <h2 id={`${brand.id}-title`}>{brand.headline.map((line) => <span key={line}>{line}</span>)}</h2>
                      <p className="chapter-description">{brand.description}</p>
                      <ul className="chapter-features" aria-label={`${brand.korean} 주요 서비스`}>
                        {brand.features.map((feature) => <li key={feature}>{feature}</li>)}
                      </ul>
                      <a className="visit-link" href={brand.url} target="_blank" rel="noopener noreferrer">
                        <span>{brand.korean} 둘러보기</span><ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (새 탭에서 열림)</span>
                      </a>
                    </div>
                    <div className="chapter-visual">
                      <div className="visual-orbit orbit-one" aria-hidden="true" /><div className="visual-orbit orbit-two" aria-hidden="true" />
                      <a className="browser-frame" href={brand.url} target="_blank" rel="noopener noreferrer" aria-label={`${brand.korean} 사이트 방문 (새 탭)`}>
                        <div className="browser-bar" aria-hidden="true"><span className="browser-dots"><i /><i /><i /></span><span>{brand.domain}</span><ArrowUpRight size={12} /></div>
                        <div className="browser-screen"><Image src={brand.image} alt={brand.imageAlt} width={1280} height={800} loading={index === 0 ? "eager" : "lazy"} unoptimized /></div>
                      </a>
                    </div>
                  </div>
                  <div className="chapter-bottom">
                    <span>LUCE SERVICE <b>0{index + 1}</b></span>
                    <a href={index < brands.length - 1 ? `#${brands[index + 1].id}` : "#contact"}>
                      {index < brands.length - 1 ? `다음 이야기 · ${brands[index + 1].korean}` : "루체와 연결하기"}<ArrowDown size={14} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <BusinessFooter />
    </ScrollExperience>
  );
}
