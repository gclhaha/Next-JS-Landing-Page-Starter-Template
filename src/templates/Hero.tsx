import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">联系我们</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'专业、有趣的球类运动改善工具\n'}
            <span className="text-primary-500">提高球技，一战成名</span>
          </>
        }
        description="前10000名用户免费赠送永久会员"
        button={
          <Link href="/">
            <Button xl>免费下载Leep(敬请期待)</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
