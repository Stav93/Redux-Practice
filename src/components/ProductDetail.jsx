import React from "react";
import { useParams } from "react-router-dom"

function ProductDetail() {
  const params = useParams();
  console.log(params.productId)
  return (
    <section>
      <h1>ProductDetail</h1>
      <p>{params.productId}</p>
    </section>
  );
}

export default ProductDetail;
