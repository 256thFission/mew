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
        title="The KVU Mission"
        description="We aim to provide our free, accessible virtual platform for non-profit organizations in Kern County to access local high school volunteers dedicated to community service.  "
        image="/Public/images/"
        imageAlt="Wow put an image here"
        reverse
      />
    {/*// </Section>*/}
      </div>
  );
}

export { VerticalFeatures };
