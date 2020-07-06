export const ON_CHANGE_NOME = 'ON_CHANGE_NOME';
export const ON_CHANGE_EMAIL = 'ON_CHANGE_EMAIL';


export function nomeAction(nome) {
    return {
        type: ON_CHANGE_NOME,
        nome,
    }
}

export function emailAction(email) {
    return {
        type: ON_CHANGE_EMAIL,
        email,
    }
}