slug: check-ai-built-app-before-launch
title_en: What Should You Check Before Launching an App Built With AI Coding Tools?
title_vi: Cần kiểm tra gì trước khi ra mắt một app làm bằng công cụ lập trình AI?
excerpt_en: Check who can read the data, how login and permissions work, where secrets are stored, how payments are verified and how you would restore a backup.
excerpt_vi: Kiểm tra ai đọc được dữ liệu, đăng nhập và phân quyền hoạt động ra sao, khoá bí mật để ở đâu, thanh toán được xác minh thế nào và bạn khôi phục bản sao lưu bằng cách nào.
seo_title_en: Pre-Launch Checklist for Apps Built With AI Coding Tools
seo_title_vi: Checklist trước khi ra mắt app làm bằng AI
seo_description_en: A plain-language checklist for business owners launching an app made with Lovable, Bolt, v0 or similar tools: data access, login, secrets, payments, backups and monitoring.
seo_description_vi: Checklist dễ hiểu cho chủ doanh nghiệp sắp ra mắt app làm bằng Lovable, Bolt, v0 hoặc công cụ tương tự: truy cập dữ liệu, đăng nhập, khoá bí mật, thanh toán, sao lưu và theo dõi.
tags: AI adoption, Data privacy, Software modernization
===EN===
Before launching an app built with an AI coding tool, check six things: who can read the data, whether each user sees only their own records, where passwords and keys are kept, how payments are confirmed, whether you can restore a backup, and how you will know when something breaks. The most common failure is the first one, a database that anyone can read because access rules were never switched on. You can test most of these yourself in an afternoon, then ask a developer to confirm.

## Key takeaways

- Test with two accounts. If one can see the other's data, do not launch.
- Secret keys must never appear in the browser.
- Payment success must be confirmed by the payment provider, not by the page.
- A backup you have never restored is not a backup yet.

## The pre-launch checklist

| # | Check | How a non-developer can test it | Pass when |
| --- | --- | --- | --- |
| 1 | Database access rules | Ask the tool: "List every table and the access rule on each." Ask a developer to try reading data without logging in | No table is readable or writable without the right login |
| 2 | Per-user data | Create two test accounts. Log in as A, try to open B's records by changing the link | A sees only A's records |
| 3 | Admin pages | Log out and visit every admin link directly | All redirect to login or show "not allowed" |
| 4 | Secrets | Search the code for words like "secret", "service", "sk_" | Secret keys exist only on the server or in environment settings |
| 5 | Payments | Pay with a test card, then cancel at the last step | Orders are marked paid only after the provider confirms |
| 6 | Input checks | Enter very long text, a negative quantity, a past date | The app rejects bad input with a clear message |
| 7 | Backups | Ask how backups run, then restore one to a copy | You restored real data once |
| 8 | Errors and alerts | Break something on purpose in a test copy | Someone receives an alert |
| 9 | Email and messages | Send a test password reset | It arrives and the link expires |
| 10 | Ownership | List every account the app uses | All are under a business email you control |

## Why does item 1 matter so much?

