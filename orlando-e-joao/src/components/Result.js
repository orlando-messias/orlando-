import React, { Component } from 'react';
import { connect } from 'react-redux';

const Result = ({ nome, email }) => {
  return (
    <div>
      <h3>{`Nome: ${nome}`}</h3>
      <h3>{`Email: ${email}`}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    nome: state.formReducer.nome,
    email: state.formReducer.email,
  };
};

export default connect(mapStateToProps)(Result);
