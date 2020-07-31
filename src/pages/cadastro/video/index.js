import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleOnChange, values } = useForm({
    titulo: 'video padrao',
    url: 'https://www.youtube.com/watch?v=nDkd9bVhmek',
    categoria: 'Swing & BigBand',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de video</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });

          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              history.push('/');
            });
        }}
      >
        <FormField
          label="Título: "
          name="titulo"
          value={values.titulo}
          onChange={handleOnChange}
        />
        <FormField
          label="URL: "
          name="url"
          value={values.url}
          onChange={handleOnChange}
        />
        <FormField
          label="Categoria: "
          name="categoria"
          value={values.categoria}
          onChange={handleOnChange}
          suggestions={categoryTitles}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <br></br>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
