import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

// Mock blog data - in real app this would come from Supabase
const blogPosts = [
  {
    id: 1,
    title: "Sacred Rituals for Diwali Celebration",
    subtitle: "Traditional Hindu ceremonies for the festival of lights",
    content: "Diwali, the festival of lights, is one of the most significant celebrations in Hindu culture. This blog post explores the traditional rituals and their spiritual significance...",
    image: "/placeholder.svg",
    author: "Pandit Sharma",
    date: "2024-10-15",
    category: "Festivals"
  },
  {
    id: 2,
    title: "Understanding Vedic Wedding Ceremonies",
    subtitle: "Complete guide to Hindu marriage rituals",
    content: "Hindu wedding ceremonies are rich with tradition and spiritual meaning. Each ritual has been carefully preserved through generations...",
    image: "/placeholder.svg",
    author: "Pandit Kumar",
    date: "2024-10-10",
    category: "Weddings"
  },
  {
    id: 3,
    title: "The Significance of Havan in Daily Life",
    subtitle: "How fire ceremonies purify mind and soul",
    content: "Havan or fire ceremony is an ancient Vedic practice that involves offering ghee, herbs, and other sacred materials to the fire...",
    image: "/placeholder.svg",
    author: "Pandit Singh",
    date: "2024-10-05",
    category: "Rituals"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-sacred-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-saffron to-sacred-red text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Spiritual Insights & Wisdom
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Explore ancient Hindu traditions, rituals, and spiritual practices through our blog
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <p className="text-muted-foreground">{post.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 line-clamp-3">{post.content}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;