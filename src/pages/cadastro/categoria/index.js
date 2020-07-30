import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleOnChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';

    fetch(URL).then(async (res) => {
      const resposta = await res.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([...categorias, values]);

          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleOnChange}
        />
        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleOnChange}
        />
        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleOnChange}
        />
        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((categoria) => {
          return <li key={`${categoria.nome}`}>{categoria.nome}</li>;
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
