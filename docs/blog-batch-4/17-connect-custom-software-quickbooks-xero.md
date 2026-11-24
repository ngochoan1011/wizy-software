slug: connect-custom-software-quickbooks-xero
title_en: How Do You Connect Custom Software to QuickBooks or Xero?
title_vi: Kết nối phần mềm làm riêng với QuickBooks hoặc Xero như thế nào?
excerpt_en: Decide what flows to accounting and how often, map customers, items and tax codes once, sync through the accounting system's API, and keep a log so your bookkeeper can fix exceptions.
excerpt_vi: Quyết định dữ liệu nào chuyển sang kế toán và bao lâu một lần, ánh xạ khách hàng, mặt hàng và mã thuế một lần, đồng bộ qua API của phần mềm kế toán, và giữ nhật ký để người giữ sổ xử lý ngoại lệ.
seo_title_en: How to Connect Custom Software to QuickBooks or Xero
seo_title_vi: Kết nối phần mềm làm riêng với QuickBooks hoặc Xero
seo_description_en: What to sync between your business software and QuickBooks Online or Xero, how to map tax codes and customers, common pitfalls and how to involve your accountant.
seo_description_vi: Nên đồng bộ gì giữa phần mềm kinh doanh và QuickBooks Online hay Xero, cách ánh xạ mã thuế và khách hàng, các lỗi thường gặp và cách đưa kế toán viên vào cuộc.
tags: Systems integration, Finance workflows, Custom software
===EN===
To connect custom software to QuickBooks Online or Xero, first decide exactly what should flow into accounting, such as invoices, payments or daily sales summaries, and how often. Then map your customers, products or services and tax codes to the matching records in the accounting system, connect through its official API with an account your business owns, and keep a sync log that shows what was sent and what failed. Involve your accountant before building, because the right level of detail is an accounting decision, not a technical one.

## Key takeaways

- Sync the level of detail your accountant needs, not everything you have.
- Tax codes are the most common source of errors. Map them with your accountant.
- Each record should be sent once. Duplicates are worse than delays.
- A visible error list saves hours at month-end.

## What usually flows to accounting?

| From your software | Into accounting as | Common choice |
| --- | --- | --- |
| Customer accounts | Customers or contacts | Sync when first invoiced |
| Orders or jobs | Invoices | One invoice per order |
| Point-of-sale or daily bookings | One daily sales summary | Simpler for high-volume retail and services |
| Payments received | Payments applied to invoices | Sync when the payment provider confirms |
| Refunds | Credit notes or refunds | Linked to the original invoice |
| Payment provider payouts | Bank deposits, net of fees | Often handled by a separate connector |

## Detailed invoices or daily summaries?

| Approach | Good for | Trade-off |
| --- | --- | --- |
| One invoice per order | B2B, services, anyone who chases unpaid invoices | More records; more mapping to keep right |
| Daily summary | Salons, restaurants, retail with many small sales | Less detail in accounting; detail stays in your software |

Ask your accountant which one they prefer for HST reporting and reconciliation.

## What needs to be mapped?

- **Tax codes.** For example, HST 13% in Ontario, and different codes for other provinces or exempt items. Confirm with your accountant.
- **Products and services** to income accounts.
- **Payment methods** to the right clearing or bank accounts.
- **Customers,** with a rule for matching existing ones, such as by email.
- **Discounts, tips and deposits,** which often need their own accounts.

Store the mapping in a settings screen, so it can be changed without a developer.

## How should the sync itself work?

1. Use the accounting system's official API and an app connection authorized by your business account.
2. Send each record with a unique reference from your system, so it is never created twice.
3. Retry automatically on temporary errors.
4. Put permanent errors, such as a missing tax code, in an error list with a clear message.
5. Let the bookkeeper fix the cause and resend from that list.
6. Never edit locked or closed periods automatically.

