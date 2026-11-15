import { ArrowUpRight } from "lucide-react";
import { business } from "@/lib/business";

export function BusinessFooter() {
  return (
    <footer className="business-footer" id="contact" aria-label="루체 사업자 정보">
      <div className="site-container">
        <div className="footer-top">
          <a className="footer-wordmark" href="#top" aria-label="LUCE 맨 위로">
            luce.
          </a>
          <a className="footer-contact" href={`mailto:${business.email}`}>
            함께 이야기해요 <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>

        <dl className="business-details">
          <div className="business-field">
            <dt>상호명</dt>
            <dd>{business.name}</dd>
          </div>
          <div className="business-field">
            <dt>대표자</dt>
            <dd>{business.representative}</dd>
          </div>
          <div className="business-field">
            <dt>사업자등록번호</dt>
            <dd>{business.registrationNumber}</dd>
          </div>
          <div className="business-field">
            <dt>통신판매업신고번호</dt>
            <dd>{business.commerceRegistrationNumber}</dd>
          </div>
          <div className="business-field business-field-wide">
            <dt>사업장 주소</dt>
            <dd>{business.address}</dd>
          </div>
          <div className="business-field">
            <dt>전화</dt>
            <dd><a href={business.phoneHref}>{business.phone}</a></dd>
          </div>
          <div className="business-field">
            <dt>이메일</dt>
            <dd><a href={`mailto:${business.email}`}>{business.email}</a></dd>
          </div>
        </dl>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} LUCE. All rights reserved.</small>
          <a href="#top">맨 위로 ↑</a>
        </div>
      </div>
    </footer>
  );
}
