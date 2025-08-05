import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Heart, Share2, Facebook, Twitter, Copy, ArrowLeft } from "lucide-react";
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
}

const blogPostsData: Record<string, BlogPost> = {
  "blog-post-01": {
    id: "blog-post-01",
    title: "Sacred Rituals for Diwali Celebration",
    subtitle: "Traditional Hindu ceremonies for the festival of lights",
    content: `Diwali, the festival of lights, is one of the most significant celebrations in Hindu culture. This comprehensive guide explores the traditional rituals and their deep spiritual significance that has been preserved for thousands of years.

The celebration begins weeks before the actual festival with thorough cleaning and decorating of homes. This practice, known as 'Diwali cleaning,' is not just about physical cleanliness but represents the purification of the mind and soul, preparing to welcome divine blessings.

**Rangoli Patterns and Decorations**

Creating rangoli patterns at the entrance of homes is an ancient art form that serves both aesthetic and spiritual purposes. These intricate designs made with colored powders, rice, or flower petals are believed to welcome Goddess Lakshmi and ward off negative energies. Each pattern has symbolic meaning - lotus represents purity, peacocks symbolize grace, and geometric patterns represent cosmic harmony.

**The Significance of Diyas**

Lighting diyas (oil lamps) is the most iconic tradition of Diwali. Each diya represents the inner light that protects from spiritual darkness. The soft, warm glow of these earthen lamps creates an atmosphere of peace and devotion. Traditionally, diyas are lit at sunset and kept burning throughout the night, symbolizing the continuous presence of divine light in our lives.

**Lakshmi Puja Ceremony**

The main ritual involves worshipping Goddess Lakshmi, the deity of wealth and prosperity. The puja includes offering flowers, sweets, fruits, and prayers while chanting specific mantras. Families gather to perform this ceremony together, strengthening bonds and seeking blessings for the coming year.

**Modern Celebrations**

While maintaining traditional essence, modern Diwali celebrations incorporate contemporary elements. LED lights complement traditional diyas, and social media helps share the joy globally. However, the core spiritual significance remains unchanged - the triumph of light over darkness, knowledge over ignorance, and good over evil.

**Environmental Consciousness**

Modern celebrations also emphasize eco-friendly practices. Many families now choose to burst fewer firecrackers or opt for green alternatives, while still maintaining the festive spirit through community celebrations and cultural programs.`,
    image: "/placeholder.svg",
    author: "Pandit Sharma",
    date: "2024-10-15",
    category: "Festivals",
    likes: 42
  },
  "blog-post-02": {
    id: "blog-post-02",
    title: "Understanding Vedic Wedding Ceremonies",
    subtitle: "Complete guide to Hindu marriage rituals and their profound meanings",
    content: `Hindu wedding ceremonies are among the most elaborate and spiritually significant celebrations in the world. Each ritual has been carefully preserved through generations to ensure the sacred union represents not just a legal bond, but a cosmic connection between two souls.

**The Sacred Fire - Agni as Witness**

Central to all Hindu ceremonies is Agni, the sacred fire. In weddings, Agni serves as the divine witness to the vows exchanged between the couple. The fire represents purity, knowledge, and the presence of the divine. All major rituals are performed around this sacred flame, making it the focal point of spiritual energy.

**Kanyadaan - The Sacred Giving**

One of the most emotional moments is Kanyadaan, where the bride's father places her hand in the groom's hand. This ritual symbolizes the transfer of responsibility and the trust placed in the groom to protect and cherish the bride. It's considered one of the greatest acts of charity (daan) a father can perform.

**Panigrahana - Joining of Hands**

The ritual of holding hands (Panigrahana) represents the couple's commitment to face life's journey together. The groom recites ancient Sanskrit verses promising to accept the bride as his partner in all aspects of life - spiritual, emotional, and material.

**Saptapadi - The Seven Sacred Steps**

The most significant ritual is Saptapadi, where the couple takes seven steps around the sacred fire. Each step represents a vow for different aspects of married life:

1. **First Step**: For nourishment and sustenance
2. **Second Step**: For strength and health
3. **Third Step**: For prosperity and wealth
4. **Fourth Step**: For family and happiness
5. **Fifth Step**: For fertility and children
6. **Sixth Step**: For longevity and seasons
7. **Seventh Step**: For friendship and understanding

**Sindoor and Mangalsutra**

The application of sindoor (vermillion) in the bride's hair parting and the tying of mangalsutra (sacred necklace) are the final sealing rituals. These symbols represent the bride's married status and serve as protective talismans throughout married life.

**Regional Variations**

While the core rituals remain consistent, different regions of India have unique customs. South Indian weddings include additional ceremonies like Oonjal (swing ceremony), while North Indian weddings feature Baraat (groom's procession) and Joota Chupai (hiding the groom's shoes).

**Modern Adaptations**

Contemporary Hindu weddings often blend traditional rituals with modern conveniences. Technology helps families separated by distance participate virtually, while the essential spiritual elements remain unchanged. The focus continues to be on creating a sacred atmosphere for this life-changing ceremony.`,
    image: "/placeholder.svg",
    author: "Pandit Kumar",
    date: "2024-10-10",
    category: "Weddings",
    likes: 38
  },
  "blog-post-03": {
    id: "blog-post-03",
    title: "The Significance of Havan in Daily Life",
    subtitle: "How ancient fire ceremonies purify mind, body, and soul",
    content: `Havan, also known as Yagna or fire ceremony, is one of the most ancient and powerful practices in Hindu tradition. This sacred ritual involves offering specific materials to fire while chanting Vedic mantras, creating a divine atmosphere that purifies the environment and elevates consciousness.

**The Science Behind Havan**

Modern research has validated many benefits of havan that ancient sages understood intuitively. When ghee, herbs, and grains are offered to fire, they release specific compounds that have antimicrobial properties. Studies show that havan smoke can reduce airborne bacteria by up to 94% and purify the atmosphere for several hours.

**Materials Used in Havan**

Each ingredient used in havan has specific properties and purposes:

**Ghee (Clarified Butter)**: Acts as a carrier for other substances and burns cleanly, producing minimal smoke while maximizing the release of beneficial compounds.

**Samagri (Herbal Mix)**: Traditional havan samagri includes dried herbs like tulsi, neem, sandalwood, and camphor. Each herb contributes unique therapeutic properties.

**Grains and Fruits**: Rice, sesame seeds, and dried fruits represent abundance and gratitude to nature's bounty.

**Sacred Woods**: Mango wood is preferred for its clean burning properties and pleasant aroma.

**Daily Havan Practice**

Incorporating havan into daily routine brings numerous benefits:

**Morning Havan**: Performed at sunrise, it purifies the home environment and sets a positive tone for the day. The practice helps in meditation and creates mental clarity.

**Evening Havan**: Conducted at sunset, it removes negative energies accumulated during the day and promotes peaceful sleep.

**Specific Intentions**: Different mantras and materials are used for specific purposes - health, prosperity, peace, or spiritual growth.

**Mental and Spiritual Benefits**

The rhythmic chanting of mantras during havan creates a meditative state that reduces stress and anxiety. The practice helps practitioners connect with cosmic energy and develop inner peace. Regular participation enhances concentration and spiritual awareness.

**Environmental Impact**

Unlike other forms of burning, havan actually benefits the environment when performed correctly. The organic materials release oxygen and beneficial ions, while the specific mantras are believed to create positive vibrations that extend far beyond the immediate area.

**Community Havan**

Large community havans amplify the benefits manifold. When performed collectively, they create powerful positive energy fields that can influence entire neighborhoods. Many communities organize monthly or seasonal havans for collective wellbeing.

**Guidelines for Home Practice**

For those new to havan practice:
- Start with simple offerings and basic mantras
- Ensure proper ventilation
- Use only organic, pure materials
- Maintain respect and devotion throughout
- Learn proper pronunciation of mantras
- Practice under guidance initially`,
    image: "/placeholder.svg",
    author: "Pandit Singh",
    date: "2024-10-05",
    category: "Rituals",
    likes: 55
  },
  "blog-post-04": {
    id: "blog-post-04",
    title: "Navratri: Nine Nights of Divine Feminine Power",
    subtitle: "Celebrating the divine feminine through dance, devotion, and spiritual practice",
    content: `Navratri, meaning 'nine nights,' is one of the most vibrant and spiritually significant festivals in Hindu culture. This celebration honors the divine feminine energy (Shakti) through various forms of Goddess Durga, each representing different aspects of cosmic power and protection.

**The Nine Forms of Goddess Durga**

Each night of Navratri is dedicated to a specific form of the Goddess:

**Night 1 - Shailaputri**: The daughter of mountains, representing stability and strength
**Night 2 - Brahmacharini**: The devoted student, symbolizing knowledge and penance
**Night 3 - Chandraghanta**: The peaceful warrior, bringing courage and protection
**Night 4 - Kushmanda**: The cosmic creator, representing abundance and prosperity
**Night 5 - Skandamata**: The divine mother, symbolizing nurturing and care
**Night 6 - Katyayani**: The fierce protector, destroying negativity and evil
**Night 7 - Kalaratri**: The dark night, removing ignorance and fear
**Night 8 - Mahagauri**: The pure and radiant, bringing peace and forgiveness
**Night 9 - Siddhidatri**: The bestower of achievements and spiritual powers

**Traditional Celebrations**

**Garba and Dandiya**: These traditional dances from Gujarat have become synonymous with Navratri celebrations worldwide. The circular movements of Garba represent the cycle of life, while Dandiya with sticks symbolizes the battle between good and evil.

**Fasting and Feasting**: Many devotees observe fasts during Navratri, consuming only specific foods like fruits, milk, and special flours. The fasting is broken with elaborate feasts featuring traditional recipes.

**Golu Displays**: In South India, families create elaborate displays of dolls and figurines depicting mythological stories, encouraging community visits and cultural exchange.

**Regional Variations**

**Bengal**: Celebrated as Durga Puja with magnificent pandals (temporary structures) and artistic installations
**Tamil Nadu**: Known as Golu or Navarathri with cultural performances and classical music concerts
**Karnataka**: Features Dasara celebrations with royal processions and traditional arts
**Gujarat and Rajasthan**: Famous for energetic Garba and Dandiya nights

**Spiritual Significance**

Navratri represents the journey of spiritual evolution. The nine nights symbolize the nine stages of consciousness that a devotee passes through to reach divine realization. Each form of the Goddess helps overcome specific spiritual obstacles and negative tendencies.

**Modern Celebrations**

Contemporary Navratri celebrations have evolved to include:
- Large community events in urban areas
- Cultural exchange between different regional traditions
- Fashion shows featuring traditional attire
- Fusion music combining classical and modern elements
- Online celebrations connecting global communities

**The Message of Empowerment**

Navratri's celebration of feminine divinity carries a powerful message about respecting and honoring women. The festival teaches that feminine energy is not just nurturing but also protective, creative, and transformative. This understanding promotes gender equality and women's empowerment in society.

**Preparation and Devotion**

Proper preparation for Navratri involves:
- Cleaning and decorating homes
- Setting up prayer spaces with Goddess images
- Learning traditional songs and dances
- Preparing special meals for family and community
- Engaging in charitable activities and helping others`,
    image: "/placeholder.svg",
    author: "Pandit Devi",
    date: "2024-09-28",
    category: "Festivals",
    likes: 67
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (slug && blogPostsData[slug]) {
      setPost(blogPostsData[slug]);
      
      // Check if post is liked
      const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
      setIsLiked(likedPosts.includes(slug));
    }
  }, [slug]);

  const handleLike = () => {
    if (!post) return;
    
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    let updatedLikes = post.likes || 0;
    
    if (isLiked) {
      // Unlike
      const newLikedPosts = likedPosts.filter((id: string) => id !== post.id);
      localStorage.setItem("likedPosts", JSON.stringify(newLikedPosts));
      updatedLikes = Math.max(0, updatedLikes - 1);
      setIsLiked(false);
    } else {
      // Like
      likedPosts.push(post.id);
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
      updatedLikes += 1;
      setIsLiked(true);
    }
    
    // Update the post likes
    setPost({ ...post, likes: updatedLikes });
    blogPostsData[post.id] = { ...post, likes: updatedLikes };
  };

  const handleShare = async (platform: string) => {
    if (!post) return;
    
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

  if (!post) {
    return (
      <div className="min-h-screen bg-sacred-cream">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Navigation />
      
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back to Blog */}
          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.subtitle}</p>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
              
              {/* Like and Share */}
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  onClick={handleLike}
                  className={`flex items-center gap-2 ${isLiked ? 'text-red-500' : ''}`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{post.likes || 0}</span>
                </Button>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('facebook')}
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('twitter')}
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('copy')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                // Bold headings
                return (
                  <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-6 text-foreground leading-relaxed text-lg">
                    {paragraph.split('**').map((part, partIndex) => 
                      partIndex % 2 === 1 ? (
                        <strong key={partIndex} className="font-semibold">{part}</strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current text-red-500' : 'text-muted-foreground'}`} />
                <span className="text-muted-foreground">{post.likes || 0} people liked this article</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Share this article:</span>
                <Button variant="ghost" size="sm" onClick={() => handleShare('facebook')}>
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleShare('twitter')}>
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleShare('copy')}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;