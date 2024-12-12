import {create} from 'zustand';

interface SubstanceState {
  usedSubstances: string[];
  addSubstance: (substance: string) => void;
  removeSubstance: (substance: string) => void;
}

const useSubstanceStore = create<SubstanceState>((set) => ({
  usedSubstances: [],
  addSubstance: (substance: string) =>
    set((state) => ({ usedSubstances: [...state.usedSubstances, substance] })),
  removeSubstance: (substance: string) =>
    set((state) => ({
      usedSubstances: state.usedSubstances.filter((s) => s !== substance),
    })),
}));
