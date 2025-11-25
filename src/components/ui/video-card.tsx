import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface VideoCardProps {
  thumbnailUrl: string;
  title: string;
  channelName: string;
  views: string;
  uploadDate: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  thumbnailUrl,
  title,
  channelName,
  views,
  uploadDate,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 to-black cursor-pointer"
    >
      <Card className="bg-transparent border-none">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={thumbnailUrl || 'https://images.unsplash.com/photo-1517429574076-377a81478a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4 text-white">
          <h3 className="text-lg font-semibold truncate mb-1">{title}</h3>
          <p className="text-sm text-gray-400 mb-2">{channelName}</p>
          <div className="flex justify-between text-xs text-gray-500">
            <span>{views}</span>
            <span>{uploadDate}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          {/* Optional: Add channel avatar or other actions here */}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
