import { Fragment } from 'react';
import HeaderTwo from '../components/HeaderTwo';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import Testimonial from '../components/home-page/testimonial';
import { getAllItems } from '/public/lib/items-util';
import Brand from '../components/home-page/brand';
import PageBanner from '../components/page-banner/index';
import Team from '/components/team/index';

function AboutPage(props) {
  return (
    <fragment>

      <PageBanner />
      <About />
      <Services services={props.services} />
      <Team teamItems={props.teamItems} />
    </fragment>
  );
}

export function getStaticProps() {
  const services = getAllItems('services');
  const testimonialItems = getAllItems('testimonial');
  const brandItems = getAllItems('brands');
  const teamItems = getAllItems('teams');

  return {
    props: {
      services,
      testimonialItems,
      brandItems,
      teamItems,
    },
  };
}

export default AboutPage;
