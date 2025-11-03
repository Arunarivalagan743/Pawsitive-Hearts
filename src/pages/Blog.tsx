import React from 'react'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to Dog Adoption in Mumbai",
      excerpt: "Everything you need to know about adopting a dog in Mumbai, from preparation to post-adoption care.",
      content: "Adopting a dog is one of the most rewarding experiences you can have. In this comprehensive guide, we'll walk you through every step of the adoption process in Mumbai...",
      author: "Dr. Priya Sharma",
      date: "2024-11-20",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      category: "Adoption Guide"
    },
    {
      id: 2,
      title: "Monsoon Care: Keeping Your Dog Healthy During Rainy Season",
      excerpt: "Essential tips for maintaining your dog's health and happiness during Mumbai's monsoon season.",
      content: "Mumbai's monsoon season can be challenging for pet owners. Here are our top tips for keeping your furry friend healthy and happy during the rains...",
      author: "Dr. Anjali Desai",
      date: "2024-11-15",
      image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg",
      category: "Health Tips"
    },
    {
      id: 3,
      title: "Success Story: Rocky's Journey from Street to Home",
      excerpt: "The inspiring story of Rocky, a street dog who found his forever family after months of rehabilitation.",
      content: "Rocky was found injured and scared on the streets of Bandra. Today, he's a happy, healthy dog living with his loving family. Here's his incredible journey...",
      author: "Rahul Patel",
      date: "2024-11-10",
      image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
      category: "Success Stories"
    },
    {
      id: 4,
      title: "Dog Training Basics: Building a Strong Bond",
      excerpt: "Learn the fundamental training techniques that will help you build a strong, loving relationship with your dog.",
      content: "Training your dog is about more than just obedience—it's about building trust and communication. Here are the basics every dog owner should know...",
      author: "Meera Shah",
      date: "2024-11-05",
      image: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",
      category: "Training"
    },
    {
      id: 5,
      title: "The Importance of Spaying and Neutering",
      excerpt: "Understanding why spaying and neutering is crucial for controlling Mumbai's stray dog population.",
      content: "Spaying and neutering is one of the most effective ways to control the stray dog population. Here's why it's important and how you can help...",
      author: "Dr. Priya Sharma",
      date: "2024-10-30",
      image: "https://images.pexels.com/photos/1586966/pexels-photo-1586966.jpeg",
      category: "Animal Welfare"
    },
    {
      id: 6,
      title: "Volunteer Spotlight: Making a Difference",
      excerpt: "Meet our amazing volunteers who dedicate their time to helping rescued dogs find loving homes.",
      content: "Our volunteers are the heart of our organization. Meet some of the amazing people who make our rescue work possible...",
      author: "Anjali Desai",
      date: "2024-10-25",
      image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
      category: "Volunteer Stories"
    }
  ]

  const categories = ["All", "Adoption Guide", "Health Tips", "Success Stories", "Training", "Animal Welfare", "Volunteer Stories"]
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories, tips, and insights from our dog rescue community. Learn about dog care, 
            adoption success stories, and how you can make a difference.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="ml-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-gray-700">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                
                <button className="text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-teal-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-6">
            Subscribe to our newsletter for the latest rescue stories, dog care tips, and adoption updates.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}