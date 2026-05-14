
import { Check, Info, Rocket, Building, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "الأساسي",
      price: "$29",
      desc: "مثالي للمبدعين والمشاريع الصغيرة الناشئة.",
      icon: <Rocket className="text-blue-400" />,
      features: ["3 وكلاء نشطين", "10,000 عملية شهرياً", "دعم عبر البريد الإلكتروني", "تكاملات أساسية"],
      btnText: "ابدأ النسخة المجانية",
      popular: false
    },
    {
      name: "الاحترافي",
      price: "$99",
      desc: "القوة الكاملة للفرق التي تنمو بسرعة.",
      icon: <Building className="text-purple-400" />,
      features: ["وكلاء غير محدودين", "100,000 عملية شهرياً", "دعم فني 24/7", "نماذج مخصصة", "أولوية المعالجة"],
      btnText: "اختر الخطة الاحترافية",
      popular: true
    },
    {
      name: "المؤسسات",
      price: "تواصل معنا",
      desc: "حلول مخصصة للشركات الضخمة والمتطلبات الخاصة.",
      icon: <ShieldCheck className="text-green-400" />,
      features: ["بنية تحتية مخصصة", "امتثال أمني كامل", "مدير حساب مخصص", "واجهة برمجية متقدمة", "تدريب ميداني"],
      btnText: "احصل على عرض سعر",
      popular: false
    }
  ];

  return (
    <div className="pt-40 pb-32 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-bold mb-8 tracking-tight">استثمر في <span className="text-blue-400">مستقبلك</span></h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">خطط مرنة تناسب حجم أعمالك. ابدأ صغيراً وتوسع بلا حدود مع وكلاء "أورا" الأذكياء.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className={`p-10 rounded-[40px] border ring-1 ring-white/10 backdrop-blur-3xl transition-all relative ${
                p.popular ? 'bg-white/[0.08] border-white/20 shadow-[0_0_80px_-20px_rgba(147,51,234,0.3)]' : 'bg-white/[0.03] border-white/5'
              }`}
            >
              {p.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  الأكثر مبيعاً
                </div>
              )}
              
              <div className="mb-8 flex justify-between items-center">
                <div className="p-4 bg-white/5 rounded-2xl">{p.icon}</div>
                <div className="text-right">
                   <h3 className="text-2xl font-bold">{p.name}</h3>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-5xl font-bold mb-2 tracking-tighter">{p.price}</div>
                <div className="text-white/40 text-sm">لكل مستخدم / شهرياً</div>
              </div>

              <p className="text-white/60 mb-10 min-h-[50px]">{p.desc}</p>

              <div className="space-y-4 mb-10">
                {p.features.map(f => (
                  <div key={f} className="flex items-center gap-3 justify-start">
                    <div className="bg-white/10 rounded-full p-1"><Check size={14} className="text-white" /></div>
                    <span className="text-white/80">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-3xl font-bold transition-all ${
                p.popular ? 'bg-white text-black hover:bg-white/90 shadow-xl' : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
              }`}>
                {p.btnText}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center">
           <div className="bg-white/[0.02] backdrop-blur-2xl ring-1 ring-white/5 rounded-[40px] p-16">
              <h2 className="text-4xl font-bold mb-8">أسئلة شائعة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-right">
                <div>
                  <h4 className="font-bold text-xl mb-3">هل يمكنني تجربة المنصة مجاناً؟</h4>
                  <p className="text-white/40 leading-relaxed">نعم، نحن نقدم نسخة تجريبية كاملة لمدة 14 يوماً بدون الحاجة لإدخال أي بيانات دفع.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3">ماذا يحدث في حال نفاد الأرصدة؟</h4>
                  <p className="text-white/40 leading-relaxed">سنقوم بإخطارك مسبقاً، ويمكنك دائماً شراء أرصدة إضافية أو الترقية لخطة أعلى فوراً.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3">هل يتوفر دعم فني باللغة العربية؟</h4>
                  <p className="text-white/40 leading-relaxed">بالطبع، فريق الدعم لدينا يتحدث العربية والإنجليزية بطلاقة لضمان أفضل تجربة لك.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3">هل بياناتي آمنة؟</h4>
                  <p className="text-white/40 leading-relaxed">أمنك هو أولويتنا. نستخدم تقنيات التشفير العسكري والمتوافقة مع معايير الـ GDPR العالمية.</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
