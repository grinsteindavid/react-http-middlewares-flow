export const fetchProducts = {
    url: '/products',
    config(globalOptions: any) {
        globalOptions.headers.test = Math.random()

        return globalOptions
    }
}