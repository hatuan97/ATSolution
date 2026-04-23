import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Gem,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Scissors,
  ShoppingBag,
  Sparkles,
  Target,
  Truck,
  Store,
  Briefcase,
} from "lucide-react";
import sitecraftLogo from "./assets/sitecraft-logo.png";

export default function App() {
  const [lang, setLang] = useState("en");
  const t = (en, vi) => (lang === "en" ? en : vi);

  const brand = {
    name: "SiteCraft Studio",
    logo: sitecraftLogo,
  };

  const heroMockup =
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1600&auto=format&fit=crop";

  const industries = [
    { icon: Scissors, en: "Hair Salons", vi: "Tiệm tóc" },
    { icon: Sparkles, en: "Nail Salons", vi: "Tiệm nails" },
    { icon: Gem, en: "Spas", vi: "Spa" },
    { icon: Store, en: "Retail Stores", vi: "Cửa hàng" },
    { icon: Truck, en: "Logistics", vi: "Logistics" },
    { icon: Briefcase, en: "Service Businesses", vi: "Business dịch vụ" },
  ];

  const valuePoints = [
    {
      icon: Target,
      title: {
        en: "Sales-focused structure",
        vi: "Cấu trúc thiên về bán hàng",
      },
      desc: {
        en: "Every section is designed to help visitors understand your services quickly, trust your brand, and take action faster.",
        vi: "Mỗi phần trên website đều được thiết kế để khách hiểu nhanh dịch vụ của bạn, tin tưởng thương hiệu và hành động nhanh hơn.",
      },
    },
    {
      icon: Gem,
      title: {
        en: "Professional brand presence",
        vi: "Hình ảnh thương hiệu chuyên nghiệp",
      },
      desc: {
        en: "A clean, modern presentation helps your business look more polished, credible, and established from the first impression.",
        vi: "Cách trình bày hiện đại, gọn gàng giúp doanh nghiệp của bạn trông chỉn chu, đáng tin và chuyên nghiệp hơn ngay từ ấn tượng đầu tiên.",
      },
    },
    {
      icon: CheckCircle2,
      title: {
        en: "Practical for local businesses",
        vi: "Thực tế cho business địa phương",
      },
      desc: {
        en: "Especially useful for salons, retail shops, service businesses, and operations that need booking, inquiries, or payments.",
        vi: "Đặc biệt phù hợp cho salon, cửa hàng, business dịch vụ và các mô hình cần đặt lịch, tiếp nhận khách hoặc thanh toán.",
      },
    },
  ];
const quickLinks = [
  { en: "Home", vi: "Trang chủ" },
  { en: "Services", vi: "Dịch vụ" },
  { en: "Projects", vi: "Dự án" },
  { en: "About", vi: "Giới thiệu" },
  { en: "Blog", vi: "Blog" },
  { en: "Contact", vi: "Liên hệ" },
];

const footerServices = [
  { en: "Website Design", vi: "Thiết kế website" },
  { en: "AI Chatbot", vi: "AI Chatbot" },
  { en: "Booking Systems", vi: "Hệ thống đặt lịch" },
  { en: "E-commerce", vi: "Thương mại điện tử" },
  { en: "Website Maintenance", vi: "Bảo trì website" },
  { en: "SEO Optimization", vi: "Tối ưu SEO" },
];

  const projects = [
  {
    title: { en: "Luxe Hair Salon", vi: "Luxe Hair Salon" },
    category: { en: "Hair Salon", vi: "Tiệm tóc" },
    desc: {
      en: "Modern website with online booking, service pages, and gallery showcase.",
      vi: "Website hiện đại với đặt lịch online, trang dịch vụ và gallery.",
    },
    tags: {
      en: ["Booking", "Gallery", "Bilingual"],
      vi: ["Đặt lịch", "Gallery", "Song ngữ"],
    },
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: { en: "Bliss Nails Studio", vi: "Bliss Nails Studio" },
    category: { en: "Nail Salon", vi: "Tiệm nails" },
    desc: {
      en: "Stylish nail salon website with appointments and promotions.",
      vi: "Website tiệm nails với đặt lịch và khuyến mãi.",
    },
    tags: {
      en: ["Appointments", "Promotions", "Payments"],
      vi: ["Lịch hẹn", "Khuyến mãi", "Thanh toán"],
    },
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: { en: "FastMove Logistics", vi: "FastMove Logistics" },
    category: { en: "Logistics", vi: "Logistics" },
    desc: {
      en: "Business website for logistics services and operations.",
      vi: "Website cho dịch vụ logistics và vận hành.",
    },
    tags: {
      en: ["Quote Request", "Services", "Operations"],
      vi: ["Báo giá", "Dịch vụ", "Vận hành"],
    },
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  },
];

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <img src={brand.logo} alt={brand.name} className="h-12 w-auto" />
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
            <a href="#home" className="hover:text-blue-600">{t("Home", "Trang chủ")}</a>
            <a href="#services" className="hover:text-blue-600">{t("Services", "Dịch vụ")}</a>
            <a href="#projects" className="hover:text-blue-600">{t("Projects", "Dự án")}</a>
            <a href="#about" className="hover:text-blue-600">{t("About", "Giới thiệu")}</a>
            <a href="#contact" className="hover:text-blue-600">{t("Contact", "Liên hệ")}</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-slate-200 bg-slate-50 p-1 sm:inline-flex">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${lang === "en" ? "bg-blue-600 text-white" : "text-slate-600"}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("vi")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${lang === "vi" ? "bg-blue-600 text-white" : "text-slate-600"}`}
              >
                VI
              </button>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              {t("Start Your Project", "Bắt đầu dự án")}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-[#f8f9fd]">
          <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
            <div>
              <div className="inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600 shadow-sm">
                {t("Website Design & AI Solutions", "Thiết kế website & giải pháp AI")}
              </div>

              <h1 className="mt-6 max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl">
                {t("Custom Websites That Help Local Businesses", "Website theo yêu cầu giúp business địa phương")}{" "}
                <span className="text-blue-600">{t("Grow", "Phát triển")}</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                {t(
                  "We build modern, high-performing websites with AI chatbot integration to help you attract more customers, save time, and grow your business.",
                  "Chúng tôi xây dựng website hiện đại, hiệu quả cao với tích hợp AI chatbot để giúp bạn thu hút thêm khách hàng, tiết kiệm thời gian và phát triển business."
                )}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  {t("Start Your Project", "Bắt đầu dự án")}
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300"
                >
                  {t("View Our Work", "Xem dự án")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  {t("Fast Delivery", "Triển khai nhanh")}
                </div>
                <div className="inline-flex items-center gap-2">
                  <Bot className="h-4 w-4 text-blue-600" />
                  {t("AI-Powered", "Có tích hợp AI")}
                </div>
                <div className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4 text-blue-600" />
                  {t("Bilingual Support", "Hỗ trợ song ngữ")}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-transparent p-0">
                <img
                  src={heroMockup}
                  alt="SiteCraft Studio hero mockup"
                  className="h-auto w-full rounded-[1.75rem] object-cover"
                />
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{t("AI Chatbot Integration", "Tích hợp AI Chatbot")}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {t(
                          "Answer questions, book appointments, and capture leads 24/7.",
                          "Trả lời câu hỏi, đặt lịch và thu thập khách hàng tiềm năng 24/7."
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{t("Available 24/7", "Hoạt động 24/7")}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {t(
                          "Never miss a customer message or booking opportunity.",
                          "Không bỏ lỡ tin nhắn khách hàng hay cơ hội đặt lịch nào."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t("Trusted by Local Businesses", "Được các business địa phương tin dùng")}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {industries.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.en} className="flex items-center justify-center gap-2 text-sm text-slate-600">
                    <Icon className="h-4 w-4 text-slate-500" />
                    <span>{lang === "en" ? item.en : item.vi}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              {t("Why This Works", "Vì sao giải pháp này hiệu quả")}
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              {t(
                "A stronger website for visibility, trust, and growth",
                "Một website mạnh hơn để tăng hiện diện, độ tin cậy và tăng trưởng"
              )}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {t(
                "Designed to help businesses attract attention, present their brand professionally, and make daily operations easier to manage.",
                "Được thiết kế để giúp doanh nghiệp thu hút sự chú ý, thể hiện thương hiệu chuyên nghiệp và giúp việc vận hành hằng ngày dễ quản lý hơn."
              )}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valuePoints.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title.en} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">{item.title[lang]}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc[lang]}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-8 pb-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              {t("Recent Projects", "Dự án gần đây")}
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              {t("Projects delivered for local businesses", "Các dự án đã triển khai cho business địa phương")}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {t(
                "A few examples of website solutions designed for service businesses, beauty brands, and local operations.",
                "Một vài ví dụ về giải pháp website được thiết kế cho business dịch vụ, ngành làm đẹp và các doanh nghiệp địa phương."
              )}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title.en} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                <div className="aspect-[1.15/0.8] overflow-hidden bg-slate-100">
                  <img src={project.image} alt={project.title[lang]} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {project.category[lang]}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{project.title[lang]}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.desc[lang]}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags[lang].map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {t("Start Your Project", "Bắt đầu dự án")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <div className="rounded-[2rem] bg-[#f2f6ff] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.25fr] lg:items-end">
              <div className="flex gap-5">
                <div className="pt-2 text-blue-600">
                  <MessageSquare className="h-10 w-10 fill-current stroke-none" />
                </div>
                <div>
                  <p className="max-w-2xl text-2xl font-semibold leading-10 text-slate-900">
                    {t(
                      "SiteCraft Studio built a beautiful website for our salon. The booking system and chatbot have saved us so much time and helped us get more customers every week.",
                      "SiteCraft Studio đã xây cho salon của chúng tôi một website rất đẹp. Hệ thống đặt lịch và chatbot giúp tiết kiệm rất nhiều thời gian và mang lại thêm khách hàng mỗi tuần."
                    )}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                      alt="Jessica Nguyen"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Jessica Nguyen</div>
                      <div className="text-sm text-slate-500">{t("Owner, Luxe Hair Salon", "Owner, Luxe Hair Salon")}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="h-2 w-2 rounded-full bg-blue-200" />
                  <span className="h-2 w-2 rounded-full bg-blue-200" />
                </div>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                {t("Ready to Get Started?", "Sẵn sàng bắt đầu?")}
              </p>
              <h2 className="mt-4 max-w-lg text-5xl font-bold leading-tight tracking-tight text-slate-950">
                {t("Let’s build a website that works for your business.", "Hãy cùng xây một website thật sự hiệu quả cho business của bạn.")}
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
                {t(
                  "Tell us about your business and we’ll create the right solution for you.",
                  "Hãy cho chúng tôi biết về business của bạn và chúng tôi sẽ tạo giải pháp phù hợp."
                )}
              </p>

              <div className="mt-10 space-y-5 text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-50 p-2.5 text-blue-600">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>(641) 819-1720</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-50 p-2.5 text-blue-600">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>contactus@sitecraftstudio.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-50 p-2.5 text-blue-600">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Texas, USA</span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
              <h3 className="text-3xl font-semibold tracking-tight text-slate-950">
                {t("Start Your Project", "Bắt đầu dự án")}
              </h3>

              <form className="mt-8 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder={t("Your Name", "Tên của bạn")}
                    className="h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-500"
                  />
                  <select className="h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-500 outline-none transition focus:border-blue-500">
                    <option>{t("Business Type", "Loại hình kinh doanh")}</option>
                    <option>{t("Hair Salon", "Tiệm tóc")}</option>
                    <option>{t("Nail Salon", "Tiệm nails")}</option>
                    <option>{t("Retail", "Bán hàng")}</option>
                    <option>{t("Logistics", "Logistics")}</option>
                  </select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder={t("Phone Number", "Số điện thoại")}
                    className="h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-500"
                  />
                </div>

                <textarea
                  rows={6}
                  placeholder={t("Tell us about your project...", "Hãy cho chúng tôi biết về dự án của bạn...")}
                  className="w-full rounded-xl border border-slate-200 px-4 py-4 text-sm outline-none transition focus:border-blue-500"
                />

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-blue-600"
                >
                  {t("Send Message", "Gửi tin nhắn")}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#05122b] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1fr] lg:px-8">
          <div>
            <img src={brand.logo} alt={brand.name} className="h-12 w-auto brightness-[1.2] saturate-0 invert" />
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
              {t(
                "Custom websites and AI solutions that help local businesses attract more customers and grow faster.",
                "Website theo yêu cầu và giải pháp AI giúp business địa phương thu hút thêm khách hàng và phát triển nhanh hơn."
              )}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["f", "ig", "t", "yt"].map((item) => (
                <div key={item} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{t("Quick Links", "Liên kết nhanh")}</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li key={item.en}>{lang === "en" ? item.en : item.vi}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{t("Services", "Dịch vụ")}</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {footerServices.map((item) => (
                <li key={item.en}>{lang === "en" ? item.en : item.vi}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{t("Newsletter", "Newsletter")}</h3>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
              {t("Get tips and updates to grow your business.", "Nhận tip và cập nhật để phát triển business của bạn.")}
            </p>
            <div className="mt-5 flex overflow-hidden rounded-xl border border-white/10 bg-white/10">
              <input
                type="email"
                placeholder={t("Your email", "Email của bạn")}
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none"
              />
              <button className="flex h-auto items-center justify-center bg-blue-600 px-4 text-white transition hover:bg-blue-700">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>© 2024 SiteCraft Studio. {t("All rights reserved.", "Đã đăng ký bản quyền.")}</div>
            <div className="flex items-center gap-6">
              <a href="#privacy">{t("Privacy Policy", "Chính sách bảo mật")}</a>
              <a href="#terms">{t("Terms Of Service", "Điều khoản dịch vụ")}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
