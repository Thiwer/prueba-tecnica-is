import Repository from '../repository'

const resource = 'planets'

export default {
    async getPaged(page, search) {
        let endpoint = `${resource}?page=${page}`;
        if (search !== undefined && search !== '') {
            endpoint += `&search=${search}`;
        }
        let response = await Repository.get(endpoint);
        return response;
    },
    async getItem(id) {
        let endpoint = `${resource}/${id}`;
        let response = await Repository.get(endpoint);
        return response;
    }

}