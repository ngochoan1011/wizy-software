slug: ai-chatbot-answers-from-company-documents
title_en: How Do You Build an AI Chatbot That Answers From Your Own Documents?
title_vi: Làm sao xây chatbot AI trả lời dựa trên tài liệu của chính doanh nghiệp?
excerpt_en: Give the chatbot a small, current set of approved documents, make it answer only from them with a link to the source, and route anything it cannot find to a person.
excerpt_vi: Cho chatbot một bộ tài liệu nhỏ, cập nhật và đã duyệt, buộc nó chỉ trả lời từ đó kèm link nguồn, và chuyển cho người thật mọi câu nó không tìm thấy.
seo_title_en: How to Build an AI Chatbot That Answers From Your Documents
seo_title_vi: Xây chatbot AI trả lời từ tài liệu doanh nghiệp
seo_description_en: How a document-based AI chatbot works, why chatbots give wrong answers, how to prepare your content, and what to test before customers or staff use it.
seo_description_vi: Chatbot AI dựa trên tài liệu hoạt động thế nào, vì sao chatbot trả lời sai, cách chuẩn bị nội dung và cần thử gì trước khi cho khách hay nhân viên dùng.
tags: AI adoption, Custom software, Customer service
===EN===
To build a chatbot that answers from your own documents, you give it a curated set of approved content, such as your service list, policies and FAQs. When someone asks a question, the system first finds the most relevant passages, then asks the AI to answer using only those passages and to show where the answer came from. If nothing relevant is found, it says so and offers a person. Most wrong answers come from outdated or conflicting documents, not from the AI model.

## Key takeaways

- The quality of your documents sets the quality of the answers.
- One topic should live in one place. Conflicting copies create wrong answers.
- Always show the source, so staff and customers can check.
- "I don't know, here is who can help" is a correct answer.

## How does a document-based chatbot work?

The common approach is called retrieval-augmented generation, or RAG. In plain terms:

1. **Prepare.** Your documents are split into short sections and indexed so they can be searched by meaning.
2. **Find.** When a question arrives, the system pulls the few sections most related to it.
3. **Answer.** The AI writes a reply using only those sections, with a link to each source.
4. **Fall back.** If the sections do not answer the question, the bot hands off to a person.

## Why do chatbots give wrong answers?

| Cause | Example | Fix |
| --- | --- | --- |
| Outdated document | Last year's price list is still in the folder | Remove old versions; add an "effective date" to each page |
| Conflicting copies | Two FAQ pages give different cancellation rules | Keep one source per topic |
| Missing information | Nobody wrote down the parking policy | Add a page, or let the bot say it does not know |
| The AI fills gaps | It "guesses" a reasonable price | Instruct it to answer only from sources and test this |
| Scanned images | A PDF menu is a photo with no text | Convert to text first |
| Too much content | Every email and draft was uploaded | Start with approved, customer-ready content only |

## What content should you start with?

- Services or products, with what is included
- Hours, locations and contact routes
- Booking, cancellation and refund policies
- The 20 questions your staff answer most often
- For an internal bot: procedures and checklists staff use daily

Write each as a short page with a clear title. If you are not sure your information is organized enough, see [is your business data ready for AI](/en/blog/is-business-data-ready-for-ai).

## What should you test before launch?

Build a test set of 30 to 50 real questions, including:

- Questions with clear answers in your documents
- Questions with no answer in your documents
- Questions phrased casually, with typos, or in another language
- Questions that try to get it to promise a discount or give advice it should not

Score each answer as correct, wrong or correctly refused. Do not launch until wrong answers on important topics, such as prices and policies, are zero in the test set. Re-run the test after every content change.

## How does this play out in a fictional case?

A property management company wants tenants to get quick answers about maintenance requests, garbage days and parking rules. The first test gives wrong garbage days because two buildings' notices were mixed in one document. The team splits notices by building and adds the building name to each page. The bot asks tenants which building they live in before answering. Emergency questions, such as leaks, always show the emergency phone number instead of an AI answer.

## Should you buy a chatbot product or build one?

