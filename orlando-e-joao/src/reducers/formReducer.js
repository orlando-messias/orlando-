import { UPDATE_FORM } from '../actions/formActions';

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
    case UPDATE_FORM:
      return { ...state, [action.field]: action.newValue };
    default:
      return state;
  }
}

export default formReducer;
