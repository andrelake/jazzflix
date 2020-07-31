import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  //http://localhost:8080/categorias?_embed=videos
  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && <div>Loading...</div>}

      {dadosIniciais.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={
                  'De onde vem e como se originou esse estilo tão aclamado por músicos do mundo todo.'
                }
              ></BannerMain>
              <Carousel ignoreFirstVideo category={dadosIniciais[0]}></Carousel>
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria}></Carousel>;
      })}

      {/* {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription={
              'De onde vem e como se originou esse estilo tão aclamado por músicos do mundo todo.'
            }
          ></BannerMain>
          <Carousel ignoreFirstVideo category={dadosIniciais[0]}></Carousel>
        </>
      )} */}
      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          'De onde vem e como se originou esse estilo tão aclamado por músicos do mundo todo.'
        }
      ></BannerMain>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      ></Carousel>
      <Carousel category={dadosIniciais.categorias[1]}></Carousel>
      <Carousel category={dadosIniciais.categorias[2]}></Carousel>
      <Carousel category={dadosIniciais.categorias[3]}></Carousel>
      <Carousel category={dadosIniciais.categorias[4]}></Carousel>
      <Carousel category={dadosIniciais.categorias[5]}></Carousel> */}
    </PageDefault>
  );
}

export default Home;
