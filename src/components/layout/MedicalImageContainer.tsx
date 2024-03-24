import { RefObject } from 'react';

interface MedicalImageContainerInterface {
  leftViewPortRef: RefObject<HTMLDivElement>;
  rightViewPortRef: RefObject<HTMLDivElement>;
}

const MedicalImageContainer = ({
  leftViewPortRef,
  rightViewPortRef,
}: MedicalImageContainerInterface) => {
  return (
    <div className='bg-red-50 flex flex-row flex-1 w-full'>
      <div
        ref={leftViewPortRef}
        className='flex-1 border-r-[.1563rem] border-color-accent'
      ></div>
      <div
        ref={rightViewPortRef}
        className='flex-1 border-l-[.1563rem] border-color-accent'
      ></div>
    </div>
  );
};

export default MedicalImageContainer;
