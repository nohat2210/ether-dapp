import React from 'react';
import { Button } from 'shared/components/common';
// import CardProduct from 'pages/market-place/components/CardProduct';
// import { useModal } from 'shared/hooks/useModal';
import { useToast } from 'shared/hooks/useToast';
// import Pagination from 'shared/components/Pagination';

function Test() {
  // const { modal, hide } = useModal();
  const { toast } = useToast();
  return (
    <div className="test">
      <Button
        onClick={() =>
          // modal.confirm({
          //   title: 'this is title',
          //   content: 'content..........',
          //   onCancel() {
          //     hide();
          //   },
          //   onOk() {
          //     hide();
          //   },
          // })
          toast.success('success login')
        }
        className="test__btn"
        htmlType="button"
        type="primary"
      >
        Test function
      </Button>
      {/* <CardProduct />
      <Pagination /> */}
    </div>
  );
}

export default Test;
