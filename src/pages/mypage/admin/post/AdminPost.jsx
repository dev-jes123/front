import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import MyPageTitle from '../../general/component/MyPageTitle';
import MyPageTabMenu from '../../general/component/MyPageTabMenu';

const AdminPost = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'list', label: '목록' },
    { id: 'write', label: '작성' },
  ];

  // 현재 경로에 따라 activeId 결정
  const getActiveId = () => {
    if (location.pathname.includes('/write')) return 'write';
    return 'list';
  };

  const handleTabChange = (tabId) => {
    if (tabId === 'write') {
      navigate('/admin/post/write');
    } else {
      navigate('/admin/post');
    }
  };

  return (
    <div style={styles.page}>
      <MyPageTitle title="정보제공 관리" description="게시글을 관리하세요" />
      <MyPageTabMenu
        tabs={tabs}
        activeId={getActiveId()}
        onChange={handleTabChange}
      />

      <div style={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '28px 32px 40px',
  },
  content: {
    marginTop: '10px',
  },
};

export default AdminPost;
