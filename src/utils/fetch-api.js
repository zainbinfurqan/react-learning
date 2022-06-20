

const baseURL = ""

const helpers = {};

// ?can this method be more generic? 
/** * @param path    */
/** * @param method    */
/** * @param body    */
/** * @param authorization    */
/** * @param url    */
export const fetchApi = async function (path, method, body, authorization, url) {
    try {
        let apiUrl = url;

        if (!apiUrl) {
            apiUrl = baseURL + path;
        }
        const headers = {};
        const options = {
            method,
            headers,
        };

        if (authorization) {
            headers.authorization = 'Bearer ' + authorization;
        }

        if (method !== 'GET') {
            headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(body);
        }

        const response = await fetch(apiUrl, options);
        const json = await response.json();

        if (response.status !== 200) {
            throw new Error(json.message);
        }

        return json;
    } catch (e) {
        throw e;
    }
};

export default helpers;
