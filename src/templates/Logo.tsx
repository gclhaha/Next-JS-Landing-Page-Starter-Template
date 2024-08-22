import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src="/assets/images/favicon-32x32.png"
        alt={AppConfig.site_name}
        width={size}
        height={size}
        className="mr-2"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
