import React from 'react';

const ProductItemSkeleton = () => {
  return (
    <div className="animate-pulse text-gray-700">
      <div className="bg-gray-300 rounded-md w-full h-48 mb-3"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default ProductItemSkeleton;
