import { Link } from "react-router-dom";
import { Star, StarHalf } from "lucide-react";
import { Product } from "@/data/products";
import { Badge } from "./ui/badge";
import { memo } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = memo(({ product }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-rating text-rating" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-rating text-rating" />);
    }
    return stars;
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-card rounded-sm border border-border p-4 hover:shadow-lg transition-shadow h-full flex flex-col">
        {product.badge && (
          <Badge className="mb-2 w-fit bg-primary/10 text-primary border-primary/20">
            {product.badge}
          </Badge>
        )}
        <div className="aspect-square bg-muted rounded-sm mb-3 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
        <h3 className="font-medium text-sm mb-2 line-clamp-2 flex-1">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          {renderStars(product.rating)}
          <span className="text-sm text-muted-foreground ml-1">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-xs text-muted-foreground">$</span>
          <span className="text-2xl font-bold text-price">{product.price.toFixed(2).split('.')[0]}</span>
          <span className="text-sm text-price">{product.price.toFixed(2).split('.')[1]}</span>
        </div>
        {product.inStock && (
          <p className="text-xs text-green-600 mt-1">In Stock</p>
        )}
      </div>
    </Link>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;
