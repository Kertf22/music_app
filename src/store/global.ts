import { create } from 'zustand'
import { Page } from '../types/page';
import { HOME_PAGE } from '../constants/pages';


interface GlobalStore {
    page: Page;
    setPage: (page: Page) => void;
    selectedTag: SearchTag;
    setSelectedTag: (tag: SearchTag) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({

    page: HOME_PAGE,
    setPage: (page: Page) => set({ page, selectedTag: 'all' }),
    selectedTag: 'all',
    setSelectedTag: (selectedTag: SearchTag) => set({ selectedTag }),

}));



