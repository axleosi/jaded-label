'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


type Collection = {
    _id: string;
    name: string;
};

type Product = {
    _id: string;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    stock?: string;
    collections: Collection[];
    category: Category;
};


type Category = {
    _id: string;
    name: string;
};



type ProductInput = {
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    stock?: string;
    collections: string[];
    category: string;
};



const emptyProductInput: ProductInput = {
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    stock: '',
    collections: [],
    category: ''
};

export default function AdminDashboard() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [collections, setCollections] = useState<Collection[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [form, setForm] = useState<ProductInput>(emptyProductInput);
    const [error, setError] = useState<string>('');

    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

    const fetchData = async () => {
        try {
            const [prodRes, catRes, colRes] = await Promise.all([
                axios.get('http://localhost:3000/api/product'),
                axios.get('http://localhost:3000/api/category'),
                axios.get('http://localhost:3000/api/collections'),
            ]);
            setProducts(prodRes.data.products || prodRes.data);
            setCategories(catRes.data);
            setCollections(colRes.data);
            setError('');
        } catch (err) {
            setError('Failed to load data');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    useEffect(() => {
        if (editingProduct) {
            setForm({
                name: editingProduct.name || '',
                description: editingProduct.description || '',
                price: editingProduct.price,
                imageUrl: editingProduct.imageUrl || '',
                stock: editingProduct.stock || '',
                category: editingProduct.category._id,
                collections: editingProduct.collections.map(col => col._id)
            });
        } else {
            setForm(emptyProductInput);
        }
    }, [editingProduct]);


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const target = e.target;

        // If the element is a select and supports multiple
        if (target instanceof HTMLSelectElement && target.multiple) {
            const selectedValues = Array.from(target.selectedOptions).map(option => option.value);
            setForm(prev => ({ ...prev, [target.name]: selectedValues }));
        } else if (target.type === 'number') {
            setForm(prev => ({ ...prev, [target.name]: Number(target.value) }));
        } else {
            setForm(prev => ({ ...prev, [target.name]: target.value }));
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!token) {
            setError('Unauthorized. Please login.');
            return;
        }
        if (!form.name || form.price <= 0) {
            setError('Name and price are required and price must be > 0.');
            return;
        }

        try {
            if (editingProduct) {
                // Update existing product
                await axios.put(
                    `http://localhost:3000/api/product/${editingProduct._id}`,
                    form,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            } else {
                // Create new product
                await axios.post(
                    `http://localhost:3000/api/product`,
                    form,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            }
            setEditingProduct(null);
            setForm(emptyProductInput);
            fetchData();
            setError('');
        } catch (err) {
            setError('Failed to save product');
        }
    };

    // Delete product
    const handleDelete = async (id: string) => {
        if (!token) {
            setError('Unauthorized. Please login.');
            return;
        }
        try {
            await axios.delete(`http://localhost:3000/api/product/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchData();
            setError('');
        } catch (err) {
            setError('Failed to delete product');
        }
    };

    // Start editing a product
    const handleEdit = (product: Product) => {
        setEditingProduct(product);
    };

    // Cancel editing
    const handleCancel = () => {
        setEditingProduct(null);
        setForm(emptyProductInput);
        setError('');
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Admin Product Dashboard</h1>

            {error && <p className="text-red-600 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="mb-8 border p-4 rounded shadow space-y-4">
                <h2 className="text-xl font-semibold">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                        rows={3}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="price">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        min="0"
                        step="0.01"
                        value={form.price}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="imageUrl">Image URL</label>
                    <input
                        id="imageUrl"
                        name="imageUrl"
                        value={form.imageUrl}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                        placeholder="http://example.com/image.jpg"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="stock">Stock</label>
                    <input
                        id="stock"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                        placeholder="Quantity or info"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="category">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                        required
                    >
                        <option value="">-- Select Category --</option>
                        {categories.map(cat => (
                            <option key={cat._id} value={cat._id}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="collections">Collections (hold Ctrl/Cmd to select multiple)</label>
                    <select
                        id="collections"
                        name="collections"
                        multiple
                        value={form.collections}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                        size={Math.min(collections.length, 6)} // show up to 6 rows
                    >
                        {collections.map(col => (
                            <option key={col._id} value={col._id}>{col.name}</option>
                        ))}
                    </select>
                </div>

                <div className="flex space-x-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        {editingProduct ? 'Update Product' : 'Add Product'}
                    </button>
                    {editingProduct && (
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            <h2 className="text-2xl font-semibold mb-4">Product List</h2>
            <ul>
                {products.map(product => (
                    <li
                        key={product._id}
                        className="border p-4 mb-3 flex justify-between items-center rounded shadow"
                    >
                        <div>
                            <p className="font-bold text-lg">{product.name}</p>
                            <p className="text-gray-700">${product.price.toFixed(2)}</p>
                            <p className="text-sm text-gray-600">
                                Category: {product.category?.name || 'Unknown'}
                            </p>
                            <p className="text-sm text-gray-600">
                                Collections: {
                                    product.collections.length > 0
                                        ? product.collections.map(col => col.name).join(', ')
                                        : 'None'
                                }
                            </p>

                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handleEdit(product)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(product._id)}
                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
