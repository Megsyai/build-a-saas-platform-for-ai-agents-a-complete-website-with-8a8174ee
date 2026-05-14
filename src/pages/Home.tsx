
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Zap, Shield, Cpu, Layers, MessageSquare, BarChart3, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { aiImage } from "@/lib/deapi";
import { useEffect, useState } from "react";
import { img } from "@/lib/img";

const Home = () => {
  const [heroImg, setHeroImg] = useState(img("ai-chip-dark", 1600, 900));
  
  useEffect(() => {
    aiImage("futuristic AI agent neural network, liquid glass interface, cinematic lighting, 8k dark background", {w:1600, h:900}).then(setHeroImg);
  }, []);

  const features = [
    {
      title: "أتمتة شاملة",
      desc: "وكلاء ذكاء اصطناعي قادرون على إدارة سير العمل بالكامل بدون تدخل بشري.",
      icon: <Layers className="text-blue-400" size={24} />,
    },
    {
      title: "أداء فائق السرعة",
      desc: "استجابة في غضون أجزاء من الثانية بفضل بروتوكول معالجة البيانات الجديد.",
      icon: <Zap className="text-yellow-400" size={24} />,
    },
    {
      title: "خصوصية مطلقة",
      desc: "تشفير البيانات من طرف إلى طرف وضمان خصوصية النماذج اللغوية الخاصة بك.",
      icon: <Shield className="text-green-400" size={24} />,
    },
    {
      title: "تكامل الأنظمة",
      desc: "اربط وكلائك بأكثر من 200 تطبيق ومنصة عالمية بلمسة واحدة.",
      icon: <Globe className="text-purple-400" size={24} />,
    },
  ];

  return (
    <div className="pt-32" dir="rtl">
      {/* Hero Section */}
      <section className="px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
          >
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm font-medium">الجيل القادم من وكلاء الذكاء الاصطناعي متاح الآن</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            اصنع جيشك الخاص من <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">الوكلاء الأذكياء</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            منصة "أورا" تمنحك القوة لبرمجة ونشر وتدريب وكلاء ذكاء اصطناعي يقومون بمهامك المعقدة، من خدمة العملاء إلى تحليل البيانات الضخمة.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link to="/pricing" className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_50px_-12px_rgba(255,255,255,0.3)]">
              ابدأ تجربتك المجانية <ArrowLeft size={20} />
            </Link>
            <Link to="/features" className="bg-white/5 border border-white/10 px-10 py-5 rounded-full font-bold text-lg backdrop-blur-xl hover:bg-white/10 transition-all text-white">
              استكشف الميزات
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative max-w-6xl mx-auto aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_100px_-20px_rgba(59,130,246,0.3)] bg-white/5"
          >
            <img src={heroImg} className="w-full h-full object-cover opacity-80" alt="Platform Preview" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 border-b border-white/5 bg-[#0a0a0f]/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { val: "2M+", label: "مهمة منجزة يومياً" },
            { val: "99.9%", label: "وقت استجابة النظام" },
            { val: "500+", label: "عميل مؤسساتي" },
            { val: "10x", label: "زيادة في الإنتاجية" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{stat.val}</div>
              <div className="text-white/40 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">ذكاء اصطناعي يُصمم لأجلك</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              لا يقتصر "أورا" على الدردشة فقط، بل هو محرك عمل حقيقي يدير تطبيقاتك وبياناتك ومشاريعك.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white/[0.04] backdrop-blur-2xl ring-1 ring-white/10 p-8 rounded-[32px] hover:bg-white/[0.08] transition-all group"
              >
                <div className="mb-6 p-3 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Feature Showcase */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center text-right">
          <div>
            <div className="bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold w-fit mb-8 mr-0 ml-auto">
              تحليل البيانات
            </div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">شاشات تحليلية فورية <br />لأداء وكلائك</h2>
            <div className="space-y-8">
              {[
                { t: "رصد المسارات", d: "تتبع كل خطوة يتخذها الوكيل في تنفيذ مهامه بدقة متناهية.", i: <BarChart3 /> },
                { t: "التعلم المستمر", d: "يتعلم الوكلاء من تصحيحاتك ويتحسنون تلقائياً بمرور الوقت.", i: <Cpu /> },
                { t: "إدارة الذاكرة", d: "تخزين سياق طويل الأمد لضمان اتساق القرارات المستقبلية.", i: <MessageSquare /> },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start justify-end">
                   <div className="text-right">
                    <h4 className="font-bold text-xl mb-2">{item.t}</h4>
                    <p className="text-white/40">{item.d}</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl text-white/70">{item.i}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-3xl p-4 rounded-[40px] ring-1 ring-white/10 aspect-square flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-500/10 blur-[100px]" />
             <div className="w-[80%] h-[80%] bg-black/40 rounded-3xl border border-white/5 shadow-2xl p-8 overflow-hidden relative z-10">
                <div className="flex gap-4 mb-8">
                  <div className="w-12 h-2 rounded-full bg-blue-500/40" />
                  <div className="w-12 h-2 rounded-full bg-white/10" />
                  <div className="w-12 h-2 rounded-full bg-white/10" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-white/10 rounded-lg w-[90%]" />
                  <div className="h-4 bg-white/10 rounded-lg w-[70%]" />
                  <div className="h-4 bg-white/10 rounded-lg w-[85%]" />
                  <div className="h-32 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="text-blue-500 animate-bounce" size={48} />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 tracking-tight">ماذا يقول <span className="text-blue-400 font-serif italic text-6xl">القادة</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "أحمد القحطاني", role: "CTO في نيوم", text: "منصة أورا غيرت طريقتنا في التعامل مع البيانات الكبيرة. وكلائنا الآن ينجزون في دقائق ما كان يستغرق أسابيع." },
              { name: "سارة المهدي", role: "مديرة الابتكار، أرامكو", text: "الدقة هي أهم شيء لدينا، ونظام أورا أثبت جدارته في تقديم نتائج خالية من الأخطاء في بيئة تقنية معقدة." },
              { name: "فهد العتيبي", role: "رائد أعمال تقني", text: "التجربة المستخدم رائعة. لم أحتج لكتابة سطر برمجيات واحد لبناء أول وكيل مبيعات ذكي لي." },
            ].map((t, i) => (
              <div key={i} className="p-10 bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 rounded-[32px] relative group hover:-translate-y-2 transition-transform">
                <p className="text-xl text-white/80 leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-white/40 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-tr from-blue-600/40 via-purple-600/40 to-pink-600/40 rounded-[60px] p-20 text-center border border-white/10 backdrop-blur-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 blur-[100px] -z-10" />
          <h2 className="text-5xl font-bold mb-8">هل أنت مستعد لنقل عملك إلى <br />عصر الذكاء المطلق؟</h2>
          <p className="text-xl text-white/70 mb-12 max-w-xl mx-auto">انضم لآلاف الشركات الرائدة التي تستخدم أورا لخلق قيمة حقيقية لعملائها.</p>
          <Link to="/pricing" className="bg-white text-black px-12 py-6 rounded-full font-bold text-2xl hover:bg-white/90 transition-all inline-block shadow-2xl shadow-blue-500/20">
            ابدأ مجاناً الآن
          </Link>
          <p className="mt-8 text-white/40 text-sm">لا حاجة لبطاقة ائتمان • إلغاء في أي وقت</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
