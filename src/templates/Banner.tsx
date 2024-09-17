import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="上海必辉科技有限公司"
      subtitle="leep@b7e.fun"
      button={
        <Link href="/">
          <Button>联系我们</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
