import { Button } from "./ui/button";
import { Phone, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-warm-cream via-golden/20 to-saffron/10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-saffron rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-sacred-red rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-golden rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">NORTH INDIAN PANDITS</span>
                <br />
                <span className="text-foreground">IN BANGALORE -</span>
                <br />
                <span className="bg-gradient-to-r from-saffron to-sacred-red bg-clip-text text-transparent">
                  YOUR ONE-STOP SOLUTION FOR HINDU PUJAS
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Hindi North Indian Pandits is a reliable platform that offers various Vedic and 
                Hindu Puja services, including Vedic Rituals, Religious Ceremonies, Vastu Yagya, 
                and more. Our team of experienced and reputable purohits and pandits will 
                perform the puja at your location.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Experienced North Indian Pandits",
                "All Hindu Puja Services",
                "Home Visit Available",
                "Professional & Reliable"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-saffron" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-saffron to-sacred-red hover:opacity-90 text-white font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                Book Pandit Now
              </Button>
              <Button size="lg" variant="outline" className="border-saffron text-saffron hover:bg-saffron hover:text-white">
                View Services
              </Button>
            </div>

            {/* Contact Info */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-saffron to-sacred-red rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Online Pandit Booking</p>
                  <p className="text-xl font-bold text-primary">(+91) 9102416476</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-saffron/20 to-sacred-red/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="aspect-square bg-gradient-to-br from-golden/30 to-saffron/30 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-saffron to-sacred-red rounded-full flex items-center justify-center mx-auto">
                    <span className="text-6xl">🙏</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Sacred Puja Services</h3>
                    <p className="text-muted-foreground">Traditional rituals performed with devotion</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-golden/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">🪔</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sacred-red/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-xl">🕉</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;