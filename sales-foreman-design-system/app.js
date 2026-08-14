// Synced app.js logic (embedded in index.html for zero CORS issue)
// Users with Passwords for Authentication
const USERS = [
  { id: 'usr_mgr', username: 'manager', password: '123', name: 'คุณอนันต์ (ผู้จัดการ)', role: 'manager', roleName: 'ผู้จัดการ (Manager)', avatar: '👑', color: 'emerald' },
  { id: 'usr_sales', username: 'sales', password: '123', name: 'คุณนิภา (เซลล์)', role: 'sales', roleName: 'เซลล์ (Sales)', avatar: '💼', color: 'blue' },
  { id: 'usr_designer', username: 'designer', password: '123', name: 'คุณกิตติ (สถาปนิก/ออกแบบ)', role: 'designer', roleName: 'ฝ่ายออกแบบ (Designer)', avatar: '🎨', color: 'purple' },
  { id: 'usr_foreman', username: 'foreman', password: '123', name: 'คุณวิชัย (โฟร์แมน)', role: 'foreman', roleName: 'โฟร์แมน (Foreman)', avatar: '👷', color: 'amber' }
];

console.log("Sales, Designer & Foreman Workflow System (Light/Dark Theme + Password Auth + Calendar 2569-2575 Loaded)");
