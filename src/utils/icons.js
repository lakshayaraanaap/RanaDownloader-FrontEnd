import {
  Zap, Shield, Smartphone, FileVideo, Diamond, Moon,
  Clock, Link, QrCode, LayoutGrid, Star,
  Instagram, Youtube, Facebook, Music2, Twitter,
  PlayCircle, Clapperboard, MessageCircle, MessageSquare, AtSign, Camera,
  Linkedin, Ghost, Pin, Share2,
  Twitch, Tv, Video, MonitorPlay, Bird,
} from 'lucide-react';

const iconMap = {
  Zap, Shield, Smartphone, FileVideo, Diamond, Moon,
  Clock, Link, QrCode, LayoutGrid, Star,
  Instagram, Youtube, Facebook, Music2, Twitter,
  PlayCircle, Clapperboard, MessageCircle, MessageSquare, AtSign, Camera,
  Linkedin, Ghost, Pin, Share2,
  Twitch, Tv, Video, MonitorPlay, Bird,
};

export function getIcon(name) {
  return iconMap[name] || Star;
}
