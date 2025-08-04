import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Heart, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-cream to-golden/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-saffron to-sacred-red bg-clip-text text-transparent">
                About Our Sacred Mission
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Dedicated to preserving and sharing the ancient wisdom of Hindu traditions 
              through authentic puja services in Bangalore
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Preserving Ancient Traditions in Modern Times
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hindi North Indian Pandits is a trusted platform connecting families in Bangalore 
                  with experienced and knowledgeable pandits who specialize in North Indian Hindu traditions. 
                  Our mission is to make sacred rituals accessible while maintaining their authenticity and spiritual significance.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand that in today's busy world, finding qualified pandits who can perform 
                  traditional ceremonies with proper knowledge and devotion can be challenging. That's why 
                  we've created a reliable network of experienced purohits who bring decades of experience 
                  and deep spiritual understanding to every ceremony.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  "Over 15 years of experience in Vedic rituals",
                  "Certified and trained North Indian pandits",
                  "Complete puja materials and arrangements",
                  "Multilingual service (Hindi, Sanskrit, English, Kannada)"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-saffron flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-gradient-to-r from-saffron to-sacred-red hover:opacity-90">
                <Phone className="h-5 w-5 mr-2" />
                Contact Our Team
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, number: "500+", label: "Happy Families", color: "text-saffron" },
                { icon: Award, number: "15+", label: "Years Experience", color: "text-sacred-red" },
                { icon: Heart, number: "1000+", label: "Pujas Completed", color: "text-golden" },
                { icon: CheckCircle, number: "100%", label: "Satisfaction Rate", color: "text-saffron" }
              ].map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-saffron/20 to-sacred-red/20 flex items-center justify-center`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground">{stat.number}</h3>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-br from-golden/5 to-saffron/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-saffron to-sacred-red bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Authenticity",
                  description: "We ensure all rituals are performed according to traditional Vedic scriptures and practices.",
                  emoji: "🕉"
                },
                {
                  title: "Devotion",
                  description: "Every ceremony is conducted with complete dedication and spiritual reverence.",
                  emoji: "🙏"
                },
                {
                  title: "Excellence",
                  description: "We strive for perfection in every aspect of our service, from punctuality to ritual completion.",
                  emoji: "⭐"
                }
              ].map((value, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="text-4xl mb-4">{value.emoji}</div>
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
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
                Ready to Book Your Sacred Ceremony?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Connect with our experienced pandits today and ensure your puja is performed with proper rituals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-saffron hover:bg-gray-100">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (+91) 9102416476
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-saffron">
                  View Our Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;