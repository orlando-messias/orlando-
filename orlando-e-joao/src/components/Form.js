import React from 'react';
import { connect } from 'react-redux';
import * as formActions from '../actions/formActions';

const Form = ({ changeNome, changeEmail }) => {
  return (
    <form>
      <fieldset>
        <legend>Form</legend>

        <label htmlFor="Nome">Nome</label>
        <input
          id="Nome"
          type="text"
          required
          maxLength="40"
          size="40"
          onChange={(event) => changeNome(event.target.value)}
        />
        <label htmlFor="nome">Email</label>
        <input
          id="Email"
          type="email"
          maxLength="50"
          size="50"
          onChange={(event) => changeEmail(event.target.value)}
        />
        <label htmlFor="CPF">CPF</label>
        <input id="CPF" type="number" maxLength="11" size="11" />
        <label htmlFor="Endereço">Endereço</label>
        <input id="Endereço" type="text" maxLength="200" />
        <label htmlFor="Cidade">Cidade</label>
        <input id="Cidade" type="text" maxLength="28" size="28" />
        <label htmlFor="Estado">Estado</label>
        <select id="Estado">
          <option value="MG">MG</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
          <option value="BA">BA</option>
        </select>
        <label htmlFor="Tipo">Tipo</label>
        <input id="Tipo" type="text" maxLength="40" size="40" />
      </fieldset>
      <fieldset>
        <label htmlFor="Resumo">Resumo</label>
        <textarea id="Resumo" type="text" maxLength="1000" />
        <label htmlFor="Cargo">Cargo</label>
        <textarea id="Cargo" type="text" maxLength="40" />
        <label htmlFor="Descricao">Descricao</label>
        <input id="Descricao" type="text" maxLength="500" />
      </fieldset>

      <button>Enviar Formulário</button>
    </form>
  );
};

// const mapStateToProps = (state) => ({
//   nome: state.formReducer.nome,
// });

const mapDispatchToProps = (dispatch) => {
  return {
    changeNome: (nome) => dispatch(formActions.nomeAction(nome)),
    changeEmail: (email) => dispatch(formActions.emailAction(email)),

  };
};

export default connect(null, mapDispatchToProps)(Form);
