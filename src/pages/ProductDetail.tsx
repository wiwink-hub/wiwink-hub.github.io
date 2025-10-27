import { useParams, Link } from "react-router-dom";
import { Star, StarHalf, ShoppingCart, MapPin } from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/" className="text-primary hover:underline">Return to home</Link>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-rating text-rating" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-rating text-rating" />);
    }
    return stars;
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success("Added to cart!");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-card border border-border rounded-sm p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-primary hover:underline cursor-pointer">
                {product.reviews.toLocaleString()} ratings
              </span>
            </div>

            <div className="border-t border-b border-border py-4 mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-muted-foreground">Price:</span>
                <span className="text-4xl font-bold text-price">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              {product.inStock ? (
                <p className="text-green-600 font-bold">In Stock</p>
              ) : (
                <p className="text-destructive font-bold">Out of Stock</p>
              )}
            </div>

            <div className="mb-6">
              <h2 className="font-bold mb-2">About this item</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div className="bg-card border border-border rounded-sm p-6 mb-6">
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-bold mb-1">Deliver to New York 10001</p>
                  <p className="text-sm text-green-600">FREE delivery Tomorrow</p>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary/90 mb-2"
                size="lg"
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <Link to="/checkout">
                <Button
                  className="w-full bg-header hover:bg-header/90"
                  size="lg"
                  disabled={!product.inStock}
                >
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Customers also viewed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(0, 4).map((p) => (
              <Link key={p.id} to={`/product/${p.id}`}>
                <div className="bg-card border border-border rounded-sm p-4 hover:shadow-lg transition-shadow">
                  <img src={p.image} alt={p.name} className="w-full aspect-square object-cover mb-2" />
                  <h3 className="text-sm line-clamp-2 mb-2">{p.name}</h3>
                  <p className="font-bold text-price">${p.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
