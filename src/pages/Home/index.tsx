import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import md5 from 'md5';
// icons
import { FiPlusCircle } from 'react-icons/fi';
// style
import './style.css';
// services
import api from '../../services/api';
// types
import { IComic } from '../../types/Comic';

const Home: React.FC = () => {
  const [comics, setComics] = useState<IComic[]>([]);
  const comicsRef = useRef<HTMLDivElement>();

  useEffect(() => {
    loadComics();
  }, []);

  const loadComics = async () => {
    const ts = Date.now();
    const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
    const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
    const hash = md5(`${ts}${privateKey}${apiKey}`);

    const response = await api.get('comics', {
      params: {
        apikey: apiKey,
        ts,
        hash,
      },
    });

    const { data: comicData } = response.data;

    setComics(
      comicData.results.map(
        (item: {
          id: number;
          title: string;
          description: string;
          thumbnail: unknown;
          prices: { price: number }[];
          images: unknown;
        }) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          thumbnail: item.thumbnail,
          price: item.prices[0].price,
          images: item.images,
        }),
      ),
    );
  };

  const scrollToSection = (
    section: MutableRefObject<HTMLDivElement | undefined>,
  ) => {
    if (section.current) {
      window.scroll(0, section.current.offsetTop - 120);
    }
  };

  return (
    <div className="home-content">
      <header>
        <div className="header-content">
          <h1>As melhores edições disponíveis para você</h1>
          <h2>
            Encontre em nossa loja os grandes clássicos da Marvel com os
            melhores preços do mercado. Divirta-se com as histórias e sagas dos
            heróis mais famosos mundo.
          </h2>
          <button type="button" onClick={() => scrollToSection(comicsRef)}>
            Explorar quadrinhos
          </button>
        </div>
      </header>

      <main ref={comicsRef as any}>
        <div className="main-title">
          <h3>Encontre aqui as melhores HQ&apos;s</h3>
        </div>
        <ul className="comics">
          {comics.map((comic) => (
            <li key={comic.id} className="comics__item">
              <img
                src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
                alt=""
              />
              <span className="comics__item__title">{comic.title}</span>
              <span
                className={`comics__item__price ${
                  comic.price === 0 ? 'comics__item__price--free' : ''
                }`}
              >
                {comic.price > 0 ? `$${comic.price}` : 'Grátis'}
              </span>

              <button type="button">
                <div className="icon-area">
                  <FiPlusCircle />
                </div>
                Adicionar
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
