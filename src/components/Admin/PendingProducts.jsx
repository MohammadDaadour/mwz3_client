import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/Route/ProductCard/ProductCard";
import styles from "../../styles/styles";

const PendingProducts = () => {
  const { allProducts } = useSelector((state) => state.products);

  const pendingProducts = allProducts && allProducts.filter((product) => product.status === "pending" || !product.status);

  const handleApproveProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v2/product/approve-product/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        console.error('Failed to approve product:', response.statusText);
        return;
      }
  
      try {
        const data = await response.json();
        console.log('Product approved successfully:', data.message);
        // Perform any additional actions or state updates on success
      } catch (error) {
        console.error('Error parsing JSON response:', error.message);
        // Handle error, maybe show a notification to the user
      }
    } catch (error) {
      console.error('Error while approving product:', error.message);
      // Handle error, maybe show a notification to the user
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response =  fetch(`http://localhost:8000/api/v2/product/delete-shop-product/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });
  
      if (!response.ok) {
        console.error('Failed to delete product:', response.statusText);
        // Handle error, maybe show a notification to the user
        return;
      }
  
      try {
        const data = await response.json();
        console.log('Product deleted successfully:', data.message);
        // Perform any additional actions or state updates on success
      } catch (error) {
        console.error('Error parsing JSON response:', error.message);
        // Handle error, maybe show a notification to the user
      }
    } catch (error) {
      console.error('Error while deleting product:', error.message);
      // Handle error, maybe show a notification to the user
    }
  };
  
  return (
    <div>
      <div className={`${styles.section} py-16 px-8`}>
        <h1>Pending Products</h1>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {pendingProducts && pendingProducts.map((product, index) => (
            <div key={product._id}>
              <ProductCard data={product} />
              <button onClick={() => handleApproveProduct(product._id)} className="p-2 bg-green-600">Approve</button>
              {/* <button onClick={() => handleDeleteProduct(product._id)} className="p-2 bg-red-600">Deny</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingProducts;

