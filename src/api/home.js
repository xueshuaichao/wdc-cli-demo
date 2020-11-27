/**
 * @file
 * @author tanghao
 * @date 2018/8/11
 */

import { axios } from '../libs/axios';

export default {
    home(data) {
        return axios.post('home', data);
    },
};
