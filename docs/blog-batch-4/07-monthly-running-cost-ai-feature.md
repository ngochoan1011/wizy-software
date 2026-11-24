slug: monthly-running-cost-ai-feature
title_en: How Much Does It Cost to Run an AI Feature Every Month?
title_vi: Chạy một tính năng AI mỗi tháng tốn bao nhiêu?
excerpt_en: Monthly cost is usage fees for the AI model plus hosting, logging, human review and upkeep. Estimate it from your expected volume before you build, not after.
excerpt_vi: Chi phí hàng tháng gồm phí sử dụng mô hình AI cộng hosting, nhật ký, người duyệt và bảo trì. Hãy ước tính từ khối lượng dự kiến trước khi xây, đừng đợi đến sau.
seo_title_en: How Much Does It Cost to Run an AI Feature Each Month?
seo_title_vi: Chạy tính năng AI mỗi tháng tốn bao nhiêu?
seo_description_en: The cost lines behind a chatbot, AI assistant or automation after launch, a simple formula to estimate them and ways to keep the monthly bill predictable.
seo_description_vi: Các khoản chi phí đằng sau chatbot, trợ lý AI hay tự động hoá sau khi ra mắt, công thức đơn giản để ước tính và cách giữ hoá đơn hàng tháng dễ dự đoán.
tags: AI adoption, Budget planning, Software purchasing
===EN===
An AI feature has two kinds of monthly cost: usage fees charged by the AI provider each time the feature runs, and the fixed costs around it, such as hosting, storing logs, monitoring, human review and small fixes. Usage fees grow with volume and with how much text you send and receive each time. Estimate both before building by multiplying expected monthly uses by the cost per use, then add the fixed costs and a buffer for busy months.

This article explains how to estimate costs. It does not give Wizy prices. AI provider prices change often, so check the provider's current pricing page.

## Key takeaways

- Most AI providers charge per amount of text processed, often measured in "tokens".
- Long prompts, long documents and long conversations cost more per use.
- Human review time is often the largest real cost, and the most useful one.
- Set a monthly spending limit with the provider from day one.

## What are the cost lines?

| Cost line | What drives it | Grows with usage? |
| --- | --- | --- |
| AI model usage | Number of requests × text in + text out | Yes |
| Search index (for document chatbots) | Amount of content stored and searched | Slightly |
| Hosting and database | Your app's servers and storage | Slightly |
| Logs and monitoring | How long you keep conversations and alerts | Slightly |
| Human review | Staff time checking outputs | Yes, unless you sample |
| Upkeep | Updating prompts, content, tests and model versions | No, roughly fixed |
| Phone or messaging fees (voice and SMS bots) | Minutes and messages | Yes |

## How do you estimate usage fees?

Use this formula:

**Monthly usage fee = uses per month × average cost per use**

To find the average cost per use:

1. Run 20 realistic examples in a test.
2. Record the text sent and received for each. Most provider dashboards show this.
3. Multiply by the provider's current published rate.
4. Take the average, then add 30% for longer-than-usual cases.

### Worked example with assumed numbers

These numbers are made up to show the method. They are not real prices.

| Item | Assumption |
| --- | --- |
| Customer questions per month | 3,000 |
| Average cost per answer (from the test) | $0.01 |
| Monthly usage fee | 3,000 × $0.01 = $30 |
| Plus 30% buffer | $39 |
| Fixed costs (hosting, logs, monitoring) | $60 |
| Human review: 2 hours/month at $30/hour | $60 |
| **Estimated monthly total** | **about $159** |

In this example, usage is the smallest line. That is common for small businesses. It changes quickly if every request includes long documents, if conversations run long, or if the feature runs automatically on every email.

## How do you keep the bill predictable?

- **Spending cap.** Set a hard monthly limit and an alert at 50% and 80%.
- **Right-size the model.** Use a smaller, cheaper model for simple tasks such as sorting, and a stronger one only where quality matters.
- **Shorter context.** Send only the relevant sections of a document, not the whole file.
- **Cache repeat answers.** Common questions can reuse an approved answer.
- **Limit abuse.** Rate-limit public chatbots so one visitor cannot run thousands of requests.
- **Review by sample.** Once quality is stable, review a sample instead of every output.

## How does this play out in a fictional case?

