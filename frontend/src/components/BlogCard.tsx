import { Link } from 'react-router-dom';

const BlogCard = ({ 
  author = "author",
  title = "title1",
  description = "description",
}) => {
  return (
    <article className="max-w-2xl cursor-pointer hover:opacity-80 transition-opacity duration-200">
      <Link to="/blog" className="block">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-gray-700 font-medium">{author}</span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
          {title}
        </h2>
        
        <p className="text-gray-600 text-lg">
          {description}
        </p>
      </Link>
    </article>
  );
};

export default BlogCard;