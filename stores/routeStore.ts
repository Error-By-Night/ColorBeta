import { create } from 'zustand';

import type { ColorblindMode, SampledHoldColor } from '@/core/color/types';

type RouteState = {
  sampledColor: SampledHoldColor | null;
  colorTolerance: number;
  colorblindMode: ColorblindMode;
  holdImageUri: string | null;
  wallImageUri: string | null;
  setSampledColor: (color: SampledHoldColor | null) => void;
  setColorTolerance: (tolerance: number) => void;
  setColorblindMode: (mode: ColorblindMode) => void;
  setHoldImageUri: (uri: string | null) => void;
  setWallImageUri: (uri: string | null) => void;
  resetSession: () => void;
};

const initialState = {
  sampledColor: null,
  colorTolerance: 15,
  colorblindMode: 'none' as ColorblindMode,
  holdImageUri: null,
  wallImageUri: null,
};

export const useRouteStore = create<RouteState>((set) => ({
  ...initialState,
  setSampledColor: (color) => set({ sampledColor: color }),
  setColorTolerance: (tolerance) => set({ colorTolerance: tolerance }),
  setColorblindMode: (mode) => set({ colorblindMode: mode }),
  setHoldImageUri: (uri) => set({ holdImageUri: uri }),
  setWallImageUri: (uri) => set({ wallImageUri: uri }),
  resetSession: () => set(initialState),
}));
