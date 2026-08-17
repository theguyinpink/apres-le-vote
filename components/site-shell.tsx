import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Après le vote, accueil">
        <span>APRÈS</span>
        <span>LE VOTE</span>
      </Link>
      <nav aria-label="Navigation principale">
        <Link href="/#scenarios">Scénarios</Link>
        <Link href="/#methode">Méthode</Link>
        <a href="https://www.insee.fr/" target="_blank" rel="noreferrer">Données</a>
      </nav>
      <span className="edition-pill">Présidentielle 2027</span>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="wordmark wordmark-footer" href="/">
          <span>APRÈS</span>
          <span>LE VOTE</span>
        </Link>
        <p>Comprendre ce qu’un bulletin peut vraiment déclencher.</p>
      </div>
      <div className="footer-meta">
        <div className="footer-credit-block">
          <a
            className="footer-credit"
            href="https://maisonclm.fr"
            target="_blank"
            rel="noreferrer"
            aria-label="Après le vote est conçu et développé par Maison CLM"
          >
            Après le vote est conçu et développé par Maison CLM
          </a>
          <a
            className="footer-credit-mark"
            href="https://maisonclm.fr"
            target="_blank"
            rel="noreferrer"
            aria-label="Maison CLM"
          >
            <Image
              src="/maison-clm-logo.webp"
              alt="Maison CLM"
              width={220}
              height={220}
              className="footer-credit-logo"
              unoptimized
            />
          </a>
        </div>
        <span>Projet indépendant · France · 2027</span>
        <span>Les projections ne sont ni des prédictions ni des consignes de vote.</span>
      </div>
    </footer>
  );
}