A home renovation company adds an AI feature that drafts a first reply to every website enquiry. The test shows each draft is cheap, but the first version sent the full 40-page service guide with every request. Sending only the two most relevant sections cuts usage cost per draft sharply with no drop in quality. The owner sets a monthly cap and checks the provider dashboard during the first month.

## How does this fit the wider budget?

Include AI running costs in the same plan as other upkeep. See [what software maintenance costs after launch](/en/blog/software-maintenance-cost-after-launch) and [how to measure the ROI of a software or automation project](/en/blog/measure-roi-software-automation-project).

[Ask Wizy to estimate running costs for your AI idea](/en#contact).

## Frequently asked questions

### What is a token?

A small piece of text, often part of a word. Providers count tokens sent in and tokens returned, and charge for both, usually at different rates.

### Is it cheaper to host my own AI model?

Rarely for a small business. You pay for servers whether the model is busy or not, and someone must maintain it. It can make sense at high volume or for strict data needs.

### Will prices go down?

They have tended to fall for the same capability, but newer, stronger models can cost more. Re-check your model choice every six months.

### What about fixed-price AI subscriptions for staff?

Seat-based tools, like a team chatbot plan, are priced per user. That is different from an AI feature inside your own software, which is usually priced by usage.
===VI===
Một tính năng AI có hai loại chi phí hàng tháng: phí sử dụng mà nhà cung cấp AI tính mỗi lần tính năng chạy, và các chi phí cố định xung quanh, như hosting, lưu nhật ký, theo dõi, người duyệt và sửa lỗi nhỏ. Phí sử dụng tăng theo khối lượng và theo lượng chữ bạn gửi đi, nhận về mỗi lần. Hãy ước tính cả hai trước khi xây bằng cách nhân số lần dùng mỗi tháng với chi phí mỗi lần, rồi cộng chi phí cố định và một khoản dự phòng cho tháng đông.

Bài viết này giải thích cách ước tính chi phí, không đưa ra giá của Wizy. Giá của các nhà cung cấp AI thay đổi thường xuyên, nên hãy xem trang giá hiện hành của nhà cung cấp.

## Điểm cần nhớ

- Phần lớn nhà cung cấp AI tính phí theo lượng chữ được xử lý, thường đo bằng "token".
- Câu lệnh dài, tài liệu dài và hội thoại dài làm mỗi lần dùng đắt hơn.
- Thời gian người duyệt thường là chi phí thật lớn nhất, và cũng hữu ích nhất.
- Đặt hạn mức chi tiêu hàng tháng với nhà cung cấp ngay từ ngày đầu.

## Gồm những khoản chi phí nào?

| Khoản chi phí | Yếu tố quyết định | Tăng theo lượng dùng? |
| --- | --- | --- |
| Dùng mô hình AI | Số lần gọi × chữ gửi đi + chữ nhận về | Có |
| Chỉ mục tìm kiếm (cho chatbot tài liệu) | Lượng nội dung được lưu và tìm | Ít |
| Hosting và database | Server và dung lượng lưu trữ của app | Ít |
| Nhật ký và theo dõi | Bạn giữ hội thoại và cảnh báo bao lâu | Ít |
| Người duyệt | Thời gian nhân viên kiểm tra kết quả | Có, trừ khi duyệt theo mẫu |
| Bảo trì | Cập nhật câu lệnh, nội dung, bộ thử và phiên bản mô hình | Không, gần như cố định |
| Phí điện thoại, tin nhắn (bot thoại, SMS) | Số phút và số tin nhắn | Có |

## Ước tính phí sử dụng thế nào?

Dùng công thức này:

**Phí sử dụng hàng tháng = số lần dùng mỗi tháng × chi phí trung bình mỗi lần**

Để tìm chi phí trung bình mỗi lần:

1. Chạy thử 20 ví dụ sát thực tế.
2. Ghi lại lượng chữ gửi và nhận của từng lần. Phần lớn dashboard của nhà cung cấp có hiển thị.
3. Nhân với đơn giá công bố hiện hành của nhà cung cấp.
4. Lấy trung bình, rồi cộng thêm 30% cho những trường hợp dài hơn bình thường.

### Ví dụ tính với số giả định

Các con số dưới đây là giả định để minh hoạ cách tính, không phải giá thật.

| Hạng mục | Giả định |
| --- | --- |
| Số câu hỏi của khách mỗi tháng | 3.000 |
| Chi phí trung bình mỗi câu trả lời (từ bài thử) | 0,01 $ |
| Phí sử dụng hàng tháng | 3.000 × 0,01 $ = 30 $ |
| Cộng 30% dự phòng | 39 $ |
| Chi phí cố định (hosting, nhật ký, theo dõi) | 60 $ |
| Người duyệt: 2 giờ/tháng × 30 $/giờ | 60 $ |
| **Tổng ước tính mỗi tháng** | **khoảng 159 $** |

Trong ví dụ này, phí sử dụng là khoản nhỏ nhất. Điều này phổ biến với doanh nghiệp nhỏ. Nó thay đổi rất nhanh nếu mỗi lần gọi đều kèm tài liệu dài, nếu hội thoại kéo dài, hoặc nếu tính năng tự chạy trên mọi email.

## Giữ hoá đơn dễ dự đoán bằng cách nào?

- **Hạn mức chi tiêu.** Đặt trần cứng mỗi tháng và cảnh báo ở mức 50% và 80%.
- **Chọn mô hình vừa đủ.** Dùng mô hình nhỏ, rẻ cho việc đơn giản như phân loại, chỉ dùng mô hình mạnh ở chỗ chất lượng thật sự quan trọng.
- **Ngữ cảnh ngắn hơn.** Chỉ gửi các đoạn liên quan của tài liệu, không gửi cả file.
- **Dùng lại câu trả lời lặp.** Câu hỏi phổ biến có thể dùng lại câu trả lời đã duyệt.
- **Chặn lạm dụng.** Giới hạn tần suất cho chatbot công khai để một người không chạy được hàng nghìn lượt.
- **Duyệt theo mẫu.** Khi chất lượng đã ổn định, chỉ duyệt một phần kết quả thay vì tất cả.

## Một ca giả lập diễn ra thế nào?

Một công ty sửa nhà thêm tính năng AI soạn sẵn câu trả lời đầu tiên cho mọi yêu cầu gửi qua website. Bài thử cho thấy mỗi bản nháp đều rẻ, nhưng phiên bản đầu gửi kèm cả cuốn hướng dẫn dịch vụ 40 trang trong mỗi lần gọi. Chỉ gửi hai đoạn liên quan nhất giúp giảm mạnh phí mỗi bản nháp mà chất lượng không giảm. Chủ doanh nghiệp đặt hạn mức hàng tháng và theo dõi dashboard của nhà cung cấp trong tháng đầu.

## Khoản này nằm ở đâu trong ngân sách chung?

Đưa chi phí vận hành AI vào cùng kế hoạch với các chi phí duy trì khác. Xem [bảo trì phần mềm sau khi ra mắt tốn bao nhiêu](/vi/blog/software-maintenance-cost-after-launch) và [đo ROI của một dự án phần mềm hay tự động hoá như thế nào](/vi/blog/measure-roi-software-automation-project).

[Nhờ Wizy ước tính chi phí vận hành cho ý tưởng AI của bạn](/vi#contact).

## Câu hỏi thường gặp

### Token là gì?

Là một mẩu chữ nhỏ, thường là một phần của từ. Nhà cung cấp đếm token gửi đi và token trả về, và tính phí cả hai, thường với đơn giá khác nhau.

### Tự host mô hình AI có rẻ hơn không?

Hiếm khi rẻ hơn với doanh nghiệp nhỏ. Bạn trả tiền server dù mô hình có bận hay không, và phải có người bảo trì. Cách này hợp khi khối lượng rất lớn hoặc có yêu cầu dữ liệu khắt khe.

### Giá có giảm không?

Với cùng một mức năng lực, giá có xu hướng giảm, nhưng mô hình mới, mạnh hơn có thể đắt hơn. Hãy xem lại lựa chọn mô hình mỗi sáu tháng.

### Còn gói AI trả phí cố định cho nhân viên thì sao?

Công cụ tính theo người dùng, như gói chatbot cho nhóm, có giá theo số tài khoản. Khác với tính năng AI nằm trong phần mềm của bạn, thường tính theo lượng sử dụng.
