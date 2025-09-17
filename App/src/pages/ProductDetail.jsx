import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ProductDetail.css";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error("Error loading product", err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    // Build static image paths from /public/cake
    const baseName = product.name.replace(/\s+/g, "").toLowerCase();
    const imagePaths = [
        `/cake/${baseName}1.png`,
        `/cake/${baseName}2.png`,
        `/cake/${baseName}3.png`,
    ];

    return (
        <div className="product-detail">
            {/* Left: images */}
            <div className="product-detail-images">
                {imagePaths.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`${product.name} ${idx + 1}`}
                        onError={(e) => {
                            // Hide an image gracefully if the file doesn't exist
                            e.currentTarget.style.display = "none";
                        }}
                    />
                ))}
            </div>

            {/* Right: info */}
            <div className="product-detail-info">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-price">${product.price}</p>
                <p className="product-description">{product.description}</p>

                <div className="product-detail-accordion">
                    <details open>
                        <summary>Serving size</summary>
                        <p>{product.servingSize}</p>
                    </details>

                    <details>
                        <summary>Ingredients</summary>
                        <p className="accordion-text">
                            {Array.isArray(product.ingredients)
                                ? product.ingredients.join(", ")
                                : product.ingredients}
                        </p>
                    </details>

                    <details>
                        <summary>Allergens</summary>
                        <p className="accordion-text">
                            {Array.isArray(product.allergens)
                                ? product.allergens.join(", ")
                                : product.allergens}
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
}
