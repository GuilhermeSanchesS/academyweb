import React, { useState, useCallback, useEffect } from 'react';
import AppLink from '../AppLink';
import Link from 'next/link';
import { BsSun } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';

import { useTheme } from '../../context/theme';
import { Header, Container, MenuIcon, MenuBar, Access } from './styles';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const { changeTheme, theme, lock } = useTheme();

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
        setTab(0);
        lock(false);
      } else {
        setOpen(!open);
        lock(true);
      }
    },
    [open, lock]
  );

  return (
    <Header>
      <Container tab={tab} isOpen={open}>
        <Link href="/">
          <section>
            {theme === 'dark' ? (
              <img src="https://lh3.googleusercontent.com/63rHC-MNz9v3YX9ds46mD3dd0P0cEaMgd4UzrA9Wa5lIz5pvGm1jW8Id192G2QtaQenms5dv4MZjRfoI2GGg0k4N3kbPEfFnKztAGhbQvikDKKApWzUuLcrGp2AfDuC7kByTxYgVNQKT9nYoJpAu0YZqu_MAIgrsgsRvb9xDIAYQPOZxxOpS3MZ5D4oe2qNX27OgmnV1mhBA5wmnUg2q5J0j3fGWrEIfoCFV19CEex9nQBEedQ4UEIsslh01T88gL-kiHS82H9uKB78tfXRq0IliTLGzJvOz6NZKKCMOH9ZE2ybohj_HqsPF2SVQYod4VhFbcy5WJ3A1-IgsyCTz18h38uTR0BsZqw9ijvn4rlyyeXFzkYY6KYdXq7SLiNWLv6v_3PZmASM2vSyD5qZW7TA22SfbTNK8PS6je4SmmfybtqZEX8kUZ4qyW6Jd_X-KKV5xbaIExpy_7EaVn5rJAtwxN29oETA6wMfEutHefTUS9m2oHuuLe8gZt8OY5Am-kgQyAS9wzExRzmc0q2b6-i-ZFy_gcOj60OZmthys9G88jryFKOL9sm-z77b4PV0xcXxgeASAq-XIH52G6RE-O1hEtU8zeFxF-2Sczj3Iy42ZUxJOaJIi2-6XvV1vgAaBBQL5g9CqaOLYBDU60zUQ_8B7vVNpMrw288wL42mM3jx1GFPqU4uCYH0VMmgKxFIM8hqxkV7jhwYNYSr_wJaKUFzD=w337-h40-no?authuser=0" />
            ) : (
              <img src="https://lh3.googleusercontent.com/85d3Ie2-kS66WlmNZutbbR5kXK9Pheap1XQW7wO2RPpKo7GjgM4ZjixWigxnX7O9Qzj9WpQHhqKhXSIOaswREPFwhHMw7g681PL6se_zS-5wLphi57uvyJybNy-w-erzTZ0BrrUlApUT9jG5zF2muPX0WZ0SI7ZuqIRi_tgFV-yl2qw4dAE7oCpbpEIiO6aFrELNLWtgx_173L0eTUkniapzitXQKuF40lCm-DcNSWU-sIq7-hxTjY3twVUc1ZQ2BOs5T79I397wy-Fx7-_ZSVOWlPa3n-HMO7vVOFenp8SHtpmKz-TBqnCBJxKO8bQ7SZmbFc3aMTxaq-8ho16eg_qQhZ4cqW_H5BX0qMO55NEoDaa8nQtELAPF1O2Xp5SU52VdGbzd1H-9ym0y9sRomY0BULfO_XmDbdA4MDF5JQZrWK1YS3SnoLovMZP7rP_HDa94z7pinGkNMc_dK-1ZFC1HigwoeI4zoUv6vC1eias-yVEkZAc2u376y-JszljvEZ8Hc-M47AA0Ud0ZlkQNtczM8Imd4DyqyieTob2575JwikRIKigLLx7ds0ZI4Z_JzA2tqLyGZnD0J9j8nRVtAY1u2tNDK8EsuCEfEmQ9RVD1wJhfBWlMF_WvqMTKOxcSzgY8c0pAMSIhQnezFQ-SwXh7bavisDEyqdMr23Uaihu_rcEuyVYdjHnfpesToX1bMboZ-wL_ON6wW5hPAmvXgZhT=w352-h53-no?authuser=0" />
            )}
          </section>
        </Link>
        <nav>
          <ul>
            <li>
              <AppLink href="/" label="INÍCIO" />
            </li>
            <li>
              <AppLink href="/academy" label="ACADEMY" />
            </li>
            <li>
              <AppLink href="/about" label="QUEM SOMOS" />
            </li>
            <li>
              {theme === 'dark' ? (
                <BsSun size={26} color="#2823EB" onClick={changeTheme} />
              ) : (
                <FaMoon size={20} color="#FFA900" onClick={changeTheme} />
              )}
            </li>
          </ul>
        </nav>
        <Access>
          <AppLink href="/about" label="CADASTRAR" />

          <Link href="/">
            <button type="button">ENTRAR</button>
          </Link>
        </Access>
        <MenuIcon onClick={(): void => handleOpen()} isOpen={open} tab={tab}>
          <MenuBar />
          <MenuBar />
          <MenuBar />
        </MenuIcon>
      </Container>
    </Header>
  );
};

export default Navbar;
