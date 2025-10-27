import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, MapPin, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const Header = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-header text-header-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 py-3">
            <Link to="/" className="flex items-center gap-1">
              <div className="text-2xl font-bold">
                <span className="text-header-foreground">shop</span>
                <span className="text-primary">.com</span>
              </div>
            </Link>

            <div className="flex items-center gap-2 text-sm hover:bg-navHover px-2 py-1 rounded cursor-pointer">
              <MapPin className="h-5 w-5" />
              <div>
                <div className="text-xs text-muted-foreground">Deliver to</div>
                <div className="font-bold">New York 10001</div>
              </div>
            </div>

            <form onSubmit={handleSearch} className="flex-1 max-w-3xl">
              <div className="flex">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="rounded-r-none bg-background text-foreground border-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="rounded-l-none bg-primary hover:bg-primary/90">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </form>

            <Link to="/account" className="flex items-center gap-1 text-sm hover:bg-navHover px-2 py-1 rounded">
              <User className="h-5 w-5" />
              <div>
                <div className="text-xs">Hello, Sign in</div>
                <div className="font-bold">Account & Lists</div>
              </div>
            </Link>

            <Link to="/orders" className="flex flex-col text-sm hover:bg-navHover px-2 py-1 rounded">
              <div className="text-xs">Returns</div>
              <div className="font-bold">& Orders</div>
            </Link>

            <Link to="/cart" className="flex items-center gap-2 hover:bg-navHover px-2 py-1 rounded relative">
              <div className="relative">
                <ShoppingCart className="h-8 w-8" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="font-bold">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-header/90 text-header-foreground border-t border-header-foreground/20">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-6 py-2 text-sm">
            <Link to="/category/electronics" className="hover:bg-navHover px-2 py-1 rounded">Electronics</Link>
            <Link to="/category/furniture" className="hover:bg-navHover px-2 py-1 rounded">Furniture</Link>
            <Link to="/category/home" className="hover:bg-navHover px-2 py-1 rounded">Home & Kitchen</Link>
            <Link to="/category/sports" className="hover:bg-navHover px-2 py-1 rounded">Sports & Outdoors</Link>
            <Link to="/deals" className="hover:bg-navHover px-2 py-1 rounded font-bold text-primary">Today's Deals</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
