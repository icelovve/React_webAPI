/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import BackendLayout from '../../components/layout/backend/BackendLayout';
import productApi from '../../services/productApi';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productApi.getAllProduct()
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
                // Handle error: e.g., show a notification or message
            });
    }, []);

    const handleEdit = (productId) => {
        // Implement edit functionality here
        console.log('Edit product with id:', productId);
    };

    const handleDelete = (productId) => {
        // Implement delete functionality here
        console.log('Delete product with id:', productId);
    };

    return (
        <BackendLayout title='Product'>
            <div>
                <h1 className="h3 mb-3">Product List</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr className="text-sm">
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product) => (
                                            <tr key={product.product_id}>
                                                <td>
                                                    <img
                                                        src={product.product_image}
                                                        height="30"
                                                        alt={product.product_name}
                                                    />
                                                </td>
                                                <td>{product.product_name}</td>
                                                <td>{product.product_price}</td>
                                                <td className="text-right">
                                                    <button
                                                        onClick={() => handleEdit(product.product_id)}
                                                        className="btn btn-sm btn-warning me-2"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(product.product_id)}
                                                        className="btn btn-sm btn-danger"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackendLayout>
    );
};

export default Product;
