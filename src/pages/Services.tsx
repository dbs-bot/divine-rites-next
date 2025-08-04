import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, MapPin, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Grihapravesh Puja",
      description: "Sacred house warming ceremony to invite positive energy and blessings into your new home.",
      duration: "2-3 hours",
      price: "₹3,500 onwards",
      emoji: "🏠"
    },
    {
      title: "Marriage Puja",
      description: "Traditional wedding ceremonies conducted according to Vedic rituals for a blessed union.",
      duration: "4-6 hours",
      price: "₹15,000 onwards",
      emoji: "💒"
    },
    {
      title: "Satyanarayan Puja",
      description: "Powerful puja to Lord Vishnu for prosperity, peace, and fulfillment of wishes.",
      duration: "2-3 hours",
      price: "₹2,500 onwards",
      emoji: "🙏"
    },
    {
      title: "Rudrabhishek Puja",
      description: "Special prayers to Lord Shiva for health, prosperity, and spiritual growth.",
      duration: "1-2 hours",
      price: "₹3,000 onwards",
      emoji: "🔱"
    },
    {
      title: "Namkaran Puja",
      description: "Sacred naming ceremony for newborns with proper Vedic rituals and blessings.",
      duration: "1.5-2 hours",
      price: "₹2,000 onwards",
      emoji: "👶"
    },
    {
      title: "Navgrah Puja",
      description: "Planetary puja to reduce negative influences and enhance positive planetary effects.",
      duration: "3-4 hours",
      price: "₹5,000 onwards",
      emoji: "🌟"
    },
    {
      title: "Bhumi Puja",
      description: "Land blessing ceremony before construction to ensure success and remove obstacles.",
      duration: "1-2 hours",
      price: "₹2,500 onwards",
      emoji: "🌱"
    },
    {
      title: "Vastu Puja",
      description: "Comprehensive Vastu ceremonies to harmonize your living or working space.",
      duration: "2-3 hours",
      price: "₹4,000 onwards",
      emoji: "🏘"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-cream to-golden/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-saffron to-sacred-red bg-clip-text text-transparent">
                Our Sacred Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive Hindu puja services performed by experienced North Indian pandits 
              with authentic Vedic rituals and proper ceremonial procedures
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-saffron/20 to-sacred-red/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">{service.emoji}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-saffron transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-saffron" />
                      <span className="text-muted-foreground">{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="h-4 w-4 text-golden" />
                      <span className="font-semibold text-foreground">{service.price}</span>
                    </div>
                  </div>

                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-saffron to-sacred-red hover:opacity-90"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="bg-gradient-to-br from-golden/5 to-saffron/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-saffron to-sacred-red bg-clip-text text-transparent">
                What's Included in Our Services
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🕉",
                  title: "Experienced Pandits",
                  description: "Qualified and knowledgeable North Indian pandits with years of experience"
                },
                {
                  icon: "📿",
                  title: "Complete Materials",
                  description: "All necessary puja materials, flowers, and sacred items provided"
                },
                {
                  icon: "🏠",
                  title: "Home Service",
                  description: "Convenient doorstep service at your preferred location and time"
                },
                {
                  icon: "📋",
                  title: "Proper Guidance",
                  description: "Complete guidance on rituals and their significance throughout the ceremony"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-saffron/20 to-sacred-red/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-saffron to-sacred-red bg-clip-text text-transparent">
                Simple Booking Process
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Contact Us",
                  description: "Call us or send a message with your puja requirements and preferred date"
                },
                {
                  step: "02",
                  title: "Consultation",
                  description: "Our team will discuss the details, timing, and arrangements with you"
                },
                {
                  step: "03",
                  title: "Sacred Ceremony",
                  description: "Our experienced pandit will arrive on time and perform the complete ritual"
                }
              ].map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-saffron to-sacred-red rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-saffron to-sacred-red text-white">
            <CardContent className="text-center py-16 px-8">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Book Your Puja?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact us today to discuss your requirements and schedule your sacred ceremony
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-saffron hover:bg-gray-100">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: (+91) 9102416476
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-saffron">
                  <MapPin className="h-5 w-5 mr-2" />
                  Visit Our Location
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;