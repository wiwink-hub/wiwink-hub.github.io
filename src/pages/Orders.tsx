import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Orders = () => {
  const orders = [
    {
      id: "123-4567890-1234567",
      date: "October 25, 2025",
      total: 159.98,
      status: "Delivered",
      items: [
        { name: "Wireless Bluetooth Headphones", image: "/placeholder.svg", price: 79.99 },
        { name: "Smart Watch Pro", image: "/placeholder.svg", price: 80.00 }
      ]
    },
    {
      id: "123-7654321-7654321",
      date: "October 20, 2025",
      total: 549.99,
      status: "Shipped",
      items: [
        { name: "4K Ultra HD Camera", image: "/placeholder.svg", price: 549.99 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
        
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-card border border-border rounded-sm overflow-hidden">
              <div className="bg-muted px-6 py-4 grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">ORDER PLACED</p>
                  <p className="font-bold">{order.date}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">TOTAL</p>
                  <p className="font-bold">${order.total.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">STATUS</p>
                  <p className="font-bold text-green-600">{order.status}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">ORDER #</p>
                  <p className="text-xs">{order.id}</p>
                </div>
              </div>
              
              <div className="p-6">
                {order.items.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-4 last:mb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-sm"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold mb-2">{item.name}</h3>
                      <p className="text-price font-bold">${item.price.toFixed(2)}</p>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">
                          Buy it again
                        </Button>
                        <Button variant="outline" size="sm">
                          View item
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="bg-card border border-border rounded-sm p-12 text-center">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">No orders yet</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't made any orders</p>
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
