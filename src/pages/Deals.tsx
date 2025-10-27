import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";

const Deals = () => {
  const dealProducts = products.filter((p) => p.badge);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Today's Deals</h1>
          <p className="text-xl">Limited time offers on top products</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold">Featured Deals</h2>
          <Badge className="bg-destructive text-destructive-foreground">
            Ends in 23:59:59
          </Badge>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {dealProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No deals available at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Deals;
