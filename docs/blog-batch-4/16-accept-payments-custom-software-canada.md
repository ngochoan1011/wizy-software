slug: accept-payments-custom-software-canada
title_en: How Should Custom Software Accept Payments in Canada?
title_vi: Phần mềm làm riêng nên nhận thanh toán ở Canada như thế nào?
excerpt_en: Use a payment provider's hosted checkout or payment fields so card details never touch your servers, confirm payments with the provider's notifications, and choose methods your customers actually use.
excerpt_vi: Dùng trang thanh toán hoặc ô nhập thẻ do nhà cung cấp thanh toán lưu trữ để số thẻ không bao giờ đi qua server của bạn, xác nhận thanh toán bằng thông báo từ nhà cung cấp, và chọn phương thức khách thật sự dùng.
seo_title_en: How Should Custom Software Accept Payments in Canada?
seo_title_vi: Phần mềm làm riêng nhận thanh toán ở Canada thế nào?
seo_description_en: Payment options for Canadian custom software, cards, Interac, pre-authorized debit and deposits, how to keep card data out of your system and what to decide before building checkout.
seo_description_vi: Các lựa chọn thanh toán cho phần mềm làm riêng tại Canada: thẻ, Interac, ghi nợ tự động và đặt cọc, cách giữ dữ liệu thẻ ngoài hệ thống của bạn và những gì cần quyết định trước khi làm phần thanh toán.
tags: Software purchasing, Custom software, Canadian small business
===EN===
Custom software in Canada should accept payments through an established payment provider, using its hosted checkout page or embedded payment fields, so card numbers go straight to the provider and never pass through or get stored on your servers. Your software then waits for the provider's confirmation before marking an order paid. Choose payment methods based on your customers, typically credit and debit cards, plus Interac e-Transfer or pre-authorized debit for business clients and recurring invoices.

This article does not compare provider fees, which change. Check each provider's current pricing.

## Key takeaways

- Never store card numbers in your own database.
- Hosted payment pages greatly reduce your card-security compliance work.
- An order is paid only when the provider confirms it, not when the customer's browser says so.
- Plan refunds, failed payments and deposits before building checkout.

## What payment methods do Canadian customers expect?

| Method | Common use | Notes |
| --- | --- | --- |
| Credit cards | Most online purchases and bookings | Supported by all major providers |
| Debit cards online | Consumers who prefer debit | Support varies by provider; check |
| Digital wallets | Mobile checkout | Usually come with card processing |
| Interac e-Transfer | Invoices, deposits, small business clients | Often reconciled manually unless your provider offers automation |
| Pre-authorized debit (PAD) | Recurring invoices, memberships | Has its own authorization rules set by Payments Canada |
| Invoice with payment link | B2B and services | Combine with accounting integration |

## Why should card data stay out of your system?

