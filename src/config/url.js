const URL = {
    development: {
        API: '/api',
    },

    production: {
        API: '/api',
    },
};

export default URL[process.env.NODE_ENV];
