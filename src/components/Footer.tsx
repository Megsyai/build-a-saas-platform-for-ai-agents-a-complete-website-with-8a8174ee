
import { Link } from "react-router-dom";
import { Bot, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-right" dir="rtl">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6 justify-end">
             <span className="font-bold text-2xl">أورا ذكاء</span>
            <div className="bg-white text-black p-2 rounded-xl">
              <Bot size={24} />
            </div>
          </Link>
          <p className="text-white/40 leading-relaxed mb-6">
            مستقبل الأعمال يبدأ هنا مع وكلاء كهرومغناطيسيين ذكيين يتعلمون، يتفاعلون، وينجزون مهامك بسرعة فائقة.
          </p>
          <div className="flex justify-end gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Github size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">المنتج</h4>
          <ul className="space-y-4 text-white/50">
            <li><Link to="/features" className="hover:text-white transition-colors">المميزات</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">واجهة البرمجة</a></li>
            <li><a href="#" className="hover:text-white transition-colors">الأدوات</a></li>
            <li><a href="#" className="hover:text-white transition-colors">التكاملات</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">الشركة</h4>
          <ul className="space-y-4 text-white/50">
            <li><Link to="/about" className="hover:text-white transition-colors">من نحن</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">الوظائف</a></li>
            <li><a href="#" className="hover:text-white transition-colors">المدونة</a></li>
            <li><a href="#" className="hover:text-white transition-colors">تواصل معنا</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">الدعم</h4>
          <ul className="space-y-4 text-white/50">
            <li><a href="#" className="hover:text-white transition-colors">مركز المساعدة</a></li>
            <li><a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a></li>
            <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
            <li><a href="#" className="hover:text-white transition-colors">الحماية</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-white/20 text-sm">
        جميع الحقوق محفوظة © {new Date().getFullYear()} أورا ذكاء لتقنيات المستقبل
      </div>
    </footer>
  );
};

export default Footer;
