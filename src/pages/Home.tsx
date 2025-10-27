import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";

const Home = () => {
  const featuredProducts = products.slice(0, 8);
  
  const categories = [
    { name: "Electronics", image: "/placeholder.svg", link: "/category/electronics" },
    { name: "Furniture", image: "/placeholder.svg", link: "/category/furniture" },
    { name: "Home & Kitchen", image: "/placeholder.svg", link: "/category/home" },
    { name: "Sports", image: "/placeholder.svg", link: "/category/sports" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-header to-header/80 text-header-foreground py-12 mb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Shop.com</h1>
          <p className="text-xl mb-6">Find everything you need, delivered to your door</p>
          <Link to="/category/electronics">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link key={category.name} to={category.link}>
                <div className="bg-card border border-border rounded-sm p-6 hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-muted rounded-sm mb-4 overflow-hidden">
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-bold text-center">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link to="/category/all">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Deals Section */}
        <section className="bg-card border border-border rounded-sm p-8">
          <h2 className="text-2xl font-bold mb-4">Today's Deals</h2>
          <p className="text-muted-foreground mb-6">Save big on select items</p>
          <Link to="/deals">
            <Button className="bg-primary hover:bg-primary/90">
              See All Deals
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