Businesses that handle card data must meet the [Payment Card Industry Data Security Standard (PCI DSS)](https://www.pcisecuritystandards.org/). When customers type their card into a page or fields hosted by the provider, your software never sees the full number, and your compliance work shrinks to a much shorter questionnaire. Building your own card form that sends numbers through your server raises your security and compliance burden significantly.

## What should you decide before building checkout?

1. **When is money taken?** At booking, at a deposit, or after the service?
2. **Deposits and no-show fees.** How much, when, and how they are refunded. See [reducing no-shows with reminders and deposits](/en/blog/reduce-no-shows-reminders-deposits).
3. **Taxes.** HST or GST/PST by province, shown on receipts. Ask your accountant.
4. **Refunds.** Who can issue them, full or partial, and how they appear in reports.
5. **Failed payments.** What happens to the order, and who follows up.
6. **Receipts.** What they show, and in which language.
7. **Reconciliation.** How payouts match orders in your accounting. See [connecting custom software to QuickBooks or Xero](/en/blog/connect-custom-software-quickbooks-xero).

## What should the developer build?

| Part | What it does |
| --- | --- |
| Checkout session | Creates a payment with the provider for a specific order and amount, calculated on the server |
| Hosted page or payment fields | Collects card details on the provider's side |
| Webhook handler | Receives the provider's confirmation and marks the order paid |
| Idempotency | Makes sure a repeated confirmation does not charge or record twice |
| Refund action | Lets authorized staff refund through the provider |
| Payment log | Stores provider IDs, amounts and status, never card numbers |

## How does this play out in a fictional case?

A tutoring centre's custom booking system lets parents pay per term. The first version marked bookings as paid when the payment page redirected back, so a closed browser tab left some bookings unpaid while the money arrived. The fix uses the provider's webhook as the only source of truth. Each night, a report compares provider payouts with bookings so the bookkeeper sees any mismatch the next morning.

## How do you choose a provider?

- Supports the methods your customers use, including in-person if needed
- Clear Canadian fees, payout timing and dispute process
- Good documentation and test mode for developers
- Exports and reports your accountant can use
- No long lock-in, and you own the account

Use a test mode and test cards for all development and testing. See the wider [security requirements checklist](/en/blog/software-security-requirements-buyer-checklist).

[Talk to Wizy about adding payments to your software](/en#contact).

## Frequently asked questions

### Can we store cards to charge customers later?

Yes, through the provider's saved-payment feature, which stores a token. Your system keeps the token, not the card number.

### Do we need a merchant account separate from the provider?

Many modern providers include merchant services. Some businesses with high volume use a separate processor for lower fees.

### Can customers pay by Interac e-Transfer inside our app?

You can show instructions and a reference code, but matching transfers to orders is often manual. Ask providers about automated options.

### Who handles chargebacks?

The provider runs the process, but you must supply evidence. Keep booking records, policies and receipts easy to export.
===VI===
Phần mềm làm riêng ở Canada nên nhận thanh toán qua một nhà cung cấp thanh toán có uy tín, dùng trang thanh toán hoặc ô nhập thẻ do nhà cung cấp lưu trữ, để số thẻ đi thẳng tới nhà cung cấp và không bao giờ đi qua hay nằm trên server của bạn. Phần mềm của bạn chờ xác nhận từ nhà cung cấp rồi mới đánh dấu đơn là đã trả. Chọn phương thức thanh toán dựa trên khách hàng của bạn, thường là thẻ tín dụng và thẻ ghi nợ, cộng thêm Interac e-Transfer hoặc ghi nợ tự động (pre-authorized debit) cho khách doanh nghiệp và hoá đơn định kỳ.

Bài viết này không so sánh phí của các nhà cung cấp vì phí thay đổi. Hãy xem bảng giá hiện hành của từng bên.

## Điểm cần nhớ

- Không bao giờ lưu số thẻ trong database của bạn.
- Trang thanh toán do nhà cung cấp lưu trữ giảm mạnh khối lượng công việc tuân thủ bảo mật thẻ.
- Đơn chỉ là đã trả khi nhà cung cấp xác nhận, không phải khi trình duyệt của khách báo vậy.
- Lên phương án hoàn tiền, thanh toán thất bại và đặt cọc trước khi làm phần thanh toán.

## Khách hàng ở Canada mong đợi phương thức nào?

| Phương thức | Thường dùng cho | Ghi chú |
| --- | --- | --- |
| Thẻ tín dụng | Phần lớn giao dịch mua và đặt lịch online | Mọi nhà cung cấp lớn đều hỗ trợ |
| Thẻ ghi nợ online | Khách thích dùng debit | Mức hỗ trợ tuỳ nhà cung cấp; hãy kiểm tra |
| Ví điện tử | Thanh toán trên điện thoại | Thường đi kèm xử lý thẻ |
| Interac e-Transfer | Hoá đơn, đặt cọc, khách là doanh nghiệp nhỏ | Thường phải đối chiếu thủ công trừ khi nhà cung cấp có tự động hoá |
| Ghi nợ tự động (PAD) | Hoá đơn định kỳ, thẻ thành viên | Có quy định uỷ quyền riêng do Payments Canada đặt ra |
| Hoá đơn kèm link thanh toán | B2B và dịch vụ | Kết hợp với tích hợp kế toán |

## Vì sao dữ liệu thẻ phải nằm ngoài hệ thống của bạn?

Doanh nghiệp xử lý dữ liệu thẻ phải đáp ứng [tiêu chuẩn bảo mật dữ liệu ngành thẻ thanh toán (PCI DSS)](https://www.pcisecuritystandards.org/). Khi khách nhập thẻ vào trang hoặc ô do nhà cung cấp lưu trữ, phần mềm của bạn không bao giờ thấy số thẻ đầy đủ, và việc tuân thủ của bạn thu gọn lại thành một bảng câu hỏi ngắn hơn nhiều. Tự làm form nhập thẻ gửi số thẻ qua server của bạn sẽ làm gánh nặng bảo mật và tuân thủ tăng đáng kể.

## Cần quyết định gì trước khi làm phần thanh toán?

1. **Thu tiền khi nào?** Lúc đặt lịch, lúc đặt cọc, hay sau khi phục vụ?
2. **Đặt cọc và phí không đến.** Bao nhiêu, khi nào, hoàn lại thế nào. Xem [giảm khách không đến bằng nhắc lịch và đặt cọc](/vi/blog/reduce-no-shows-reminders-deposits).
3. **Thuế.** HST hay GST/PST theo tỉnh, hiển thị trên biên nhận. Hỏi kế toán của bạn.
4. **Hoàn tiền.** Ai được hoàn, hoàn toàn bộ hay một phần, hiện trên báo cáo ra sao.
5. **Thanh toán thất bại.** Đơn sẽ thế nào, ai theo dõi tiếp.
6. **Biên nhận.** Hiển thị gì, bằng ngôn ngữ nào.
7. **Đối chiếu.** Tiền nhà cung cấp chuyển về khớp với đơn trong sổ kế toán thế nào. Xem [kết nối phần mềm làm riêng với QuickBooks hoặc Xero](/vi/blog/connect-custom-software-quickbooks-xero).

## Lập trình viên cần làm những phần nào?

| Phần | Chức năng |
| --- | --- |
| Phiên thanh toán | Tạo khoản thanh toán với nhà cung cấp cho một đơn và một số tiền cụ thể, tính trên server |
| Trang hoặc ô thanh toán của nhà cung cấp | Thu thông tin thẻ ở phía nhà cung cấp |
| Xử lý webhook | Nhận xác nhận của nhà cung cấp và đánh dấu đơn đã trả |
| Chống ghi nhận trùng (idempotency) | Đảm bảo xác nhận gửi lặp không làm thu tiền hay ghi nhận hai lần |
| Thao tác hoàn tiền | Cho nhân viên có quyền hoàn tiền qua nhà cung cấp |
| Nhật ký thanh toán | Lưu mã giao dịch, số tiền và trạng thái, không bao giờ lưu số thẻ |

## Một ca giả lập diễn ra thế nào?

Hệ thống đặt lịch làm riêng của một trung tâm dạy kèm cho phụ huynh trả tiền theo học kỳ. Bản đầu đánh dấu lịch học là đã trả khi trang thanh toán chuyển về, nên nếu phụ huynh đóng tab trình duyệt, một số lịch học vẫn hiện chưa trả dù tiền đã vào. Cách sửa là chỉ coi webhook của nhà cung cấp là nguồn sự thật duy nhất. Mỗi đêm, một báo cáo so tiền nhà cung cấp chuyển về với các lịch học, để sáng hôm sau người giữ sổ thấy ngay chỗ nào lệch.

## Chọn nhà cung cấp thế nào?

- Hỗ trợ các phương thức khách bạn dùng, kể cả thanh toán tại chỗ nếu cần
- Phí tại Canada, thời gian chuyển tiền và quy trình tranh chấp rõ ràng
- Tài liệu tốt và chế độ thử (test mode) cho lập trình viên
- Có file xuất và báo cáo mà kế toán dùng được
- Không ràng buộc lâu dài, và tài khoản đứng tên bạn

Dùng chế độ thử và thẻ thử cho toàn bộ quá trình phát triển và kiểm thử. Xem thêm [checklist yêu cầu bảo mật](/vi/blog/software-security-requirements-buyer-checklist).

[Trao đổi với Wizy về việc thêm thanh toán vào phần mềm của bạn](/vi#contact).

## Câu hỏi thường gặp

### Có lưu thẻ để thu tiền khách sau được không?

Được, qua tính năng lưu phương thức thanh toán của nhà cung cấp, vốn lưu một mã đại diện (token). Hệ thống của bạn giữ token, không giữ số thẻ.

### Có cần tài khoản merchant riêng ngoài nhà cung cấp không?

Nhiều nhà cung cấp hiện đại đã bao gồm dịch vụ merchant. Một số doanh nghiệp có doanh số lớn dùng đơn vị xử lý riêng để có phí thấp hơn.

### Khách có trả bằng Interac e-Transfer ngay trong app được không?

Bạn có thể hiển thị hướng dẫn và mã tham chiếu, nhưng việc khớp khoản chuyển với đơn thường vẫn làm thủ công. Hãy hỏi nhà cung cấp về các lựa chọn tự động.

### Ai xử lý khi khách đòi hoàn tiền qua ngân hàng (chargeback)?

Nhà cung cấp điều hành quy trình, nhưng bạn phải cung cấp bằng chứng. Hãy giữ hồ sơ đặt lịch, chính sách và biên nhận ở dạng dễ xuất ra.
