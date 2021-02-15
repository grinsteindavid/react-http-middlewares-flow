import React, { useState, useEffect } from 'react';
import { fetchProducts } from 'api/products';
import useFetch from 'use-http';

interface IPost {
    id: number,
    title: string,
    body: string
}
export default function DemoPage() {
    const [products, setProducts] = useState<IPost[]>([])
    const { get, abort, response, error, loading, data } = useFetch(fetchProducts.url, fetchProducts.config)

    useEffect(() => {
        setTimeout(async () => {
            const responseWithProducts = await get()
            if (response.ok) {
                setProducts(responseWithProducts)
            }
        }, 1000)
    }, [])

    return (
        <div></div>
    );
}
