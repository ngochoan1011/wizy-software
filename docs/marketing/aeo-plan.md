# Kế hoạch tối ưu AEO cho Wizy Software EN và VI

**Ngày rà soát:** 14/11/2026, giờ Toronto  
**Trang mục tiêu:** [Tiếng Anh Canada](https://software.wizy.ca/en) và [Tiếng Việt](https://software.wizy.ca/vi)  
**Thời gian đề xuất:** 90 ngày kể từ khi bắt đầu. Blog hỗ trợ hai trang dịch vụ theo [kế hoạch nội dung 2027](content-plan.md).

## 1. Mục tiêu và phạm vi

Giúp người mua trả lời được ba câu hỏi ngay trên trang: Wizy làm loại dự án nào, ai chịu trách nhiệm tại Canada, và nên bắt đầu từ dịch vụ nào. AEO (Answer Engine Optimization) ở đây tập trung vào câu trả lời rõ trong HTML, ví dụ có thể kiểm chứng và liên kết đúng ngữ cảnh. Chỉ số kinh doanh chính là số cơ hội phần mềm phù hợp đi vào trao đổi discovery có đóng góp từ tìm kiếm tự nhiên hoặc công cụ AI.

- **EN** phục vụ founder, doanh nghiệp vừa và nhỏ ở Canada. SaaS team và agency là hai nhóm bổ sung khi đã có backlog, product owner hoặc khách hàng cần đội triển khai.
- **VI** phục vụ chủ doanh nghiệp và người ra quyết định nói tiếng Việt tại Canada. Giữ tên dịch vụ tiếng Anh để đối chiếu proposal. Giải thích các từ như *discovery*, *scope*, *estimate*, *delivery* và *handover* bằng tiếng Việt tự nhiên.
- **Định vị chung** Wizy là đầu mối tại Canada chịu trách nhiệm về discovery, giao tiếp, quản trị và triển khai với khách hàng. HiTek Software tại Việt Nam là đối tác triển khai kỹ thuật được công khai. Bốn dịch vụ là Product Discovery Sprint, MVP & Custom Software, Dedicated Product Pod, và Modernization & Maintenance. [Chiến lược Wizy–HiTek](../../../../docs-wizyca/01-strategy/software-outsourcing-strategy.md)

## 2. Hiện trạng production

| Hạng mục | Đã kiểm tra ngày 14/11/2026 | Việc cần làm |
| --- | --- | --- |
| Truy cập và ngôn ngữ | EN và VI trả HTTP 200. Trang gốc trả 308 sang EN. HTML có một H1 và `lang` đúng từng bản. | Giữ URL hiện tại. Sau khi sửa, kiểm tra lại HTML và chuyển ngôn ngữ trên cả desktop lẫn mobile. |
| Canonical, hreflang và sitemap | Mỗi trang tự canonical. Cả hai khai báo `en-CA`, `vi-CA` và `x-default` trỏ EN. Sitemap chứa cả hai landing page và hai bản A01. Ảnh OG trả 200. | Dùng URL Inspection để xác nhận Google đã index và chọn đúng canonical. Kiểm tra lại sau khi phát hành. [Sitemap](https://software.wizy.ca/sitemap.xml) · [Hướng dẫn hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions) |
| Câu trả lời đầu trang | H1 của hai bản nhấn vào mô hình vận hành. Đoạn mở giải thích vai trò theo quốc gia, còn tên HiTek nằm sâu hơn. Mục dịch vụ dùng tiêu đề khái quát. | Nêu loại dịch vụ và khu vực ngay trong H1. Đưa tên HiTek vào đoạn mở. Đổi tiêu đề mục dịch vụ để người mua nhận ra câu hỏi được trả lời. [EN](https://software.wizy.ca/en) · [VI](https://software.wizy.ca/vi) |
| Cam kết và bằng chứng | EN và VI có bảng minh họa kế hoạch trông như trạng thái trực tiếp. Các cụm như “proven engineering talent”, “Client-owned code & IP” và vai trò ký hợp đồng cần được đọc cùng phần điều kiện bên dưới. | Gắn nhãn rõ cho kế hoạch minh họa. Rà soát các câu về năng lực, repo, IP, hỗ trợ và vai trò hợp đồng để điều kiện áp dụng xuất hiện ngay cạnh câu trả lời. |
| Nội dung liên quan | Landing page có link tới trang danh sách blog. Hai bản A01 đã có CTA về form liên hệ cùng ngôn ngữ. | Thêm link từ landing tới A01 tại phần ví dụ sử dụng phần mềm vận hành. Bổ sung link ngược từ A01 về mục dịch vụ ở đoạn nói về tích hợp. |
| Dữ liệu có cấu trúc | HTML có graph `Organization`, `WebSite`, `Service` và `FAQPage` với 10 Q&A mỗi bản. | Giữ ID tổ chức và website nhất quán. Đồng bộ nội dung Service và FAQ với phần hiển thị khi cập nhật. Đo giá trị FAQ bằng mức độ người mua tìm được câu trả lời. Google đã ngừng hiển thị FAQ rich results. [Google Search changelog](https://developers.google.com/search/updates) |
| Đo lường | Kiểm tra công khai xác nhận được HTTP, HTML và sitemap. Chưa có số liệu Search Console, analytics hay pipeline cho kế hoạch này. | Lấy baseline trước khi chốt mục tiêu tăng trưởng. Trạng thái HTTP 200 chỉ xác nhận trang phục vụ được. |

## 3. Bản đồ câu hỏi của người mua

Các truy vấn là giả thuyết để kiểm tra bằng Search Console, kết quả tìm kiếm tại Canada và câu hỏi sales nhận được. Mỗi câu hỏi có một vị trí chính trên landing hoặc blog.

| Ý định | EN | VI | Đích trả lời |
| --- | --- | --- | --- |
| Tìm đối tác làm phần mềm | custom software development in Canada | dịch vụ phát triển phần mềm theo yêu cầu tại Canada | H1, đoạn mở và `#services` |
| Chọn điểm bắt đầu | what is a software discovery sprint and what do I get | dự án phần mềm chưa rõ yêu cầu nên bắt đầu thế nào | `#services` và `#process`. Dẫn tới A19 khi bài có URL xuất bản. |
| Hiểu mô hình thực hiện | Canadian software partner with an engineering team in Vietnam | thuê đối tác phần mềm tại Canada có đội kỹ thuật ở Việt Nam | `#model`. Wizy chịu trách nhiệm gì, HiTek triển khai gì. |
| Đánh giá chi phí | how is a custom software project estimated in Canada | chi phí phát triển phần mềm theo yêu cầu được tính thế nào | `#faq`. Trả lời bằng yếu tố ảnh hưởng và mô hình báo giá. |
| Bảo vệ quyền kiểm soát | who owns the source code in an outsourced software project | ai sở hữu mã nguồn và giữ quyền truy cập dữ liệu | `#governance` và `#faq`. Nêu những điều cần ghi trong hợp đồng và phạm vi công việc. |
| Tìm giải pháp vận hành cụ thể | how to choose pharmacy management software in Ontario | cách chọn phần mềm quản lý nhà thuốc ở Ontario | A01 EN và VI. Landing giới thiệu dịch vụ xác định phạm vi tích hợp hoặc tùy chỉnh. |

## 4. Nội dung đề xuất

### H1 và đoạn trả lời đầu trang

| | EN | VI |
| --- | --- | --- |
| H1 | Custom software development in Canada | Phát triển phần mềm theo yêu cầu tại Canada |
| Answer-first | Wizy Software helps Canadian businesses scope, build and modernize web, mobile and internal software. Wizy leads discovery, client communication and delivery oversight in Canada. HiTek Software in Vietnam is our engineering delivery partner. | Wizy Software giúp doanh nghiệp tại Canada xác định phạm vi, xây dựng và nâng cấp ứng dụng web, ứng dụng di động và hệ thống nội bộ. Wizy phụ trách làm rõ yêu cầu, giao tiếp và quản lý triển khai tại Canada. HiTek Software tại Việt Nam là đối tác triển khai kỹ thuật. |
| CTA chính | Discuss your software project | Trao đổi về dự án phần mềm |
| CTA phụ | Find the right engagement | Chọn hình thức hợp tác phù hợp |

Giữ CTA chính ở `#contact`. Dẫn CTA phụ đến `#services` và giữ mục mô hình triển khai trong menu. Form hiện nhận yêu cầu trao đổi. Dùng từ “book” khi đã có luồng chọn và xác nhận lịch. Cập nhật title và meta description để khớp H1, đối tượng và mô hình Wizy–HiTek của từng bản.

### Các khối ưu tiên

1. **Chọn dịch vụ · `#services`.** Đặt H2 theo câu hỏi “Which software service should I start with?” / “Nên bắt đầu với dịch vụ phần mềm nào?”. Với mỗi dịch vụ, nêu tình huống phù hợp, đầu ra người mua nhận và quyết định sau đó. Ví dụ, Discovery Sprint giúp làm rõ người dùng, ưu tiên, rủi ro và phạm vi ước tính trước khi quyết định xây dựng.
2. **Ai làm gì · `#model`.** Đặt hai vai trò trong cùng một bảng hoặc đoạn ngắn để đọc độc lập. Ghi rõ việc ký hợp đồng, lịch phối hợp và đầu mối xử lý sự cố được xác nhận trong đề xuất hoặc phạm vi công việc từng dự án. Nếu giữ hình kế hoạch đầu trang, dùng nhãn “Illustrative delivery plan” / “Ví dụ kế hoạch triển khai”.
3. **Quản trị và FAQ · `#governance`, `#faq`.** Đưa các câu hỏi về chi phí, discovery, mã nguồn, đội ngũ và nơi dữ liệu được xử lý lên trước. Mở mỗi câu trả lời bằng một câu trực tiếp, giải thích điều kiện ngay sau đó. Hai câu nên thử trước:

   | Câu hỏi | EN | VI |
   | --- | --- | --- |
   | Báo giá | The estimate depends on the workflows, integrations, data migration, and launch and support requirements. Discovery helps confirm what is in scope and which assumptions affect the estimate. | Chi phí phụ thuộc vào quy trình cần xây dựng, các hệ thống cần kết nối, dữ liệu cần chuyển và yêu cầu triển khai, hỗ trợ. Giai đoạn làm rõ yêu cầu giúp chốt phạm vi và các giả định ảnh hưởng đến báo giá. |
   | Mã nguồn | The agreement defines source-code ownership, repository access, and what is handed over at the end of the project. | Hợp đồng quy định quyền sở hữu mã nguồn, quyền truy cập kho mã và những gì được bàn giao khi kết thúc dự án. |

4. **Tài nguyên cho người mua.** Đặt một link mô tả rõ bài A01 bên cạnh ví dụ phần mềm vận hành. Dùng đúng ngôn ngữ đích. Mở rộng sang A07 về phần mềm có sẵn, tích hợp và tùy chỉnh, rồi A19 về xác định phạm vi dự án khi các bài đã xuất bản. [A01 EN](https://software.wizy.ca/en/blog/choose-pharmacy-management-software-ontario) · [A01 VI](https://software.wizy.ca/vi/blog/choose-pharmacy-management-software-ontario) · [Lịch 2027](content-plan.md)
5. **Bằng chứng có thể kiểm tra.** Ưu tiên một mẫu đầu ra discovery hoặc kế hoạch bàn giao được gắn nhãn minh họa. Nếu giữ số 17%, ghi rõ đây là số liệu của khảo sát quý I/2025 về công việc được thuê ngoài trong 12 tháng trước khảo sát. Chỉ dùng logo, case study, kết quả dự án, giá, chứng nhận hoặc tuyên bố pháp lý và tuân thủ sau khi có phê duyệt tương ứng. [Statistics Canada](https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025006-eng.pdf) · [Content Sense-Making của Wizy](../../../../docs-wizyca/01-strategy/methodology/content-sense-making.md)

## 5. Lộ trình 90 ngày

| Mốc | Ưu tiên và công việc | Phụ trách đề xuất | Tiêu chí nghiệm thu |
| --- | --- | --- | --- |
| Tuần 1 | **P0 · Baseline.** Xác minh quyền Search Console. Gửi sitemap khi cần. Kiểm tra URL Inspection, canonical và trích xuất 28 ngày trước thay đổi theo trang và Canada. Lập danh sách claim cùng owner duyệt. | Marketing + kỹ thuật | Có bảng baseline EN/VI, trạng thái index và ảnh hoặc bản xuất kiểm tra. Chỉ số thiếu được ghi là chưa đo. |
| Tuần 2–3 | **P1 · Viết và triển khai.** Sửa H1, đoạn mở, mô tả dịch vụ, mục vai trò, FAQ và CTA cho hai bản. Tổ chức review tiếng Việt và review phạm vi dịch vụ. | Biên tập song ngữ + sales + kỹ thuật | Người đọc xác định được dịch vụ phù hợp, vai trò từng bên và bước tiếp theo ngay trong các mục liên quan. Bản tiếng Việt dùng thuật ngữ nhất quán. |
| Tuần 4 | **P1 · QA và liên kết nội bộ.** Nối landing với A01, đối chiếu HTML/JSON-LD, kiểm tra menu, link ngôn ngữ và form. Xác thực ghi nhận chuyển đổi nếu có analytics. | Kỹ thuật + marketing | Hai trang đạt checklist bên dưới. Form thử nghiệm được ghi nhận một lần sau khi gửi thành công, nếu có quyền kiểm thử production. |
| Ngày 30–60 | **P2 · Kiểm tra cách người mua tìm thấy trang.** Rà truy vấn và FAQ, kiểm tra nội dung được AI trích, chỉnh câu trả lời nếu có sai lệch định vị. | Marketing + sales | Có báo cáo theo locale. Mỗi thay đổi tiếp theo chỉ rõ câu hỏi hoặc tín hiệu dẫn tới thay đổi. |
| Ngày 61–90 | **P2 · Đánh giá và chọn việc tiếp theo.** Đối chiếu kỳ 28 ngày trước và sau khi cập nhật, tính đến mùa vụ và độ trễ index. Xác định chủ đề cần bổ sung tài nguyên hoặc làm sâu. | Marketing + sales | Chốt ưu tiên quý sau theo dữ liệu và câu hỏi thực tế. Chỉ đề xuất trang dịch vụ riêng khi có ý định khác biệt và nội dung đủ sâu. |

## 6. Đo lường

| Chỉ số | Cách đo |
| --- | --- |
| Index và canonical | URL Inspection từng trang khi phát hành, sau 7 ngày và sau 30 ngày. Ghi Google-selected canonical và ngày crawl gần nhất. |
| Tìm kiếm tự nhiên | Search Console Performance, lọc chính xác từng landing page và quốc gia Canada. Theo dõi impressions, clicks và CTR. Báo cáo truy vấn có tên Wizy riêng với truy vấn chung. Chia nhóm theo dịch vụ, chi phí, mô hình triển khai và quản trị. |
| Hiển thị trong câu trả lời AI | Theo dõi báo cáo Generative AI trong Search Console theo URL nếu property có dữ liệu. Dùng thêm 20 prompt cố định, 10 EN và 10 VI. Lấy sáu ý định trong bảng trên làm lõi và mở rộng bằng bốn câu hỏi từ sales mỗi ngôn ngữ. Giữ cùng công cụ, ngôn ngữ, bối cảnh Canada và chu kỳ hàng tháng. Ghi URL được dẫn và việc câu trả lời mô tả đúng vai trò Wizy–HiTek. [Báo cáo Search Generative AI](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) |
| Hành trình và chuyển đổi | Khi có analytics, đo lượt bấm CTA và lượt gửi form thành công theo locale và landing page. Ghi nguồn AI referral nếu nhận diện được. Một lượt bấm CTA chỉ phản ánh ý định. Sales xác nhận cơ hội đủ điều kiện và ghi nhận nguồn nếu người mua đề cập trong discovery. Dùng “chưa rõ nguồn” cho trường hợp thiếu dữ liệu. |

Chốt mục tiêu tăng trưởng sau khi có baseline. Nếu có impressions mà ít click, kiểm tra H1, title và mức khớp ý định. Nếu khách đọc nhưng ít trao đổi, xem lại mức rõ của gói dịch vụ và bước tiếp theo. Nếu công cụ AI nhầm vai trò hai bên, kiểm tra đoạn mở, `#model`, FAQ và cách mô tả tổ chức trước khi mở rộng nội dung.

## 7. Checklist nghiệm thu khi triển khai

- [ ] Cả hai URL trả 200, nội dung chính có trong HTML, mỗi trang có đúng một H1 và ngôn ngữ phù hợp.
- [ ] Canonical tự trỏ và hreflang đối ứng đúng. `x-default` trỏ EN. Sitemap chứa hai landing page và bài blog đủ điều kiện. Bản xem trước không xuất hiện trong sitemap.
- [ ] JSON-LD parse được. Provider trỏ về ID Wizy và nội dung Service khớp dịch vụ hiển thị. Nếu giữ FAQPage, câu hỏi và câu trả lời khớp nguyên văn với phần hiển thị.
- [ ] CTA và liên kết tài nguyên trỏ đúng bản ngôn ngữ. Form, menu và nút đổi ngôn ngữ hoạt động trên desktop và mobile.
- [ ] Sales và người phụ trách delivery đã duyệt mô tả phạm vi, vai trò, hợp đồng và hỗ trợ. Mẫu minh họa được ghi nhãn rõ. Các tuyên bố có bằng chứng và phê duyệt theo quy định dự án.
- [ ] Trang đủ điều kiện hiển thị snippet và nguồn trích được đặt cạnh dữ kiện liên quan. Duy trì `llms.txt` như tài liệu tham chiếu cho hệ thống sử dụng nó. Google Search dựa vào các nền tảng SEO hiện có cho tính năng AI và không yêu cầu schema đặc biệt. [Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) · [Phương pháp AEO của Wizy](../../../../docs-wizyca/01-strategy/methodology/aeo.md)

## 8. Kết quả triển khai ngày 14/11/2026

- Đã phát hành H1, đoạn mở, bốn nhóm dịch vụ, mô hình Wizy–HiTek, CTA, FAQ và metadata cho cả EN và VI. Khối minh họa đầu trang nêu các đầu ra mẫu của discovery.
- Đã xác minh HTTP 200, canonical, hreflang, sitemap, robots, ảnh OG và dữ liệu Service/FAQ khớp HTML. Mỗi bản có 10 câu hỏi và câu trả lời trong HTML.
- Hai landing page và hai bản A01 đã liên kết theo đúng ngôn ngữ. Đã thử CTA, mở FAQ, chuyển ngôn ngữ và điều hướng ở bố cục hẹp. Kiểm tra form xác nhận API từ chối dữ liệu không hợp lệ, không tạo lead thử.
- Trạng thái index, baseline và kết quả kiểm tra tracking được ghi ở mục 9.


## 9. Baseline Search Console và kiểm tra tracking ngày 14/11/2026

Property Domain `wizy.ca`. Báo cáo Performance dùng Search type Web, Country Canada, URL khớp chính xác và 28 ngày từ 15/10 đến 11/11/2026 theo kỳ dữ liệu của Search Console. [Search Console Performance](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Awizy.ca)

| Trang | URL Inspection | Click | Impression | CTR | Vị trí TB |
| --- | --- | ---: | ---: | ---: | ---: |
| EN | Đã index. Google chọn chính URL EN làm canonical. Lần crawl gần nhất hiển thị 08/11/2026. | 0 | 12 | 0% | 10,3 |
| VI | Chưa index, URL chưa được Google biết tới. Live Test xác nhận Google truy cập được và trang có thể index. | 0 | 0 | — | — |

- Mục Sitemaps của property Domain chưa có sitemap đã gửi tại thời điểm kiểm tra. Sitemap công khai của software.wizy.ca đã có cả hai URL.
- GA4 property `wizy.ca` (534008513), báo cáo Pages and screens từ 17/10 đến 13/11/2026, chưa có `software.wizy.ca` trong danh sách Hostname. Production HTML và mã nguồn EN/VI không có GA4/GTM hoặc lệnh phát sự kiện thành công của form. Vì vậy chưa có số liệu GA4 riêng cho subdomain hay sự kiện chuyển đổi để xác minh.
- Test local trên build production với dịch vụ lưu giả lập trả HTTP 201 cho cả EN và VI và ghi đúng locale, source URL cùng ba trường UTM. Đếm trên bảng lead dùng chung cho kỳ 17/10–13/11 theo giờ Toronto cho kết quả 0 bản ghi có source URL khớp từng landing. Test local không ghi lead production hay gửi email.
