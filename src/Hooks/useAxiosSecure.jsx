import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://clothing-store-server-neon.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;