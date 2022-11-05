import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import { getAllItems } from '../public/lib/items-util';
import PageBanner from '../components/page-banner/index';
import Team from '../components/team/index';

function AboutPage(props) {
  return (
    <fragment>

      <PageBanner />
      <About />
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      <Services services={props.services} />
      <iframe src='infog.pdf' className="w-full px-40 aspect-square py-10" />
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
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
