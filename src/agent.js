import { useDispatch } from "react-redux";
import API from "./Network/API";
import { FETCH_ERROR, FETCH_SUCCESS } from "./reducers/homeReducer";

const limit = (count) => `page=${count}`;

const Articles = {
    all: (page,dispatch) =>
    API.get(`/post_syncs?${limit(20, page)}`).then(response => {
        dispatch(FETCH_SUCCESS(response.data.data));
    }).catch((error) => {
        dispatch(FETCH_ERROR());
    })
}


const Comments = {
    create: (slug, comment) =>
    API.post(`/articles/${slug}/comments`, { comment }),
    delete: (slug, commentId) =>
    API.delete(`/articles/${slug}/comments/${commentId}`),
    forArticle: slug =>
    API.get(`/articles/${slug}/comments`)
  };


const Notification = {
    all: page =>
    API.get(`/post_syncs?page=${page}`),
}

const Auth = {
    current: () =>
        API.get('/user'),
    login: (email, password) =>
        API.post('/users/login', { user: { email, password } }),
    register: (username, email, password) =>
        API.post('/users', { user: { username, email, password } }),
    save: user =>
        API.put('/user', { user })
};

export default {
    Auth,
    Articles,
    Notification,
    Comments,
};