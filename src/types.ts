export enum ViewportType {
  STACK = 'stack',
  ORTHOGRAPHIC = 'orthographic',
  PERSPECTIVE = 'perspective',
  VOLUME_3D = 'volume3d',
  VIDEO = 'video',
}

export interface HeaderInterface {
  events: {
    zoom: () => void;
    flipH?: () => void;
    flipV?: () => void;
    rotateDelta30?: () => void;
    invert?: () => void;
    applyColorMap: () => void;
    reset?: () => void;
  };
}
