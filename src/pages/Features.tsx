
import { motion } from "framer-motion";
import { Cpu, Zap, Globe, Shield, MessageSquare, Database, Share2, Layers, Search, Code } from "lucide-react";

const Features = () => {
  const allFeatures = [
    { title: "معالجة لغوية متقدمة", desc: "فهم السياق وتوليد ردود إنسانية بدقة مذهلة عبر لغات متعددة.", icon: <MessageSquare /> },
    { title: "ذاكرة بعيدة المدى", desc: "إمكانية استرجاع المعلومات من محادثات سابقة لبناء جسور من الثقة مع المستخدمين.", icon: <Database /> },
    { title: "تكامل API سلس", desc: "ربط وكلائك بأي نظام خارجي لاستخراج البيانات أو تنفيذ الأوامر.", icon: <Share2 /> },
    { title: "بنية تحتية سحابية", desc: "خوادم عالمية تضمن سرعة استجابة في أي مكان حول العالم.", icon: <Globe /> },
    { title: "تشفير بيانات فائق", desc: "خصوصيتك تأتي أولاً مع تشفير E2EE لكل بياناتك ونماذجك.", icon: <Shield /> },
    { title: "تحليل المشاعر", desc: "قدرة الوكلاء على فهم الحالة المزاجية للمتحدث وضبط الأسلوب بناءً عليها.", icon: <Zap /> },
    { title: "بحث متقدم (RAG)", desc: "ربط الوكيل بقواعد بياناتك الخاصة للحصول على معلومات دقيقة ومحدثة.", icon: <Search /> },
    { title: "بيئة برمجة متكاملة", desc: "واجهة سحب وإفلات للمصممين وبيئة برمجية كاملة للمطورين.", icon: <Code /> },
  ];

  return (
    <div className="pt-40" dir="rtl">
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-8">أبعد بكثير من مجرد <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">ذكاء اصطناعي</span></h1>
          <p className="text-white/50 text-xl max-w-3xl mx-auto leading-relaxed">لقد قمنا بتفكيك التكنولوجيا وبنائها من الصفر لنمنحك الأدوات التي تحتاجها للسيطرة على سوق العمل الجديد.</p>
        </div>
      </section>

      <section className="px-6 py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allFeatures.map((f, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={i}
              className="group p-8 bg-white/[0.03] backdrop-blur-xl ring-1 ring-white/10 rounded-[35px] hover:ring-blue-500/50 transition-all cursor-default"
            >
              <div className="mb-6 bg-white/5 p-4 w-fit rounded-2xl group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="absolute inset-0 bg-purple-500/20 blur-[100px]" />
             <div className="bg-white/[0.03] p-12 rounded-[50px] ring-1 ring-white/10 relative z-10 border-t border-white/10">
                <div className="space-y-6">
                   <div className="p-4 bg-white/5 rounded-2xl flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30" />
                      <div className="h-4 w-48 bg-white/10 rounded-full" />
                   </div>
                   <div className="p-4 bg-white/5 rounded-2xl flex gap-4 items-center ml-12 border border-blue-500/20">
                      <div className="w-10 h-10 rounded-full bg-purple-500" />
                      <div className="h-4 w-32 bg-white/10 rounded-full" />
                   </div>
                   <div className="p-4 bg-white/5 rounded-2xl flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500" />
                      <div className="h-4 w-56 bg-white/10 rounded-full" />
                   </div>
                </div>
             </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">سير العمل التلقائي</h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">اجعل وكلائك يتواصلون مع بعضهم البعض. يمكن لوكيل البحث أن يرسل النتائج إلى وكيل الكتابة، والذي بدوره يرسلها إلى وكيل الموافقة البشرية.</p>
            <ul className="space-y-4">
              {["بناء سلاسل مهام معقدة", "منطق شرطي متقدم", "تنبيهات فورية على Slack و WhatsApp", "تقارير أداء دورية"].map(item => (
                <li key={item} className="flex items-center gap-4 justify-end text-xl font-medium">
                  {item} <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_blue]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
