import React from "react";
import "../inc/productcard.css";
import ProductCard from "../inc/ProductCard";
import kandyImg from "../images/card images/kandyImg.webp";
import colomboImg from "../images/card images/colomboImg.webp";
import nuwaraeliyaImg from "../images/card images/nuwaraeliyaImg.webp";
import ellaImg from "../images/card images/ellaImg.webp";
import negamboImg from "../images/card images/negamboImg.webp";
import anuradhapuraImg from "../images/card images/anuradhapuraImg.webp";
import galleImg from "../images/card images/galleImg.webp";
import hikkaduwaImg from "../images/card images/hikkaduwaImg.webp";
import mirissaImg from "../images/card images/mirissaImg.webp";
import sigiriyaImg from "../images/card images/sigiriyaImg.webp";

function ProductCardPage() {
  return (
    <div>
      <div className="productCard">
        <ProductCard
          image={kandyImg}
          title="Kandy"
          description="Temples, Botanical Gardens, Culture"
        />
      </div>
      <div className="productCard">
        <ProductCard
          image={colomboImg}
          title="Colombo"
          description="Friendly Locals, Shopping, Food"
        />
      </div>
      <div className="productCard">
        <ProductCard
          image={nuwaraeliyaImg}
          title="NuwaraEliya"
          description="Nature, Scenery, Mountains"
        />
      </div>
      <div className="productCard">
        <ProductCard
          image={ellaImg}
          title="Ella"
          description="Scenery, Nature, Nature Walks"
        />
      </div>
      <div className="productCard">
        <ProductCard
          image={negamboImg}
          title="Negambo"
          description="Beach Walks, Friendly Locals, Beaches"
        />
      </div>
      <div className="productCard">
        <ProductCard
          image={anuradhapuraImg}
          title="Anuradhapura"
          description="Temples,Ancient Landmarks,History"
        />
      </div>
      <div className="productCard">
        <ProductCard
          image={galleImg}
          title="Galle"
          description="Old Town, History, City Walks"
        />
      </div>
      <div className="productCard">
        <ProductCard
          image={hikkaduwaImg}
          title="Hikkaduwa"
          description="Beaches, Sandy Beaches, Beach Walks"
        />
      </div>
      <div className="productCard">
        <ProductCard
          image={mirissaImg}
          title="Mirissa"
          description="Beaches, Sandy Beaches, Beach Walks"
        />
      </div>
      <div className="productCard">
        <ProductCard
          image={sigiriyaImg}
          title="Sigiriya"
          description="Nature, Scenery, Ancient Landmarks"
        />
      </div>
    </div>
  );
}

export default ProductCardPage;
