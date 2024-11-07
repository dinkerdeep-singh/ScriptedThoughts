import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlogSkeleton = () => {
  return (
    <div className="max-w-2xl">
      {/* Author section skeleton */}
      <div className="flex items-center space-x-2 mb-3">
        <Skeleton circle width={40} height={40} />
        <Skeleton width={120} />
      </div>

      {/* Title skeleton */}
      <div className="mb-2">
        <Skeleton height={32} width="90%" />
        <Skeleton height={32} width="70%" />
      </div>

      {/* Description skeleton */}
      <Skeleton height={24} width="80%" />
    </div>
  );
};

// Skeleton wrapper that renders multiple blog skeletons
const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid gap-12 mt-12">
          {[1, 2, 3].map((index) => (
            <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
              <BlogSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;