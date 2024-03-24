import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface SystemState {
  isInitCornerstone3D: boolean;
}
interface SystemAction {
  setInitCornerstone3D: (isCornerstone3D: boolean) => void;
}

const useSystemStore = create<SystemState & SystemAction>()(
  devtools(
    immer((set) => ({
      isInitCornerstone3D: false,
      setInitCornerstone3D: (isInitCornerstone3D: boolean) => {
        set((state) => {
          state.isInitCornerstone3D = isInitCornerstone3D;
        });
      },
    })),
  ),
);

export default useSystemStore;
