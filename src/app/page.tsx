import React from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Play, MoreHorizontal, Eye, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

// Placeholder data for video cards
const videos = [
  { id: 1, title: 'The Future of AI in Creative Industries', channel: 'Tech Insights', views: '1.2M', likes: '50K' },
  { id: 2, title: 'Exploring the Depths of the Ocean', channel: 'Nature Explorers', views: '800K', likes: '30K' },
  { id: 3, title: 'Mastering React Hooks: A Deep Dive', channel: 'Code Masters', views: '1.5M', likes: '65K' },
  { id: 4, title: 'The Art of Japanese Calligraphy', channel: 'Artistic Journeys', views: '500K', likes: '20K' },
  { id: 5, title: 'Sustainable Living: Tips for a Greener Future', channel: 'Eco Warriors', views: '950K', likes: '45K' },
  { id: 6, title: 'Introduction to Quantum Computing', channel: 'Science Explained', views: '700K', likes: '25K' },
  { id: 7, title: 'Exploring Ancient Civilizations', channel: 'History Buffs', views: '1.1M', likes: '55K' },
  { id: 8, title: 'The Science of Sleep: Optimize Your Rest', channel: 'Health & Wellness', views: '600K', likes: '22K' },
];

const videoGridVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const heroTextVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {/* Hero Section */}
          <motion.section
            className="relative mb-12 h-[50vh] flex items-center justify-center overflow-hidden rounded-xl shadow-xl"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9537b98d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}
            variants={videoGridVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div className="relative z-10 text-center px-4">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                variants={heroTextVariants}
              >
                Discover Your Next Obsession
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                variants={heroTextVariants}
                transition={{ delay: 0.5 }}
              >
                Dive into a universe of endless videos, from groundbreaking discoveries to heartwarming stories. 
              </motion.p>
              <motion.div 
                variants={heroTextVariants}
                transition={{ delay: 1 }}
              >
                <Button variant="secondary" size="lg" className="rounded-full px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-300">
                  Explore Now <Play className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.section>

          {/* Video Feed Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={videoGridVariants}
            initial="hidden"
            animate="visible"
          >
            {videos.map((video) => (
              <motion.div key={video.id} variants={cardVariants} className="group relative overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
                <Card className="border-none bg-transparent">
                  <CardContent className="p-0">
                    <AspectRatio ratio={16 / 9} className="bg-muted relative">
                      <img
                        src={`https://source.unsplash.com/random/800x450?sig=${video.id}`}
                        alt={video.title}
                        className="rounded-t-lg object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                        <Button variant="ghost" size="lg" className="rounded-full p-4 bg-white/20 backdrop-blur-sm hover:bg-white/40">
                          <Play className="h-8 w-8 fill-white text-white" />
                        </Button>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                        10:{Math.floor(Math.random() * 60)}
                      </span>
                    </AspectRatio>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold truncate mb-1 transition-colors duration-300 group-hover:text-primary-foreground">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {video.channel}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {video.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {video.likes}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="ghost" size="icon" className="rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/80">
                    <MoreHorizontal className="h-5 w-5 text-white" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
