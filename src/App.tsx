import * as cornerstone3D from '@cornerstonejs/core';
import * as cornerstone3dTool from '@cornerstonejs/tools';
import Header from './components/layout/Header';
import MedicalImageContainer from './components/layout/MedicalImageContainer';
import { useLayoutEffect, useRef } from 'react';
import useSystemStore from './store/useSystemStore';
import { ViewportType } from './types';
import { Enums } from '@cornerstonejs/core';

function App() {
  const { isInitCornerstone3D, setInitCornerstone3D } = useSystemStore();
  const leftViewPortRef = useRef<HTMLDivElement>(null);
  const rightViewPortRef = useRef<HTMLDivElement>(null);
  const leftViewEngine = useRef<cornerstone3D.RenderingEngine | null>(null);
  const rightViewEngine = useRef<cornerstone3D.RenderingEngine | null>(null);

  const handleClickEvents = {
    zoom: () => {
      if (leftViewEngine.current) {
        const getStackViewports = leftViewEngine.current.getStackViewports();
        getStackViewports[0].setZoom(10);
        console.info('getStackViewports', getStackViewports);
      }
    },
    flipH: () => {
      //
    },
    flipV: () => {
      //
    },
    rotateDelta30: () => {
      //
    },
    invert: () => {
      //
    },
    applyColorMap: () => {
      if (leftViewEngine.current) {
        const getStackViewports = leftViewEngine.current.getStackViewports();
        console.info('getStackViewports', getStackViewports);
      }
    },
    reset: () => {
      //
    },
  };

  const initCornerstone3D = async () => {
    try {
      const result = await cornerstone3D.init();
      cornerstone3dTool.init();
      leftViewEngine.current = new cornerstone3D.RenderingEngine();
      rightViewEngine.current = new cornerstone3D.RenderingEngine();
      setInitCornerstone3D(result);
    } catch (error) {
      setInitCornerstone3D(false);
      console.error(error);
    }
  };

  useLayoutEffect(() => {
    initCornerstone3D();
  }, []);

  useLayoutEffect(() => {
    if (
      leftViewEngine.current &&
      rightViewEngine.current &&
      leftViewPortRef.current &&
      rightViewPortRef.current &&
      isInitCornerstone3D
    ) {
      leftViewEngine.current.setViewports([
        {
          viewportId: 'leftViewport',
          type: ViewportType.STACK,
          element: leftViewPortRef.current,
          defaultOptions: {
            orientation: Enums.OrientationAxis.AXIAL,
          },
        },
      ]);

      leftViewEngine.current.enableElement({
        viewportId: 'leftViewport',
        type: ViewportType.STACK,
        element: leftViewPortRef.current,
        defaultOptions: {
          orientation: Enums.OrientationAxis.AXIAL,
        },
      });
      rightViewEngine.current.setViewports([
        {
          viewportId: 'rightViewPort',
          type: ViewportType.STACK,
          element: rightViewPortRef.current,
          defaultOptions: {
            orientation: Enums.OrientationAxis.AXIAL,
          },
        },
      ]);

      rightViewEngine.current.enableElement({
        viewportId: 'rightViewPort',
        type: ViewportType.STACK,
        element: rightViewPortRef.current,
        defaultOptions: {
          orientation: Enums.OrientationAxis.AXIAL,
        },
      });
      const leftViewport = leftViewEngine.current.getViewport('leftViewport');
      console.info('viewport', leftViewport);
      const rightViewport =
        rightViewEngine.current.getViewport('rightViewPort');
      console.info('viewport', rightViewport);
    }
  }, [
    leftViewPortRef,
    rightViewPortRef,
    leftViewEngine,
    rightViewEngine,
    isInitCornerstone3D,
  ]);

  return (
    <div className='flex flex-col w-full h-full'>
      <Header
        events={{
          zoom: handleClickEvents.zoom,
          applyColorMap: handleClickEvents.applyColorMap,
        }}
      />
      <MedicalImageContainer
        leftViewPortRef={leftViewPortRef}
        rightViewPortRef={rightViewPortRef}
      />
    </div>
  );
}

export default App;
