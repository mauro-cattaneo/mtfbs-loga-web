import Social from "./Social";

const CopyrightFooter = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box">
          <div className="copyright-text">
            © {new Date().getFullYear()} Demo Loga web portal by{" "}
            <a
              href="https://mtfbs.com/soluzioni/gestione-risorse-umane"
              target="_blank"
              rel="noopener noreferrer"
            >
              mtfbs/dev
            </a>
            . All Right Reserved.
          </div>
          <div className="social-links">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
