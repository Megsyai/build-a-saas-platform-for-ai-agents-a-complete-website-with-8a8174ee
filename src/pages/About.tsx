
import { motion } from "framer-motion";
import { Users, Globe, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="pt-40 pb-32 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <section className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl font-bold mb-8"
          >
            نحن نبني <span className="italic font-serif text-blue-400 underline decoration-blue-500/30 underline-offset-8">المستقبل</span>
          </motion.h1>
          <p className="text-white/50 text-2xl max-w-4xl mx-auto leading-relaxed">
            مهمتنا هي تمكين البشر من خلال الذكاء الاصطناعي. نحن هنا لجعل العمل أكثر ذكاءً، وأقل رتابة، وأكثر إنتاجية للجميع.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="bg-white/[0.03] p-12 rounded-[50px] ring-1 ring-white/10 group hover:bg-white/[0.05] transition-colors">
            <h2 className="text-4xl font-bold mb-6">رؤيتنا</h2>
            <p className="text-white/40 text-lg leading-relaxed mb-8">أن نصبح العمود الفقري للعمليات الرقمية في كل شركة حول العالم، حيث يعمل البشر والذكاء الاصطناعي جنباً إلى جنب لتحقيق المستحيل.</p>
            <div className="flex gap-4">
               <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400"><Globe /></div>
               <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400"><Award /></div>
            </div>
          </div>
          <div className="bg-white/[0.03] p-12 rounded-[50px] ring-1 ring-white/10 group hover:bg-white/[0.05] transition-colors">
            <h2 className="text-4xl font-bold mb-6">قيمنا</h2>
            <ul className="space-y-4 text-white/40 text-lg">
              <li className="flex items-center gap-3"><Heart className="text-pink-500" size={18} /> الخصوصية تأتي أولاً</li>
              <li className="flex items-center gap-3"><Users className="text-blue-400" size={18} /> العمل الجماعي العابر للحواجز</li>
              <li className="flex items-center gap-3"><Award className="text-yellow-400" size={18} /> الالتزام بالتميز التقني</li>
            </ul>
          </div>
        </section>

        <section className="text-center mb-32">
          <h2 className="text-5xl font-bold mb-16 underline decoration-white/10 underline-offset-8">فريقنا الإبداعي</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "د. سامي فهد", r: "المؤسس والرئيس التنفيذي" },
              { n: "ليلى حسن", r: "مديرة الذكاء الاصطناعي" },
              { n: "كريم يوسف", r: "رئيس المهندسين" },
              { n: "نورا علي", r: "مديرة تجربة المستخدم" },
            ].map((p, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] bg-white/[0.03] ring-1 ring-white/10 rounded-[30px] mb-6 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
                </div>
                <h4 className="font-bold text-xl mb-1">{p.n}</h4>
                <p className="text-white/30 text-sm">{p.r}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/[0.04] p-20 rounded-[60px] ring-1 ring-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
          <h2 className="text-4xl font-bold mb-8">هل تريد الانضمام إلينا؟</h2>
          <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto italic">نحن دائماً نبحث عن المبدعين والمفكرين الذين يجرؤون على تغيير العالم.</p>
          <a href="#" className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform">
            استعرض الوظائف الشاغرة
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
