import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="内测用户终身免费"
      subtitle="仅限500名"
      button={
        <Link href="/">
          <Button>获取加群二维码</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
