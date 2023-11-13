const production = {
    url: 'https://pho-hot-api.onrender.com/pho-hot'
}

const development = {
    url: 'http://localhost:4000/pho-hot'
}

export const config = process.env.NODE_ENV === 'development' ? development : production;