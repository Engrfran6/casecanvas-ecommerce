'use client';

import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';

const cases = [
  {
    name: 'iPhone Cases',
    types: ['iPhone 16 Pro Max', 'iPhone 16 Plus', 'iPhone 16'],
  },
  {
    name: 'Samsung Cases',
    types: ['Galaxy S24 Ultra', 'Galaxy S24 Plus', 'Galaxy S24'],
  },
  {
    name: 'Google Cases',
    types: ['Pixel 9 Pro XL', 'Pixel 9 Pro', 'Pixel 9', 'Pixel 8 Pro', 'Pixel 8'],
  },
  {
    name: 'Airpod Cases',
    types: ['Airpod Pro', 'Airpod 3rd Gen', 'Airpod 1st / 2nd Gen'],
  },
];

const homeAndOffice = [
  {
    name: 'Home Goods',
    types: ['Blankets', 'Beach Towels', 'Golf Towels', 'Candles', 'Canvases', 'Posters', 'Puzzles'],
  },
  {
    name: 'Office & Stationery',
    types: ['Desk Mats', 'Journals', 'Notebooks', 'Clocks', 'Stickers', 'Magnets'],
  },
];
const drinkware = [
  {
    name: 'Tumblers',
    types: ['Insulated Tumblers'],
  },
  {
    name: 'Mugs & Koozies',
    types: ['Travel Mug', 'Coffee Mug'],
  },
];
const apparel = [
  {
    name: 'T-Shirts',
    types: ['Adult T-Shirt', 'Youth T-Shirt', 'Toddler T-Shirt', 'Infant T-Shirt'],
  },
  {
    name: 'Hoodies',
    types: ['Adult Hoodies'],
  },
  {
    name: 'Watch Bands',
    types: ['Apple Watch Bands'],
  },
];

export function NavbarMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="md:flex flex flex-wrap absolute md:relative top-8 md:top-0 right-5 md:right-0 bg-white shadow-xl md:shadow-none py-3 gap-3 px-2 md:bg-transparent">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cases</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px]">
              {cases.map((component, i) => (
                <ListItem key={i} title={component.name}>
                  {component.types.map((type, index) => (
                    <span
                      key={index}
                      className="block select-none space-y-1 rounded-md p-1.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      {type}
                    </span>
                  ))}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Home & Office</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px]">
              <div className="md:grid grid-cols-2 gap-3 col-span-2 hidden">
                <div>
                  <Image src="/testimonials/3.jpg" width={500} height={500} alt="" />
                  <span>Custom phones</span>
                </div>
                <div>
                  <Image src="/testimonials/4.jpg" width={500} height={500} alt="" />
                  <span>custom mugs</span>
                </div>
              </div>

              {homeAndOffice.map((component, i) => (
                <ListItem key={i} title={component.name}>
                  {component.types.map((type, index) => (
                    <span
                      key={index}
                      className="block select-none space-y-1 rounded-md p-1.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      {type}
                    </span>
                  ))}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Drinkware</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px]">
              {drinkware.map((component, i) => (
                <ListItem key={i} title={component.name}>
                  {component.types.map((type, index) => (
                    <span
                      key={index}
                      className="block select-none space-y-1 rounded-md p-1.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      {type}
                    </span>
                  ))}
                </ListItem>
              ))}

              <div className="md:grid grid-cols-2 gap-3 col-span-2  hidden">
                <div>
                  <Image src="/testimonials/3.jpg" width={500} height={500} alt="" />
                  <span>Custom phones</span>
                </div>
                <div>
                  <Image src="/testimonials/4.jpg" width={500} height={500} alt="" />
                  <span>custom mugs</span>
                </div>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Apparel</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px]">
              <div className=" hidden md:block">
                <Image src="/testimonials/3.jpg" width={500} height={500} alt="" />
                <span>Custom phones</span>
              </div>

              {apparel.map((component, i) => (
                <ListItem key={i} title={component.name}>
                  {component.types.map((type, index) => (
                    <span
                      key={index}
                      className="block select-none space-y-1 rounded-md p-1.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      {type}
                    </span>
                  ))}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Gift Cards
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({title, children, ...props}, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a ref={ref} {...props}>
            <div className="text-sm font-medium leading-none mb-3">{title}</div>
            <p className="flex flex-col line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = 'ListItem';
