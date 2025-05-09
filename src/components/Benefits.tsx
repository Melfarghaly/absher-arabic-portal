
const Benefits = () => {
  const benefits = [
    { number: '1', title: 'تدريب الموظفين', description: 'برامج تدريبية شاملة لضمان استخدام النظام بأفضل شكل ممكن' },
    { number: '2', title: 'دعم فني متميز', description: 'فريق دعم فني متخصص ومتاح على مدار الساعة لحل كافة المشكلات' },
    { number: '3', title: 'استشارات محاسبية', description: 'فريق من الخبراء لمساعدتك في الاستفادة القصوى من النظام' },
    { number: '4', title: 'تحديثات مستمرة', description: 'تحديثات منتظمة لمواكبة التغييرات في الأنظمة المحاسبية' },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-absher-dark mb-4">لماذا <span className="text-absher-teal">نظام أبشر</span>؟</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اختيار نظام أبشر المحاسبي يعني اختيار الجودة والتميز في إدارة أعمالك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-absher-beige/20 rounded-lg p-8">
            <img 
              src="/lovable-uploads/edad8798-27d2-434b-a051-322e6fe71e84.png" 
              alt="مزايا نظام أبشر المحاسبي" 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div key={benefit.number} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-absher-teal rounded-full flex items-center justify-center text-white font-bold text-xl ml-4">
                  {benefit.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-absher-dark mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
