// File chứa cấu hình hệ thống & thông tin nhạy cảm
// Cấu hình Telegram đã được chuyển sang api-config.js để dùng chung cho toàn hệ thống

// 2. DANH SÁCH ĐỀ THI MẶC ĐỊNH (Dành cho ai không được gán đề riêng)
const DEFAULT_EXAMS = [


    { ten: 'Luật Xây Dựng', url: 'LXD.html', },
    { ten: 'Chủ Nghĩa Xã Hội Khoa Học', url: 'CNXHKH.html', }

];

// 3. DANH SÁCH TÀI KHOẢN DO ADMIN CẤP (CƠ SỞ DỮ LIỆU THU NHỎ)
// Cấu trúc: "TàiKhoản": { pass: "MậtKhẩu", name: "Tên Hiển Thị", exams: [...] }
// Nếu bỏ trống "exams", hệ thống sẽ tự nạp DEFAULT_EXAMS ở trên.
