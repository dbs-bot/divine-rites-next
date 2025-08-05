import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Heart, Share2, Facebook, Twitter, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  likes?: number;
  slug: string;
}

// Blog posts data with slugs for individual pages
const getInitialBlogPosts = (): BlogPost[] => {
  const blogPosts = [
    {
      id: "1",
      slug: "blog-post-01",
      title: "Sacred Rituals for Diwali Celebration",
      subtitle: "Traditional Hindu ceremonies for the festival of lights",
      content: "Diwali, the festival of lights, is one of the most significant celebrations in Hindu culture. This comprehensive guide explores the traditional rituals and their deep spiritual significance...",
      image: "/placeholder.svg",
      author: "Pandit Sharma",
      date: "2024-10-15",
      category: "Festivals",
      likes: 42
    },
    {
      id: "2",
      slug: "blog-post-02",
      title: "Understanding Vedic Wedding Ceremonies",
      subtitle: "Complete guide to Hindu marriage rituals and their profound meanings",
      content: "Hindu wedding ceremonies are among the most elaborate and spiritually significant celebrations in the world. Each ritual has been carefully preserved through generations...",
      image: "/placeholder.svg",
      author: "Pandit Kumar",
      date: "2024-10-10",
      category: "Weddings",
      likes: 38
    },
    {
      id: "3",
      slug: "blog-post-03",
      title: "The Significance of Havan in Daily Life",
      subtitle: "How ancient fire ceremonies purify mind, body, and soul",
      content: "Havan, also known as Yagna or fire ceremony, is one of the most ancient and powerful practices in Hindu tradition. This sacred ritual involves offering specific materials to fire...",
      image: "/placeholder.svg",
      author: "Pandit Singh",
      date: "2024-10-05",
      category: "Rituals",
      likes: 55
    },
    {
      id: "4",
      slug: "blog-post-04",
      title: "Navratri: Nine Nights of Divine Feminine Power",
      subtitle: "Celebrating the divine feminine through dance, devotion, and spiritual practice",
      content: "Navratri, meaning 'nine nights,' is one of the most vibrant and spiritually significant festivals in Hindu culture. This celebration honors the divine feminine energy...",
      image: "/placeholder.svg",
      author: "Pandit Devi",
      date: "2024-09-28",
      category: "Festivals",
      likes: 67
    }
  ];
  
  return blogPosts;
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  useEffect(() => {
    setBlogPosts(getInitialBlogPosts());
    
    // Load liked posts from localStorage
    const savedLikes = localStorage.getItem("likedPosts");
    if (savedLikes) {
      setLikedPosts(new Set(JSON.parse(savedLikes)));
    }
  }, []);

  const handleLike = (postId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newLikedPosts = new Set(likedPosts);
    const updatedPosts = blogPosts.map(post => {
      if (post.id === postId) {
        const currentLikes = post.likes || 0;
        if (likedPosts.has(postId)) {
          newLikedPosts.delete(postId);
          return { ...post, likes: Math.max(0, currentLikes - 1) };
        } else {
          newLikedPosts.add(postId);
          return { ...post, likes: currentLikes + 1 };
        }
      }
      return post;
    });

    setLikedPosts(newLikedPosts);
    setBlogPosts(updatedPosts);
    
    // Save to localStorage
    localStorage.setItem("likedPosts", JSON.stringify(Array.from(newLikedPosts)));
  };

  const handleShare = async (post: BlogPost, platform: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const url = `${window.location.origin}/${post.slug}`;
    const text = `Check out this article: ${post.title}`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          toast({
            title: "Link Copied",
            description: "Blog post link copied to clipboard!"
          });
        } catch (err) {
          toast({
            title: "Copy Failed",
            description: "Failed to copy link to clipboard",
            variant: "destructive"
          });
        }
        break;
    }
  };
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
              <Link key={post.id} to={`/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
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
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    {/* Like and Share buttons */}
                    <div className="flex items-center justify-between pt-2 border-t">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => handleLike(post.id, e)}
                        className={`flex items-center gap-2 ${likedPosts.has(post.id) ? 'text-red-500' : ''}`}
                      >
                        <Heart className={`h-4 w-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                        <span>{post.likes || 0}</span>
                      </Button>
                      
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => handleShare(post, 'facebook', e)}
                        >
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => handleShare(post, 'twitter', e)}
                        >
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => handleShare(post, 'copy', e)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;