export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const APP_NAME = 'RanaDownloader';
export const TAGLINE = 'Fast • Secure • Easy';

export const PLATFORMS = [
  {
    id: 'youtube',
    name: 'YouTube',
    icon: 'Youtube',
    color: '#FF0000',
    description: 'Save YouTube videos and audio in multiple formats and qualities.',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'Facebook',
    color: '#1877F2',
    description: 'Download Facebook videos, reels, and stories with ease.',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'Instagram',
    color: '#E4405F',
    description: 'Download Instagram reels, stories, posts, and IGTV videos in HD quality.',
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    icon: 'Twitter',
    color: '#1DA1F2',
    description: 'Download videos and GIFs from X (Twitter) posts instantly.',
  },
  {
    id: 'reddit',
    name: 'Reddit',
    icon: 'MessageCircle',
    color: '#FF4500',
    description: 'Download Reddit videos and GIFs from posts and comments.',
  },
  {
    id: 'threads',
    name: 'Threads',
    icon: 'AtSign',
    color: '#000000',
    description: 'Save photos and videos from Threads posts in high quality.',
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    icon: 'Pin',
    color: '#E60023',
    description: 'Download Pinterest pins, images, and idea videos in HD.',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: 'Linkedin',
    color: '#0A66C2',
    description: 'Save LinkedIn post images and videos with one click.',
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    icon: 'Ghost',
    color: '#FFFC00',
    description: 'Download public Snapchat stories and Spotlight videos.',
  },
  {
    id: 'sharechat',
    name: 'ShareChat',
    icon: 'Share2',
    color: '#02B54C',
    description: 'Download ShareChat videos, images, and status posts.',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: 'Music2',
    color: '#FE2C55',
    description: 'Save TikTok videos without watermark, plus audio as MP3.',
  },
  {
    id: 'vimeo',
    name: 'Vimeo',
    icon: 'PlayCircle',
    color: '#1AB7EA',
    description: 'Download Vimeo videos in every quality, plus audio as MP3.',
  },
  {
    id: 'dailymotion',
    name: 'Dailymotion',
    icon: 'Clapperboard',
    color: '#00AAFF',
    description: 'Save Dailymotion videos and clips in MP4 with audio extraction.',
  },
  {
    id: 'twitch',
    name: 'Twitch',
    icon: 'Twitch',
    color: '#9146FF',
    description: 'Download Twitch clips and VODs in every available quality.',
  },
  {
    id: 'bilibili',
    name: 'Bilibili',
    icon: 'Tv',
    color: '#FB7299',
    description: 'Grab Bilibili videos — upload cookies for members-only streams.',
  },
  {
    id: 'vk',
    name: 'VK',
    icon: 'Video',
    color: '#0077FF',
    description: 'Download VK and VK Video clips in all resolutions.',
  },
  {
    id: 'rumble',
    name: 'Rumble',
    icon: 'MonitorPlay',
    color: '#85C710',
    description: 'Save Rumble videos and Shorts up to 1080p, plus audio.',
  },
  {
    id: 'bluesky',
    name: 'Bluesky',
    icon: 'Bird',
    color: '#1185FE',
    description: 'Download videos posted on Bluesky straight from the post link.',
  },
];

export const FEATURES = [
  { id: 1, icon: 'Zap', title: 'Fast Downloads', description: 'Lightning-fast download speeds powered by optimized servers.' },
  { id: 2, icon: 'Shield', title: 'Secure Experience', description: 'Your data is encrypted and never stored on our servers.' },
  { id: 3, icon: 'Smartphone', title: 'Mobile Friendly', description: 'Works perfectly on all devices - phones, tablets, and desktops.' },
  { id: 4, icon: 'FileVideo', title: 'Multiple Formats', description: 'Choose from MP4, MP3, WEBM, and more format options.' },
  { id: 5, icon: 'Diamond', title: 'HD Quality Support', description: 'Download content in the highest quality available up to 4K.' },
  { id: 6, icon: 'Moon', title: 'Dark Mode', description: 'Easy on your eyes with a beautiful dark theme interface.' },
  { id: 7, icon: 'Clock', title: 'Download History', description: 'Keep track of all your downloads with our history feature.' },
  { id: 8, icon: 'Link', title: 'Copy Link', description: 'Quickly copy shareable links with a single click.' },
  { id: 9, icon: 'QrCode', title: 'QR Code Sharing', description: 'Generate QR codes to share downloads with friends.' },
  { id: 10, icon: 'LayoutGrid', title: 'Responsive Design', description: 'A seamless experience across all screen sizes and devices.' },
];

export const FAQ_DATA = [
  {
    id: 1,
    question: 'Is RanaDownloader free to use?',
    answer: 'Yes, RanaDownloader is completely free to use. There are no hidden charges or premium plans required for basic functionality.',
  },
  {
    id: 2,
    question: 'Do I need to create an account?',
    answer: 'No, RanaDownloader does not require any registration. Simply paste the URL and start downloading.',
  },
  {
    id: 3,
    question: 'Is it safe to use RanaDownloader?',
    answer: 'Absolutely. RanaDownloader uses encrypted connections and does not store any of your data or download history on external servers.',
  },
  {
    id: 4,
    question: 'What platforms are supported?',
    answer: 'RanaDownloader supports YouTube, Facebook, Instagram, X (Twitter), Reddit, Threads, Pinterest, LinkedIn, Snapchat, ShareChat, TikTok, Vimeo, Dailymotion, Twitch, Bilibili, VK, Rumble, and Bluesky. We are constantly working to add more platforms.',
  },
  {
    id: 5,
    question: 'What download formats are available?',
    answer: 'Depending on the source platform, you can download in MP4, MP3, WEBM, and other formats. Available qualities range from 360p to 4K.',
  },
  {
    id: 6,
    question: 'Can I use RanaDownloader on mobile?',
    answer: 'Yes! RanaDownloader is fully responsive and works great on all mobile devices, tablets, and desktops.',
  },
  {
    id: 7,
    question: 'Are there any download limits?',
    answer: 'We aim to provide unlimited downloads. However, to maintain service quality, we may implement fair usage policies during peak times.',
  },
];

export const STATS = [
  { value: '18+', label: 'Platforms' },
  { value: '4K', label: 'Max Quality' },
  { value: 'MP4/MP3', label: 'Formats' },
  { value: '100%', label: 'Free' },
];
