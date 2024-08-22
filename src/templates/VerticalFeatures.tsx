import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="专业的球类运动改善工具"
    description="业余选手也可以享受到如职业运动员一般，有着专业教练和数据团队同样效果的训练指导。"
  >
    <VerticalFeatureRow
      title="运动记录"
      description="在智能手表上使用 Leep 开启运动，你可以实时查看运动的关键数据，并在运动结束后查看本次运动表现。"
      image="https://s1.locimg.com/2024/08/22/183e2533b90f3.PNG"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="赛后复盘"
      description="丰富多样的数据让你更了解自己进攻、防守偏好，定制的AI模型赛后复盘助你提高球技。"
      image="https://s1.locimg.com/2024/08/22/4c4b832aafcde.PNG"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="好友对战"
      description="通过对手了解自己的运动表现，体验和好友运动快乐的同时，还能提高竞技水平。"
      image="https://s1.locimg.com/2024/08/22/9568a7e83a4aa.PNG"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
