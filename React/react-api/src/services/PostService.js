import axios from 'axios';


const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getPosts = async () => {
    const response = await api.get('/posts');
    return response.data;
};

const deletePost = (id) => api.delete(`/posts/${id}`)

const createPost = (post) => api.post("/posts",post);

const updatePost = (id, post) => api.put(`/posts/${id}`,post);



export{ getPosts, deletePost, createPost, updatePost};

