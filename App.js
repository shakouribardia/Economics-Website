const EconomicsWebsite = () => {
const [activeSection, setActiveSection] = useState(‘intro’);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// داده‌های نمودارها
const supplyDemandData = [
{ price: 10, demand: 100, supply: 20 },
{ price: 20, demand: 80, supply: 40 },
{ price: 30, demand: 60, supply: 60 },
{ price: 40, demand: 40, supply: 80 },
{ price: 50, demand: 20, supply: 100 },
];

const gdpData = [
{ year: ‘1398’, gdp: 450 },
{ year: ‘1399’, gdp: 440 },
{ year: ‘1400’, gdp: 460 },
{ year: ‘1401’, gdp: 480 },
{ year: ‘1402’, gdp: 495 },
];

const inflationData = [
{ year: ‘1398’, rate: 41 },
{ year: ‘1399’, rate: 36 },
{ year: ‘1400’, rate: 43 },
{ year: ‘1401’, rate: 48 },
{ year: ‘1402’, rate: 42 },
];

const unemploymentData = [
{ name: ‘اصطکاکی’, value: 2 },
{ name: ‘ساختاری’, value: 3 },
{ name: ‘ادواری’, value: 4 },
];

const moneyData = [
{ name: ‘پایه پولی’, value: 250 },
{ name: ‘نقدینگی’, value: 750 },
];

const regressionData = [
{ x: 20, y: 18 },
{ x: 30, y: 26 },
{ x: 40, y: 35 },
{ x: 50, y: 43 },
{ x: 60, y: 52 },
{ x: 70, y: 60 },
];

const COLORS = [’#3B82F6’, ‘#8B5CF6’, ‘#EC4899’, ‘#F59E0B’];

const sections = {
intro: {
title: ‘مقدمات اقتصاد’,
icon: BookOpen,
content: (
<div className="space-y-6">
<p className="text-lg">اقتصاد علم مطالعه چگونگی تخصیص منابع محدود برای ارضای نیازهای نامحدود است.</p>

```
      <div className="bg-blue-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">سه سوال اساسی</h3>
        <div className="space-y-2">
          <div className="bg-white p-3 rounded"><strong>چه چیزی تولید شود؟</strong> - انتخاب کالاها و خدمات</div>
          <div className="bg-white p-3 rounded"><strong>چگونه تولید شود؟</strong> - انتخاب فناوری</div>
          <div className="bg-white p-3 rounded"><strong>برای چه کسی؟</strong> - نحوه توزیع</div>
        </div>
      </div>

      <div className="bg-purple-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">عوامل تولید</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded">🌍 <strong>زمین:</strong> منابع طبیعی</div>
          <div className="bg-white p-3 rounded">👷 <strong>نیروی کار:</strong> تلاش انسانی</div>
          <div className="bg-white p-3 rounded">🏭 <strong>سرمایه:</strong> ماشین‌آلات</div>
          <div className="bg-white p-3 rounded">💡 <strong>کارآفرینی:</strong> نوآوری</div>
        </div>
      </div>

      <div className="bg-amber-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">هزینه فرصت</h3>
        <p className="mb-2">ارزش بهترین گزینه‌ای که برای انتخاب یک گزینه دیگر از دست می‌دهید.</p>
        <div className="bg-white p-3 rounded text-center font-mono">
          هزینه فرصت = ارزش بهترین جایگزین
        </div>
      </div>
    </div>
  )
},
micro: {
  title: 'اقتصاد خرد',
  icon: TrendingUp,
  content: (
    <div className="space-y-6">
      <p className="text-lg">مطالعه رفتار مصرف‌کنندگان، تولیدکنندگان و بازارها.</p>

      <div className="bg-purple-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">عرضه و تقاضا</h3>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <div className="bg-white p-3 rounded">
            <strong>قانون تقاضا:</strong>
            <div className="bg-purple-100 p-2 rounded mt-2 text-center font-mono">Qd = a - bP</div>
          </div>
          <div className="bg-white p-3 rounded">
            <strong>قانون عرضه:</strong>
            <div className="bg-purple-100 p-2 rounded mt-2 text-center font-mono">Qs = c + dP</div>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={supplyDemandData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="price" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="demand" stroke="#8B5CF6" strokeWidth={2} name="تقاضا" />
            <Line type="monotone" dataKey="supply" stroke="#3B82F6" strokeWidth={2} name="عرضه" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-indigo-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">کشش قیمتی</h3>
        <div className="bg-white p-4 rounded mb-3">
          <div className="bg-indigo-100 p-3 rounded text-center font-mono text-lg">
            Ed = (ΔQ/Q) ÷ (ΔP/P)
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded border-r-4 border-green-500">
            <strong>|Ed| {'>'} 1</strong><br/>تقاضای کشسان
          </div>
          <div className="bg-white p-3 rounded border-r-4 border-yellow-500">
            <strong>|Ed| = 1</strong><br/>کشش واحد
          </div>
          <div className="bg-white p-3 rounded border-r-4 border-red-500">
            <strong>|Ed| {'<'} 1</strong><br/>تقاضای غیرکشسان
          </div>
        </div>
      </div>

      <div className="bg-teal-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">تولید و هزینه</h3>
        <div className="space-y-2">
          <div className="bg-white p-3 rounded font-mono text-center">Q = f(L, K)</div>
          <div className="bg-white p-3 rounded font-mono text-center">TC = FC + VC</div>
          <div className="bg-white p-3 rounded font-mono text-center">MC = ΔTC / ΔQ</div>
          <div className="bg-teal-100 p-3 rounded font-mono text-center font-bold">MR = MC (حداکثر سود)</div>
        </div>
      </div>
    </div>
  )
},
macro: {
  title: 'اقتصاد کلان',
  icon: BarChart3,
  content: (
    <div className="space-y-6">
      <p className="text-lg">مطالعه عملکرد کل اقتصاد - GDP، تورم، بیکاری.</p>

      <div className="bg-green-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">تولید ناخالص داخلی (GDP)</h3>
        <div className="bg-white p-4 rounded mb-3">
          <div className="bg-green-100 p-3 rounded text-center font-mono text-lg">
            GDP = C + I + G + (X - M)
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={gdpData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="gdp" fill="#10B981" name="GDP" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-red-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">تورم</h3>
        <div className="bg-white p-4 rounded mb-3">
          <div className="bg-red-100 p-3 rounded text-center font-mono">
            نرخ تورم = [(CPI₁ - CPI₀) / CPI₀] × 100
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={inflationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="rate" stroke="#EF4444" fill="#FCA5A5" name="نرخ تورم" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-blue-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">بیکاری</h3>
        <div className="bg-white p-4 rounded mb-3">
          <div className="bg-blue-100 p-3 rounded text-center font-mono">
            نرخ بیکاری = (بیکاران / نیروی کار) × 100
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={unemploymentData} cx="50%" cy="50%" outerRadius={70} fill="#8884d8" dataKey="value" label>
              {unemploymentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
},
money: {
  title: 'پول و بانکداری',
  icon: DollarSign,
  content: (
    <div className="space-y-6">
      <p className="text-lg">پول واسطه مبادله، معیار ارزش و ذخیره ارزش است.</p>

      <div className="bg-yellow-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">کارکردهای پول</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded">📊 واسطه مبادله</div>
          <div className="bg-white p-3 rounded">💰 معیار ارزش</div>
          <div className="bg-white p-3 rounded">🏦 ذخیره ارزش</div>
          <div className="bg-white p-3 rounded">📝 واحد حسابداری</div>
        </div>
      </div>

      <div className="bg-orange-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">خلق پول</h3>
        <div className="bg-white p-4 rounded mb-3">
          <div className="bg-orange-100 p-3 rounded text-center font-mono text-lg mb-2">
            ضریب فزاینده = 1 / نسبت ذخیره
          </div>
          <p className="text-sm text-center">اگر نسبت ذخیره ۱۰٪ باشد، هر ۱ میلیون می‌تواند ۱۰ میلیون پول خلق کند!</p>
        </div>
        
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={moneyData} cx="50%" cy="50%" outerRadius={70} fill="#8884d8" dataKey="value" label>
              {moneyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-red-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">ابزارهای سیاست پولی</h3>
        <div className="space-y-2">
          <div className="bg-white p-3 rounded">📈 نرخ بهره</div>
          <div className="bg-white p-3 rounded">💵 عملیات بازار باز</div>
          <div className="bg-white p-3 rounded">🏛️ نسبت ذخیره قانونی</div>
          <div className="bg-white p-3 rounded">💳 نرخ تنزیل</div>
        </div>
      </div>
    </div>
  )
},
econometrics: {
  title: 'اقتصادسنجی',
  icon: BarChart3,
  content: (
    <div className="space-y-6">
      <p className="text-lg">استفاده از روش‌های آماری برای آزمون نظریه‌های اقتصادی.</p>

      <div className="bg-blue-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">مدل رگرسیون خطی</h3>
        <div className="bg-white p-4 rounded mb-3">
          <div className="bg-blue-100 p-3 rounded text-center font-mono text-xl">
            Y = β₀ + β₁X + ε
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={250}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" type="number" />
            <YAxis dataKey="y" type="number" />
            <Tooltip />
            <Scatter data={regressionData} fill="#3B82F6" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-indigo-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">روش حداقل مربعات (OLS)</h3>
        <div className="space-y-2">
          <div className="bg-white p-3 rounded font-mono text-center">
            β̂₁ = Cov(X,Y) / Var(X)
          </div>
          <div className="bg-white p-3 rounded font-mono text-center">
            β̂₀ = Ȳ - β̂₁X̄
          </div>
        </div>
      </div>

      <div className="bg-rose-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">ارزیابی مدل</h3>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded">
            <strong>R²</strong><br/>
            <div className="font-mono text-sm">0 تا 1</div>
            قدرت توضیح
          </div>
          <div className="bg-white p-3 rounded">
            <strong>آماره t</strong><br/>
            <div className="font-mono text-sm">|t| {'>'} 2</div>
            معناداری
          </div>
          <div className="bg-white p-3 rounded">
            <strong>آماره F</strong><br/>
            <div className="font-mono text-sm">p {'<'} 0.05</div>
            کل مدل
          </div>
        </div>
      </div>

      <div className="bg-teal-50 p-5 rounded-lg">
        <h3 className="font-bold text-xl mb-3">روش‌های پیشرفته</h3>
        <div className="grid md:grid-cols-2 gap-2">
          <div className="bg-white p-2 rounded text-sm">📊 سری‌های زمانی (ARIMA)</div>
          <div className="bg-white p-2 rounded text-sm">📈 داده‌های تابلویی (Panel)</div>
          <div className="bg-white p-2 rounded text-sm">🔄 متغیرهای ابزاری (IV)</div>
          <div className="bg-white p-2 rounded text-sm">🤖 یادگیری ماشین</div>
        </div>
      </div>
    </div>
  )
}
```

};

const ActiveIcon = sections[activeSection].icon;

return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50" dir="rtl">
<header className="bg-gradient-to-l from-blue-600 to-purple-600 text-white shadow-lg">
<div className="container mx-auto px-4 py-6">
<div className="flex justify-between items-center">
<div>
<h1 className="text-3xl md:text-4xl font-bold mb-2">آموزش جامع اقتصاد</h1>
<p className="text-blue-100 text-sm md:text-base">خرد • کلان • پول و بانکداری • اقتصادسنجی</p>
</div>
<button
className=“md:hidden text-white”
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
</button>
</div>
</div>
</header>

```
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row gap-6">
      <aside className={`md:w-64 ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">فهرست مطالب</h2>
          <nav className="space-y-2">
            {Object.entries(sections).map(([key, section]) => {
              const Icon = section.icon;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection(key);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                    activeSection === key
                      ? 'bg-gradient-to-l from-blue-500 to-purple-500 text-white shadow-md'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium text-sm">{section.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      <main className="flex-1">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-200">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg">
              <ActiveIcon size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              {sections[activeSection].title}
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {sections[activeSection].content}
          </div>
        </div>
      </main>
    </div>
  </div>

  <footer className="bg-gray-800 text-white mt-16 py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-gray-300 mb-2">
        وبسایت آموزشی اقتصاد با فرمول‌ها و نمودارهای تعاملی
      </p>
      <p className="text-gray-400 text-sm">
        برای یادگیری عمیق‌تر، مطالعه منابع تخصصی توصیه می‌شود
      </p>
    </div>
  </footer>
</div>
```

);
};

export default EconomicsWebsite;
