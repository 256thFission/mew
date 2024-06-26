import Head from 'next/head';
import React from 'react';
import Hero from '../components/home-page/hero';
import { getAllItems, getFeaturedItems } from '../public/lib/items-util';
import About from '../components/home-page/about';
import { VerticalFeatures } from '../components/features/VerticalFeatures.tsx';
import Services from '../components/home-page/services.js';
import cardStack from '../components/cardStack';
import Arrow from '../components/components/arrow';
import 'react-datetime-picker/dist/DateTimePicker.css';


export default function Home(props) {
  return (
      //TO:DO: this is so
    <fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
      <Hero heroItems={props.heroItems} />
      <div className="stack">
      <p className="font-Broadway underline decoration-accent underline-offset-4 "> Our Mission      </p>
        <div className="grid-cols-3 grid gap-2">
      <h2 className="max-w-xs col-span-2 font-Marte leading-relaxed">
    Through our platform, we connect student leaders with non-profits in need.
      </h2>

          <div className="flex static flex-col max-h-40 items-start justify-items-start !position-relative">
              <span className="font-Oswald text-5xl max-w-2xs text-base/8 shadowy text-accent">Join us </span>
          <Arrow className=" arrows !justify-self-end  z-10"/>
          </div>
        </div>
    </div>
      {/*<Services services={props.services} />*/}

    </fragment>

  );
}

export function getStaticProps() {
  const heroItems = getAllItems('heros');
  const posts = getAllItems('posts');
  const projects = getAllItems('projects');
  const services = getAllItems('services');
  const pricingItems = getAllItems('pricing');
  const testimonialItems = getAllItems('testimonial');
  const brandItems = getAllItems('brands');
  const LatestProject = getFeaturedItems(projects);
  const FeaturedPost = getFeaturedItems(posts);

  return {
    props: {
      heroItems,
      projects: LatestProject,
      posts: FeaturedPost,
      services,
      pricingItems,
      testimonialItems,
      brandItems,
    },
  };
}
