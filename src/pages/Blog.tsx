import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, User, Heart, Share2, Facebook, Twitter, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  likes?: number;
}

// Initial blog data - this will be synced with admin panel
const getInitialBlogPosts = (): BlogPost[] => {
  const savedPosts = localStorage.getItem("blogPosts");
  if (savedPosts) {
    return JSON.parse(savedPosts);
  }
  
  const initialPosts = [
    {
      id: 1,
      title: "Sacred Rituals for Diwali Celebration",
      subtitle: "Traditional Hindu ceremonies for the festival of lights",
      content: "Diwali, the festival of lights, is one of the most significant celebrations in Hindu culture. This blog post explores the traditional rituals and their spiritual significance.\n\nThe celebration begins with cleaning and decorating homes with rangoli patterns, diyas (oil lamps), and marigold flowers. Each ritual has deep spiritual meaning - lighting diyas represents the victory of light over darkness, good over evil.\n\nTraditional ceremonies include Lakshmi Puja to welcome prosperity, exchanging sweets with family and friends, and bursting firecrackers to celebrate joy. The festival spans five days, each with its own significance and rituals.\n\nModern celebrations blend tradition with contemporary practices, but the core spiritual essence remains unchanged. Families gather to perform pujas, share meals, and strengthen bonds of love and unity.",
      image: "/placeholder.svg",
      author: "Pandit Sharma",
      date: "2024-10-15",
      category: "Festivals",
      likes: 0
    },
    {
      id: 2,
      title: "Understanding Vedic Wedding Ceremonies",
      subtitle: "Complete guide to Hindu marriage rituals",
      content: "Hindu wedding ceremonies are rich with tradition and spiritual meaning. Each ritual has been carefully preserved through generations to ensure the sacred union of two souls.\n\nThe ceremony includes multiple stages: Kanyadaan (giving away of the bride), Panigrahana (holding hands), Saptapadi (seven steps around the sacred fire), and Sindoor application.\n\nEach step symbolizes different aspects of married life - mutual respect, shared responsibilities, spiritual growth, and eternal commitment. The sacred fire (Agni) serves as the divine witness to the vows.\n\nTraditional mantras and Sanskrit verses invoke blessings from deities and ancestors. The ceremony creates not just a legal bond, but a spiritual connection that transcends this lifetime.",
      image: "/placeholder.svg",
      author: "Pandit Kumar",
      date: "2024-10-10",
      category: "Weddings",
      likes: 0
    },
    {
      id: 3,
      title: "The Significance of Havan in Daily Life",
      subtitle: "How fire ceremonies purify mind and soul",
      content: "Havan or fire ceremony is an ancient Vedic practice that involves offering ghee, herbs, and other sacred materials to the fire while chanting specific mantras.\n\nThe practice purifies the environment, removes negative energy, and creates positive vibrations. Scientific studies show that havan smoke has antibacterial properties and purifies the air.\n\nRegular havan practice helps in meditation, reduces stress, and promotes mental clarity. The offerings represent surrender of ego and material desires to the divine.\n\nDifferent herbs used in havan have specific purposes - some for health, others for prosperity, peace, or spiritual growth. The ceremony connects practitioners with cosmic energy and divine consciousness.",
      image: "/placeholder.svg",
      author: "Pandit Singh",
      date: "2024-10-05",
      category: "Rituals",
      likes: 0
    }
  ];
  
  localStorage.setItem("blogPosts", JSON.stringify(initialPosts));
  return initialPosts;
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const { toast } = useToast();

  useEffect(() => {
    setBlogPosts(getInitialBlogPosts());
    
    // Load liked posts from localStorage
    const savedLikes = localStorage.getItem("likedPosts");
    if (savedLikes) {
      setLikedPosts(new Set(JSON.parse(savedLikes)));
    }
  }, []);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  const handleLike = (postId: number, e: React.MouseEvent) => {
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
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  const handleShare = async (post: BlogPost, platform: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const url = window.location.href;
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
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{selectedPost.category}</Badge>
                </div>
                <DialogTitle className="text-2xl mb-2">{selectedPost.title}</DialogTitle>
                <p className="text-muted-foreground text-lg">{selectedPost.subtitle}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="mt-6">
                <div className="aspect-video bg-gray-200 flex items-center justify-center mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="prose max-w-none">
                  {selectedPost.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="mb-4 text-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
                
                {/* Like and Share buttons in dialog */}
                <div className="flex items-center justify-between pt-6 border-t mt-6">
                  <Button
                    variant="ghost"
                    onClick={(e) => handleLike(selectedPost.id, e)}
                    className={`flex items-center gap-2 ${likedPosts.has(selectedPost.id) ? 'text-red-500' : ''}`}
                  >
                    <Heart className={`h-5 w-5 ${likedPosts.has(selectedPost.id) ? 'fill-current' : ''}`} />
                    <span>{selectedPost.likes || 0} Likes</span>
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground mr-2">Share:</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => handleShare(selectedPost, 'facebook', e)}
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => handleShare(selectedPost, 'twitter', e)}
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => handleShare(selectedPost, 'copy', e)}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;