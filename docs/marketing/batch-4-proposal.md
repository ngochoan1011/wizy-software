# Batch 4 — Đề xuất 20 bài AEO + video ngắn cho software.wizy.ca

> Ngày: 23/11/2026 · Trạng thái: 20 bài đã viết (EN + VI), lưu ở `docs/blog-batch-4/` và đưa vào `public.software_posts` dạng **draft**.
> Định dạng bài theo "House format (AEO)" trong [BLOG-CONTENT-PLAN.md](../BLOG-CONTENT-PLAN.md).

## 1. Kết quả research (tóm tắt)

| Phát hiện | Nguồn | Ý nghĩa cho nội dung |
| --- | --- | --- |
| Tỷ lệ doanh nghiệp Canada dùng AI để làm sản phẩm/dịch vụ tăng gấp đôi từ 05/2024 đến 05/2025 (12,2%), và khoảng 19% vào 2026. Doanh nghiệp nhỏ tụt lại xa so với doanh nghiệp lớn. | [StatCan 2025](https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025011-eng.htm), [The Hub 06/2026](https://thehub.ca/2026/06/26/canadian-businesses-are-closing-the-ai-adoption-gap/) | Chủ doanh nghiệp nhỏ đang hỏi "bắt đầu AI từ đâu, có an toàn không". Đây là khoảng trống lớn nhất của blog hiện tại (mới có 4 bài AI, đều ở mức quy trình). |
| Nhân viên dán dữ liệu khách vào ChatGPT là rủi ro thật. Các cơ quan quyền riêng tư Canada ra 9 nguyên tắc cho generative AI (12/2023) và công bố kết quả điều tra OpenAI (05/2026). | [OPC principles](https://www.priv.gc.ca/en/privacy-topics/ai-technology-and-innovation/artificial-intelligence/gd_principles_ai/), [OPC 2026](https://www.priv.gc.ca/en/opc-news/news-and-announcements/2026/bg-info_openai_260506/) | Bài "nhân viên có được dán dữ liệu khách vào ChatGPT không" có câu hỏi rõ, nguồn chính thống, hook video mạnh. |
| App "vibe coding" (Lovable, Bolt, v0) bị lộ dữ liệu nhiều lần trong 2025–2026, lỗi phổ biến nhất là database không bật phân quyền theo dòng. | [The Next Web](https://thenextweb.com/news/lovable-vibe-coding-security-crisis-exposed), [Kaspersky](https://www.kaspersky.com/blog/safer-vibe-coding-2026/55677/) | Chủ doanh nghiệp tự làm app bằng AI là xu hướng thật, và là cửa vào tự nhiên cho dịch vụ Modernization & Maintenance / review trước khi ra mắt. |
| AI receptionist cho doanh nghiệp nhỏ ở Canada đã thành thị trường đông đúc, có bản song ngữ Anh–Pháp. Số liệu "cuộc gọi nhỡ" trên mạng dao động 28–62%, chủ yếu từ vendor. | [SourceForge Canada](https://sourceforge.net/software/ai-receptionists/canada/) | Viết bài trung lập "khi nào nên dùng", không trích số liệu vendor chưa kiểm chứng. |
| CDAP liên bang đã đóng; Ontario còn DMAP (tối đa 50% chi phí lập kế hoạch số hoá, trần 15.000 $) qua Digital Competence Centre; IRAP dành cho dự án đổi mới công nghệ. | [OCI](https://www.oc-innovation.ca/), [NRC IRAP](https://nrc.canada.ca/en/support-technology-innovation) | Câu hỏi "có tiền hỗ trợ không" xuất hiện trước mọi quyết định ngân sách. Bài phải ghi rõ "kiểm tra trang chính thức". |
| Luật tiếng Pháp Quebec (Bill 96) có hiệu lực đầy đủ từ 01/06/2025, phần mềm phải có bản tiếng Pháp nếu bản đó tồn tại. | [LégisQuébec C-11](https://www.legisquebec.gouv.qc.ca/en/document/cs/c-11), [OQLF](https://www.oqlf.gouv.qc.ca/) | Nằm trong backlog ("bilingual EN/FR"). Doanh nghiệp Ontario bán sang Quebec cần biết. |
| AEO 2026: AI Overviews trích dẫn trùng ~76% với top 10 Google, ChatGPT chỉ ~12%; khoảng 32% người mua B2B tìm nhà cung cấp mới qua chatbot AI. Trang được trích là trang trả lời thẳng, dễ trích đoạn. | [HubSpot](https://blog.hubspot.com/marketing/aeo-b2b-strategy), [G2](https://learn.g2.com/winning-the-zero-click-serp-a-playbook-for-securing-citations-in-ai-overviews) | Giữ format answer-first, bảng, FAQ. Mỗi bài trả lời đúng **một** câu hỏi mà chưa bài nào trong 44 bài trả lời. |

## 2. Nguyên tắc chọn đề tài

1. **Không trùng** 44 bài đã đăng (đã đối chiếu slug và tiêu đề).
2. **Một câu hỏi mua hàng thật** mỗi bài, viết đúng câu khách gõ vào Google/ChatGPT.
3. **Có hook video 15–30 giây**: một nỗi đau cụ thể, một con số hoặc một lầm tưởng để lật lại.
4. **Dẫn về 1 trong 4 dịch vụ**: Product Discovery Sprint, MVP & Custom Software, Dedicated Product Pod, Modernization & Maintenance.
5. Theo luật nhà: không giá Wizy, không tên khách, không cam kết tuân thủ; chủ đề pháp lý trích nguồn gốc và có dòng "thông tin chung, không phải tư vấn".

## 3. Danh sách 20 bài + hook video ngắn

Hook viết bằng tiếng Việt để quay Reels/TikTok/Shorts. Cấu trúc gợi ý: **Hook (0–3s) → 2–3 nỗi đau / ý chính (3–20s) → gợi giải pháp (20–25s) → "Phân tích đầy đủ ở link bên dưới"**. Có thể dùng skill `blog-to-reel-script` hoặc `wizy-blog-explainer-video` sau khi bài được đăng.

### Cụm A — AI trong vận hành hằng ngày (7 bài)

| # | Tiêu đề (EN) | Slug | Hook video ngắn | Dịch vụ dẫn tới |
| --- | --- | --- | --- | --- |
| 1 | Can Employees Paste Customer Data Into ChatGPT? | `employees-customer-data-chatgpt-policy` | "Nhân viên của anh chị vừa dán số điện thoại khách vào ChatGPT. Có sao không?" | Discovery Sprint |
| 2 | Should a Small Business Use an AI Receptionist to Answer Calls? | `ai-receptionist-small-business-phone-calls` | "Tiệm đông khách nhất lúc 6 giờ chiều, cũng là lúc không ai bắt máy." | MVP & Custom Software |
| 3 | Can I Build My Business App Myself With AI Tools Like Lovable or Bolt? | `build-business-app-yourself-ai-tools` | "Làm app trong một buổi tối bằng AI: thật, nhưng có 3 thứ AI không làm giùm bạn." | Discovery Sprint |
| 4 | What Should You Check Before Launching an App Built With AI Coding Tools? | `check-ai-built-app-before-launch` | "App AI làm đẹp lung linh. Rồi ai cũng xem được dữ liệu của mọi khách hàng." | Modernization & Maintenance |
| 5 | How Do You Build an AI Chatbot That Answers From Your Own Documents? | `ai-chatbot-answers-from-company-documents` | "Chatbot trả lời sai giá dịch vụ của chính bạn. Lỗi không nằm ở AI." | MVP & Custom Software |
| 6 | Is Your Business Data Ready for AI? | `is-business-data-ready-for-ai` | "AI không cứu được một file Excel có 4 cột tên khách khác nhau." | Discovery Sprint |
| 7 | How Much Does It Cost to Run an AI Feature Every Month? | `monthly-running-cost-ai-feature` | "Làm tính năng AI xong mới là lúc hoá đơn bắt đầu chạy." | MVP & Custom Software |

### Cụm B — Mua và quản lý dự án phần mềm (6 bài)

| # | Tiêu đề (EN) | Slug | Hook video ngắn | Dịch vụ dẫn tới |
| --- | --- | --- | --- | --- |
| 8 | No-Code or Custom Software: When Is No-Code Enough? | `no-code-vs-custom-software-when-enough` | "Không phải lúc nào cũng cần thuê lập trình. Đây là lúc no-code là đủ." | Discovery Sprint |
| 9 | How Do You Run a Software Vendor Demo and Reference Check? | `software-vendor-demo-reference-check` | "Demo nào cũng đẹp. Hỏi 5 câu này để thấy phần không đẹp." | Discovery Sprint |
| 10 | Why Do Software Projects Go Over Budget, and How Do You Prevent It? | `why-software-projects-go-over-budget` | "Báo giá 3 tháng, làm 9 tháng. 4 lý do, và lý do số 1 nằm ở phía chủ doanh nghiệp." | Discovery Sprint |
| 11 | What Does a Business Owner Need to Do During a Software Project? | `business-owner-role-during-software-project` | "Thuê công ty làm phần mềm không có nghĩa là giao rồi đi. Mỗi tuần anh chị cần 2 việc." | Dedicated Product Pod |
| 12 | How Can a Non-Technical Owner Tell if a Software Project Is on Track? | `non-technical-owner-software-project-on-track` | "Không đọc được code vẫn biết dự án đang trễ, nhờ 4 dấu hiệu." | Dedicated Product Pod |
| 13 | Is Offshore Software Development Actually Cheaper? The Hidden Costs to Count | `offshore-software-development-hidden-costs` | "Giờ công rẻ hơn chưa chắc dự án rẻ hơn. Đây là những chi phí không nằm trong báo giá." | Mô hình Wizy–HiTek |

### Cụm C — Quy định và tiền ở Canada (4 bài)

| # | Tiêu đề (EN) | Slug | Hook video ngắn | Dịch vụ dẫn tới |
| --- | --- | --- | --- | --- |
| 14 | Is There Government Funding for Software and Digital Adoption in Ontario? | `ontario-government-funding-software-digital-adoption` | "Chương trình 15.000 đô đã đóng. Vậy giờ còn gì?" | Discovery Sprint |
| 15 | Does Software Used or Sold in Quebec Need to Be in French? | `quebec-french-language-software-requirements` | "Khách ở Montreal muốn dùng app của bạn. Bản tiếng Pháp có bắt buộc không?" | MVP & Custom Software |
| 16 | How Should Custom Software Accept Payments in Canada? | `accept-payments-custom-software-canada` | "Đừng bao giờ để app của bạn tự lưu số thẻ khách hàng." | MVP & Custom Software |
| 17 | How Do You Connect Custom Software to QuickBooks or Xero? | `connect-custom-software-quickbooks-xero` | "Cuối tháng kế toán nhập tay lại 300 hoá đơn. Việc này máy làm được." | MVP & Custom Software |

### Cụm D — Theo ngành của khách Wizy (3 bài)

| # | Tiêu đề (EN) | Slug | Hook video ngắn | Dịch vụ dẫn tới |
| --- | --- | --- | --- | --- |
| 18 | What Software Does a Small Clinic in Ontario Need? | `small-clinic-software-ontario` | "Phòng khám nhỏ nhưng dùng 6 phần mềm không nói chuyện với nhau." | Discovery Sprint |
| 19 | How Do You Reduce No-Shows With Automated Reminders and Deposits? | `reduce-no-shows-reminders-deposits` | "Mỗi tuần 5 khách đặt rồi không đến. Tính ra là bao nhiêu tiền?" | MVP & Custom Software |
| 20 | When Should a Business Move Orders Out of WhatsApp, Messenger or Zalo? | `move-orders-out-of-chat-apps` | "Đơn hàng nằm trong 3 app chat, và một đơn vừa bị trôi mất." | MVP & Custom Software |

## 4. Bộ prompt AEO để đo mỗi tháng (bổ sung vào bộ 20 prompt hiện có)

Chạy trên ChatGPT, Perplexity, Google AI Overviews, ghi URL Wizy có được trích không.

1. Is it safe for my employees to use ChatGPT with customer information in Canada?
2. Should my salon use an AI receptionist?
3. Can I build a business app with Lovable and launch it?
4. What government funding is available for small business digital adoption in Ontario in 2026?
5. Does my software need a French version to sell in Quebec?
6. Why do software projects go over budget?
7. How do I reduce appointment no-shows at a small clinic?
8. Is offshore software development cheaper for a Canadian business?

## 5. Thứ tự đăng đề xuất (2 bài/tuần, 10 tuần)

1. Tuần 1: #1, #3 (hook mạnh nhất, mở cụm AI)
2. Tuần 2: #4, #10
3. Tuần 3: #2, #19
4. Tuần 4: #14, #6
5. Tuần 5: #5, #7
6. Tuần 6: #20, #16
7. Tuần 7: #8, #9
8. Tuần 8: #11, #12
9. Tuần 9: #15, #17
10. Tuần 10: #13, #18

Bài #3 và #4 link qua lại nhau, nên đăng cùng nhau hoặc #4 ngay sau #3. Tương tự #5 ↔ #6 ↔ #7, #11 ↔ #12.

## 6. Cần duyệt trước khi đăng

- **#1 (ChatGPT/quyền riêng tư), #14 (tài trợ), #15 (Quebec), #18 (phòng khám/PHIPA), #19 (CASL)**: người có chuyên môn pháp lý xem trước, kiểm tra lại link nguồn chính thức còn đúng.
- **#14**: điều kiện DMAP và IRAP thay đổi theo đợt; xác nhận trên oc-innovation.ca và nrc.canada.ca ngay trước ngày đăng.
- **Ảnh bìa**: đã tạo 20 ảnh (24/11/2026), gắn vào bài nháp. Xem `../blog-batch-4/covers/contact-sheet.jpg`.
