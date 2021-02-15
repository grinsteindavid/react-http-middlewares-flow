export default {
    request: async ({ options, url, path, route }: any) => {
        let token = Math.random()

        if (isExpired(token)) {
            token = Math.random()
        }
        options.headers.Authorization = `Bearer ${token}`
        return { options, url, path, route }
    }
}

function isExpired(token: number) {
    return token <= 0.5
}