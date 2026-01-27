import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    combine({
      user: null,
      isAuthenticated: false,
    },
      (set) => ({
        setIsAuthenticated: (status) => set({ isAuthenticated: status }),
        setUser: (user) => set({ user }),
      })),
    {
      name: 'auth-storage', // localStorage key
      // partialize: localStorage에 저장할 값만 골라내는 필터
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
// 여기는 로그인 여부만 담기위한 스토어
// 로그인 정보는 따로 담지 않음
export default useAuthStore;
