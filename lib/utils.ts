import {type ClassValue, clsx} from 'clsx';
import {Metadata} from 'next';
import {twMerge} from 'tailwind-merge';
import CryptoJS from 'crypto-js';

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
  title = 'CaseCanvas - custom high-quality phone cases',
  description = 'Create custom high-quality phone cases in seconds',
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
      creator: '@joshtriedcoding',
    },
    icons,
    metadataBase: new URL('https://CaseCanvas.vercel.app/'),
  };
}

export const convertTo24ByteChar = (input: string) => {
  // Create a SHA-256 hash of the input string
  const fullHash = CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);

  // Take the first 48 characters (24 bytes) of the hash
  const truncatedHash = fullHash.slice(0, 24);

  return truncatedHash;
};
