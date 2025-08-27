/**
 * Calculates the matching score for a single product based on user's form data.
 * @param {object} product The product to score.
 * @param {object} formData The user's selections.
 * @returns {number} The calculated score.
 */
const calculateScore = (product, formData) => {
  let score = 0;
  const { selectedPreferences = [], selectedFeatures = [] } = formData;

  if (product.preferences) {
    selectedPreferences.forEach(preference => {
      if (product.preferences.includes(preference)) {
        score++;
      }
    });
  }

  if (product.features) {
    selectedFeatures.forEach(feature => {
      if (product.features.includes(feature)) {
        score++;
      }
    });
  }

  return score;
};

/**
 * Filters and sorts products based on user's selections and returns the final recommendations.
 * @param {object} formData The user's selections.
 * @param {Array<object>} products The list of all available products.
 * @returns {Array<object>} The recommended products.
 */
const getRecommendations = (formData, products) => {
  if (!formData || !products || products.length === 0) {
    return [];
  }

  const { selectedRecommendationType } = formData;

  const scoredProducts = products.map((product, index) => ({
    ...product,
    score: calculateScore(product, formData),
    originalIndex: index,
  }));

  const matchedProducts = scoredProducts.filter(p => p.score > 0);

  matchedProducts.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.originalIndex - a.originalIndex;
  });

  if (selectedRecommendationType === 'SingleProduct') {
    return matchedProducts.length > 0 ? [matchedProducts[0]] : [];
  }

  if (selectedRecommendationType === 'MultipleProducts') {
    return matchedProducts;
  }

  return [];
};

export default { getRecommendations };
