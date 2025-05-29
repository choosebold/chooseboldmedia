"use client"

import React, { useState } from 'react';
import { Play, Pause, Download, Share2, Mail, BookOpen, User, Phone, Menu, X, ArrowRight, Headphones, MessageCircle } from 'lucide-react';

const PodcastWebsite = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  // Sample data - replace with your actual content
  const featuredEpisode = {
    title: "The Future of AI in Content Creation",
    description: "Exploring how artificial intelligence is transforming the way we create and consume content, featuring insights from industry leaders.",
    duration: "42:15",
    publishDate: "May 25, 2025",
    audioUrl: "#"
  };

  const recentPosts = [
    {
      title: "5 Strategies for Growing Your Podcast Audience",
      excerpt: "Discover proven methods to expand your reach and build a loyal listener base.",
      date: "May 20, 2025",
      category: "Growth",
      readTime: "8 min read"
    },
    {
      title: "The Art of Storytelling in Digital Media",
      excerpt: "Learn how to craft compelling narratives that resonate with your audience.",
      date: "May 15, 2025",
      category: "Content",
      readTime: "12 min read"
    },
    {
      title: "Book Review: Platform by Michael Hyatt",
      excerpt: "A comprehensive guide to building your platform and growing your influence.",
      date: "May 10, 2025",
      category: "Reviews",
      readTime: "6 min read"
    }
  ];

  const handleNewsletterSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Integrate with your email service (ConvertKit, Mailchimp, etc.)
    console.log('Newsletter signup:', email);
    alert('Thanks for subscribing! Check your email for confirmation.');
    setEmail('');
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Integrate with actual audio player
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Headphones className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">YourPodcast</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Episodes</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Articles</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Book Reviews</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Episodes</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Articles</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Book Reviews</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">YourPodcast</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover insights, stories, and conversations that matter. Join thousands of listeners exploring the intersection of technology, creativity, and human potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Listen Now
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Browse Episodes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Episode</h3>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Headphones className="w-16 h-16 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{featuredEpisode.title}</h4>
                <p className="text-gray-600 mb-4">{featuredEpisode.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span>{featuredEpisode.publishDate}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredEpisode.duration}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={togglePlay}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Recent Articles</h3>
            <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-2">{post.category}</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h4>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-12 h-12 text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h3>
          <p className="text-blue-100 mb-8 text-lg">
            Get the latest episodes, articles, and exclusive content delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button 
              onClick={handleNewsletterSubmit}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">No spam, unsubscribe anytime.</p>
        </div>
      </section>

      {/* Call to Action Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore More</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Book Reviews</h4>
              <p className="text-gray-600 mb-4">Discover my latest reads and recommendations</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Browse Reviews →</a>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">About Me</h4>
              <p className="text-gray-600 mb-4">Learn about my journey and mission</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">My Story →</a>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Community</h4>
              <p className="text-gray-600 mb-4">Join the conversation with fellow listeners</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Join Now →</a>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Work With Me</h4>
              <p className="text-gray-600 mb-4">Speaking, consulting, and collaboration</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Get in Touch →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Headphones className="w-8 h-8 text-blue-400 mr-2" />
                <h5 className="text-xl font-bold">YourPodcast</h5>
              </div>
              <p className="text-gray-400">Meaningful conversations for curious minds.</p>
            </div>
            <div>
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Episodes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Articles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Book Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-lg font-semibold mb-4">Connect</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-lg font-semibold mb-4">Subscribe</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Apple Podcasts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Spotify</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Google Podcasts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RSS Feed</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 YourPodcast. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PodcastWebsite;