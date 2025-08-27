import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  /**
   * @param {Array<object>} newRecommendations
   */
  const handleNewRecommendations = (newRecommendations) => {
    setRecommendations(newRecommendations);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Recomendador de Produtos RD Station</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 md:col-span-2 mb-4">
          <p className="text-lg">
            Bem-vindo ao Recomendador de Produtos RD Station. Use o formulário abaixo para selecionar suas preferências e funcionalidades desejadas e receba recomendações personalizadas de produtos que melhor atendam às suas necessidades.
          </p>
        </div>
        <div>
          <Form onRecommend={handleNewRecommendations} />
        </div>
        <div>
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
