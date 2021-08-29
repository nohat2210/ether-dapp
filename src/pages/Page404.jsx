import React from 'react';
import { Button } from 'shared/components/common';
import useRoutes from 'shared/hooks/useRoutes';

function Page404() {
  const { history } = useRoutes();
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          history.push('/');
        }}
      >
        Back to Home Page
      </Button>
      Page not Found
    </div>
  );
}

export default Page404;
