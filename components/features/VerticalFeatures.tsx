import { VerticalFeatureRow } from './VerticalFeatureRow';
import { Section } from '../layout/Section';

function VerticalFeatures() {
  return (
    // <Section
    //   title="Your title here"
    //   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
    // >
      <div>
      <VerticalFeatureRow
        title="KVU Mission"
        description="Here at Kern Volunteers United, we aim to connect Kern County's non-profit organizations with student volunteers by creating a platform where we can foster easy, quick, and efficient communcation. "
        image="/Public/images/"
        imageAlt="Wow put an image here"
        reverse
      />
    {/*// </Section>*/}
      </div>
  );
}

export { VerticalFeatures };
