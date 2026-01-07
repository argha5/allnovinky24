// ==================== Newspaper Data ====================
const newspapers = [
    // বাংলা (Bangladesh) - Top dailies ordered by popularity & circulation
    { id: 'prothom-alo', name: 'Prothom Alo', banglaName: 'প্রথম আলো', url: 'https://www.prothomalo.com/', category: 'bangladesh', isPopular: true },
    { id: 'bangladesh-protidin', name: 'Bangladesh Pratidin', banglaName: 'বাংলাদেশ প্রতিদিন', url: 'https://www.bd-pratidin.com/', category: 'bangladesh', isPopular: true },
    { id: 'jugantor', name: 'Jugantor', banglaName: 'যুগান্তর', url: 'https://www.jugantor.com/', category: 'bangladesh', isPopular: true },
    { id: 'kaler-kontho', name: 'Kaler Kantho', banglaName: 'কালের কণ্ঠ', url: 'https://www.kalerkantho.com/', category: 'bangladesh', isPopular: true },
    { id: 'somokal', name: 'Samakal', banglaName: 'সমকাল', url: 'https://samakal.com/', category: 'bangladesh', isPopular: true },
    { id: 'ettefaq', name: 'Ittefaq', banglaName: 'ইত্তেফাক', url: 'https://www.ittefaq.com.bd/', category: 'bangladesh', isPopular: true },
    { id: 'manabjamin', name: 'Manab Zamin', banglaName: 'মানবজমিন', url: 'https://mzamin.com/', category: 'bangladesh', isPopular: true },
    { id: 'bhorer-kagoj', name: 'Bhorer Kagoj', banglaName: 'ভোরের কাগজ', url: 'https://www.bhorerkagoj.com/', category: 'bangladesh', isPopular: true },
    { id: 'jonokontho', name: 'Janakantha', banglaName: 'জনকণ্ঠ', url: 'https://www.jonokontho.com/', category: 'bangladesh', isPopular: true },
    { id: 'noyadigonta', name: 'Naya Diganta', banglaName: 'নয়া দিগন্ত', url: 'https://www.dailynayadiganta.com/', category: 'bangladesh', isPopular: true },
    { id: 'inkilab', name: 'Daily Inqilab', banglaName: 'দৈনিক ইনকিলাব', url: 'https://dailyinqilab.com/', category: 'bangladesh', isPopular: true },
    { id: 'kalbela', name: 'Kalbela', banglaName: 'কালবেলা', url: 'https://www.kalbela.com/', category: 'bangladesh', isPopular: false },
    { id: 'ajker-potrika', name: 'Ajker Patrika', banglaName: 'আজকের পত্রিকা', url: 'https://www.ajkerpatrika.com/', category: 'bangladesh', isPopular: false },
    { id: 'jay-jay-din', name: 'Jaijaidin', banglaName: 'যায়যায়দিন', url: 'https://www.jaijaidinbd.com/', category: 'bangladesh', isPopular: false },
    { id: 'amader-somoy', name: 'Amader Somoy', banglaName: 'আমাদের সময়', url: 'https://www.amadershomoy.com/', category: 'bangladesh', isPopular: false },
    { id: 'doinik-bangla', name: 'Dainik Bangla', banglaName: 'দৈনিক বাংলা', url: 'https://www.doinikbangla.com/', category: 'bangladesh', isPopular: false },
    { id: 'protidiner-bangladesh', name: 'Protidiner Bangladesh', banglaName: 'প্রতিদিনের বাংলাদেশ', url: 'https://www.protidinerbangladesh.com/', category: 'bangladesh', isPopular: false },
    { id: 'sangram', name: 'Sangram', banglaName: 'সংগ্রাম', url: 'https://www.dainik-sangram.com/', category: 'bangladesh', isPopular: false },
    { id: 'destiny', name: 'Destiny', banglaName: 'ডেসটিনি', url: 'https://www.dailydestiny.com/', category: 'bangladesh', isPopular: false },
    { id: 'banglar-dak', name: 'Banglar Dak', banglaName: 'বাংলার ডাক', url: 'https://www.banglardak.com/', category: 'bangladesh', isPopular: false },

    // ইংরেজি (English)
    { id: 'the-daily-star', name: 'The Daily Star', banglaName: 'দ্য ডেইলি স্টার', url: 'https://www.thedailystar.net/', category: 'english', isPopular: true },
    { id: 'dhaka-tribune-en', name: 'Dhaka Tribune', banglaName: 'ঢাকা ট্রিবিউন', url: 'https://www.dhakatribune.com/', category: 'english', isPopular: true },
    { id: 'daily-sun', name: 'Daily Sun', banglaName: 'ডেইলি সান', url: 'https://www.daily-sun.com/', category: 'english', isPopular: true },
    { id: 'new-age', name: 'New Age', banglaName: 'নিউ এজ', url: 'https://www.newagebd.net/', category: 'english', isPopular: true },
    { id: 'prothom-alo-english', name: 'Prothom Alo English', banglaName: 'প্রথম আলো ইংরেজি', url: 'https://en.prothomalo.com/', category: 'english', isPopular: true },
    { id: 'daily-asian-age', name: 'Daily Asian Age', banglaName: 'ডেইলি এশিয়ান এজ', url: 'https://dailyasianage.com/', category: 'english', isPopular: false },
    { id: 'daily-observer', name: 'Daily Observer', banglaName: 'ডেইলি অবজারভার', url: 'https://www.observerbd.com/', category: 'english', isPopular: false },
    { id: 'bangladesh-post', name: 'Bangladesh Post', banglaName: 'বাংলাদেশ পোস্ট', url: 'https://www.bangladeshpost.net/', category: 'english', isPopular: false },
    { id: 'independent', name: 'The Independent', banglaName: 'দ্য ইন্ডিপেনডেন্ট', url: 'https://www.theindependentbd.com/', category: 'english', isPopular: false },
    { id: 'financial-express', name: 'The Financial Express', banglaName: 'দ্য ফাইন্যান্সিয়াল এক্সপ্রেস', url: 'https://thefinancialexpress.com.bd/', category: 'english', isPopular: false },
    { id: 'business-standard', name: 'The Business Standard', banglaName: 'দ্য বিজনেস স্ট্যান্ডার্ড', url: 'https://www.tbsnews.net/', category: 'english', isPopular: false },
    { id: 'united-news-bd', name: 'UNB News', banglaName: 'ইউএনবি', url: 'https://unb.com.bd/', category: 'english', isPopular: false },
    { id: 'bss-news', name: 'BSS News', banglaName: 'বিএসএস', url: 'https://www.bssnews.net/', category: 'english', isPopular: false },

    // আঞ্চলিক (Regional) - District & divisional newspapers
    { id: 'doinik-azadi', name: 'Dainik Azadi', banglaName: 'দৈনিক আজাদী', url: 'https://dainikazadi.net/', category: 'regional', isPopular: false },
    { id: 'doinik-purbokon', name: 'Dainik Purbokone', banglaName: 'দৈনিক পূর্বকোণ', url: 'https://dainikpurbokone.net/', category: 'regional', isPopular: false },
    { id: 'doinik-purbanchol', name: 'Dainik Purbanchal', banglaName: 'দৈনিক পূর্বাঞ্চল', url: 'https://purbanchal.com/', category: 'regional', isPopular: false },
    { id: 'chattagram-news', name: 'Chattagram News', banglaName: 'চট্টগ্রাম নিউজ', url: 'https://ctgnews.com/', category: 'regional', isPopular: false },
    { id: 'doinik-coxbazar', name: "Dainik Cox's Bazar", banglaName: 'দৈনিক কক্সবাজার', url: 'https://www.dainikcoxsbazar.com/', category: 'regional', isPopular: false },
    { id: 'doinik-shylet', name: 'Dainik Sylhet', banglaName: 'দৈনিক সিলেট', url: 'https://dainiksylhet.com/', category: 'regional', isPopular: false },
    { id: 'surma-times', name: 'Surma Times', banglaName: 'সুরমা টাইমস', url: 'https://surmatimes.com/', category: 'regional', isPopular: false },
    { id: 'doinik-khoyai', name: 'Dainik Khowai', banglaName: 'দৈনিক খোয়াই', url: 'https://dailykhowai.com/', category: 'regional', isPopular: false },
    { id: 'sylhet-view', name: 'Sylhet View', banglaName: 'সিলেট ভিউ', url: 'https://sylhetview.com/', category: 'regional', isPopular: false },
    { id: 'rajsahi-news-24', name: 'Rajshahi News 24', banglaName: 'রাজশাহী নিউজ ২৪', url: 'https://rajshahinews24.com/', category: 'regional', isPopular: false },
    { id: 'doinik-korotowa', name: 'Dainik Karatoa', banglaName: 'দৈনিক করতোয়া', url: 'https://dailykaratoa.com/', category: 'regional', isPopular: false },
    { id: 'bogura-sangbad', name: 'Bogura Sangbad', banglaName: 'বগুড়া সংবাদ', url: 'https://bograsangbad.com/', category: 'regional', isPopular: false },
    { id: 'rajsahi-somoy', name: 'Rajshahi Somoy', banglaName: 'রাজশাহী সময়', url: 'https://www.rajshahirsomoy.com/', category: 'regional', isPopular: false },
    { id: 'doinik-khulnachal', name: 'Dainik Khulnanchal', banglaName: 'দৈনিক খুলনাঞ্চল', url: 'https://khulnanchal.com/', category: 'regional', isPopular: false },
    { id: 'doinik-gramer-kagoj', name: 'Dainik Gramer Kagoj', banglaName: 'দৈনিক গ্রামের কাগজ', url: 'https://gramerkagoj.com/', category: 'regional', isPopular: false },
    { id: 'doinik-amader-cumilla', name: 'Dainik Amader Comilla', banglaName: 'দৈনিক আমাদের কুমিল্লা', url: 'https://www.dailyamadercomilla.com/', category: 'regional', isPopular: false },
    { id: 'doinik-ajker-jamalpur', name: 'Dainik Ajker Jamalpur', banglaName: 'দৈনিক আজকের জামালপুর', url: 'https://ajkerjamalpur.com/', category: 'regional', isPopular: false },
    { id: 'amar-noyakhali', name: 'Amar Noakhali', banglaName: 'আমার নোয়াখালী', url: 'https://amarnoakhali.com/', category: 'regional', isPopular: false },
    { id: 'lakkhipur-24', name: 'Lakshmipur 24', banglaName: 'লক্ষ্মীপুর ২৪', url: 'https://lakshmipur24.com/', category: 'regional', isPopular: false },
    { id: 'chadpur-times', name: 'Chandpur Times', banglaName: 'চাঁদপুর টাইমস', url: 'https://chandpurtimes.com/', category: 'regional', isPopular: false },
    { id: 'doinik-rangpur', name: 'Dainik Rangpur', banglaName: 'দৈনিক রংপুর', url: 'https://dainikrangpur.com/', category: 'regional', isPopular: false },
    { id: 'doinik-dinajpur', name: 'Dainik Dinajpur', banglaName: 'দৈনিক দিনাজপুর', url: 'https://dainikdinajpur.com/', category: 'regional', isPopular: false },
    { id: 'barisal-tribune', name: 'Barisal Tribune', banglaName: 'বরিশাল ট্রিবিউন', url: 'https://barisaltribune.com/', category: 'regional', isPopular: false },
    { id: 'mymensingh-protidin', name: 'Mymensingh Pratidin', banglaName: 'ময়মনসিংহ প্রতিদিন', url: 'https://mymensinghpratidin.com/', category: 'regional', isPopular: false },

    // অনলাইন (Online)
    { id: 'bdnews24', name: 'BDNews24', banglaName: 'বিডিনিউজ২৪', url: 'https://bangla.bdnews24.com/', category: 'online', isPopular: true },
    { id: 'bangla-news-24', name: 'Banglanews24', banglaName: 'বাংলানিউজ২৪', url: 'https://www.banglanews24.com/', category: 'online', isPopular: true },
    { id: 'jagonews24', name: 'JagoNews24', banglaName: 'জাগোনিউজ২৪', url: 'https://www.jagonews24.com/', category: 'online', isPopular: true },
    { id: 'risingbd', name: 'Risingbd', banglaName: 'রাইজিংবিডি', url: 'https://www.risingbd.com/', category: 'online', isPopular: true },
    { id: 'bangla-tribune', name: 'Bangla Tribune', banglaName: 'বাংলা ট্রিবিউন', url: 'https://www.banglatribune.com/', category: 'online', isPopular: true },
    { id: 'dhaka-post', name: 'Dhaka Post', banglaName: 'ঢাকা পোস্ট', url: 'https://www.dhakapost.com/', category: 'online', isPopular: true },
    { id: 'bd24live', name: 'BD 24 Live', banglaName: 'বিডি ২৪ লাইভ', url: 'https://www.bd24live.com/', category: 'online', isPopular: false },
    { id: 'sarabangla', name: 'Sarabangla', banglaName: 'সারাবাংলা', url: 'https://sarabangla.net/', category: 'online', isPopular: false },
    { id: 'priyo', name: 'Priyo.com', banglaName: 'প্রিয়.কম', url: 'https://www.priyo.com/', category: 'online', isPopular: false },
    { id: 'protikhon', name: 'Protikhon', banglaName: 'প্রতিক্ষণ', url: 'https://www.protikhon.com/', category: 'online', isPopular: false },
    { id: 'barta-24', name: 'Barta24', banglaName: 'বার্তা২৪', url: 'https://www.barta24.com/', category: 'online', isPopular: false },
    { id: 'dhaka-times', name: 'Dhaka Times', banglaName: 'ঢাকা টাইমস', url: 'https://www.dhakatimes24.com/', category: 'online', isPopular: false },
    { id: 'news-bangla-24', name: 'News Bangla 24', banglaName: 'নিউজ বাংলা ২৪', url: 'https://www.newsbangla24.com/', category: 'online', isPopular: false },
    { id: 'somoyer-konthosor', name: 'Somoyer Konthosor', banglaName: 'সময়ের কণ্ঠস্বর', url: 'https://www.somoyerkonthosor.com/', category: 'online', isPopular: false },
    { id: 'desh-rupantor-online', name: 'Desh Rupantor Online', banglaName: 'দেশ রূপান্তর অনলাইন', url: 'https://deshrupantor.com/', category: 'online', isPopular: false },
    { id: 'barta-bangla', name: 'Barta Bangla', banglaName: 'বার্তা বাংলা', url: 'https://bartabangla.com/', category: 'online', isPopular: false },

    // টিভি চ্যানেল (TV Channels)
    { id: 'somoy-tv', name: 'Somoy TV', banglaName: 'সময় টিভি', url: 'https://www.somoynews.tv/', category: 'tv', isPopular: true },
    { id: 'jamuna-tv', name: 'Jamuna TV', banglaName: 'যমুনা টিভি', url: 'https://www.jamuna.tv/', category: 'tv', isPopular: true },
    { id: 'ntv', name: 'NTV', banglaName: 'এনটিভি', url: 'https://www.ntvbd.com/', category: 'tv', isPopular: true },
    { id: 'channel-24', name: 'Channel 24', banglaName: 'চ্যানেল ২৪', url: 'https://www.channel24bd.tv/', category: 'tv', isPopular: true },
    { id: 'atn-news', name: 'ATN News', banglaName: 'এটিএন নিউজ', url: 'https://www.atnnewstv.com/', category: 'tv', isPopular: true },
    { id: 'independent-tv', name: 'Independent TV', banglaName: 'ইন্ডিপেন্ডেন্ট টিভি', url: 'https://www.independenttv.com/', category: 'tv', isPopular: true },
    { id: 'ekattor-tv', name: 'Ekattor TV', banglaName: 'একাত্তর টিভি', url: 'https://ekattor.tv/', category: 'tv', isPopular: true },
    { id: 'dbc-news', name: 'DBC News', banglaName: 'ডিবিসি নিউজ', url: 'https://www.dbcnews.tv/', category: 'tv', isPopular: true },
    { id: 'news24', name: 'News24', banglaName: 'নিউজ২৪', url: 'https://www.news24bd.tv/', category: 'tv', isPopular: true },
    { id: 'channel-i', name: 'Channel i', banglaName: 'চ্যানেল আই', url: 'https://www.channelionline.com/', category: 'tv', isPopular: true },
    { id: 'atn-bangla', name: 'ATN Bangla', banglaName: 'এটিএন বাংলা', url: 'https://www.atnbangla.tv/', category: 'tv', isPopular: false },
    { id: 'rtv', name: 'RTV', banglaName: 'আরটিভি', url: 'https://www.rtvonline.com/', category: 'tv', isPopular: false },
    { id: 'boishakhi-tv', name: 'Boishakhi TV', banglaName: 'বৈশাখী টিভি', url: 'https://www.boishakhionline.com/', category: 'tv', isPopular: false },
    { id: 'maasranga-tv', name: 'Maasranga TV', banglaName: 'মাসরাঙ্গা টিভি', url: 'https://www.maasranga.tv/', category: 'tv', isPopular: false },
    { id: 'sa-tv', name: 'SA TV', banglaName: 'এসএ টিভি', url: 'https://www.satv.tv/', category: 'tv', isPopular: false },
    { id: 'asian-tv', name: 'Asian TV', banglaName: 'এশিয়ান টিভি', url: 'https://asiantv.com.bd/', category: 'tv', isPopular: false },
    { id: 'bangla-vision', name: 'Bangla Vision', banglaName: 'বাংলা ভিশন', url: 'https://www.bvnews24.com/', category: 'tv', isPopular: false },
    { id: 'my-tv', name: 'MY TV', banglaName: 'মাইটিভি', url: 'https://www.mytv.com.bd/', category: 'tv', isPopular: false },
    { id: 'gazi-tv', name: 'Gazi TV', banglaName: 'গাজী টিভি', url: 'https://www.gazitv.com/', category: 'tv', isPopular: false },
    { id: 'mohona-tv', name: 'Mohona TV', banglaName: 'মহানা টিভি', url: 'https://mohonatv.com/', category: 'tv', isPopular: false },

    // রেডিও (Radio)
    { id: 'radio-today', name: 'Radio Today', banglaName: 'রেডিও টুডে', url: 'https://www.radiotoday.fm/', category: 'radio', isPopular: true },
    { id: 'abc-radio', name: 'ABC Radio', banglaName: 'এবিসি রেডিও', url: 'https://www.abcradio.fm/', category: 'radio', isPopular: true },
    { id: 'radio-foorti', name: 'Radio Foorti', banglaName: 'রেডিও ফুর্তি', url: 'https://www.radiofoorti.fm/', category: 'radio', isPopular: true },
    { id: 'radio-aamar', name: 'Radio Aamar', banglaName: 'রেডিও আমার', url: 'https://www.radioaamar.fm/', category: 'radio', isPopular: false },
    { id: 'jago-fm', name: 'Jago FM', banglaName: 'জাগো এফএম', url: 'https://www.jago-fm.com/', category: 'radio', isPopular: false },
    { id: 'dhoni-radio', name: 'Dhoni Radio', banglaName: 'ধ্বনি রেডিও', url: 'https://www.dhaka.fm/', category: 'radio', isPopular: false },
    { id: 'peoples-radio', name: 'Peoples Radio', banglaName: 'পিপলস রেডিও', url: 'https://www.peoplesradio91.fm/', category: 'radio', isPopular: false },
    { id: 'radio-capital', name: 'Radio Capital', banglaName: 'রেডিও ক্যাপিটাল', url: 'https://www.radiocapital.fm/', category: 'radio', isPopular: false },

    // ব্যবসা/অর্থনীতি (Business/Finance)
    { id: 'artho-suchak', name: 'Arthosuchak', banglaName: 'অর্থসূচক', url: 'https://www.arthosuchak.com/', category: 'business', isPopular: true },
    { id: 'share-biz', name: 'Share Biz', banglaName: 'শেয়ারবিজ', url: 'https://www.sharebiz.net/', category: 'business', isPopular: true },
    { id: 'amader-orthoneeti', name: 'Amader Orthoneeti', banglaName: 'আমাদের অর্থনীতি', url: 'https://www.amarorthoneeti.com/', category: 'business', isPopular: false },
    { id: 'dse-news', name: 'DSE News', banglaName: 'ডিএসই নিউজ', url: 'https://www.dse.com.bd/', category: 'business', isPopular: false },
    { id: 'business-insider-bd', name: 'Business Insider Bangladesh', banglaName: 'বিজনেস ইনসাইডার বাংলাদেশ', url: 'https://www.businessinsiderbd.com/', category: 'business', isPopular: false },
    { id: 'stock-bangladesh', name: 'Stock Bangladesh', banglaName: 'স্টক বাংলাদেশ', url: 'https://stockbangladesh.com/', category: 'business', isPopular: false },

    // ম্যাগাজিন (Magazines)
    { id: 'saptahik-2000', name: 'Saptahik 2000', banglaName: 'সাপ্তাহিক ২০০০', url: 'https://www.saptahik2000.com/', category: 'magazine', isPopular: false },
    { id: 'shaptahik-bichitra', name: 'Saptahik Bichitra', banglaName: 'সাপ্তাহিক বিচিত্রা', url: 'https://bichitra.com.bd/', category: 'magazine', isPopular: false },
    { id: 'robbar', name: 'Robbar', banglaName: 'রোববার', url: 'https://www.robbar.com/', category: 'magazine', isPopular: false },
    { id: 'anandalok', name: 'Anandalok', banglaName: 'আনন্দালোক', url: 'https://www.anandalokbd.com/', category: 'magazine', isPopular: false },
    { id: 'kishor-alo', name: 'Kishor Alo', banglaName: 'কিশোরআলো', url: 'https://www.kishoralo.com/', category: 'magazine', isPopular: false },
    { id: 'click-ittefaq', name: 'Click Ittefaq', banglaName: 'ক্লিক ইত্তেফাক', url: 'https://www.clickittefaq.com/', category: 'magazine', isPopular: false },

    // আন্তর্জাতিক (International)
    { id: 'bbc-bangla', name: 'BBC Bangla', banglaName: 'বিবিসি বাংলা', url: 'https://www.bbc.com/bengali', category: 'international', isPopular: true },
    { id: 'dw-bengali', name: 'DW Bengali', banglaName: 'ডয়চে ভেলে বাংলা', url: 'https://www.dw.com/bn/', category: 'international', isPopular: true },
    { id: 'voa-bangla', name: 'VOA Bangla', banglaName: 'ভিওএ বাংলা', url: 'https://www.voabengali.com/', category: 'international', isPopular: true },
    { id: 'anandabazar', name: 'Anandabazar Patrika', banglaName: 'আনন্দবাজার পত্রিকা', url: 'https://www.anandabazar.com/', category: 'international', isPopular: true },
    { id: 'ei-samay', name: 'Ei Samay', banglaName: 'এই সময়', url: 'https://eisamay.com/', category: 'international', isPopular: false },
    { id: 'zee-24-ghanta', name: 'Zee 24 Ghanta', banglaName: 'জি ২৪ ঘণ্টা', url: 'https://zeenews.india.com/bengali', category: 'international', isPopular: false },
    { id: 'bartaman', name: 'Bartaman', banglaName: 'বর্তমান', url: 'https://www.bartamanpatrika.com/', category: 'international', isPopular: false },
    { id: 'aajkaal', name: 'Aajkaal', banglaName: 'আজকাল', url: 'https://www.aajkaal.in/', category: 'international', isPopular: false },
    { id: 'jugashankha', name: 'Jugashankha', banglaName: 'যুগশঙ্খ', url: 'https://www.jugasankha.com/', category: 'international', isPopular: false },
    { id: 'sangbad-pratidin', name: 'Sangbad Pratidin', banglaName: 'সংবাদ প্রতিদিন', url: 'https://www.sangbadpratidin.in/', category: 'international', isPopular: false },
    { id: 'al-jazeera-bengali', name: 'Al Jazeera Bengali', banglaName: 'আল জাজিরা বাংলা', url: 'https://www.aljazeera.com/bengali/', category: 'international', isPopular: false },
];

