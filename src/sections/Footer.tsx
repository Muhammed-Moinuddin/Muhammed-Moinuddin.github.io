import Link from "next/link";

function Footer() {
  return (
    <footer>
      <Link
        href=""
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Designed and Built by Muhammad Moinuddin.</span>
      </Link>
    </footer>
  );
}

export default Footer;