slug: non-technical-owner-software-project-on-track
title_en: How Can a Non-Technical Owner Tell if a Software Project Is on Track?
title_vi: Chủ doanh nghiệp không rành kỹ thuật làm sao biết dự án phần mềm có đúng tiến độ?
excerpt_en: Judge by working software, not reports. Ask to use new features every one or two weeks, watch the list of finished items and open questions, and check that you have access to the code and environments.
excerpt_vi: Đánh giá bằng phần mềm chạy được, không phải bằng báo cáo. Đòi được dùng tính năng mới mỗi một hai tuần, theo dõi danh sách việc đã xong và câu hỏi còn mở, và kiểm tra bạn có quyền truy cập code và môi trường chạy.
seo_title_en: How to Tell if a Software Project Is on Track (Non-Technical)
seo_title_vi: Cách biết dự án phần mềm có đúng tiến độ khi không rành kỹ thuật
seo_description_en: Seven signals any business owner can check without reading code, a weekly five-question check-in and what to do when a project starts to slip.
seo_description_vi: Bảy tín hiệu mọi chủ doanh nghiệp kiểm tra được mà không cần đọc code, bộ năm câu hỏi hằng tuần và nên làm gì khi dự án bắt đầu trượt.
tags: Software delivery, Software purchasing, Handover
===EN===
You do not need to read code to know whether a software project is on track. Judge it by what you can use: every one or two weeks you should be able to log in to a test version and try features that were not there before. Alongside that, watch three things: whether the list of finished features grows steadily, whether open questions get resolved, and whether you have your own access to the code repository and test environment. A project that only reports progress in words is a project you cannot see.

## Key takeaways

- "Show me" beats "tell me". Ask to click through new work yourself.
- Steady small progress is healthier than big promises at the end.
- You should own or have access to the code, hosting and test site from week one.
- Raise concerns early; small slips are easy to fix, big ones are not.

## What seven signals can you check?

| Signal | Healthy | Warning |
| --- | --- | --- |
| Working demos | New features you can try every 1–2 weeks | Slides, screenshots or "next week" |
| Test site | You can log in yourself anytime | Only the team can access it |
| Feature list | Items move to "done" each week | Many items "in progress" for weeks |
| Open questions | Few, and recent | Old questions nobody has answered |
| Bugs | Found, logged and fixed | Hidden, or "we'll fix them all at the end" |
| Hours or budget used | Roughly in line with progress | Spending ahead of completed work |
| Code access | Repository in your account, or you have access | "We'll hand it over at the end" |

## What should you ask in a weekly check-in?

Five questions, ten minutes:

1. What was finished this week that I can try?
2. What is planned for next week?
3. What is blocking you, and do you need anything from me?
4. Did any estimate change? Why?
5. What risk are you most worried about?

Write the answers in one shared place. Over a month, you will see a pattern.

## What does "done" mean?

Agree on it at the start. A feature is done when:

- It works on the test site, not only on a developer's computer
- It meets the acceptance criteria you agreed. See [writing acceptance criteria](/en/blog/software-acceptance-criteria-uat)
- It has been tested, including at least one error case
- You or your tester have tried it

"Coded but not tested" is not done.

## How does this play out in a fictional case?

A landscaping company's job-tracking app reports "70% complete" for three weeks in a row. The owner asks to try the app on the test site and finds that crew scheduling, the main feature, cannot be used yet, because it depends on a calendar integration that has not been tested. The owner and the team agree to stop work on reports and focus the next two weeks on making scheduling usable end to end. The next demo shows a crew lead booking a real job.

## What should you do if a project is slipping?

1. **Get the facts.** Ask for the list of finished, in-progress and not-started items.
2. **Cut scope before adding time.** Which features can wait for phase two?
3. **Remove blockers on your side.** Answer open questions; provide missing access or data.
4. **Agree on a new plan in writing** with the next two demo dates.
5. **If trust is gone,** make sure you hold the code, data and accounts. See [how to take over a software project from a previous developer](/en/blog/take-over-software-project-from-previous-developer).

Your role in preventing slips is covered in [what a business owner needs to do during a software project](/en/blog/business-owner-role-during-software-project), and the common causes in [why software projects go over budget](/en/blog/why-software-projects-go-over-budget).

