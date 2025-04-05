import { Gift, BadgeCheck, Settings, Users, MessageCircle, Heart as HeartIcon } from 'lucide-react';
import IconWrapper from './components/IconWrapper';
import FeatureItem from './components/FeatureItem';

function FeaturesGrid() {
  return (
    <section className="w-full py-32">
      <div className="mx-auto flex max-w-screen-2xl flex-col px-5">
        <h2 className="mb-14 text-4xl font-normal leading-snug tracking-wide text-brand-black lg:text-6xl">
          Recognize,
          <br className="block md:hidden" /> motivate and track accomplishments.
        </h2>

        <div className="grid max-w-screen-2xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <FeatureItem
            icon={<IconWrapper Icon={Gift} />}
            title="Rewards"
            description="Send your peers a gift card with a message to show recognition."
          />
          <FeatureItem
            icon={<IconWrapper Icon={Users} />}
            title="Earn badges"
            description="Earn and send badges to your peers that represent their hard work."
          />
          <FeatureItem
            icon={<IconWrapper Icon={BadgeCheck} />}
            title="Workspace"
            description="Connecting people in the same workspace creating public recognition."
          />
          <FeatureItem
            icon={<IconWrapper Icon={HeartIcon} />}
            title="Leave a"
            description="React to posts with your favorite emoji to show appreciation."
          />
          <FeatureItem
            icon={<IconWrapper Icon={Settings} />}
            title="Admin access"
            description="Only admin users have access to features like reports and budgeting."
          />
          <FeatureItem
            icon={<IconWrapper Icon={MessageCircle} />}
            title="Activity"
            description="Keep track of your recognitions with our profile activities tracker."
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;
