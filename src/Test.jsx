import React from 'react';
import { Button } from 'shared/components/common';
import { useToast } from 'shared/hooks/useToast';

function Test() {
  const { error, warn, info, success } = useToast();
  console.log('success', success);

  return (
    <div className="flex center2 h-screen">
      <Button
        htmlType="button"
        type="primary"
        onClick={() => success('Login success')}
      >
        Test function
      </Button>
      {/* {success('Login success')} */}
    </div>
  );
}

export default Test;
