import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
};

function VerticalFeatureRow(props: IVerticalFeatureRowProps) {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
      'max-w-screen-lg',
      'mx-auto',
        ' px-1',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="  w-full sm:w-1/2 text-align-left sm:px-6 ">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { VerticalFeatureRow };
