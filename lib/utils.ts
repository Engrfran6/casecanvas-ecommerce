import {type ClassValue, clsx} from 'clsx';
import CryptoJS from 'crypto-js';
import {Metadata} from 'next';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(price);
};

export function constructMetadata({
  title = 'CustomHub – Custom high-quality gear for home, office, and beyond',
  description = 'Create custom, high-quality products in seconds with CustomHub',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{url: image}],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@codewith_deulo',
    },
    icons,
    metadataBase: new URL('https://customhub.vercel.app/'),
  };
}

export const convertTo24ByteChar = (input: string) => {
  // Create a SHA-256 hash of the input string
  const fullHash = CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);

  // Take the first 48 characters (24 bytes) of the hash
  const truncatedHash = fullHash.slice(0, 24);

  return truncatedHash;
};
