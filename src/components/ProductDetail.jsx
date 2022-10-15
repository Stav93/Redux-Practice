import React from "react";
import { useParams } from "react-router-dom"

function ProductDetail() {
  const params = useParams();
  
  return (
    <section>
      <h1>ProductDetail</h1>
    </section>
  );
}

export default ProductDetail;
