const essayQuestions = [
  {
    id: 1,
    question: "Kỷ nguyên độc lập dân tộc và tự do của đất nước ta được mở đầu từ sự kiện nào?",
    answer: "Cách mạng Tháng Tám năm 1945"
  },
  {
    id: 2,
    question: "“Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy”. Đoạn văn trên trích từ bài viết nào của Hồ Chí Minh?",
    answer: "Tuyên ngôn độc lập"
  },
  {
    id: 3,
    question: "Triết học là gì?",
    answer: "Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới, về vị trí, vai trò của con người trong thế giới ấy."
  },
  {
    id: 4,
    question: "Nêu mục tiêu chính của Nghị quyết số 57-NQ/TW ngày 22/12/2024 của Bộ Chính trị?",
    answer: "Đẩy mạnh phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số để tạo đột phá cho phát triển kinh tế - xã hội."
  },
  {
    id: 5,
    question: "Nhà nước pháp quyền xã hội chủ nghĩa quản lý mọi mặt của đời sống xã hội chủ yếu bằng gì?",
    answer: "Hiến pháp, pháp luật"
  },
  {
    id: 6,
    question: "Các lực lượng của Quân đội được Đại hội XIII của Đảng ưu tiên hiện đại hóa?",
    answer: "1- Hải quân; 2- Phòng không - không quân; 3- Tác chiến điện tử; 4- Trinh sát kỹ thuật; 5- Cảnh sát biển; 6- Tình báo."
  },
  {
    id: 7,
    question: "Yếu tố nào quyết định liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức?",
    answer: "Do có những lợi ích cơ bản thống nhất với nhau"
  },
  {
    id: 8,
    question: "Mục tiêu cụ thể phát triển đất nước đến năm 2030 do Đại hội XIII của Đảng xác định?",
    answer: "Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao."
  },
  {
    id: 9,
    question: "Quan hệ sản xuất bao gồm những mặt nào?",
    answer: "- Quan hệ giữa người với người về quyền sở hữu đối với tư liệu sản xuất\n- Quan hệ giữa người với người trong tổ chức, quản lý phân công lao động xã hội.\n- Quan hệ giữa người và người trong phân phối sản phẩm xã hội làm ra."
  },
  {
    id: 10,
    question: "Hoàn chỉnh câu sau đây của Hồ Chí Minh được trích từ bản Di chúc (1969): “Đoàn viên và thanh niên ta nói chung là rất tốt, mọi việc đều hăng hái xung phong, không ngại khó khăn, có chí tiến thủ. Đảng cần phải chăm lo giáo dục…..…….. cho họ, đào tạo họ thành những người thừa kế xây dựng chủ nghĩa xã hội vừa “hồng” vừa “chuyên”.",
    answer: "Đạo đức cách mạng"
  },
  {
    id: 11,
    question: "Lá cờ đỏ sao vàng xuất hiện lần đầu tiên ở Việt Nam vào năm nào?",
    answer: "Năm 1940"
  },
  {
    id: 12,
    question: "Tư liệu sản xuất bao gồm những yếu tố nào?",
    answer: "Tư liệu lao động và đối tượng lao động"
  },
  {
    id: 13,
    question: "Phép biện chứng duy vật gồm có những quy luật cơ bản nào? Quy luật nào nói lên cách thức của sự phát triển?",
    answer: "- Những quy luật cơ bản của phép biện chứng duy vật: Quy luật chuyển hóa từ sự thay đổi về lượng thành sự thay đổi về chất và ngược lại; Quy luật thống nhất và đấu tranh của các mặt đối lập; Quy luật phủ định của phủ định.\n- Quy luật chuyển hóa từ sự thay đổi về lượng thành những thay đổi về chất và ngược lại nói lên cách thức của sự phát triển."
  },
  {
    id: 14,
    question: "Khái niệm “kỷ nguyên vươn mình của dân tộc” là gì?",
    answer: "Là thời kỳ phát triển mạnh mẽ, toàn diện về chính trị, kinh tế, văn hóa, quốc phòng - an ninh của dân tộc Việt Nam trong bối cảnh hội nhập và đổi mới."
  },
  {
    id: 15,
    question: "Trong chủ nghĩa tư bản, tiền lương và lợi nhuận có mâu thuẫn với nhau không? Vì sao?",
    answer: "- Có mâu thuẫn.\n- Vì giá trị mới do công nhân tạo ra được chia thành hai phần: tiền lương của giai cấp công nhân và lợi nhuận của giai cấp tư sản. Khi tiền lương tăng thì lợi nhuận giảm và ngược lại."
  },
  {
    id: 16,
    question: "Muốn tìm nguyên nhân phải xuất phát từ đâu?",
    answer: "Nguyên nhân là sự tương tác giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau gây ra những biến đổi nhất định, cho nên muốn tìm nguyên nhân của một hiện tượng nào đó cần tìm trong sự tác động qua lại giữa các mặt trong bản thân sự vật hoặc giữa các sự vật với nhau."
  },
  {
    id: 17,
    question: "Những mâu thuẫn cơ bản của thời đại hiện nay là gì?",
    answer: "- Mâu thuẫn giữa CNXH và CNTB;\n- Mâu thuẫn giữa tư bản và lao động;\n- Mâu thuẫn giữa các dân tộc thuộc địa và phụ thuộc với chủ nghĩa đế quốc;\n- Mâu thuẫn giữa các nước tư bản chủ nghĩa với nhau."
  },
  {
    id: 18,
    question: "Vấn đề cơ bản của Triết học là gì?",
    answer: "- Là mối quan hệ giữa vật chất và ý thức (hay tư duy và tồn tại).\n- Gồm 2 mặt: Mặt thứ nhất, giải quyết vấn đề giữa vật chất và ý thức cái nào có trước, cái nào có sau, cái nào quyết định cái nào. Mặt thứ hai, giải quyết vấn đề khả năng nhận thức thế giới của con người."
  },
  {
    id: 19,
    question: "Xét đến cùng, vai trò của cách mạng xã hội là gì?",
    answer: "CMXH là phương thức quan trọng nhất để giải quyết mâu thuẫn đối kháng trong lòng xã hội. Thông qua CMXH xóa bỏ xã hội cũ, xây dựng xã hội mới cao hơn, tiến bộ hơn."
  },
  {
    id: 20,
    question: "Đối tượng lao động là gì?",
    answer: "Là bộ phận của giới tự nhiên chịu sự tác động của con người và bị thay đổi hình thái cho phù hợp với nhu cầu sử dụng của con người."
  },
  {
    id: 21,
    question: "Nguồn gốc tự nhiên của ý thức là gì?",
    answer: "Bộ óc người cùng với thế giới bên ngoài tác động lên bộ óc người."
  },
  {
    id: 22,
    question: "Giá trị thặng dư là gì?",
    answer: "Giá trị thặng dư là phần giá trị mới do người công nhân tạo ra ngoài giá trị sức lao động, là kết quả lao động không công của công nhân cho nhà tư bản."
  },
  {
    id: 23,
    question: "Mục tiêu tổng quát được Nghị quyết Đại hội lần thứ XIII của Đảng xác định phấn đấu đến khi nào nước ta trở thành nước phát triển, theo định hướng xã hội chủ nghĩa?",
    answer: "Phấn đấu đến giữa thế kỷ XXI, nước ta trở thành nước phát triển, theo định hướng xã hội chủ nghĩa."
  },
  {
    id: 24,
    question: "Điều kiện để sức lao động trở thành hàng hoá là gì?",
    answer: "Người lao động được tự do thân thể; người lao động hoàn toàn không có TLSX và của cải gì."
  },
  {
    id: 25,
    question: "Kinh tế tư nhân đóng vai trò gì trong nền kinh tế Việt Nam?",
    answer: "Là động lực quan trọng nhất thúc đẩy tăng trưởng, tạo việc làm, đổi mới sáng tạo."
  },
  {
    id: 26,
    question: "Tờ báo được Bác Hồ sáng lập và được coi là mở đầu cho nền báo chí cách mạng Việt Nam là tờ báo nào? Được sáng lập năm nào?",
    answer: "Báo Thanh niên, năm 1925"
  },
  {
    id: 27,
    question: "Vai trò của quân đội trong kỷ nguyên vươn mình?",
    answer: "Bảo vệ vững chắc Tổ quốc, tham gia phát triển kinh tế-xã hội, giữ ổn định chính trị."
  },
  {
    id: 28,
    question: "Tư liệu lao động là gì?",
    answer: "Là một vật hay hệ thống những vật làm nhiệm vụ truyền dẫn sự tác động của con người lên đối tượng lao động, nhằm biến đổi đối tượng lao động thành sản phẩm đáp ứng yêu cầu sản xuất của con người"
  },
  {
    id: 29,
    question: "Tại sao mối quan hệ giữa vật chất và ý thức lại là vấn đề cơ bản của triết học?",
    answer: "- Là cơ sở, nền tảng để xem xét, giải quyết tất cả các vấn đề trong sự nghiên cứu của triết học.\n- Là cơ sở tiêu chuẩn để phân định lập trường thế giới quan của các nhà triết học, các trường phái triết học."
  },
  {
    id: 30,
    question: "Sở hữu toàn dân là gì?",
    answer: "Sở hữu toàn dân là một hình thức sở hữu mang tính xã hội hóa triệt để đối với các tư liệu sản xuất chủ yếu trong đó toàn dân là chủ sở hữu đối với tài sản."
  }
];

export default essayQuestions;