// ==================== State Management ====================
let currentCategory = 'all';
let currentScreen = 'homeScreen';
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
let recentlyVisited = JSON.parse(localStorage.getItem('recentlyVisited')) || [];
let searchQuery = '';

// ==================== Utility Functions ====================
function getInitials(name) {
    return name.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
}

function getColorFromString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 55%)`;
}

function isBookmarked(newspaperId) {
    return bookmarks.includes(newspaperId);
}

function toggleBookmark(newspaperId) {
    if (isBookmarked(newspaperId)) {
        bookmarks = bookmarks.filter(id => id !== newspaperId);
    } else {
        bookmarks.push(newspaperId);
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderCurrentScreen();
}

function addToRecentlyVisited(newspaperId) {
    recentlyVisited = recentlyVisited.filter(id => id !== newspaperId);
    recentlyVisited.unshift(newspaperId);
    recentlyVisited = recentlyVisited.slice(0, 10); // Keep only last 10
    localStorage.setItem('recentlyVisited', JSON.stringify(recentlyVisited));
}

function openNewspaper(newspaper) {
    addToRecentlyVisited(newspaper.id);
    window.open(newspaper.url, '_blank');
}

// ==================== Rendering Functions ====================
function createNewspaperCard(newspaper) {
    const card = document.createElement('div');
    card.className = 'newspaper-card';

    const initials = getInitials(newspaper.name);
    const color = getColorFromString(newspaper.name);
    const bookmarked = isBookmarked(newspaper.id);

    card.innerHTML = `
        <div class="newspaper-header">
            <div class="newspaper-logo" style="background: ${color}">
                ${initials}
            </div>
            <div class="newspaper-info">
                <div class="newspaper-name">${newspaper.name}</div>
                <div class="newspaper-bangla-name">${newspaper.banglaName}</div>
            </div>
            <button class="bookmark-btn ${bookmarked ? 'active' : ''}" data-id="${newspaper.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${bookmarked ? 'white' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
            </button>
        </div>
        <div class="newspaper-category">${getCategoryLabel(newspaper.category)}</div>
    `;

    // Click on card to open newspaper
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.bookmark-btn')) {
            openNewspaper(newspaper);
        }
    });

    // Bookmark button
    const bookmarkBtn = card.querySelector('.bookmark-btn');
    bookmarkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBookmark(newspaper.id);
    });

    return card;
}

function getCategoryLabel(category) {
    const labels = {
        'bangladesh': 'বাংলা',
        'english': 'ইংরেজি',
        'regional': 'আঞ্চলিক',
        'online': 'অনলাইন',
        'tv': 'টিভি চ্যানেল',
        'radio': 'রেডিও',
        'business': 'ব্যবসা',
        'magazine': 'ম্যাগাজিন',
        'international': 'আন্তর্জাতিক'
    };
    return labels[category] || category;
}

function filterNewspapers(category, query = '') {
    let filtered = newspapers;

    if (category !== 'all') {
        filtered = filtered.filter(n => n.category === category);
    }

    if (query) {
        const lowerQuery = query.toLowerCase();
        filtered = filtered.filter(n =>
            n.name.toLowerCase().includes(lowerQuery) ||
            n.banglaName.includes(query)
        );
    }

    return filtered;
}

function renderNewspapers(container, newspaperList) {
    container.innerHTML = '';
    newspaperList.forEach(newspaper => {
        container.appendChild(createNewspaperCard(newspaper));
    });
}

function renderHomeScreen() {
    const grid = document.getElementById('newspapersGrid');
    const filtered = filterNewspapers(currentCategory);
    renderNewspapers(grid, filtered);
}

function renderSearchScreen() {
    const grid = document.getElementById('searchResults');
    const filtered = filterNewspapers('all', searchQuery);
    renderNewspapers(grid, filtered);
}

function renderBookmarksScreen() {
    const grid = document.getElementById('bookmarksGrid');
    const emptyState = document.getElementById('emptyBookmarks');

    if (bookmarks.length === 0) {
        grid.style.display = 'none';
        emptyState.classList.add('show');
    } else {
        grid.style.display = 'grid';
        emptyState.classList.remove('show');
        const bookmarkedNewspapers = newspapers.filter(n => bookmarks.includes(n.id));
        renderNewspapers(grid, bookmarkedNewspapers);
    }
}

function renderRecentlyVisited() {
    const grid = document.getElementById('recentlyVisitedGrid');
    const emptyState = document.getElementById('emptyRecent');

    if (recentlyVisited.length === 0) {
        grid.style.display = 'none';
        emptyState.classList.add('show');
    } else {
        grid.style.display = 'grid';
        emptyState.classList.remove('show');
        const recentNewspapers = recentlyVisited
            .map(id => newspapers.find(n => n.id === id))
            .filter(n => n !== undefined);
        renderNewspapers(grid, recentNewspapers);
    }
}

function renderCurrentScreen() {
    switch (currentScreen) {
        case 'homeScreen':
            renderHomeScreen();
            break;
        case 'searchScreen':
            renderSearchScreen();
            break;
        case 'bookmarksScreen':
            renderBookmarksScreen();
            break;
        case 'additionalScreen':
            renderRecentlyVisited();
            break;
    }
}

// ==================== Navigation ====================
function switchScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show selected screen
    document.getElementById(screenId).classList.add('active');

    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-screen="${screenId}"]`).classList.add('active');

    currentScreen = screenId;
    renderCurrentScreen();
}

// ==================== Theme Management ====================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ==================== Event Listeners ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderHomeScreen();
        });
    });

    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            switchScreen(item.dataset.screen);
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderSearchScreen();
    });

    // Initial render
    renderCurrentScreen();
});
