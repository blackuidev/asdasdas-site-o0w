import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, User } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    scrolled: {
      backgroundColor: 'rgba(17, 17, 17, 0.8)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '1rem 2rem',
    },
    unscrolled: {
      backgroundColor: 'transparent',
      backdropFilter: 'none',
      WebkitBackdropFilter: 'none',
      borderBottom: 'none',
      padding: '1.5rem 2rem',
    },
  };

  const logoVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  const searchVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  const avatarVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial='unscrolled'
      animate={scrolled ? 'scrolled' : 'unscrolled'}
      className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full transition-all duration-300 ease-in-out'
    >
      <div className='flex items-center gap-2 cursor-pointer'>
        <motion.div variants={logoVariants} initial='initial' animate='animate'>
          <svg
            className='w-8 h-8 text-red-600'
            viewBox='0 0 32 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M29.7217 3.72168C29.4357 3.43568 29.0747 3.27168 28.6837 3.24268L18.5677 2.59668C17.9557 2.55368 17.3817 2.77168 17.0007 3.15368L15.3577 4.79668C14.9767 5.17868 14.3997 5.39668 13.7877 5.35368L3.6717 4.70768C3.2807 4.67868 2.9197 4.84268 2.6337 5.12868C2.3477 5.41468 2.1837 5.77568 2.2127 6.16668L2.8577 16.2827C2.8997 16.8947 3.1177 17.4707 3.4997 17.8517L5.1427 19.4947C5.5247 19.8767 6.0987 20.0947 6.7117 20.1377L16.8277 20.7837C17.2187 20.8127 17.5797 20.6487 17.8657 20.3627C18.1517 20.0767 18.3157 19.7157 18.2867 19.3247L17.6417 9.20868C17.6007 8.59668 17.3827 8.02068 16.9997 7.63968L15.3577 5.99668C15.7387 5.61568 16.3147 5.39768 16.9267 5.35468L27.0427 4.70868C27.4337 4.67968 27.7947 4.84368 28.0807 5.12968C28.3667 5.41568 28.5307 5.77668 28.5017 6.16768L27.8567 16.2837C27.8157 16.8957 27.5977 17.4717 27.2157 17.8527L25.5727 19.4957C25.1917 19.8777 24.6157 20.0957 23.9997 20.1387L13.8837 20.7847C13.4927 20.8137 13.1317 20.6497 12.8457 20.3637C12.5597 20.0777 12.3957 19.7167 12.4247 19.3257L13.0697 9.20968C13.1107 8.59768 13.3287 8.02168 13.7117 7.64068L15.3547 5.99768C15.7357 5.61668 16.3117 5.39868 16.9237 5.35568L27.0397 4.70968C27.4307 4.68068 27.7917 4.84468 28.0777 5.13068C28.3637 5.41668 28.5277 5.77768 28.4987 6.16868L29.7217 3.72168Z'
              fill='currentColor'
            />
          </svg>
        </motion.div>
        <motion.h1
          variants={logoVariants}
          initial='initial'
          animate='animate'
          className='text-2xl font-bold text-white hidden md:block'
        >
          LightTube
        </motion.h1>
      </div>

      <motion.div
        variants={searchVariants}
        initial='initial'
        animate='animate'
        className='flex-1 max-w-xl mx-4'
      >
        <Input
          placeholder='Search'
          className='w-full rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/70'
          icon={<Search className='w-5 h-5 text-white/70' />}
        />
      </motion.div>

      <motion.div
        variants={avatarVariants}
        initial='initial'
        animate='animate'
        className='flex items-center gap-4'
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='cursor-pointer w-10 h-10 border-2 border-primary hover:scale-105 transition-transform duration-200'>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56 mr-4 bg-gray-800 border-gray-700 text-white backdrop-blur-md'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className='bg-gray-700' />
            <DropdownMenuItem className='hover:bg-primary/20 cursor-pointer'>Profile</DropdownMenuItem>
            <DropdownMenuItem className='hover:bg-primary/20 cursor-pointer'>Billing Settings</DropdownMenuItem>
            <DropdownMenuItem className='hover:bg-primary/20 cursor-pointer'>Integrations</DropdownMenuItem>
            <DropdownMenuItem className='hover:bg-primary/20 cursor-pointer'>API Keys</DropdownMenuItem>
            <DropdownMenuSeparator className='bg-gray-700' />
            <DropdownMenuItem className='hover:bg-primary/20 cursor-pointer'>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </motion.header>
  );
};

export default Header;
