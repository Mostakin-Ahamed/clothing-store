import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://clothing-store-server-neon.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;