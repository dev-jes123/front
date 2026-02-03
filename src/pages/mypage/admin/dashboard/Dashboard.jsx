import React from 'react';
import MyPageTitle from '../../general/component/MyPageTitle';
import KpiSection from './KpiSection';
import VisitorsTrend from './VisitorsTrend';
import AverageUsage from './AverageUsage';
import CommunityDailyStats from './CommunityDailyStats';
import TopRegions from './TopRegions';

const Dashboard = () => {
  return (
    <div style={styles.page}>
      <MyPageTitle title="대시보드" description="서비스 현황을 확인하세요" />

      <div style={styles.content}>
        <KpiSection />
        <VisitorsTrend />
        <AverageUsage />
        <CommunityDailyStats />
        <TopRegions />
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '28px 32px 40px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
};

export default Dashboard;
