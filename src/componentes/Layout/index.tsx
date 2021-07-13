import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LayoutElement from '../../styles/LayoutElement';

interface LayoutProps {
  pageTitle: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  description = 'Smart Descison Consulter',
  children,
}) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@guilherme" key="twhandle" />
        <link
          rel="shortcut icon"
          href="https://lh3.googleusercontent.com/9QtWRn4FMr5aoJzbWT-vTQovqmmaUpHhdRwrU8Uc5-Z87Zc8Jsb8XHnm5B4ZPwsJ2em3cYixlnIXwqChWWOYKfXchXobcLGZHvoQ88a4uKEOu4AnIIdxKDl7m_VqH6nDeglWz0mnDUKWar-rfSE8w8fo7n35Ekpz2auf6atMkZiwB7dbzQnWDvwA3aDZb_d6lTfID1xq1YCDa12mLsLPwV_N7AeHkf1KMkietRSFcd1gp6BFLBGlD0wUSiw10vcLw92tS5T6DofipEqgVEqAfeQht0a6pOoUS1Vg_PrEF6pqJwe9o8VASnIqnQOCsE3vyyPrKiKw5o1L35udCb3gk0Y0OtyEh79BahSqx5uDTX5lfyRBJ-mef1D2q9NSb0BRea5puZxSYEbIvg21IBUjQebEPAucYnav5upa-H6CWfvtJ1qqb7qx54gOLOphB1UUxJq2aN7MHE1n8g2tOTBl02StSJHUuqzEJN6cDU64IOPE-2YENR1awuFn8vsJyj0SNlzao0Xkw_3WuLlUn5a2U3WUCM2BshjwyvBe1Xi0rA-QMY2Jab9OhQDoxd9vlCj0C7IMATESD5-fIxuZihUl5W9tzWQcCWFWR9jij-DMcRVBiW0TJdpFWCIVKw4Qt0aIZYehxQh9oHyx8ihJQqpalLqaIcp7SVmHvO_-bu4T-oR2pcUdc5fScFKkNuAXel4OtDUNrSyO5TjXH35gvCM-T9-L=w40-h38-no?authuser=0"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Raleway:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <title>SDCAcademY | {pageTitle}</title>
      </Head>
      <LayoutElement>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </LayoutElement>
    </>
  );
};

export default Layout;
