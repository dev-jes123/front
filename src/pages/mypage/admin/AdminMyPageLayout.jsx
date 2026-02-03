import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./component/AdminHeader";
import AdminSidebar from "./component/AdminSidebar";

// 관리자 마이페이지 전체 레이아웃
// 헤더 + (사이드바, 메인 콘텐츠) 구조
const AdminMyPageLayout = () => {
  return (
    <div style={layoutStyles.wrapper}>
      {/* 마이페이지 상단 공통 헤더 */}
      <AdminHeader />

      <div style={layoutStyles.bottomContainer}>
        {/* 왼쪽 사이드바 메뉴 */}
        <AdminSidebar />

        {/* 페이지 내용 교체 영역 */}
        <main style={layoutStyles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const layoutStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
  },

  bottomContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'stretch',
    width: '100%',
  },

  mainContent: {
    flex: 1,
    padding: '40px',
    backgroundColor: '#FFFFFF',
  },
};

export default AdminMyPageLayout;
