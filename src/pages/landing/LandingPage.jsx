import React from 'react';
import { Button } from 'shared/components/common';
import DefaultLayout from 'layout/landing/DefaultLayout';
import { useHistory } from 'react-router-dom';
import LandingImage from 'assets/images/alchemist-1.jpg';
import { getToken } from 'core/token';

function LandingPage() {
  const token = getToken();
  const history = useHistory();
  return (
    <DefaultLayout>
      <div className="wrapper__content">
        <img
          src={LandingImage}
          alt="silk-road"
          className="landing__img object-cover w-full h-full"
        />
        <Button
          type="primary"
          className="landing__btn"
          onClick={() => {
            history.push(token ? '/market-place' : '/register');
          }}
        >
          get started
        </Button>
        <div className="info__content"></div>
      </div>
    </DefaultLayout>
  );
}

export default LandingPage;
