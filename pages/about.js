import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import { getAllItems } from '../public/lib/items-util';
import PageBanner from '../components/page-banner/index';
import Team from '../components/team/index';

function AboutPage(props) {
  return (
    <fragment>

      <PageBanner />
      <Team teamItems={props.teamItems} />
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      <iframe src='infog.pdf' className="w-full px-40 aspect-square py-10" id="infog"/>
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}

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
