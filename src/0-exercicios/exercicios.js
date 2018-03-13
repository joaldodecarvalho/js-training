import Pessoa from '../10-classes/pessoa';

export const mergeObjects = (obj1, obj2) => {

    const result = {};
    Object.keys(obj1).forEach(key => result[key] = obj1[key]);
    Object.keys(obj2).forEach(key => result[key] = obj2[key]);

    return result;
}

export const mergeArrays = (array1, array2) => {

    const result = [];
    array1.forEach(attr => result.push(attr));
    array2.forEach(attr => result.push(attr));

    return result;
}

export const extractFields = (obj, ...fields) => {

    return Object.keys(obj)
        .filter(k => fields.includes(k))
        .reduce((a, k) => { a[k] = obj[k]; return a; }, {})
}

export const getPessoaCallback = (api, functionSuccess, functionError) => {

    if (api === '/api/pessoa') {
        return functionSuccess(new Pessoa('Joaldo de Carvalho', '000.000.000-00'));
    } else {
        return functionError(new Error('Oooops!'))
    }

};

export const getPessoaPromisse = api => new Promise((resolve, reject) => {

    if (api === '/api/pessoa') {
        return resolve(new Pessoa('Joaldo de Carvalho', '000.000.000-00'));
    } else {
        return reject(new Error('Oooops!'))
    }

});