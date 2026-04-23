import { useMemo, useState } from "react";

export default function MultiSolutionLandingPage() {
  const [lang, setLang] = useState("en");
  const t = (en, vi) => (lang === "en" ? en : vi);

  const primaryServices = [
    {
      icon: "🛍️",
      title: { en: "Retail & Product Websites", vi: "Website bán hàng & giới thiệu sản phẩm" },
      subtitle: { en: "Sell, showcase, and receive inquiries", vi: "Bán hàng, giới thiệu sản phẩm và nhận yêu cầu" },
      desc: {
        en: "Perfect for stores, boutiques, and businesses that want to showcase products, receive inquiries, support online ordering, and present their brand professionally.",
        vi: "Phù hợp cho cửa hàng, boutique và doanh nghiệp muốn giới thiệu sản phẩm, nhận yêu cầu, hỗ trợ đặt hàng online và xây dựng hình ảnh chuyên nghiệp."
      }
    },
    {
      icon: "📦",
      title: { en: "Inventory & Business Management", vi: "Quản lý tồn kho & vận hành" },
      subtitle: { en: "Organize stock, workflow, and operations", vi: "Sắp xếp tồn kho, quy trình và vận hành" },
      desc: {
        en: "Built for businesses that need better control over stock, services, internal workflows, and day-to-day operations.",
        vi: "Dành cho doanh nghiệp cần kiểm soát tốt hơn về tồn kho, dịch vụ, quy trình nội bộ và vận hành hằng ngày."
      }
    },
    {
      icon: "💅",
      title: { en: "Beauty, Nails & Hair Salons", vi: "Tiệm nails, tóc & làm đẹp" },
      subtitle: { en: "Booking, services, promotions, payments", vi: "Đặt lịch, dịch vụ, khuyến mãi và thanh toán" },
      desc: {
        en: "Ideal for nail salons, hair salons, spas, and beauty businesses that want booking, service pages, payments, promotions, and easier customer communication.",
        vi: "Phù hợp cho tiệm nails, tiệm tóc, spa và các business làm đẹp muốn có đặt lịch, trang dịch vụ, thanh toán, khuyến mãi và giao tiếp với khách hàng dễ hơn."
      }
    },
    {
      icon: "🤖",
      title: { en: "AI Chatbot & Smart Booking", vi: "AI Chatbot & đặt lịch thông minh" },
      subtitle: { en: "Automate replies, booking, and staff assignment", vi: "Tự động trả lời, đặt lịch và phân công nhân viên" },
      desc: {
        en: "Integrate AI chatbots that answer common questions, collect booking requests, recommend available time slots, and assign customers to staff members who are available that day.",
        vi: "Tích hợp AI chatbot để trả lời câu hỏi thường gặp, nhận yêu cầu đặt lịch, gợi ý khung giờ còn trống và phân khách cho nhân viên còn available trong ngày."
      }
    }
  ];

  const allSolutions = [
    { en: "Retail and sales websites", vi: "Website bán hàng và kinh doanh" },
    { en: "Inventory-friendly business systems", vi: "Hệ thống hỗ trợ quản lý tồn kho" },
    { en: "Logistics and operations pages", vi: "Website logistics và vận hành" },
    { en: "Nail salon booking websites", vi: "Website đặt lịch cho tiệm nails" },
    { en: "Hair salon and beauty service websites", vi: "Website cho tiệm tóc và dịch vụ làm đẹp" },
    { en: "Service business landing pages", vi: "Landing page cho doanh nghiệp dịch vụ" },
    { en: "Payment and inquiry workflows", vi: "Quy trình thanh toán và tiếp nhận khách hàng" },
    { en: "English + Vietnamese bilingual websites", vi: "Website song ngữ Anh - Việt" },
    { en: "AI chatbot for booking and customer support", vi: "AI chatbot cho đặt lịch và chăm sóc khách hàng" }
  ];

  const trustPoints = [
    {
      title: { en: "Built Around Your Business", vi: "Thiết kế theo đúng mô hình kinh doanh" },
      desc: {
        en: "We do not force your business into a generic template. We design the structure around your services, products, and workflow.",
        vi: "Chúng tôi không ép doanh nghiệp của bạn vào một mẫu có sẵn. Cấu trúc website được xây dựng theo dịch vụ, sản phẩm và quy trình của bạn."
      }
    },
    {
      title: { en: "Clear Bilingual Experience", vi: "Trải nghiệm song ngữ rõ ràng" },
      desc: {
        en: "Support both English and Vietnamese so your business can communicate professionally with a wider audience.",
        vi: "Hỗ trợ cả tiếng Anh và tiếng Việt để doanh nghiệp của bạn giao tiếp chuyên nghiệp với nhiều nhóm khách hàng hơn."
      }
    },
    {
      title: { en: "Made to Generate Leads", vi: "Thiết kế để tạo khách hàng tiềm năng" },
      desc: {
        en: "Every section is designed to help visitors understand your offer quickly and take action faster.",
        vi: "Mỗi phần trên website đều được viết để khách hiểu nhanh dịch vụ của bạn và hành động sớm hơn."
      }
    },
    {
      title: { en: "Easy to Manage Later", vi: "Dễ quản lý về sau" },
      desc: {
        en: "Your website should not become extra stress. We focus on a clean structure that is simple to update and scale.",
        vi: "Website không nên trở thành gánh nặng. Chúng tôi ưu tiên cấu trúc gọn gàng, dễ cập nhật và dễ mở rộng."
      }
    },
    {
      title: { en: "AI Can Reduce Manual Messaging", vi: "AI giúp giảm trực tin nhắn thủ công" },
      desc: {
        en: "AI chatbot can handle common customer questions, booking intake, and availability checks so your team spends less time manually replying to repetitive messages.",
        vi: "AI chatbot có thể xử lý các câu hỏi thường gặp, tiếp nhận đặt lịch và kiểm tra chỗ trống để đội ngũ của bạn bớt phải ngồi trả lời tin nhắn lặp đi lặp lại."
      }
    },
    {
      title: { en: "Smart Staff Assignment", vi: "Phân công nhân viên thông minh" },
      desc: {
        en: "For salons and service businesses, the system can route appointments to staff members who are available that day.",
        vi: "Đối với salon và doanh nghiệp dịch vụ, hệ thống có thể phân lịch cho nhân viên còn available trong ngày."
      }
    }
  ];

  const localBusinessExamples = [
    {
      name: { en: "Nail Salon", vi: "Tiệm Nails" },
      details: {
        en: "Service menu, booking request, gallery, specials, business hours, contact, bilingual support",
        vi: "Menu dịch vụ, yêu cầu đặt lịch, gallery, khuyến mãi, giờ mở cửa, liên hệ và song ngữ"
      }
    },
    {
      name: { en: "Hair Salon", vi: "Tiệm Tóc" },
      details: {
        en: "Stylist showcase, appointment flow, pricing, treatment highlights, promotions, reviews",
        vi: "Giới thiệu stylist, luồng đặt lịch, bảng giá, dịch vụ nổi bật, khuyến mãi và đánh giá"
      }
    },
    {
      name: { en: "Retail Shop", vi: "Cửa Hàng" },
      details: {
        en: "Product showcase, featured collections, order inquiry, promotional banners, business information",
        vi: "Giới thiệu sản phẩm, bộ sưu tập nổi bật, yêu cầu đặt hàng, banner khuyến mãi và thông tin doanh nghiệp"
      }
    },
    {
      name: { en: "Logistics / Operations", vi: "Logistics / Vận Hành" },
      details: {
        en: "Service overview, quote request, process explanation, shipment or workflow communication",
        vi: "Giới thiệu dịch vụ, yêu cầu báo giá, giải thích quy trình, cập nhật shipment hoặc workflow"
      }
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: { en: "Discovery", vi: "Khảo sát nhu cầu" },
      desc: {
        en: "We learn about your business, your customers, and the type of system or website you need.",
        vi: "Chúng tôi tìm hiểu mô hình kinh doanh, khách hàng và loại website hoặc hệ thống bạn đang cần."
      }
    },
    {
      num: "02",
      title: { en: "Strategy", vi: "Lên chiến lược" },
      desc: {
        en: "We plan the structure, content flow, bilingual sections, and features that fit your goals.",
        vi: "Chúng tôi lên cấu trúc, flow nội dung, phần song ngữ và các tính năng phù hợp với mục tiêu của bạn."
      }
    },
    {
      num: "03",
      title: { en: "Design & Build", vi: "Thiết kế & xây dựng" },
      desc: {
        en: "We create a clean, modern website that looks professional and supports how your business actually works.",
        vi: "Chúng tôi tạo website hiện đại, gọn gàng, chuyên nghiệp và hỗ trợ đúng cách doanh nghiệp của bạn vận hành."
      }
    },
    {
      num: "04",
      title: { en: "Launch & Growth", vi: "Ra mắt & phát triển" },
      desc: {
        en: "You launch with a stronger online presence and a system that is easier to manage as your business grows.",
        vi: "Bạn ra mắt với hình ảnh online chuyên nghiệp hơn và một hệ thống dễ quản lý hơn khi business phát triển."
      }
    }
  ];

  const aiFeatures = useMemo(
    () => [
      {
        title: t("Instant customer replies", "Trả lời khách hàng ngay lập tức"),
        desc: t(
          "Answer common questions automatically without requiring someone to sit and monitor messages all day.",
          "Tự động trả lời các câu hỏi thường gặp mà không cần người ngồi trực tin nhắn cả ngày."
        )
      },
      {
        title: t("Booking intake automation", "Tự động tiếp nhận đặt lịch"),
        desc: t(
          "Collect service type, preferred time, customer info, and booking details through chat.",
          "Thu thập loại dịch vụ, thời gian mong muốn, thông tin khách và chi tiết đặt lịch ngay trong khung chat."
        )
      },
      {
        title: t("Check who is available today", "Kiểm tra ai còn trống trong ngày"),
        desc: t(
          "Connect with your schedule to identify which staff members are available that day.",
          "Kết nối với lịch làm việc để xác định nhân viên nào còn available trong ngày."
        )
      },
      {
        title: t("Smart assignment", "Phân công thông minh"),
        desc: t(
          "Recommend or assign the booking to the right team member based on availability and service type.",
          "Gợi ý hoặc phân công lịch hẹn cho đúng nhân viên dựa trên thời gian trống và loại dịch vụ."
        )
      }
    ],
    [lang]
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-8 flex justify-end">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${lang === "en" ? "bg-white text-slate-900" : "text-white"}`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang("vi")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${lang === "vi" ? "bg-white text-slate-900" : "text-white"}`}
              >
                Tiếng Việt
              </button>
            </div>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                {t("Custom Website Solutions • English + Vietnamese", "Giải pháp website theo yêu cầu • Tiếng Anh + Tiếng Việt")}
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {t(
                  "Websites that help businesses get more customers, stay organized, and operate more smoothly.",
                  "Website giúp doanh nghiệp có thêm khách hàng, quản lý gọn hơn và vận hành mượt hơn."
                )}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                {t(
                  "We build custom websites for retail, product-based businesses, inventory workflows, logistics, nail salons, hair salons, and service businesses that need booking, payment, promotion, and better day-to-day management.",
                  "Chúng tôi xây dựng website theo yêu cầu cho retail, doanh nghiệp bán sản phẩm, quản lý tồn kho, logistics, tiệm nails, tiệm tóc và các business dịch vụ cần đặt lịch, thanh toán, quảng bá và quản lý hằng ngày tốt hơn."
                )}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                {t(
                  "We also support bilingual website experiences in English and Vietnamese for businesses serving both communities.",
                  "Chúng tôi cũng hỗ trợ trải nghiệm website song ngữ tiếng Anh và tiếng Việt cho các doanh nghiệp phục vụ cả hai nhóm khách hàng."
                )}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                >
                  {t("Book a Free Consultation", "Đặt lịch tư vấn miễn phí")}
                </a>
                <a
                  href="#solutions"
                  className="rounded-2xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {t("View Solutions", "Xem giải pháp")}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/15 px-3 py-2">{t("Retail", "Bán hàng")}</span>
                <span className="rounded-full border border-white/15 px-3 py-2">{t("Inventory", "Tồn kho")}</span>
                <span className="rounded-full border border-white/15 px-3 py-2">{t("Logistics", "Logistics")}</span>
                <span className="rounded-full border border-white/15 px-3 py-2">{t("Nails", "Nails")}</span>
                <span className="rounded-full border border-white/15 px-3 py-2">{t("Hair Salon", "Tiệm tóc")}</span>
                <span className="rounded-full border border-white/15 px-3 py-2">{t("Booking", "Đặt lịch")}</span>
                <span className="rounded-full border border-white/15 px-3 py-2">{t("Payments", "Thanh toán")}</span>
                <span className="rounded-full border border-white/15 px-3 py-2">AI Chatbot</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="text-3xl">🚀</div>
                <h3 className="mt-4 text-xl font-semibold">{t("Sales-Driven", "Tập trung tạo khách hàng")}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {t(
                    "Built to help your visitors understand your services quickly and turn interest into inquiries.",
                    "Được xây dựng để khách truy cập hiểu nhanh dịch vụ của bạn và biến sự quan tâm thành yêu cầu liên hệ."
                  )}
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="text-3xl">✨</div>
                <h3 className="mt-4 text-xl font-semibold">{t("Premium Presence", "Hình ảnh cao cấp")}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {t(
                    "A cleaner, more elevated brand presentation for businesses that want to look more established.",
                    "Cách thể hiện thương hiệu gọn gàng và cao cấp hơn cho doanh nghiệp muốn trông chuyên nghiệp và vững vàng hơn."
                  )}
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="text-3xl">📍</div>
                <h3 className="mt-4 text-xl font-semibold">{t("Local Business Friendly", "Phù hợp business địa phương")}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {t(
                    "Especially helpful for salons, service shops, and local businesses that need visibility and easier booking.",
                    "Đặc biệt phù hợp cho salon, cửa hàng dịch vụ và business địa phương cần tăng hiện diện online và đặt lịch dễ hơn."
                  )}
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="text-3xl">🌐</div>
                <h3 className="mt-4 text-xl font-semibold">{t("Bilingual Support", "Hỗ trợ song ngữ")}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {t(
                    "English and Vietnamese website experiences for better communication with your customers.",
                    "Trải nghiệm website tiếng Anh và tiếng Việt giúp giao tiếp với khách hàng rõ ràng hơn."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{t("Direction 1", "Hướng 1")}</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("Sales-focused messaging that pushes visitors to take action", "Nội dung thiên về bán hàng để thúc đẩy khách hành động")}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t(
                "This version speaks directly to the business result: more visibility, more inquiries, more bookings, and a smoother customer experience. The goal is simple — make the website feel like a business tool, not just a pretty page.",
                "Phiên bản này nói thẳng vào kết quả kinh doanh: hiện diện tốt hơn, nhiều yêu cầu hơn, nhiều lịch hẹn hơn và trải nghiệm khách hàng mượt hơn. Mục tiêu là làm cho website trở thành một công cụ kinh doanh, không chỉ là một trang đẹp mắt."
              )}
            </p>
            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              <p>• {t("Clear value proposition right away", "Nêu rõ giá trị ngay từ đầu")}</p>
              <p>• {t("Strong call-to-action above the fold", "CTA mạnh ngay phần đầu trang")}</p>
              <p>• {t("Services written in a lead-generating style", "Dịch vụ được viết theo hướng tạo lead")}</p>
              <p>• {t("Messaging centered around growth, customer conversion, and efficiency", "Thông điệp xoay quanh tăng trưởng, chuyển đổi và hiệu quả")}</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{t("What this sounds like", "Giọng điệu của phần này")}</p>
            <h3 className="mt-4 text-2xl font-bold">{t("A website that helps your business work harder for you", "Một website giúp business của bạn hoạt động hiệu quả hơn")}</h3>
            <p className="mt-4 text-slate-600 leading-7">
              {t(
                "Whether you need to advertise your services, showcase your products, accept booking requests, or support payments, we create website solutions designed to help your business attract attention and turn visitors into customers.",
                "Dù bạn cần quảng bá dịch vụ, giới thiệu sản phẩm, nhận yêu cầu đặt lịch hay hỗ trợ thanh toán, chúng tôi xây dựng giải pháp website để giúp business của bạn thu hút sự chú ý và biến khách truy cập thành khách hàng."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">{t("Direction 2", "Hướng 2")}</p>
              <h3 className="mt-4 text-3xl font-bold">{t("A more elevated agency feel", "Phong cách agency cao cấp hơn")}</h3>
              <p className="mt-5 text-slate-200 leading-8">
                {t(
                  "For businesses that want to look more refined, more credible, and more established, the page now carries a cleaner premium tone. It feels less like a cheap template and more like a strategic brand presentation.",
                  "Dành cho những doanh nghiệp muốn trông chỉn chu hơn, đáng tin hơn và bài bản hơn, landing page này mang tông cao cấp và gọn gàng hơn. Nó không còn cảm giác như một template rẻ tiền mà giống một phần trình bày thương hiệu có chiến lược."
                )}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">{t("Modern typography", "Typography hiện đại")}</div>
                <div className="rounded-2xl bg-white/10 p-5">{t("Stronger visual hierarchy", "Phân cấp thị giác rõ hơn")}</div>
                <div className="rounded-2xl bg-white/10 p-5">{t("Cleaner luxury spacing", "Khoảng trắng cao cấp hơn")}</div>
                <div className="rounded-2xl bg-white/10 p-5">{t("More polished brand language", "Ngôn ngữ thương hiệu chỉn chu hơn")}</div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{t("Premium positioning", "Định vị cao cấp")}</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("Not just functional — professional, polished, and credible", "Không chỉ hữu dụng mà còn chuyên nghiệp, chỉn chu và đáng tin")}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {t(
                  "A strong website should make your business look trustworthy from the first second. This direction adds a more refined presentation so potential clients feel they are dealing with a serious brand.",
                  "Một website mạnh phải khiến doanh nghiệp của bạn trông đáng tin ngay từ những giây đầu tiên. Hướng này bổ sung cách trình bày tinh tế hơn để khách hàng tiềm năng cảm thấy họ đang làm việc với một thương hiệu nghiêm túc."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{t("Direction 3", "Hướng 3")}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("Practical positioning for local businesses", "Định vị thực tế cho business địa phương")}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {t(
              "This part speaks directly to the kinds of local businesses that often need the most help: nails, hair salons, beauty services, product shops, and other businesses that need easier booking, clearer service presentation, and simpler customer communication.",
              "Phần này nói trực tiếp với các business địa phương thường cần hỗ trợ nhất: tiệm nails, tiệm tóc, dịch vụ làm đẹp, cửa hàng bán sản phẩm và các doanh nghiệp cần đặt lịch dễ hơn, trình bày dịch vụ rõ hơn và giao tiếp với khách hàng đơn giản hơn."
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {localBusinessExamples.map((item) => (
            <div key={item.name.en} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold">{item.name[lang]}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.details[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{t("Core solutions", "Các giải pháp chính")}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("Flexible website solutions for different industries", "Giải pháp website linh hoạt cho nhiều ngành nghề")}</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {primaryServices.map((service) => (
            <div key={service.title.en} className="rounded-[2rem] border border-slate-200 p-7 shadow-sm">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-5 text-2xl font-semibold">{service.title[lang]}</h3>
              <p className="mt-2 text-sm font-medium text-slate-500">{service.subtitle[lang]}</p>
              <p className="mt-5 text-sm leading-7 text-slate-600">{service.desc[lang]}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-slate-50 p-8 ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{t("We can build for", "Chúng tôi có thể xây cho")}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {allSolutions.map((item) => (
              <span key={item.en} className="rounded-full bg-white px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200">
                {item[lang]}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{t("Why clients choose this", "Vì sao khách hàng chọn giải pháp này")}</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("Designed to be useful, scalable, and easy to run", "Thiết kế để hữu dụng, dễ mở rộng và dễ vận hành")}</h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {trustPoints.map((item) => (
                  <div key={item.title.en} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <h3 className="text-lg font-semibold">{item.title[lang]}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc[lang]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{t("Bilingual support", "Hỗ trợ song ngữ")}</p>
              <h3 className="mt-4 text-2xl font-bold">{t("English + Vietnamese", "Tiếng Anh + Tiếng Việt")}</h3>
              <p className="mt-4 text-slate-600 leading-7">
                {t(
                  "If your audience includes both English-speaking and Vietnamese-speaking customers, your website should speak to both clearly. We can structure the experience so your business feels more accessible, more professional, and easier to trust.",
                  "Nếu tệp khách hàng của bạn gồm cả người nói tiếng Anh và tiếng Việt, website nên giao tiếp rõ ràng với cả hai. Chúng tôi có thể xây dựng trải nghiệm giúp doanh nghiệp của bạn dễ tiếp cận hơn, chuyên nghiệp hơn và tạo cảm giác đáng tin hơn."
                )}
              </p>
              <p className="mt-4 text-slate-500 leading-7">
                {t(
                  "A bilingual structure is especially valuable for local businesses serving mixed communities in the U.S.",
                  "Cấu trúc song ngữ đặc biệt hữu ích cho các business địa phương tại Mỹ phục vụ cộng đồng đa ngôn ngữ."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">AI Integration</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {t(
              "AI chatbot integration for booking, scheduling, and lighter front-desk workload",
              "Tích hợp AI chatbot cho đặt lịch, sắp lịch và giảm tải công việc trực tin nhắn"
            )}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {t(
              "For businesses that receive many repetitive customer messages every day, AI can help automate the first layer of communication and booking coordination.",
              "Đối với các business nhận nhiều tin nhắn lặp đi lặp lại mỗi ngày, AI có thể tự động xử lý lớp giao tiếp đầu tiên và hỗ trợ điều phối đặt lịch."
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aiFeatures.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-slate-50 p-8 ring-1 ring-slate-200">
          <h3 className="text-2xl font-bold">
            {t(
              "A practical AI use case for salons and service businesses",
              "Một ứng dụng AI thực tế cho salon và business dịch vụ"
            )}
          </h3>
          <p className="mt-4 text-slate-600 leading-7">
            {t(
              "A customer can open the website chat, ask about available appointments, choose a service, and request a time. The chatbot can then check the schedule, identify which staff members are available that day, and suggest or route the booking accordingly — reducing the need for someone to constantly monitor and reply to messages manually.",
              "Khách hàng có thể mở khung chat trên website, hỏi về lịch trống, chọn dịch vụ và yêu cầu thời gian mong muốn. Chatbot sau đó có thể kiểm tra lịch, xác định nhân viên nào còn trống trong ngày và gợi ý hoặc phân lịch phù hợp — giúp giảm nhu cầu phải có người liên tục ngồi trực và trả lời tin nhắn thủ công."
            )}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{t("Process", "Quy trình")}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("Simple from consultation to launch", "Đơn giản từ tư vấn đến ra mắt")}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.num} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">{step.num}</div>
              <h3 className="mt-4 text-xl font-semibold">{step.title[lang]}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">{t("Get started", "Bắt đầu")}</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                {t(
                  "Let’s build a website that makes your business easier to promote and easier to manage.",
                  "Hãy cùng xây một website giúp business của bạn dễ quảng bá và dễ quản lý hơn."
                )}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
                {t(
                  "Whether you need a simple landing page, a service website, a booking flow, a product showcase, or a more organized system for your business, we can create the right solution based on your goals.",
                  "Dù bạn cần landing page đơn giản, website dịch vụ, luồng đặt lịch, trang giới thiệu sản phẩm hay một hệ thống rõ ràng hơn cho doanh nghiệp, chúng tôi có thể xây dựng giải pháp phù hợp với mục tiêu của bạn."
                )}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
                {t(
                  "We can also advise on AI chatbot integration if you want to automate bookings and reduce repetitive customer messaging.",
                  "Chúng tôi cũng có thể tư vấn tích hợp AI chatbot nếu bạn muốn tự động hóa booking và giảm các tin nhắn khách hàng lặp đi lặp lại."
                )}
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold">{t("Free Consultation", "Tư vấn miễn phí")}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {t(
                  "Tell us about your business and what you want your website to help you do.",
                  "Hãy cho chúng tôi biết về business của bạn và website cần hỗ trợ điều gì."
                )}
              </p>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder={t("Your name", "Tên của bạn")}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder={t("Business type", "Loại hình kinh doanh")}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
                <textarea
                  rows={5}
                  placeholder={t("What do you need your website to help with?", "Bạn cần website hỗ trợ điều gì?")}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
                <button
                  type="button"
                  className="w-full rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  {t("Send Inquiry", "Gửi yêu cầu")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
