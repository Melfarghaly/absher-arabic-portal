
const Footer = () => {
  return (
    <footer className="bg-absher-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/206f528a-08db-4ec3-a7b5-09606c6c4f40.png" 
              alt="أبشر" 
              className="h-20 mb-4" 
            />
            <p className="text-gray-300">
              نظام محاسبي متكامل لإدارة أعمالك بكفاءة وفعالية
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-absher-teal pb-2">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-absher-teal transition-colors">الرئيسية</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-absher-teal transition-colors">المميزات</a></li>
              <li><a href="#modules" className="text-gray-300 hover:text-absher-teal transition-colors">الوحدات</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-absher-teal transition-colors">لماذا أبشر؟</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-absher-teal transition-colors">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-absher-teal pb-2">الوحدات</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-absher-teal transition-colors">الحسابات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-absher-teal transition-colors">الفواتير</a></li>
              <li><a href="#" className="text-gray-300 hover:text-absher-teal transition-colors">المخازن</a></li>
              <li><a href="#" className="text-gray-300 hover:text-absher-teal transition-colors">الموظفين</a></li>
              <li><a href="#" className="text-gray-300 hover:text-absher-teal transition-colors">التقارير</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-absher-teal pb-2">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-absher-teal ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">info@absher-erp.com</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-absher-teal ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">01289173118</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-absher-teal ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">القاهرة، جمهورية مصر العربية</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} نظام أبشر المحاسبي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
