type Poem = {
  id: number;
  title: string;
  content: string;
  note?: string;
  textAlign?: string;
};

const poems: Poem[] = [
  {
    id: 1,
    title: "Đừng đi",
    content: `
Em ơi cuộc sống bộn bề!
Cho anh chạm tay, nghe nhịp thở
Cho anh cảm nhận niềm hạnh phúc
Khi thấy em còn, tồn tại nơi đây
Em đừng đi, vì ngoài kia có gió
Gió lạnh hồn em, anh chẳng hề vui
Hãy cứ thế, âm thầm say (yên) giấc ngủ

Việc nước nhà, xin cứ để phần anh
Anh sẽ ra đi, vì dân tộc
Vì gia đình và cả nụ cười em
Anh không chắc sẽ bình an vô sự
Vì chiến tranh chẳng đoán được điều gì
Anh không chắc ta sẽ dành phần thắng
Không chắc mọi điều ngoại trừ việc yêu em
...
    `,
    note: "Huỳnh Văn Tài - 22/02/2017",
  },
  {
    id: 2,
    title: "[chưa có tên]",
    content: `
Nhớ em nhiều lắm, tôi nhớ em nhiều lắm.
Ký ức còn in mãi trong tim.
Rõ hình bóng nụ cười em xinh đẹp
Tôi nhớ em, chỉ muốn được gần em
Gần để đủ, thỏa niềm mong nhớ
Gần để đủ, trao một cái ôm
Gần để đủ, hôn má em thật nhẹ
Gần để đủ, đủ sống trọn cùng em
Cùng cống hiến tinh thần và sức lực
Cho thế gian ngày một tốt lên
Cùng trải nghiệm bao la thế giới
Dẫu khóc, cười ta cũng là ta
Tôi mong, em hạnh phúc và sẽ luôn hạnh phúc
Vẫn mỉm cười như những phút đầu tiên
Tôi gặp, tôi đã say em, tôi thừa nhận
Dẫu là em có đáp lại tình tôi
Tôi vẫn thế, vẫn thích em như thế
Muốn nhìn em, được trò chuyện cùng em
Muốn được bước chân vào thế giới
Thế giới của em, thế giới của mình em
Tôi biết, nó thú vị và nhiều điều bí ẩn
Có thể cả đời mới đủ tìm ra
Tôi chấp nhận, đến khi đầu bạc trắng
Vẫn sẽ tìm, bí ẩn của (đời) em.
    `,
    note: "Dec 11 2019",
  },
  {
    id: 3,
    title: "[chưa có tên]",
    content: `
Một năm rồi, ngày đôi ta xa cách
Thật bất ngờ, anh lại gặp được em
Vẫn dáng vóc thủơ ban đầu quen thuộc
Vẫn trái tim nồng ấm của ngày xưa
Vẫn ánh mắt lạnh lùng nhưng thánh thiện
Vẫn nụ cười làm giá lạnh tim anh
Em có nhớ những ngày đầu ta gặp
Tay chạm tay như định mệnh an bày
Em cuối đầu, còn anh thì xin lỗi
Ôi ngọt ngào! Kỷ niệm của đôi ta.
    `,
  },
  {
    id: 4,
    title: "Anh Yêu Em",
    content: `
Em biết không! Con đường đời trắc trở.
Ta gặp nhau do duyên kiếp an bày.
Ánh mắt ấy đến nay anh còn nhớ.
Anh yêu em chỉ vì anh yêu em!
Lời của gió, khẽ đưa qua làn tóc.
Sóng bồng bềnh, gợi lại nỗi niềm riêng.
Đôi mắt ấy bao la và sâu thẫm.
Cả đời anh tồn tại nơi đây!
Anh yêu em, từ ánh mắt nụ cười!
Anh yêu em, yêu từ tâm em đấy!
Anh yêu em, yêu em mãi mãi!
Anh yêu em và yêu chỉ mình em.
Anh thật sự muốn cùng em chung sống!
Ta cùng nhau đi hết những ngày dài.
Nào đắng cay, ngọt bùi ta san sẻ
Cả cuộc đời ta dành trọn cho nhau.
Rồi ta cũng dần già theo năm tháng.
Tóc bạc phơ, thân xác cũng tàn phai.
Ta yêu nhau, tâm ta vẫn sáng.
Cả ngàn năm ta vẫn nghĩ về nhau.
Anh thật sự muốn ôm em thật chật
Cảm nhận hơi ấm từ trái tim em.
Hãy quên hết những buồn phiền nhân thế.
Tựa vào anh vì em là của anh.
Cả thế giới ồn ào ta mặc kệ.
Miễn có em cuộc sống đủ làm vui
Nhưng chí lớn, anh hay vì cuộc sống.
Và anh muốn cùng em làm nó ngay.
Ta xây đắp, xây đời ta hạnh phúc.
Vì thế hệ sau vì cả tương lai
Anh yêu em, anh yêu em, yêu em nhiều lắm
Em ở đâu, xin chủ động tìm anh.
    `,
    note: "T7, 8/10/2016 / 21:24 phút.",
  },
  {
    id: 5,
    title: "[chưa có tên]",
    content: `
Tương lai vận nước long đong
(Bởi) Kẻ làm ăn cướp được phong anh hùng
Nghe qua thì quả lạ lùng!
30 năm chẵn cuối cùng cũng xong
Nhân tài chắc chẳng bằng lòng
Nhưng thôi cũng kệ vì không được gì
Tương lai vận nước là gì!
Là mai con cháu so bì năm châu
Sẽ không nhu nhược cúi đầu
    `,
    note: "...",
    textAlign: "text-center"
  },
  {
    id: 6,
    title: "Ai cũng thế...!",
    content: `
Cứ cô đơn trong vòng đời vội vã!
Bạn hữu nhiều tri kỉ được mấy ai!
Lúc cạnh nhau ta vui cười ta nói
Lúc xa rồi ta thơ thẩn mình ta
    `
  }
];

export { poems };
