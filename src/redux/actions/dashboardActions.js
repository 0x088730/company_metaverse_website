export const DASHBOARDACTION = 'DASHBOARDACTION';

export const insertDashboardStatus = (status) => ({
  type: DASHBOARDACTION,
  status,
});