Many AI builders connect to a hosted database that the browser talks to directly, using a key that is public by design. That is safe only when each table has access rules, sometimes called row-level security, that say who may read or change which rows. Without them, the public key opens everything. Industry write-ups on [vibe-coding risks](https://www.kaspersky.com/blog/safer-vibe-coding-2026/55677/) list this as the top issue.

## What else should you decide before launch?

- **Privacy notice.** What you collect and why, in plain words.
- **Data location.** Where the database is hosted. See [where to host custom software in Canada](/en/blog/where-to-host-custom-software-canada).
- **Accessibility.** If you are in Ontario and have 50 or more employees, see [AODA requirements for web apps](/en/blog/aoda-accessibility-web-app-ontario).
- **Who maintains it.** Someone must update dependencies and fix issues after launch. See [what software maintenance costs after launch](/en/blog/software-maintenance-cost-after-launch).

## How does this play out in a fictional case?

A home-cleaning company builds a client booking app with an AI tool. In the two-account test, client A can open client B's address by changing a number in the link. A developer adds access rules to the bookings table and moves the price calculation to the server. The test is run again with both accounts and passes. The owner also restores yesterday's backup to a copy to confirm it works, then launches.

## What if the app fails several checks?

If it fails items 1–5, pause and get a developer review. If the code is tangled, it may be faster to keep the design and rebuild the logic. Read [can I build my business app myself with AI tools](/en/blog/build-business-app-yourself-ai-tools) for when a rebuild makes sense, and use the broader [software security requirements checklist](/en/blog/software-security-requirements-buyer-checklist) for the long term.

[Ask Wizy for a pre-launch review](/en#contact).

## Frequently asked questions

### Can I just ask the AI tool if my app is secure?

Ask it, but verify. It often answers "yes" for the parts it wrote. The two-account test and the logged-out test give you real evidence.

### How long does a professional review take?

For a small app, often a few days. It depends on how many screens, tables and integrations it has.

### Do I need a penetration test?

Not usually for a small internal tool. Consider one when the app handles sensitive data or many outside users.

### What if the app is already live?

Run the same checklist now. If item 1 or 2 fails, restrict access first, fix, then assess whether any data was exposed.
===VI===
Trước khi ra mắt một app làm bằng công cụ lập trình AI, hãy kiểm tra sáu điều: ai đọc được dữ liệu, mỗi người dùng có chỉ thấy hồ sơ của mình không, mật khẩu và khoá bí mật được để ở đâu, thanh toán được xác nhận thế nào, bạn có khôi phục được bản sao lưu không, và làm sao bạn biết khi có lỗi. Lỗi phổ biến nhất là điều đầu tiên: một database ai cũng đọc được vì chưa ai bật quy tắc truy cập. Bạn có thể tự thử phần lớn các mục này trong một buổi chiều, rồi nhờ lập trình viên xác nhận.

## Điểm cần nhớ

- Thử bằng hai tài khoản. Nếu tài khoản này thấy dữ liệu của tài khoản kia, đừng ra mắt.
- Khoá bí mật không bao giờ được xuất hiện trên trình duyệt.
- Thanh toán thành công phải do nhà cung cấp thanh toán xác nhận, không phải do trang web tự báo.
- Bản sao lưu chưa từng khôi phục thử thì chưa thể coi là bản sao lưu.

## Checklist trước khi ra mắt

| # | Hạng mục | Người không biết code thử thế nào | Đạt khi |
| --- | --- | --- | --- |
| 1 | Quy tắc truy cập database | Hỏi công cụ: "Liệt kê mọi bảng và quy tắc truy cập của từng bảng." Nhờ lập trình viên thử đọc dữ liệu khi chưa đăng nhập | Không bảng nào đọc hay ghi được khi không có đăng nhập phù hợp |
| 2 | Dữ liệu theo người dùng | Tạo hai tài khoản thử. Đăng nhập bằng A, thử mở hồ sơ của B bằng cách đổi đường link | A chỉ thấy hồ sơ của A |
| 3 | Trang quản trị | Đăng xuất rồi vào thẳng từng link trang quản trị | Tất cả chuyển về trang đăng nhập hoặc báo "không có quyền" |
| 4 | Khoá bí mật | Tìm trong code các chữ như "secret", "service", "sk_" | Khoá bí mật chỉ nằm trên server hoặc trong phần cài đặt môi trường |
| 5 | Thanh toán | Trả bằng thẻ thử rồi huỷ ở bước cuối | Đơn chỉ được đánh dấu đã trả sau khi nhà cung cấp xác nhận |
| 6 | Kiểm tra dữ liệu nhập | Nhập chữ rất dài, số lượng âm, ngày trong quá khứ | App từ chối dữ liệu sai kèm thông báo rõ ràng |
| 7 | Sao lưu | Hỏi sao lưu chạy thế nào, rồi khôi phục thử vào một bản sao | Bạn đã khôi phục dữ liệu thật ít nhất một lần |
| 8 | Lỗi và cảnh báo | Cố ý làm hỏng một thứ trên bản thử | Có người nhận được cảnh báo |
| 9 | Email và tin nhắn | Gửi thử yêu cầu đặt lại mật khẩu | Email đến nơi và đường link có hạn dùng |
| 10 | Quyền sở hữu | Liệt kê mọi tài khoản app đang dùng | Tất cả đứng tên email doanh nghiệp do bạn kiểm soát |

## Vì sao mục 1 quan trọng đến vậy?

Nhiều công cụ AI kết nối với một database dạng dịch vụ mà trình duyệt nói chuyện trực tiếp, bằng một khoá được thiết kế để công khai. Cách này chỉ an toàn khi mỗi bảng có quy tắc truy cập, đôi khi gọi là row-level security, quy định ai được đọc hay sửa dòng nào. Không có quy tắc đó, khoá công khai mở được mọi thứ. Các bài phân tích về [rủi ro của vibe coding](https://www.kaspersky.com/blog/safer-vibe-coding-2026/55677/) xếp đây là vấn đề số một.

## Cần quyết định gì thêm trước khi ra mắt?

- **Thông báo quyền riêng tư.** Bạn thu thập gì và vì sao, viết bằng lời dễ hiểu.
- **Nơi đặt dữ liệu.** Database được host ở đâu. Xem [nơi đặt hosting phần mềm tại Canada](/vi/blog/where-to-host-custom-software-canada).
- **Trợ năng.** Nếu bạn ở Ontario và có từ 50 nhân viên trở lên, xem [yêu cầu AODA cho web app](/vi/blog/aoda-accessibility-web-app-ontario).
- **Ai bảo trì.** Sau khi ra mắt phải có người cập nhật thư viện và sửa lỗi. Xem [bảo trì phần mềm sau khi ra mắt tốn bao nhiêu](/vi/blog/software-maintenance-cost-after-launch).

## Một ca giả lập diễn ra thế nào?

Một công ty dọn nhà làm app đặt lịch cho khách bằng công cụ AI. Trong bài thử hai tài khoản, khách A mở được địa chỉ của khách B chỉ bằng cách đổi một con số trên link. Lập trình viên thêm quy tắc truy cập cho bảng lịch hẹn và chuyển phần tính giá về server. Thử lại với cả hai tài khoản và đạt. Chủ doanh nghiệp còn khôi phục bản sao lưu hôm qua vào một bản sao để chắc chắn nó dùng được, rồi mới ra mắt.

## Nếu app trượt nhiều mục thì sao?

Nếu trượt các mục 1–5, hãy dừng lại và nhờ lập trình viên rà soát. Nếu code quá rối, có thể giữ thiết kế và làm lại phần logic sẽ nhanh hơn. Đọc [tôi có tự làm app doanh nghiệp bằng công cụ AI được không](/vi/blog/build-business-app-yourself-ai-tools) để biết khi nào nên làm lại, và dùng [checklist yêu cầu bảo mật cho dự án phần mềm](/vi/blog/software-security-requirements-buyer-checklist) cho dài hạn.

[Nhờ Wizy rà soát app trước khi ra mắt](/vi#contact).

## Câu hỏi thường gặp

### Tôi hỏi công cụ AI xem app có an toàn không là được chứ?

Cứ hỏi, nhưng phải kiểm chứng. Công cụ thường trả lời "an toàn" cho phần nó đã viết. Bài thử hai tài khoản và bài thử khi đăng xuất mới cho bạn bằng chứng thật.

### Rà soát chuyên nghiệp mất bao lâu?

Với app nhỏ, thường vài ngày. Tuỳ số màn hình, số bảng dữ liệu và số tích hợp.

### Có cần kiểm thử xâm nhập (penetration test) không?

Thường không cần với công cụ nội bộ nhỏ. Hãy cân nhắc khi app xử lý dữ liệu nhạy cảm hoặc có nhiều người dùng bên ngoài.

### Nếu app đã chạy rồi thì sao?

Chạy ngay checklist này. Nếu trượt mục 1 hoặc 2, hãy hạn chế truy cập trước, sửa, rồi đánh giá xem có dữ liệu nào đã bị lộ không.
