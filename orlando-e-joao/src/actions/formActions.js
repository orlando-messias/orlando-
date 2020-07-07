export const UPDATE_FORM = 'UPDATE_FORM';
export const ON_CHANGE_EMAIL = 'ON_CHANGE_EMAIL';


export function nomeAction(field, newValue) {
    return {
        type: UPDATE_FORM,
        field,
        newValue,
    }
}