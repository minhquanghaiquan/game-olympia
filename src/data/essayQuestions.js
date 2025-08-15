const essayQuestions = [
  {
    id: 1,
    question: "Quan điểm chỉ đạo về phòng, chống tham nhũng, tiêu cực trong tác phẩm “Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, góp phần xây dựng Đảng và Nhà nước ta ngày càng trong sạch, vững mạnh”",
    answer: "Không dừng, không nghỉ, phải làm lâu dài, quyết liệt, kiên trì, bền bỉ và đồng bộ; Phòng, chống từ sớm, từ xa, cả ngọn lẫn gốc. Gắn kết chặt chẽ giữa phòng và chống, giữa phòng, chống tham nhũng với phòng, chống tiêu cực, trong đó phòng là cơ bản, lâu dài, chống là quan trọng, cấp bách"
  },
  {
    id: 2,
    question: "Nghị quyết số 43-NQ/TW nêu quan điểm liên minh giai cấp như thế nào?",
    answer: "Liên minh giữa giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức do Đảng lãnh đạo"
  },
  {
    id: 3,
    question: "Nghị quyết số 43-NQ/TW đặt ra vấn đề gì về giai cấp ở Việt Nam?",
    answer: "Xây dựng giai cấp công nhân Việt Nam hiện đại, lớn mạnh về số lượng và chất lượng"
  },
  {
    id: 4,
    question: "Nghị quyết số 45-NQ/TW xác định lực lượng lao động nào quan trọng thúc đẩy sản xuất xã hội đi đến hiện đại?",
    answer: "Đội ngũ trí thức"
  },
  {
    id: 5,
    question: "Quan niệm cái gốc của tham nhũng trong tác phẩm “Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, góp phần xây dựng Đảng và Nhà nước ta ngày càng trong sạch, vững mạnh”",
    answer: "Suy thoái về tư tưởng chính trị, đạo đức, lối sống."
  },
  {
    id: 6,
    question: "Phương châm: “Chất lượng đào tạo của nhà trường là khả năng sẵn sàng chiến đấu của đơn vị” là sự vận dụng nguyên tắc nào?",
    answer: "Thống nhất giữa lý luận với thực tiễn"
  },
  {
    id: 7,
    question: "Vai trò của kinh tế nhà nước được xác định trong văn kiện Đại hội XIII của Đảng thế nào?",
    answer: "Phát huy vai trò chủ đạo, là lực lượng vật chất quan trọng để nhà nước định hướng và điều tiết vĩ mô nền kinh tế, tạo điều kiện và môi trường thúc đẩy các thành phần kinh tế cùng phát triển. Kinh tế nhà nước cùng với kinh tế tập thể ngày càng trở thành nền tảng vững chắc của nền kinh tế quốc dân."
  },
  {
    id: 8,
    question: "Các đột phá chiến lược trong phát triển kinh tế, văn hóa – xã hội và môi trường 10 năm 2021 – 2030 Đại hội XIII xác định là gì?",
    answer: "- Hoàn thiện thể chế kinh tế thị trường định hướng XHCN\n- Phát triển toàn diện nguồn nhân lực\n- Hoàn thiện hệ thống kết cấu hạ tầng hiện đại"
  },
  {
    id: 9,
    question: "Chủ trương phát triển giáo dục và đào tạo được xác định tại Đại hội XIII gồm những nội dung chủ yếu nào?",
    answer: "- Phát triển giáo dục là quốc sách hàng đầu\n- Đổi mới căn bản, toàn diện nền giáo dục theo hướng chuẩn hoá, hiện đại hoá, xã hội hoá, dân chủ hoá và hội nhập quốc tế."
  },
  {
    id: 10,
    question: "Khâu then chốt trong phát triển giáo dục và đào tạo được xác định tại Đại hội XIII?",
    answer: "Đổi mới cơ chế quản lý giáo dục, phát triển đội ngũ giáo viên và cán bộ quản lý"
  },
    {
    id: 11,
    question: "Quan niệm cái gốc của tham nhũng trong tác phẩm “Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, góp phần xây dựng Đảng và Nhà nước ta ngày càng trong sạch, vững mạnh”",
    answer: "Suy thoái về tư tưởng chính trị, đạo đức, lối sống."
  },
  {
    id: 12,
    question: "Phương châm: “Chất lượng đào tạo của nhà trường là khả năng sẵn sàng chiến đấu của đơn vị” là sự vận dụng nguyên tắc nào?",
    answer: "Thống nhất giữa lý luận với thực tiễn"
  },
  {
    id: 13,
    question: "Vai trò của kinh tế nhà nước được xác định trong văn kiện Đại hội XIII của Đảng thế nào?",
    answer: "Phát huy vai trò chủ đạo, là lực lượng vật chất quan trọng để nhà nước định hướng và điều tiết vĩ mô nền kinh tế, tạo điều kiện và môi trường thúc đẩy các thành phần kinh tế cùng phát triển. Kinh tế nhà nước cùng với kinh tế tập thể ngày càng trở thành nền tảng vững chắc của nền kinh tế quốc dân."
  },
  {
    id: 14,
    question: "Các đột phá chiến lược trong phát triển kinh tế, văn hóa – xã hội và môi trường 10 năm 2021 – 2030 Đại hội XIII xác định là gì?",
    answer: "- Hoàn thiện thể chế kinh tế thị trường định hướng XHCN\n- Phát triển toàn diện nguồn nhân lực\n- Hoàn thiện hệ thống kết cấu hạ tầng hiện đại"
  },
  {
    id: 15,
    question: "Chủ trương phát triển giáo dục và đào tạo được xác định tại Đại hội XIII gồm những nội dung chủ yếu nào?",
    answer: "- Phát triển giáo dục là quốc sách hàng đầu\n- Đổi mới căn bản, toàn diện nền giáo dục theo hướng chuẩn hoá, hiện đại hoá, xã hội hoá, dân chủ hoá và hội nhập quốc tế."
  },
  {
    id: 16,
    question: "Khâu then chốt trong phát triển giáo dục và đào tạo được xác định tại Đại hội XIII?",
    answer: "Đổi mới cơ chế quản lý giáo dục, phát triển đội ngũ giáo viên và cán bộ quản lý"
  },
   {
    id: 17,
    question: "Phương châm: “Chất lượng đào tạo của nhà trường là khả năng sẵn sàng chiến đấu của đơn vị” là sự vận dụng nguyên tắc nào?",
    answer: "Thống nhất giữa lý luận với thực tiễn"
  },
  {
    id: 18,
    question: "Vai trò của kinh tế nhà nước được xác định trong văn kiện Đại hội XIII của Đảng thế nào?",
    answer: "Phát huy vai trò chủ đạo, là lực lượng vật chất quan trọng để nhà nước định hướng và điều tiết vĩ mô nền kinh tế, tạo điều kiện và môi trường thúc đẩy các thành phần kinh tế cùng phát triển. Kinh tế nhà nước cùng với kinh tế tập thể ngày càng trở thành nền tảng vững chắc của nền kinh tế quốc dân."
  },
  {
    id: 19,
    question: "Các đột phá chiến lược trong phát triển kinh tế, văn hóa – xã hội và môi trường 10 năm 2021 – 2030 Đại hội XIII xác định là gì?",
    answer: "- Hoàn thiện thể chế kinh tế thị trường định hướng XHCN\n- Phát triển toàn diện nguồn nhân lực\n- Hoàn thiện hệ thống kết cấu hạ tầng hiện đại"
  },
  {
    id: 20,
    question: "Chủ trương phát triển giáo dục và đào tạo được xác định tại Đại hội XIII gồm những nội dung chủ yếu nào?",
    answer: "- Phát triển giáo dục là quốc sách hàng đầu\n- Đổi mới căn bản, toàn diện nền giáo dục theo hướng chuẩn hoá, hiện đại hoá, xã hội hoá, dân chủ hoá và hội nhập quốc tế."
  },
  {
    id: 21,
    question: "Khâu then chốt trong phát triển giáo dục và đào tạo được xác định tại Đại hội XIII?",
    answer: "Đổi mới cơ chế quản lý giáo dục, phát triển đội ngũ giáo viên và cán bộ quản lý"
  },
   {
    id: 22,
    question: "Phương châm: “Chất lượng đào tạo của nhà trường là khả năng sẵn sàng chiến đấu của đơn vị” là sự vận dụng nguyên tắc nào?",
    answer: "Thống nhất giữa lý luận với thực tiễn"
  },
  {
    id: 23,
    question: "Vai trò của kinh tế nhà nước được xác định trong văn kiện Đại hội XIII của Đảng thế nào?",
    answer: "Phát huy vai trò chủ đạo, là lực lượng vật chất quan trọng để nhà nước định hướng và điều tiết vĩ mô nền kinh tế, tạo điều kiện và môi trường thúc đẩy các thành phần kinh tế cùng phát triển. Kinh tế nhà nước cùng với kinh tế tập thể ngày càng trở thành nền tảng vững chắc của nền kinh tế quốc dân."
  },
  {
    id: 24,
    question: "Các đột phá chiến lược trong phát triển kinh tế, văn hóa – xã hội và môi trường 10 năm 2021 – 2030 Đại hội XIII xác định là gì?",
    answer: "- Hoàn thiện thể chế kinh tế thị trường định hướng XHCN\n- Phát triển toàn diện nguồn nhân lực\n- Hoàn thiện hệ thống kết cấu hạ tầng hiện đại"
  },
  {
    id: 25,
    question: "Chủ trương phát triển giáo dục và đào tạo được xác định tại Đại hội XIII gồm những nội dung chủ yếu nào?",
    answer: "- Phát triển giáo dục là quốc sách hàng đầu\n- Đổi mới căn bản, toàn diện nền giáo dục theo hướng chuẩn hoá, hiện đại hoá, xã hội hoá, dân chủ hoá và hội nhập quốc tế."
  },
  {
    id: 26,
    question: "Khâu then chốt trong phát triển giáo dục và đào tạo được xác định tại Đại hội XIII?",
    answer: "Đổi mới cơ chế quản lý giáo dục, phát triển đội ngũ giáo viên và cán bộ quản lý"
  },
   {
    id: 27,
    question: "Các đột phá chiến lược trong phát triển kinh tế, văn hóa – xã hội và môi trường 10 năm 2021 – 2030 Đại hội XIII xác định là gì?",
    answer: "- Hoàn thiện thể chế kinh tế thị trường định hướng XHCN\n- Phát triển toàn diện nguồn nhân lực\n- Hoàn thiện hệ thống kết cấu hạ tầng hiện đại"
  },
  {
    id: 28,
    question: "Chủ trương phát triển giáo dục và đào tạo được xác định tại Đại hội XIII gồm những nội dung chủ yếu nào?",
    answer: "- Phát triển giáo dục là quốc sách hàng đầu\n- Đổi mới căn bản, toàn diện nền giáo dục theo hướng chuẩn hoá, hiện đại hoá, xã hội hoá, dân chủ hoá và hội nhập quốc tế."
  },
  {
    id: 29,
    question: "Khâu then chốt trong phát triển giáo dục và đào tạo được xác định tại Đại hội XIII?",
    answer: "Đổi mới cơ chế quản lý giáo dục, phát triển đội ngũ giáo viên và cán bộ quản lý"
  },
  {
    id: 30,
    question: "Khâu then chốt trong phát triển giáo dục và đào tạo được xác định tại Đại hội XIII?",
    answer: "Đổi mới cơ chế quản lý giáo dục, phát triển đội ngũ giáo viên và cán bộ quản lý"
  }
];

export default essayQuestions;
