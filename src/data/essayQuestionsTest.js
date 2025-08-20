const essayQuestions = [
  {
    id: 1,
    question: "Động lực chính thúc đẩy dân tộc vươn mình là gì?",
    answer: "Đoàn kết toàn dân, đổi mới sáng tạo, phát huy nội lực kết hợp ngoại lực."
  },
  {
    id: 2,
    question: "Nghị quyết số 57-NQ/TW ngày 22/12/2024 của Bộ Chính trị về đột phá phát triển khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia xác định mục tiêu đến năm 2030 quy mô kinh tế số đạt tối thiểu bao nhiêu % GDP?",
    answer: "30% GDP"
  },
  {
    id: 3,
    question: "Điền vào chỗ trống cụm từ còn thiếu: “Kỷ nguyên vươn mình của dân tộc Việt Nam” là đòi hỏi tất yếu, khách quan và là kết quả tất yếu của những thành công trước đây mở ra cho dân tộc; đánh dấu thời kỳ phát triển mới của đất nước, phù hợp với .......................... của đất nước và thời đại, với tiến trình phát triển chung vì những mục tiêu cao cả của nhân loại.",
    answer: "Quy luật khách quan"
  },
  {
    id: 4,
    question: "Trong lời kết thúc buổi ra mắt của Đảng Lao động Việt Nam, Hồ Chí Minh nói: “Mục đích của Đảng Lao động Việt Nam có thể gồm 8 chữ là: “Đoàn kết toàn dân, phụng sự Tổ quốc”. Buổi ra mắt đó vào ngày tháng năm nào?",
    answer: "Ngày 03/03/1951"
  },
  {
    id: 5,
    question: "Chi bộ Cộng sản đầu tiên ở Việt Nam được thành lập thời gian nào? Ở đâu?",
    answer: "Thành lập 3/1929, tại nhà số 5D phố Hàm Long, Hà Nội."
  },
  {
    id: 6,
    question: "Bổ sung để được một câu đúng theo quan điểm duy vật biện chứng: “Ý thức là thuộc tính của ........................”",
    answer: "Một dạng vật chất có tổ chức cao nhất là bộ não con người."
  },
  {
    id: 7,
    question: "Khuynh hướng của sản xuất là không ngừng biến đổi phát triển. Sự biến đổi đó bao giờ cũng bắt đầu từ đâu?",
    answer: "Sự biến đổi, phát triển của lực lượng sản xuất"
  },
  {
    id: 8,
    question: "Nguyễn Tất Thành bắt đầu làm việc trên tàu Amiran Latusơ Tơrêvin (Amiral Latouche Trévill) đang cập bến Nhà Rồng Sài Gòn để lấy hàng và đón khách đi Mác-xây khi nào?",
    answer: "03/6/1911"
  },
  {
    id: 9,
    question: "Đối tượng nghiên cứu của chủ nghĩa xã hội khoa học là gì?",
    answer: "Là những quy luật và tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển hình thái kinh tế - xã hội cộng sản chủ nghĩa."
  },
  {
    id: 10,
    question: "Nguyễn Tất Thành ra đi tìm đường cứu nước vào thời gian nào, ở đâu?",
    answer: "- Vào ngày 05/6/1911.\n- Tại bến cảng Nhà Rồng (Sài Gòn, nay là TP. Hồ Chí Minh)."
  },
  {
    id: 11,
    question: "Tiền đề nào được coi là nguồn gốc lý luận trực tiếp của chủ nghĩa xã hội khoa học?",
    answer: "Chủ nghĩa xã hội không tưởng phê phán (03 đại biểu là: Xanhximông, Phurie, Owen)"
  },
  {
    id: 12,
    question: "Ý thức là gì?",
    answer: "Là sự phản ánh hiện thực khách quan vào bộ óc con ng¬ười một cách năng động, sáng tạo."
  },
  {
    id: 13,
    question: "Vai trò của nhân dân trong kỷ nguyên vươn mình?",
    answer: "Chủ thể trung tâm, trực tiếp tham gia phát triển, bảo vệ và xây dựng đất nước."
  },
  {
    id: 14,
    question: "Bốn phát minh lớn của Trung Quốc thời kỳ cổ đại là gì?",
    answer: "- Kỹ thuật làm giấy;\n- Kỹ thuật thuốc súng;\n- Kỹ thuật ấn loát (kỹ thuật in);\n- Kim chỉ nam."
  },
  {
    id: 15,
    question: "Nghị quyết số 57-NQ/TW ngày 22/12/2024 của Bộ Chính trị về đột phá phát triển khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia có mấy nhiệm vụ, giải pháp?",
    answer: "7 nhiệm vụ, giải pháp"
  },
  {
    id: 16,
    question: "Ngôn ngữ có vai trò như thế nào đối với tư duy?",
    answer: "- Ngôn ngữ là “vỏ vật chất” của tư duy.\n- Là phương thức theo đó ý thức tồn tại với tư cách là sản phẩm xã hội - lịch sử.\n- Là phương tiện giao tiếp, qua đó tư duy phát triển, lưu truyền qua các thế hệ."
  },
  {
    id: 17,
    question: "Tính chất đặc biệt của giá trị sử dụng hàng hóa sức lao động là gì?",
    answer: "Khi sử dụng, nó tạo ra một lượng giá trị mới lớn hơn giá trị bản thân nó."
  },
  {
    id: 18,
    question: "Chiến dịch Điện Biên Phủ diễn ra trong khoảng thời gian nào?",
    answer: "13/3/1954 - 07/5/1954."
  },
  {
    id: 19,
    question: "Phát triển là gì?",
    answer: "Phát triển là một phạm trù triết học dùng để khái quát quá trình vận động tiến lên từ thấp đến cao, từ đơn giản đến phức tạp, từ kém hoàn thiện đến hoàn thiện hơn."
  },
  {
    id: 20,
    question: "Vì sao nói: Cách mạng Tháng Mười năm 1917 ở nước Nga đã mở ra thời đại mới - thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản trên phạm vi toàn thế giới?",
    answer: "- Sau Cách mạng Tháng Mười một hình thái kinh tế - xã hội mới xuất hiện - Hình thái kinh tế - xã hội cộng sản chủ nghĩa mà giai đoạn đầu của nó là CNXH.\n- Với thắng lợi của Cách mạng Tháng Mười Nga, giai cấp công nhân trở thành giai cấp trung tâm quyết định xu hướng phát triển của lịch sử."
  },
  {
    id: 21,
    question: "Trong các nội dung của quyền dân tộc tự quyết thì nội dung nào được coi là cơ bản nhất, tiên quyết nhất?",
    answer: "Tự quyết về chính trị"
  },
  {
    id: 22,
    question: "Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội?",
    answer: "Hoạt động sản xuất vật chất là hoạt động cơ bản nhất, đóng vai trò quyết định đối với các hoạt động khác.\n- Nó là hoạt động nguyên thuỷ nhất, tạo ra những điều kiện, của cải thiết yếu quyết định tới sự tồn tại, phát triển của con người và xã hội loài người.\n- Không có hoạt động sản xuất vật chất thì không thể có các hình thức hoạt động khác. Nó tạo thành cơ sở của tất cả các hình thức hoạt động khác.\n- Các hình thức hoạt động khác, suy cho cùng, cũng xuất phát, phục vụ và trên cơ sở sản xuất vật chất."
  },
  {
    id: 23,
    question: "So với các nền dân chủ trước đây, dân chủ xã hội chủ nghĩa có điểm khác biệt cơ bản nào?",
    answer: "Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động."
  },
  {
    id: 24,
    question: "Chỉ thị số 855-CT/QUTW, ngày 12/8/2019 của Quân ủy Trung ương xác định chuẩn mực “Bộ đội Cụ Hồ” thời kỳ mới gồm những nội dung gì?",
    answer: "- Bản lĩnh chính trị vững vàng, động cơ trong sáng, trách nhiệm cao;\n- Đạo đức, lối sống trong sạch, lành mạnh;\n- Có văn hóa, tri thức khoa học, trình độ quân sự, năng lực, phương pháp, tác phong công tác và sức khỏe tốt đáp ứng yêu cầu nhiệm vụ;\n- Thực hành dân chủ, kỷ luật tự giác, nghiêm minh;\n- Chăm lo xây dựng đoàn kết nội bộ tốt; tôn trọng, giúp đỡ, gắn bó máu thịt với nhân dân; có tinh thần quốc tế trong sáng."
  },
  {
    id: 25,
    question: "“Nhật ký trong tù” là tập thơ chữ Hán thể hiện tầm vóc trí tuệ Hồ Chí Minh, với khát vọng cao đẹp nhất là \"Độc lập cho dân tộc và tự do cho con người\". Đồng chí hãy cho biết, Tác phẩm “Nhật ký trong tù” ra đời vào thời gian nào? Ở đâu?",
    answer: "8/1942 đến 9/1943 tại Quảng Tây, Trung Quốc"
  },
  {
    id: 26,
    question: "Mâu thuẫn cơ bản của thời đại hiện nay là?",
    answer: "- Mâu thuẫn giữa CNXH và CNTB;\n- Mâu thuẫn giữa giai cấp tư sản và giai cấp công nhân;\n- Mâu thuẫn giữa các dân tộc thuộc địa và phụ thuộc với chủ nghĩa đế quốc;\n- Mâu thuẫn giữa các nước tư bản chủ nghĩa với nhau."
  },
  {
    id: 27,
    question: "Thế nào là nhận thức lý tính? Nêu những hình thức cơ bản của nó?",
    answer: "Nhận thức lý tính là giai đoạn cao, trình độ cao của quá trình nhận thức, là sự nhận thức gián tiếp, trừu tượng, khái quát, cho ta tri thức về bản chất, quy luật của đối tượng. Ba hình thức của nó: khái niệm, phán đoán, suy luận."
  },
  {
    id: 28,
    question: "Nguồn gốc kinh tế của sự vận động, phát triển của hình thái kinh tế - xã hội là gì?",
    answer: "Đó là sự biến đổi của quan hệ sản xuất để phù hợp với trình độ phát triển của lực lượng sản xuất."
  },
  {
    id: 29,
    question: "Vì sao đứng im mang tính tương đối?",
    answer: "Đứng im là tương đối vì đứng im chỉ xảy ra trong một mối quan hệ nhất định; ở một hình thức vận động nhất định; đứng im là một trạng thái vận động đặc biệt, vận động trong thăng bằng."
  },
  {
    id: 30,
    question: "Phạm trù được coi là cơ bản nhất, là xuất phát điểm của chủ nghĩa xã hội khoa học?",
    answer: "Là phạm trù sứ mệnh lịch sử của giai cấp công nhân (bởi tất cả các phạm trù khác của CNXH khoa học đều làm sáng tỏ phạm trù sứ mệnh lịch sử)."
  }
];
export default essayQuestions;