[Ask Wizy how we report progress](/en#contact).

## Frequently asked questions

### Is a percentage complete useful?

Not much on its own. It is often an estimate of effort, not of usable features. A list of working features is clearer.

### How often should I see a demo?

Every one or two weeks for most small projects. Longer gaps make problems more expensive.

### Should I hire someone to review the code?

Consider an independent review if you have warning signs and cannot get clear answers, or before final payment on a large project.

### What if the team says demos slow them down?

A short demo is part of the work. It keeps both sides aligned and usually saves time overall.
===VI===
Bạn không cần đọc code để biết dự án phần mềm có đúng tiến độ không. Hãy đánh giá bằng những gì bạn dùng được: cứ mỗi một hai tuần, bạn phải đăng nhập được vào bản thử và dùng được tính năng mà trước đó chưa có. Song song đó, theo dõi ba điều: danh sách tính năng đã xong có tăng đều không, câu hỏi còn mở có được giải quyết không, và bạn có quyền truy cập riêng vào kho code và môi trường thử không. Một dự án chỉ báo tiến độ bằng lời là một dự án bạn không nhìn thấy được.

## Điểm cần nhớ

- "Cho tôi xem" tốt hơn "kể tôi nghe". Hãy tự bấm thử phần việc mới.
- Tiến bộ nhỏ mà đều đặn lành mạnh hơn lời hứa lớn ở cuối.
- Bạn phải sở hữu hoặc có quyền truy cập code, hosting và trang thử từ tuần đầu.
- Nêu lo ngại sớm; trượt nhỏ dễ sửa, trượt lớn thì không.

## Bảy tín hiệu bạn kiểm tra được

| Tín hiệu | Lành mạnh | Cảnh báo |
| --- | --- | --- |
| Demo chạy được | Có tính năng mới để thử mỗi 1–2 tuần | Slide, ảnh chụp màn hình hoặc "tuần sau" |
| Trang thử | Bạn tự đăng nhập được bất cứ lúc nào | Chỉ đội phát triển vào được |
| Danh sách tính năng | Mỗi tuần có mục chuyển sang "xong" | Nhiều mục "đang làm" suốt nhiều tuần |
| Câu hỏi còn mở | Ít, và đều mới | Câu hỏi cũ không ai trả lời |
| Lỗi | Được phát hiện, ghi lại và sửa | Bị giấu, hoặc "để cuối sửa một lượt" |
| Giờ công hay ngân sách đã dùng | Tương xứng với tiến độ | Chi tiêu đi trước phần việc đã xong |
| Quyền truy cập code | Kho code nằm trong tài khoản của bạn, hoặc bạn có quyền vào | "Cuối dự án sẽ bàn giao" |

## Nên hỏi gì trong buổi cập nhật hằng tuần?

Năm câu, mười phút:

1. Tuần này xong gì mà tôi thử được?
2. Tuần sau dự định làm gì?
3. Điều gì đang chặn các bạn, và có cần gì từ tôi không?
4. Có ước tính nào thay đổi không? Vì sao?
5. Rủi ro nào các bạn lo nhất?

Ghi câu trả lời vào một chỗ dùng chung. Sau một tháng, bạn sẽ thấy được quy luật.

## Thế nào là "xong"?

Thống nhất ngay từ đầu. Một tính năng là xong khi:

- Chạy được trên trang thử, không chỉ trên máy của lập trình viên
- Đạt tiêu chí nghiệm thu đã thống nhất. Xem [cách viết tiêu chí nghiệm thu](/vi/blog/software-acceptance-criteria-uat)
- Đã được kiểm thử, kể cả ít nhất một tình huống lỗi
- Bạn hoặc người kiểm thử của bạn đã dùng thử

"Đã code nhưng chưa thử" thì chưa phải là xong.

## Một ca giả lập diễn ra thế nào?

App theo dõi công việc của một công ty làm vườn báo "hoàn thành 70%" ba tuần liền. Chủ doanh nghiệp xin thử app trên trang thử và phát hiện tính năng chính là xếp lịch cho đội thợ vẫn chưa dùng được, vì nó phụ thuộc vào phần tích hợp lịch chưa được thử. Chủ doanh nghiệp và đội phát triển thống nhất tạm dừng phần báo cáo, dồn hai tuần tới để xếp lịch dùng được trọn vẹn từ đầu đến cuối. Buổi demo tiếp theo cho thấy một trưởng nhóm đặt lịch cho một công việc thật.

## Nên làm gì khi dự án bắt đầu trượt?

1. **Nắm sự thật.** Xin danh sách việc đã xong, đang làm và chưa bắt đầu.
2. **Cắt phạm vi trước khi thêm thời gian.** Tính năng nào có thể để sang giai đoạn hai?
3. **Gỡ vướng phía bạn.** Trả lời câu hỏi còn mở; cung cấp quyền truy cập hay dữ liệu còn thiếu.
4. **Thống nhất kế hoạch mới bằng văn bản**, kèm ngày của hai buổi demo tiếp theo.
5. **Nếu đã mất niềm tin,** hãy chắc chắn bạn đang giữ code, dữ liệu và tài khoản. Xem [cách tiếp quản dự án phần mềm từ lập trình viên trước](/vi/blog/take-over-software-project-from-previous-developer).

Vai trò của bạn trong việc phòng tránh trượt tiến độ có trong bài [chủ doanh nghiệp cần làm gì trong một dự án phần mềm](/vi/blog/business-owner-role-during-software-project), còn các nguyên nhân phổ biến có trong [vì sao dự án phần mềm vượt ngân sách](/vi/blog/why-software-projects-go-over-budget).

[Hỏi Wizy về cách chúng tôi báo cáo tiến độ](/vi#contact).

## Câu hỏi thường gặp

### Con số phần trăm hoàn thành có hữu ích không?

Riêng nó thì không mấy hữu ích. Đó thường là ước lượng công sức, không phải số tính năng dùng được. Một danh sách tính năng chạy được rõ ràng hơn.

### Bao lâu nên xem demo một lần?

Mỗi một đến hai tuần với phần lớn dự án nhỏ. Cách nhau lâu hơn thì vấn đề sẽ tốn kém hơn.

### Có nên thuê người rà soát code không?

Hãy cân nhắc rà soát độc lập nếu có dấu hiệu cảnh báo mà không nhận được câu trả lời rõ, hoặc trước lần thanh toán cuối của một dự án lớn.

### Nếu đội phát triển nói demo làm họ chậm lại thì sao?

Một buổi demo ngắn là một phần của công việc. Nó giữ hai bên cùng hướng và thường tiết kiệm thời gian về tổng thể.
