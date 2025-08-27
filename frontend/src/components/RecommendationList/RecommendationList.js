import React from 'react';
import ProductCard from '../ProductCard/ProductCard'; // Importe o novo componente

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      {/* Troca a lista simples pelo componente ProductCard */}
      <div>
        {recommendations.map((recommendation) => (
          <ProductCard key={recommendation.id} product={recommendation} />
        ))}
      </div>
    </div>
  );
}

export default RecommendationList;
