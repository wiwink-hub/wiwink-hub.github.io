import { Link } from "react-router-dom";
import { User, Package, MapPin, CreditCard, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Account = () => {
  const accountSections = [
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Your Orders",
      description: "Track, return, or buy things again",
      link: "/orders"
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Your Addresses",
      description: "Edit addresses for orders and gifts",
      link: "/account/addresses"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Payment Methods",
      description: "Edit or add payment methods",
      link: "/account/payments"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Account Settings",
      description: "Edit login, name, and mobile number",
      link: "/account/settings"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Account</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accountSections.map((section) => (
            <Link key={section.title} to={section.link}>
              <div className="bg-card border border-border rounded-sm p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{section.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                    <p className="text-muted-foreground">{section.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-card border border-border rounded-sm p-8">
          <h2 className="text-2xl font-bold mb-4">Account Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-muted-foreground mb-1">Name</p>
              <p className="font-bold">John Doe</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Email</p>
              <p className="font-bold">john.doe@example.com</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Member Since</p>
              <p className="font-bold">January 2024</p>
            </div>
            <Button variant="outline">Edit Account Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
