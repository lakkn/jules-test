import React from 'react';
import HeroImage from './HeroImage';
import LoginForm from './LoginForm';
import SocialLoginButtons from './SocialLoginButtons';
import FooterLinks from './FooterLinks';

const LandingPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div>
        <HeroImage />
        <LoginForm />
        <SocialLoginButtons />
      </div>
      <div>
        <FooterLinks />
      </div>
    </div>
  );
};

export default LandingPage;
