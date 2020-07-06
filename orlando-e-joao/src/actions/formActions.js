export const ON_CHANGE_NOME = 'ON_CHANGE_NOME';

export function nomeAction(nome) {
    return {
        type: ON_CHANGE_NOME,
        nome
    }
}