import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
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
}

const BlogAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    content: "",
    image: "",
    author: "",
    category: ""
  });

  useEffect(() => {
    // Load blog posts from localStorage
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    } else {
      // Initialize with sample data
      const initialPosts = [
        {
          id: 1,
          title: "Sacred Rituals for Diwali Celebration",
          subtitle: "Traditional Hindu ceremonies for the festival of lights",
          content: "Diwali, the festival of lights, is one of the most significant celebrations in Hindu culture. This blog post explores the traditional rituals and their spiritual significance...",
          image: "/placeholder.svg",
          author: "Pandit Sharma",
          date: "2024-10-15",
          category: "Festivals"
        }
      ];
      setBlogPosts(initialPosts);
      localStorage.setItem("blogPosts", JSON.stringify(initialPosts));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!"
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive"
      });
    }
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPost) {
      // Update existing post
      const updatedPosts = blogPosts.map(post => 
        post.id === editingPost.id 
          ? { ...editingPost, ...formData, date: new Date().toISOString().split('T')[0] }
          : post
      );
      setBlogPosts(updatedPosts);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
      toast({
        title: "Post Updated",
        description: "Blog post has been updated successfully!"
      });
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString().split('T')[0]
      };
      const updatedPosts = [newPost, ...blogPosts];
      setBlogPosts(updatedPosts);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
      toast({
        title: "Post Created",
        description: "New blog post has been created successfully!"
      });
    }
    
    resetForm();
    setIsDialogOpen(false);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      subtitle: post.subtitle,
      content: post.content,
      image: post.image,
      author: post.author,
      category: post.category
    });
    setIsDialogOpen(true);
  };

  const handleDeletePost = (id: number) => {
    const updatedPosts = blogPosts.filter(post => post.id !== id);
    setBlogPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    toast({
      title: "Post Deleted",
      description: "Blog post has been deleted successfully!"
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      content: "",
      image: "",
      author: "",
      category: ""
    });
    setEditingPost(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-sacred-cream flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sacred-cream p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Posts Management</h1>
          <div className="flex gap-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm}>
                  <Plus className="h-4 w-4 mr-2" />
                  New Post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSavePost} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input
                      id="subtitle"
                      value={formData.subtitle}
                      onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => setFormData({...formData, author: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      placeholder="/placeholder.svg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      rows={6}
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">
                      {editingPost ? "Update Post" : "Create Post"}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
              Logout
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{post.title}</CardTitle>
                    <p className="text-muted-foreground mt-1">{post.subtitle}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground mt-2">
                      <span>By: {post.author}</span>
                      <span>Category: {post.category}</span>
                      <span>Date: {post.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => handleDeletePost(post.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground line-clamp-2">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;