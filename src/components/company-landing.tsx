import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { brands } from "@/lib/brands";

export function CompanyLanding() {
  return (
    <div className="luce-site" id="top">
      <a className="skip-link" href="#main">본문으로 건너뛰기</a>

      <header className="site-header site-container">
        <a className="wordmark" href="#top" aria-label="LUCE 홈">luce.</a>
        <a className="contact-link" href="mailto:wings2530@gmail.com">
          문의하기 <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>

      <main className="site-container" id="main" tabIndex={-1}>
        <div className="page-intro">
          <h1>우리의 서비스를 소개합니다.</h1>
          <p>LUCE가 운영하는 네 가지 서비스를 만나보세요.</p>
        </div>

        <section className="project-grid" aria-label="LUCE의 서비스">
          {brands.map((brand, index) => (
            <article className="project" key={brand.id}>
              <a
                className="project-link"
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-labelledby={`${brand.id}-title`}
                aria-describedby={`${brand.id}-description ${brand.id}-new-tab`}
              >
                <div className="project-image">
                  <Image
                    src={brand.image}
                    alt={brand.imageAlt}
                    width={1280}
                    height={800}
                    loading={index < 2 ? "eager" : "lazy"}
                    unoptimized
                  />
                </div>
                <div className="project-info">
                  <div className="project-heading">
                    <h2 id={`${brand.id}-title`}>{brand.name}</h2>
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </div>
                  <p id={`${brand.id}-description`}>{brand.description}</p>
                  <span className="project-domain">{brand.domain}</span>
                  <span className="sr-only" id={`${brand.id}-new-tab`}>새 탭에서 열립니다.</span>
                </div>
              </a>
            </article>
          ))}
        </section>
      </main>

      <footer className="site-footer site-container">
        <span>© {new Date().getFullYear()} LUCE</span>
      </footer>
    </div>
  );
}
