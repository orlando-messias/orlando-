import { ON_CHANGE_NOME, ON_CHANGE_EMAIL } from '../actions/formActions';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereço: '',
  cidade: '',
  estado: '',
  tipo: '',
  resumo: '',
  cargo: '',
  descricao: '',
};

function formReducer(state = INITIAL_STATE, action) {
  // console.log(state)
  switch (action.type) {
    case ON_CHANGE_NOME:
      return { ...state, nome: action.nome };
    case ON_CHANGE_EMAIL:
      return { ...state, email: action.email };
    default:
      return state;
  }
}

export default formReducer;