See [QuickBooks Online developer docs](https://developer.intuit.com/app/developer/qbo/docs/get-started) and [Xero developer docs](https://developer.xero.com/documentation/).

## How does this play out in a fictional case?

A landscaping company invoices jobs from its custom job-tracking app and re-types them into QuickBooks every Friday. The new integration sends an invoice when a job is marked complete, using a mapping of service types to income accounts and HST codes agreed with the bookkeeper. In the first week, three invoices fail because a new service type has no mapping. They appear in the error list, the bookkeeper adds the mapping and resends. Friday re-typing stops.

## What are the common pitfalls?

- Syncing both ways without clear rules on which system wins
- Creating duplicate customers with slightly different names
- Rounding differences between your totals and the accounting system's tax calculation
- Connections that expire when the person who authorized them leaves
- No one checking the error list

For the general approach to connecting systems, see [how to connect POS, inventory and reporting across locations](/en/blog/connect-pos-inventory-reporting-multiple-locations), and for payment flows see [how custom software should accept payments in Canada](/en/blog/accept-payments-custom-software-canada).

[Talk to Wizy about an accounting integration](/en#contact).

## Frequently asked questions

### Is there an off-the-shelf connector?

For many popular apps, yes. If your software is custom, you either build the connection or use an integration platform in the middle.

### Should accounting changes flow back into our software?

Usually only payment status. Keep most data flowing one way to avoid conflicts.

### What happens if we switch from QuickBooks to Xero?

The mapping and sync logic need to be redone for the new API. Keeping the integration as a separate module makes this easier.

### Who should own the app connection?

A shared business admin account, not a single employee's login, so it keeps working when people change roles.
===VI===
Để kết nối phần mềm làm riêng với QuickBooks Online hoặc Xero, trước hết hãy quyết định chính xác dữ liệu nào sẽ chuyển sang kế toán, như hoá đơn, khoản thanh toán hay bản tổng hợp doanh thu mỗi ngày, và bao lâu một lần. Sau đó ánh xạ khách hàng, sản phẩm hay dịch vụ và mã thuế với các bản ghi tương ứng trong phần mềm kế toán, kết nối qua API chính thức bằng tài khoản do doanh nghiệp sở hữu, và giữ nhật ký đồng bộ cho biết cái gì đã gửi và cái gì lỗi. Hãy đưa kế toán viên vào cuộc trước khi làm, vì mức chi tiết phù hợp là quyết định kế toán, không phải quyết định kỹ thuật.

## Điểm cần nhớ

- Đồng bộ đúng mức chi tiết kế toán viên cần, không phải mọi thứ bạn có.
- Mã thuế là nguồn lỗi phổ biến nhất. Hãy ánh xạ cùng kế toán viên.
- Mỗi bản ghi chỉ gửi một lần. Trùng lặp tệ hơn chậm trễ.
- Một danh sách lỗi hiển thị rõ ràng tiết kiệm hàng giờ vào cuối tháng.

## Thường chuyển gì sang kế toán?

| Từ phần mềm của bạn | Vào kế toán dưới dạng | Lựa chọn phổ biến |
| --- | --- | --- |
| Tài khoản khách hàng | Customers hoặc contacts | Đồng bộ khi xuất hoá đơn lần đầu |
| Đơn hàng hay công việc | Hoá đơn | Một hoá đơn cho mỗi đơn |
| Bán hàng tại quầy hay lịch hẹn mỗi ngày | Một bản tổng hợp doanh thu mỗi ngày | Đơn giản hơn cho bán lẻ và dịch vụ có nhiều giao dịch |
| Khoản thanh toán đã nhận | Payment gắn vào hoá đơn | Đồng bộ khi nhà cung cấp thanh toán xác nhận |
| Hoàn tiền | Credit note hoặc refund | Gắn với hoá đơn gốc |
| Tiền nhà cung cấp thanh toán chuyển về | Khoản nộp ngân hàng, đã trừ phí | Thường do một bộ kết nối riêng xử lý |

## Hoá đơn chi tiết hay tổng hợp theo ngày?

| Cách làm | Hợp với | Đánh đổi |
| --- | --- | --- |
| Mỗi đơn một hoá đơn | B2B, dịch vụ, ai cần đòi hoá đơn chưa trả | Nhiều bản ghi hơn; nhiều ánh xạ cần giữ đúng |
| Tổng hợp theo ngày | Salon, nhà hàng, bán lẻ có nhiều giao dịch nhỏ | Kế toán ít chi tiết hơn; chi tiết nằm trong phần mềm của bạn |

Hãy hỏi kế toán viên họ thích cách nào cho việc khai HST và đối chiếu.

## Cần ánh xạ những gì?

- **Mã thuế.** Ví dụ HST 13% ở Ontario, và các mã khác cho tỉnh khác hay mặt hàng miễn thuế. Xác nhận với kế toán viên.
- **Sản phẩm và dịch vụ** vào các tài khoản doanh thu.
- **Phương thức thanh toán** vào đúng tài khoản trung gian hoặc tài khoản ngân hàng.
- **Khách hàng,** kèm quy tắc khớp với khách đã có, ví dụ theo email.
- **Giảm giá, tiền tip và tiền đặt cọc,** thường cần tài khoản riêng.

Lưu phần ánh xạ trong một màn hình cài đặt, để sửa được mà không cần lập trình viên.

## Việc đồng bộ nên chạy thế nào?

1. Dùng API chính thức của phần mềm kế toán và một kết nối ứng dụng được uỷ quyền bằng tài khoản doanh nghiệp.
2. Gửi mỗi bản ghi kèm mã tham chiếu duy nhất từ hệ thống của bạn, để không bao giờ bị tạo hai lần.
3. Tự động thử lại khi gặp lỗi tạm thời.
4. Đưa lỗi cố định, như thiếu mã thuế, vào danh sách lỗi kèm thông báo rõ ràng.
5. Cho người giữ sổ sửa nguyên nhân và gửi lại từ danh sách đó.
6. Không bao giờ tự động sửa các kỳ kế toán đã khoá hoặc đã đóng.

Xem [tài liệu cho lập trình viên của QuickBooks Online](https://developer.intuit.com/app/developer/qbo/docs/get-started) và [tài liệu cho lập trình viên của Xero](https://developer.xero.com/documentation/).

## Một ca giả lập diễn ra thế nào?

Một công ty làm vườn xuất hoá đơn công việc từ app theo dõi công việc làm riêng và gõ lại vào QuickBooks mỗi thứ Sáu. Bộ tích hợp mới gửi hoá đơn ngay khi một công việc được đánh dấu hoàn tất, dùng bảng ánh xạ loại dịch vụ sang tài khoản doanh thu và mã HST đã thống nhất với người giữ sổ. Tuần đầu, ba hoá đơn bị lỗi vì một loại dịch vụ mới chưa có ánh xạ. Chúng hiện trong danh sách lỗi, người giữ sổ thêm ánh xạ và gửi lại. Việc gõ lại mỗi thứ Sáu chấm dứt.

## Các lỗi thường gặp

- Đồng bộ hai chiều mà không có quy tắc rõ hệ thống nào được ưu tiên
- Tạo khách hàng trùng với tên hơi khác nhau
- Chênh lệch làm tròn giữa tổng của bạn và cách phần mềm kế toán tính thuế
- Kết nối hết hạn khi người uỷ quyền nghỉ việc
- Không ai kiểm tra danh sách lỗi

Về cách kết nối hệ thống nói chung, xem [cách kết nối POS, tồn kho và báo cáo giữa nhiều địa điểm](/vi/blog/connect-pos-inventory-reporting-multiple-locations), và về luồng thanh toán, xem [phần mềm làm riêng nên nhận thanh toán ở Canada như thế nào](/vi/blog/accept-payments-custom-software-canada).

[Trao đổi với Wizy về tích hợp kế toán](/vi#contact).

## Câu hỏi thường gặp

### Có bộ kết nối dựng sẵn không?

Với nhiều app phổ biến thì có. Nếu phần mềm của bạn làm riêng, bạn hoặc tự xây kết nối, hoặc dùng một nền tảng tích hợp đứng giữa.

### Thay đổi bên kế toán có nên chạy ngược về phần mềm của chúng tôi không?

Thường chỉ nên đồng bộ ngược trạng thái thanh toán. Giữ phần lớn dữ liệu chạy một chiều để tránh xung đột.

### Nếu chuyển từ QuickBooks sang Xero thì sao?

Phần ánh xạ và logic đồng bộ phải làm lại cho API mới. Giữ bộ tích hợp thành một module riêng giúp việc này dễ hơn.

### Ai nên đứng tên kết nối ứng dụng?

Một tài khoản quản trị chung của doanh nghiệp, không phải tài khoản của một nhân viên, để kết nối vẫn chạy khi nhân sự thay đổi.