| Situation | Better fit |
| --- | --- |
| Website FAQ with public information | A chatbot product with document upload |
| Needs to read live data, like order or booking status | Custom integration with your systems |
| Internal bot over sensitive documents | A setup where you control data location and access |
| Must log every answer for review | Custom, or a product with full conversation logs and export |

Costs keep running after launch. See [how much it costs to run an AI feature every month](/en/blog/monthly-running-cost-ai-feature), and plan human review using [how to scope an AI pilot with human approval](/en/blog/ai-pilot-human-approval-checklist).

[Talk to Wizy about a chatbot built on your documents](/en#contact).

## Frequently asked questions

### Does the AI learn from my documents permanently?

In a RAG setup, no. The documents are searched each time a question is asked. Update a document and the next answer uses the new version.

### Can it answer in Vietnamese or French if my documents are in English?

Many models can answer in another language from English sources. Test the translations of important terms, such as service names and policies.

### How do I stop it from making things up?

Instruct it to answer only from the retrieved sources, require a source link in each answer, and include unanswerable questions in your test set.

### Who should own the content?

One person per topic area. When a policy changes, that person updates the page the same day.
===VI===
Để xây chatbot trả lời dựa trên tài liệu của chính bạn, bạn cho nó một bộ nội dung đã chọn lọc và đã duyệt, như danh sách dịch vụ, chính sách và câu hỏi thường gặp. Khi có người hỏi, hệ thống tìm những đoạn liên quan nhất trước, rồi yêu cầu AI chỉ trả lời bằng các đoạn đó và cho biết câu trả lời lấy từ đâu. Nếu không tìm thấy gì liên quan, chatbot nói rõ và đề nghị chuyển cho người thật. Phần lớn câu trả lời sai đến từ tài liệu cũ hoặc mâu thuẫn, không phải từ mô hình AI.

## Điểm cần nhớ

- Chất lượng tài liệu quyết định chất lượng câu trả lời.
- Mỗi chủ đề chỉ nên nằm ở một nơi. Nhiều bản sao mâu thuẫn tạo ra câu trả lời sai.
- Luôn hiển thị nguồn, để nhân viên và khách tự kiểm tra.
- "Tôi không biết, đây là người có thể giúp bạn" là một câu trả lời đúng.

## Chatbot dựa trên tài liệu hoạt động thế nào?

Cách phổ biến gọi là retrieval-augmented generation, viết tắt RAG. Nói đơn giản:

1. **Chuẩn bị.** Tài liệu được chia thành các đoạn ngắn và lập chỉ mục để tìm theo ý nghĩa.
2. **Tìm.** Khi có câu hỏi, hệ thống lấy ra vài đoạn liên quan nhất.
3. **Trả lời.** AI viết câu trả lời chỉ dựa trên các đoạn đó, kèm link tới từng nguồn.
4. **Dự phòng.** Nếu các đoạn không trả lời được câu hỏi, chatbot chuyển cho người thật.

## Vì sao chatbot trả lời sai?

| Nguyên nhân | Ví dụ | Cách sửa |
| --- | --- | --- |
| Tài liệu cũ | Bảng giá năm ngoái vẫn nằm trong thư mục | Xoá bản cũ; thêm "ngày hiệu lực" cho mỗi trang |
| Nhiều bản mâu thuẫn | Hai trang FAQ ghi hai quy định huỷ lịch khác nhau | Mỗi chủ đề một nguồn duy nhất |
| Thiếu thông tin | Chưa ai viết ra quy định đậu xe | Thêm một trang, hoặc để chatbot nói là không biết |
| AI tự lấp chỗ trống | Nó "đoán" một mức giá nghe hợp lý | Yêu cầu chỉ trả lời từ nguồn và thử điều này |
| Ảnh scan | Thực đơn PDF là ảnh chụp, không có chữ | Chuyển thành văn bản trước |
| Quá nhiều nội dung | Tải lên cả email lẫn bản nháp | Bắt đầu chỉ với nội dung đã duyệt, sẵn sàng cho khách |

## Nên bắt đầu với nội dung nào?

- Dịch vụ hoặc sản phẩm, kèm những gì được bao gồm
- Giờ mở cửa, địa điểm và cách liên hệ
- Chính sách đặt lịch, huỷ và hoàn tiền
- 20 câu hỏi nhân viên trả lời nhiều nhất
- Với chatbot nội bộ: quy trình và checklist nhân viên dùng hằng ngày

Viết mỗi mục thành một trang ngắn có tiêu đề rõ. Nếu chưa chắc thông tin của bạn đã đủ ngăn nắp, xem [dữ liệu doanh nghiệp của bạn đã sẵn sàng cho AI chưa](/vi/blog/is-business-data-ready-for-ai).

## Cần thử gì trước khi ra mắt?

Lập bộ thử gồm 30 đến 50 câu hỏi thật, bao gồm:

- Câu hỏi có câu trả lời rõ trong tài liệu
- Câu hỏi không có câu trả lời trong tài liệu
- Câu hỏi viết kiểu nói chuyện, có lỗi chính tả, hoặc bằng ngôn ngữ khác
- Câu hỏi cố dụ chatbot hứa giảm giá hoặc tư vấn điều nó không nên tư vấn

Chấm mỗi câu là đúng, sai, hay từ chối đúng. Đừng ra mắt cho đến khi số câu sai về các chủ đề quan trọng như giá và chính sách bằng không trong bộ thử. Chạy lại bộ thử sau mỗi lần thay đổi nội dung.

## Một ca giả lập diễn ra thế nào?

Một công ty quản lý nhà cho thuê muốn người thuê được trả lời nhanh về yêu cầu sửa chữa, ngày đổ rác và quy định đậu xe. Lần thử đầu, chatbot trả lời sai ngày đổ rác vì thông báo của hai toà nhà bị gộp trong một tài liệu. Đội ngũ tách thông báo theo từng toà và thêm tên toà vào mỗi trang. Chatbot hỏi người thuê ở toà nào trước khi trả lời. Câu hỏi khẩn cấp, như rò nước, luôn hiện số điện thoại khẩn cấp thay vì câu trả lời của AI.

## Nên mua sản phẩm chatbot hay tự xây?

| Tình huống | Lựa chọn hợp hơn |
| --- | --- |
| FAQ trên website với thông tin công khai | Sản phẩm chatbot có chức năng tải tài liệu |
| Cần đọc dữ liệu đang thay đổi, như trạng thái đơn hay lịch hẹn | Tích hợp riêng với hệ thống của bạn |
| Chatbot nội bộ trên tài liệu nhạy cảm | Thiết lập mà bạn kiểm soát nơi lưu và quyền truy cập |
| Phải lưu nhật ký mọi câu trả lời để rà soát | Làm riêng, hoặc sản phẩm có nhật ký hội thoại đầy đủ và xuất được |

Chi phí vẫn chạy sau khi ra mắt. Xem [chạy một tính năng AI mỗi tháng tốn bao nhiêu](/vi/blog/monthly-running-cost-ai-feature), và lên kế hoạch cho người duyệt theo [cách xác định phạm vi một đợt thí điểm AI có con người phê duyệt](/vi/blog/ai-pilot-human-approval-checklist).

[Trao đổi với Wizy về chatbot xây trên tài liệu của bạn](/vi#contact).

## Câu hỏi thường gặp

### AI có học vĩnh viễn từ tài liệu của tôi không?

Với cách RAG thì không. Tài liệu được tìm lại mỗi lần có câu hỏi. Bạn cập nhật tài liệu thì câu trả lời tiếp theo dùng bản mới.

### Tài liệu bằng tiếng Anh thì chatbot trả lời tiếng Việt hay tiếng Pháp được không?

Nhiều mô hình trả lời được bằng ngôn ngữ khác từ nguồn tiếng Anh. Hãy thử cách dịch các thuật ngữ quan trọng như tên dịch vụ và chính sách.

### Làm sao để nó không bịa?

Yêu cầu nó chỉ trả lời từ các nguồn đã tìm được, bắt buộc có link nguồn trong mỗi câu trả lời, và đưa các câu không thể trả lời vào bộ thử.

### Ai nên chịu trách nhiệm nội dung?

Mỗi mảng chủ đề một người. Khi chính sách thay đổi, người đó cập nhật trang ngay trong ngày.
