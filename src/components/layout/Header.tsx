import React from 'react';
import { HeaderInterface } from 'src/types';

const Header = ({
  events: { zoom, flipH, flipV, rotateDelta30, invert, applyColorMap, reset },
}: HeaderInterface) => {
  return (
    <header className='w-full h-[7.25rem] border-b-[5px] border-color-accent overflow-hidden flex flex-row items-center'>
      <div className='w-full h-full overflow-x-auto'>
        <div className='flex flex-row justify-between w-full h-full'>
          <h1 className='flex items-center mr-12 ml-[2.125rem]'>
            <button className='text-color-menu-logo'>
              <p className='whitespace-nowrap'>
                Dicom Viewer(with Cornerstone.js)
              </p>
            </button>
          </h1>
          <ul className=' flex flex-row items-center gap-4 mr-6'>
            <li className='text-color-menu'>
              <button onClick={zoom}>
                <p className='whitespace-nowrap px-2 py-3'>Zoom</p>
              </button>
            </li>
            <li className='text-color-menu'>
              <button>
                <p className='whitespace-nowrap px-2 py-3'>Flip H</p>
              </button>
            </li>
            <li className='text-color-menu'>
              <button>
                <p className='whitespace-nowrap px-2 py-3'>Flip V</p>
              </button>
            </li>
            <li className='text-color-menu'>
              <button>
                <p className='whitespace-nowrap px-2 py-3'>Rotate Delta 30</p>
              </button>
            </li>
            <li className='text-color-menu'>
              <button>
                <p className='whitespace-nowrap px-2 py-3'>Invert</p>
              </button>
            </li>
            <li className='text-color-menu'>
              <button onClick={applyColorMap}>
                <p className='whitespace-nowrap px-2 py-3'>Apply ColorMap</p>
              </button>
            </li>
            <li className='text-color-menu'>
              <button>
                <p className='whitespace-nowrap px-2 py-3'>Reset</p>
              </button>
            </li>
          </ul>
          <div className='flex gap-6 pr-[2.125rem]'>
            <div className='flex items-center'>
              <button>
                <p className='px-7 whitespace-nowrap bg-color-accent py-4 text-white'>
                  Previous Image
                </p>
              </button>
            </div>
            <div className='flex items-center'>
              <button>
                <p className='px-7 whitespace-nowrap bg-color-accent py-4 text-white'>
                  Next Image
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
