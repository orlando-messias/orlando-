import { ON_CHANGE_NOME } from '../actions/formActions';

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
  switch (action.type) {
    case ON_CHANGE_NOME:
      return { ...state, nome: action.nome };
    default:
      return state;
  }
}

export default formReducer;
