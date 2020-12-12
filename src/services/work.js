import Request from './request';

export const getWorks = async() => {
    const url = 'localhost:8080';
    const response = await Request.onRequestGet({ url });

    return response;
};

export const getWork = async({ id }) => {
    const url = id => 'localhost:8080' + id;
    const response = await Request.onRequestGet({ url });

    return response;
}

export const createWorks = async({ }) => {

}

export const updateWorks = async({ }) => {

}

export const deleteWorks = async({ }) => {

}
