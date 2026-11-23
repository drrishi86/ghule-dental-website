/* =========================================================
   Ghule Dental Care & Root Canal Centre
   Horizontal Tabs + Marathi (मराठी) Toggle + WhatsApp Modal
   ========================================================= */

const WHATSAPP_NUMBER = "919067801333";
const TAB_ORDER = [
  "home",
  "doctors",
  "philosophy",
  "treatments",
  "equipment",
  "gallery",
  "reviews",
  "contact"
];

const TAB_LABELS_EN = {
  home: "Home",
  doctors: "Our Doctors",
  philosophy: "Philosophy & Why Us",
  treatments: "Treatments",
  equipment: "Equipment",
  gallery: "Gallery",
  reviews: "Reviews",
  contact: "Contact"
};

let currentLang = "en";
let currentTab = "home";
const enCache = { text: {}, html: {}, placeholder: {} };

const mrTranslations = {
  brand_name: "घुले डेंटल केअर",
  brand_sub: "अँड रूट कॅनाल सेंटर",
  tab_home: "मुख्यपृष्ठ",
  tab_doctors: "आमचे डॉक्टर्स",
  tab_philosophy: "कार्यपद्धती व वेगळेपण",
  tab_treatments: "उपचार",
  tab_equipment: "आधुनिक उपकरणे",
  tab_gallery: "गॅलरी",
  tab_reviews: "रुग्णांचे अनुभव",
  tab_contact: "संपर्क",
  btn_book: "अपॉइंटमेंट घ्या",
  btn_book_full: "अपॉइंटमेंट बुक करा",
  btn_book_wa: "WhatsApp वर बुक करा",
  btn_call: "कॉल करा 90678 01333",

  hero_pill: "✦ बीड जिल्हा आणि लगतच्या जिल्ह्यांतील पहिले व एकमेव डेंटल ऑपरेटिंग मायक्रोस्कोप क्लिनिक",
  hero_title: "मायक्रोस्कोप-आधारित रूट कॅनाल आणि <em>कौटुंबिक दंतोपचार</em>",
  hero_tagline: "प्रामाणिक सेवा  •  अचूक दंतोपचार  •  दीर्घकाळ टिकणारी गुणवत्ता",
  hero_desc: "अंबाजोगाई येथील घुले डेंटल केअर अँड रूट कॅनाल सेंटरमध्ये आपले स्वागत आहे. आम्ही संपूर्ण लक्ष देऊन तुमची समस्या शांतपणे ऐकतो, उपचाराचे विचारपूर्वक नियोजन करतो आणि मायक्रोस्कोपिक अचूकता व संपूर्ण पारदर्शकतेसह प्रत्येक उपचार करतो.",
  hero_card_label: "अचूक रूट कॅनाल आणि आधुनिक दंतोपचार",
  hero_card_title: "पहिले व एकमेव डेंटल ऑपरेटिंग मायक्रोस्कोप",
  hero_li_1: "सिंगल सिटिंग रूट कॅनाल ट्रीटमेंट आणि जुने रूट कॅनाल पुन्हा अचूकपणे करणे (Re-RCT)",
  hero_li_2: "लहान मुले व घाबरणाऱ्या रुग्णांसाठी सुईविरहित, जवळपास वेदनारहित भूल (Needle-Free Anaesthesia)",
  hero_li_3: "रूट कॅनालच्या दीर्घकालीन यशासाठी 3D डाउनपॅक व बॅकफिल ऑब्च्युरेशन प्रणाली",
  hero_li_4: "DSLR उपचारापूर्वी, दरम्यान व नंतरचे स्पष्ट फोटो—साहित्यात कोणतीही तडजोड नाही",

  info1_small: "बीड जिल्हा व लगतचे जिल्हे",
  info1_strong: "पहिले व एकमेव मायक्रोस्कोप",
  info1_span: "19.2x पर्यंत अचूकता",
  info2_small: "वैद्यकीय अनुभव",
  info2_strong: "18+ वर्षांचा अनुभव",
  info2_span: "M.D.S. तज्ज्ञ दंतोपचार",
  info3_small: "तज्ज्ञांशी संपर्क साधा",
  info3_span: "WhatsApp वर अपॉइंटमेंट घ्या",
  info4_small: "क्लिनिकची वेळ",
  info4_strong: "सोमवार – शनिवार",
  info4_span: "सकाळी 10:30 – संध्या. 7:00",

  welcome_eyebrow: "आमच्या क्लिनिकमध्ये स्वागत",
  welcome_title: "जिथे तुमच्या समस्या शांतपणे ऐकून आदरपूर्वक उपचार केले जातात",
  welcome_p1: "<strong>डॉ. हृषिकेश घुले</strong> (M.D.S., कॉन्झर्व्हेटिव्ह डेंटिस्ट्री अँड एंडोडॉन्टिक्स) आणि <strong>डॉ. अश्विनी शेप घुले</strong> (B.D.S., बालदंत व ज्येष्ठ नागरिक दंतोपचार) यांनी २०१८ मध्ये अंबाजोगाई येथे <strong>घुले डेंटल केअर अँड रूट कॅनाल सेंटर</strong>ची स्थापना केली. यामागे एकच स्पष्ट उद्देश होता: <span class=\"text-highlight\">अंबाजोगाई व लगतच्या जिल्ह्यांतील कुटुंबांना मोठ्या शहरांप्रमाणे अत्याधुनिक, मायक्रोस्कोप-आधारित आणि प्रामाणिक दंतोपचार आपल्या गावातच उपलब्ध करून देणे.</span>",
  welcome_p2: "<span class=\"text-highlight\">सिंगल सिटिंग रूट कॅनाल ट्रीटमेंट</span> व जुने रूट कॅनाल पुन्हा अचूकपणे (Re-RCT) करून खराब झालेले दात वाचवण्यापासून ते लहान मुले व ज्येष्ठ नागरिकांसाठी <span class=\"text-highlight\">सौम्य, सुईविरहित आणि भीतीमुक्त दंतोपचारापर्यंत</span>—आमची प्रत्येक तपासणी <span class=\"text-highlight\">आत्मीय व सविस्तर संवाद, स्पष्ट क्लिनिकल फोटोग्राफी आणि प्रामाणिक नैतिक सल्ल्याने</span> सुरू होते—कोणत्याही व्यावसायिक स्वार्थाशिवाय.",
  stat1_num: "18+ वर्षे",
  stat1_lbl: "एंडोडॉन्टिक्स अनुभव",
  stat2_num: "बीड जिल्ह्यातील पहिले",
  stat2_lbl: "डेंटल मायक्रोस्कोप",
  stat3_num: "4.9 ★",
  stat3_lbl: "45+ Google रिव्ह्यूज",

  heart_label: "मनापासून दिलेले वचन",
  heart_quote: "“आमचा विश्वास आहे की उत्तम दंतोपचाराची सुरुवात रुग्णाला शांतपणे ऐकून घेण्यापासून होते—तुमच्या तक्रारी समजून घेण्यासाठी पुरेसा वेळ देणे, प्रत्येक टप्प्याचे विचारपूर्वक नियोजन करणे आणि अत्यंत संयमाने व काळजीपूर्वक उपचार करणे. आम्ही कधीही केवळ पैशांसाठी रुग्णाला मार्गदर्शन करत नाही; तुमच्या कष्टाच्या प्रत्येक पैशाचे पूर्ण मोल तुम्हाला मिळावे, उच्च दर्जाच्या साहित्यासह कोणतीही तडजोड न करता केलेले उपचार दीर्घकाळ टिकावेत, हीच आमची प्रामाणिक धडपड आहे.”",
  heart_sign: "— डॉ. हृषिकेश घुले आणि डॉ. अश्विनी शेप घुले",

  prom1_t: "शांतपणे ऐकणे व काळजीपूर्वक नियोजन",
  prom1_p: "तुमचा त्रास नीट समजून घेण्यासाठी आम्ही पुरेसा वेळ देतो, सखोल तपासणी करतो आणि विचारपूर्वक नियोजन करूनच उपचार सुरू करतो.",
  prom2_t: "पैशांपेक्षा नैतिकतेला प्राधान्य",
  prom2_p: "तुमच्या दीर्घकालीन मौखिक आरोग्यासाठी जे खरोखर योग्य आहे, तोच प्रामाणिक सल्ला आम्ही देतो—व्यावसायिक स्वार्थ कधीही नाही.",
  prom3_t: "साहित्यात कोणतीही तडजोड नाही",
  prom3_p: "तुमच्या तोंडात वापरले जाणारे साहित्य नेहमीच सर्वोत्तम व जागतिक दर्जाचे असते, जेणेकरून उपचार वर्षानुवर्षे टिकतील.",
  prom4_t: "प्रत्येक रुपयाचे पूर्ण मूल्य",
  prom4_p: "सूक्ष्म कामकाज आणि DSLR केस फोटोंद्वारे तुम्हाला केलेल्या उपचाराचा उच्च दर्जा प्रत्येक टप्प्यावर प्रत्यक्ष दिसतो.",

  doc_eyebrow: "आमचे तज्ज्ञ नेतृत्व",
  doc_title: "आमच्या दंततज्ज्ञांना भेटा",
  doc_sub: "तज्ज्ञ रूट कॅनाल, खराब दात वाचवणारे रेस्टोरेटिव्ह उपचार आणि लहान मुले व ज्येष्ठांसाठी मायेची दंतसेवा.",

  doc1_name: "डॉ. हृषिकेश घुले",
  doc1_badge: "B.D.S., M.D.S. • 18+ वर्षांचा अनुभव",
  doc1_eyebrow: "संस्थापक व प्रमुख एंडोडॉन्टिस्ट",
  doc1_role: "B.D.S., M.D.S. (कॉन्झर्व्हेटिव्ह डेंटिस्ट्री अँड एंडोडॉन्टिक्स)<br />मायक्रो-एंडोडॉन्टिस्ट व रेस्टोरेटिव्ह तज्ज्ञ &nbsp;|&nbsp; फेलोशिप इन ओरल इम्प्लांटोलॉजी (सुरू)",
  doc1_bio: "२००८ मध्ये पुणे येथून B.D.S. पूर्ण केल्यापासून <strong>१८ वर्षांहून अधिक अनुभव</strong> असलेले डॉ. हृषिकेश घुले अंबाजोगाई येथे शैक्षणिक सखोलता, प्रामाणिक सेवा आणि मायक्रोस्कोपिक अचूकता एकत्र आणतात. २०१३ मध्ये नागपूर येथून M.D.S. (कॉन्झर्व्हेटिव्ह डेंटिस्ट्री अँड एंडोडॉन्टिक्स) पूर्ण करून, २०१६ पर्यंत लातूर येथील M.I.D.S.R. डेंटल कॉलेजमध्ये असोसिएट प्रोफेसर म्हणून आणि २०१८ पर्यंत कन्सल्टंट एंडोडॉन्टिस्ट म्हणून कार्य केल्यानंतर त्यांनी २०१८ मध्ये <strong>डॉ. घुले डेंटल केअर अँड रूट कॅनाल सेंटर</strong>ची सुरुवात केली. अतिशय खराब झालेले नैसर्गिक दात वाचवण्यात (रेस्टोरेटिव्ह डेंटिस्ट्री) त्यांना विशेष प्रावीण्य व आवड आहे.",
  forte_title: "विशेष प्रावीण्य व प्रमुख कौशल्ये",
  forte_1: "सिंगल सिटिंग रूट कॅनाल ट्रीटमेंट (एका अपॉइंटमेंटमध्ये)",
  forte_2: "जुने रूट कॅनाल पुन्हा अचूकपणे करणे (Re-RCT)",
  forte_3: "विशेष उपकरणाद्वारे जवळपास वेदनारहित व सुईविरहित भूल (लहान मुले व घाबरणाऱ्या रुग्णांसाठी अत्यंत उपयुक्त)",
  doc1_hl_title: "वैद्यकीय कारकीर्दीतील टप्पे",
  doc1_hl1: "<strong>संस्थापक व प्रमुख तज्ज्ञ (२०१८ – आजपर्यंत):</strong> अंबाजोगाई येथे डॉ. घुले डेंटल केअर अँड रूट कॅनाल सेंटरची स्थापना",
  doc1_hl2: "<strong>शैक्षणिक अनुभव (२०१६ पर्यंत):</strong> M.I.D.S.R. डेंटल कॉलेज अँड हॉस्पिटल, लातूर येथे असोसिएट प्रोफेसर म्हणून कार्य",
  doc1_hl3: "<strong>कन्सल्टंट एंडोडॉन्टिस्ट (२०१८ पर्यंत):</strong> विविध क्लिनिक्समध्ये गुंतागुंतीच्या रूट कॅनाल प्रकरणांवर उपचार",
  doc1_hl4: "<strong>रेस्टोरेटिव्ह डेंटिस्ट्री विशेष प्रावीण्य:</strong> अतिशय खराब झालेले नैसर्गिक दात वाचवण्याचे विशेष प्रशिक्षण व अनुभव",
  doc1_ed_title: "शिक्षण व फेलोशिप",
  doc1_ed1_yr: "वर्ष: २००८",
  doc1_ed1_t: "B.D.S. (बॅचलर ऑफ डेंटल सर्जरी)",
  doc1_ed1_s: "डॉ. डी. वाय. पाटील डेंटल कॉलेज अँड हॉस्पिटल, पुणे",
  doc1_ed2_yr: "वर्ष: २०१३",
  doc1_ed2_t: "M.D.S. कॉन्झर्व्हेटिव्ह डेंटिस्ट्री अँड एंडोडॉन्टिक्स",
  doc1_ed2_s: "व्ही.एस.पी.एम. डेंटल कॉलेज अँड रिसर्च सेंटर, नागपूर",
  doc1_ed3_yr: "प्रगतीपथावर",
  doc1_ed3_t: "फेलोशिप इन ओरल इम्प्लांटोलॉजी",
  doc1_ed3_s: "डॉ. एच.एस.आर.एस.एम. डेंटल कॉलेज अँड हॉस्पिटल",
  pioneer_t: "मायक्रोस्कोपिक दंतोपचारातील जिल्ह्यातील पहिले पाऊल",
  pioneer_p: "बीड जिल्हा आणि लगतच्या जिल्ह्यांतील संपूर्ण सुसज्ज डेंटल ऑपरेटिंग मायक्रोस्कोप असलेले पहिले आणि एकमेव क्लिनिक.",

  doc2_eyebrow: "बालदंत व ज्येष्ठ नागरिक दंतसेवा",
  doc2_name: "डॉ. अश्विनी शेप घुले",
  doc2_badge: "B.D.S. • 12+ वर्षांचा अनुभव",
  doc2_role: "B.D.S. &nbsp;|&nbsp; 12+ वर्षांचा वैद्यकीय अनुभव<br />बालदंत चिकित्सा (लहान मुले) व ज्येष्ठ नागरिक दंतोपचारात विशेष प्रावीण्य",
  doc2_bio: "२०१४ मध्ये लातूर येथील M.I.D.S.R. डेंटल कॉलेजमधून B.D.S. पूर्ण केल्यापासून <strong>१२ वर्षांहून अधिक अनुभव</strong> असलेल्या डॉ. अश्विनी शेप घुले लहान मुले व ज्येष्ठ नागरिकांना अत्यंत आपुलकीने आणि सौम्यपणे दंतोपचार देतात. <strong>बालदंत चिकित्सा (Paediatric Dentistry)</strong> आणि <strong>ज्येष्ठ नागरिक दंतोपचार (Geriatric Dentistry)</strong> यांचे औपचारिक प्रशिक्षण घेतल्यामुळे त्या लहान मुलांची भीती दूर करून त्यांचे दात वाचवतात आणि वृद्ध रुग्णांना संयमाने व आदराने आरामदायी उपचार देतात.",
  doc2_hl_title: "विशेष कार्यक्षेत्र",
  doc2_hl1: "<strong>बालदंत चिकित्सा (Paediatric Dentistry):</strong> सुईविरहित व भीतीमुक्त पद्धतीने लहान मुलांचे दुधाचे व कायमचे दात वाचवण्याचे विशेष प्रशिक्षण",
  doc2_hl2: "<strong>ज्येष्ठ नागरिक दंतोपचार (Geriatric Dentistry):</strong> वृद्ध व ज्येष्ठ रुग्णांसाठी विशेष सौम्य आणि सोयीस्कर दंतसेवा",
  doc2_hl3: "<strong>प्रतिबंधात्मक कौटुंबिक काळजी:</strong> सखोल व काळजीपूर्वक तपासणी, दात किडण्यापासून संरक्षण आणि दीर्घकालीन मौखिक आरोग्य मार्गदर्शन",
  doc2_ed_title: "शिक्षण व प्रशिक्षण",
  doc2_ed1_yr: "वर्ष: २०१४",
  doc2_ed1_t: "B.D.S. (बॅचलर ऑफ डेंटल सर्जरी)",
  doc2_ed1_s: "M.I.D.S.R. डेंटल कॉलेज अँड हॉस्पिटल, लातूर",
  doc2_ed2_yr: "विशेष प्रशिक्षण",
  doc2_ed2_t: "बालदंत व ज्येष्ठ नागरिक दंतोपचार",
  doc2_ed2_s: "लहान मुलांचे दात वाचवणे व ज्येष्ठ रुग्णांच्या दंतोपचारासाठी समर्पित सेवा",

  phil_eyebrow: "आमची कार्यपद्धती",
  phil_title: "अचूकता आणि आपुलकीने नैसर्गिक दात वाचवण्याचा ध्यास",
  phil_quote: "“कोणत्याही कृत्रिम पर्यायापेक्षा तुमचा नैसर्गिक दात वाचवणे सर्वोत्तम असते—आणि ते मायक्रोस्कोपिक अचूकता, प्रामाणिक सल्ला व प्रत्येक पिढीसाठी मायेच्या काळजीने साध्य होते.”",
  pil1_t: "सूक्ष्मदर्शक निदान",
  pil1_p: "उच्च मॅग्निफिकेशन ऑप्टिक्स आणि DSLR मॅक्रो फोटोंमुळे लपलेल्या नसा, बारीक तडे व सुरुवातीची कीड स्पष्ट दिसते—अंदाजाऐवजी पुराव्यानिशी उपचार होतात.",
  pil2_t: "नैसर्गिक दात जतन करणे",
  pil2_p: "अतिशय खराब झालेले दातही अनेकदा वाचवता येतात. उच्च दर्जाचे साहित्य आणि 3D वॉर्म ऑब्च्युरेशनद्वारे आम्ही नैसर्गिक दात दीर्घकाळ मजबूत ठेवण्याला प्राधान्य देतो.",
  pil3_t: "प्रत्येक पिढीची काळजी",
  pil3_p: "सुईविरहित बालदंत चिकित्सेपासून ते ज्येष्ठ नागरिकांच्या आरामापर्यंत, कुटुंबातील प्रत्येक व्यक्तीला आदरयुक्त, प्रामाणिक आणि आत्मीय दंतसेवा दिली जाते.",
  comf_1: "✦ सुईविरहित, आरामदायी भूल (Needle-Free)",
  comf_2: "✦ उपचारानंतरही सातत्यपूर्ण काळजी",
  comf_3: "✦ काटेकोर ऑटोक्लेव्ह निर्जंतुकीकरण",

  trust_eyebrow: "आमचे वेगळेपण",
  trust_title: "रुग्ण घुले डेंटल केअरवर विश्वास का ठेवतात?",
  trust_sub: "जिल्ह्यातील प्रगत सुविधा, आरामदायी उपचार, प्रत्यक्ष फोटो पुरावा आणि तुमच्या आरोग्याला प्राधान्य देणारी प्रामाणिक कार्यपद्धती.",
  t1_t: "बीड जिल्ह्यातील पहिले डेंटल मायक्रोस्कोप",
  t1_p: "बीड जिल्हा आणि लगतच्या जिल्ह्यांतील 19.2x डेंटल ऑपरेटिंग मायक्रोस्कोप असलेले पहिले व एकमेव क्लिनिक.",
  t2_t: "सिंगल सिटिंग व Re-RCT विशेष प्रावीण्य",
  t2_p: "एका अपॉइंटमेंटमधील रूट कॅनाल आणि 3D ऑब्च्युरेशनसह जुने अयशस्वी रूट कॅनाल पुन्हा अचूकपणे करण्याची खात्रीशीर पद्धत.",
  t3_t: "सुईविरहित वेदनारहित भूल",
  t3_p: "विशेष सुईविरहित उपकरणाद्वारे आरामदायी भूल—लहान मुले आणि इंजेक्शनला घाबरणाऱ्या रुग्णांसाठी अत्यंत दिलासादायक.",
  t4_t: "DSLR फोटोद्वारे १००% पारदर्शकता",
  t4_p: "Canon DSLR, 100mm मॅक्रो लेन्स व रिंग फ्लॅशद्वारे उपचारापूर्वी, दरम्यान व नंतरचे स्पष्ट फोटो रुग्णाला दाखवले जातात.",
  t5_t: "नैतिकता व पैशांचे पूर्ण मूल्य",
  t5_p: "शांतपणे ऐकणे, सविस्तर नियोजन आणि तुमच्या कष्टाच्या प्रत्येक रुपयाचे पूर्ण मूल्य देणारा प्रामाणिक सल्ला.",
  t6_t: "जागतिक साहित्य व ऑटोक्लेव्ह सुरक्षितता",
  t6_p: "Ivoclar Bluephase सारखी जागतिक उपकरणे, Runyes डिजिटल स्टीम ऑटोक्लेव्ह आणि एकदाच वापरण्यायोग्य डिस्पोजेबल्स.",

  tr_eyebrow: "संपूर्ण दंतसेवा",
  tr_title: "आमचे प्रमुख दंतोपचार",
  tr_sub: "सूक्ष्मदर्शक अचूकता, जागतिक दर्जाचे साहित्य, सुईविरहित आरामदायी भूल आणि DSLR फोटो पारदर्शकतेसह केलेले उपचार.",

  tr1_tag: "01 • एंडोडॉन्टिक्स विशेष प्रावीण्य",
  tr1_t: "सिंगल सिटिंग रूट कॅनाल व री-रूट कॅनाल (Re-RCT)",
  tr1_p: "आमचे मुख्य विशेष क्षेत्र—बीड जिल्ह्यातील पहिल्या डेंटल ऑपरेटिंग मायक्रोस्कोप आणि 3D वॉर्म ऑब्च्युरेशनच्या साहाय्याने दीर्घकाळ टिकणारे रूट कॅनाल.",
  tr1_l1: "सिंगल सिटिंग रूट कॅनाल ट्रीटमेंट (एका अपॉइंटमेंटमध्ये)",
  tr1_l2: "जुने रूट कॅनाल पुन्हा अचूकपणे करणे (Re-RCT)",
  tr1_l3: "19.2x मायक्रोस्कोप अचूकता आणि 3D वॉर्म ऑब्च्युरेशन सील",

  tr2_tag: "02 • दात संवर्धन",
  tr2_t: "रेस्टोरेटिव्ह डेंटिस्ट्री",
  tr2_p: "अतिशय किडलेले किंवा तुटलेले दात पुन्हा मजबूत करून वाचवण्यासाठी विशेष उपचार.",
  tr2_l1: "खराब व तुटलेले नैसर्गिक दात वाचवणे",
  tr2_l2: "अचूक पोस्ट-कोअर, ऑनले आणि कॅप (क्राऊन)",
  tr2_l3: "Ivoclar तंत्रज्ञानाने पक्के व दीर्घकाळ टिकणारे फिलिंग",

  tr3_tag: "03 • नवीन दात बसवणे",
  tr3_t: "डेंटल इम्प्लांट्स",
  tr3_p: "पडलेल्या दातांच्या जागी नैसर्गिक दिसणारे आणि चर्वणासाठी मजबूत, कायमस्वरूपी दात.",
  tr3_l1: "एक किंवा अनेक दातांसाठी डेंटल इम्प्लांट",
  tr3_l2: "इम्प्लांट-आधारित ब्रिज व मजबूत कवळी",
  tr3_l3: "सखोल नियोजन व दीर्घकाळ टिकणारे फिक्स दात",

  tr4_tag: "04 • सौंदर्यशास्त्र",
  tr4_t: "कॉस्मेटिक स्माईल मेकओव्हर",
  tr4_p: "तुमच्या चेहऱ्याला नैसर्गिकरीत्या शोभून दिसणारे आणि सूक्ष्म अचूकतेने केलेले सौंदर्यवर्धक उपचार.",
  tr4_l1: "पोर्सिलेन व्हिनियर्स व सिरॅमिक कॅप्स",
  tr4_l2: "दात स्वच्छ व चमकदार करणे (व्हाईटनिंग)",
  tr4_l3: "DSLR उपचारापूर्वी व नंतरची स्पष्ट तुलना",

  tr5_tag: "05 • मुले व ज्येष्ठ नागरिक",
  tr5_t: "बालदंत व ज्येष्ठ नागरिक दंतोपचार",
  tr5_p: "डॉ. अश्विनी शेप घुले यांच्या मार्गदर्शनाखाली लहान मुले व ज्येष्ठांसाठी सुईविरहित भुलीसह सौम्य, विशेष दंतसेवा.",
  tr5_l1: "लहान मुलांचे दुधाचे व कायमचे दात वाचवणे",
  tr5_l2: "सुईविरहित, जवळपास वेदनारहित भूल (Needle-Free Anaesthesia)",
  tr5_l3: "ज्येष्ठ नागरिकांसाठी आरामदायी दंतोपचार",

  tr6_tag: "06 • दात सरळ करणे",
  tr6_t: "ब्रेसेस व ऑर्थोडॉन्टिक्स",
  tr6_p: "तरुण व प्रौढांसाठी वेडेवाकडे किंवा फटी असलेले दात सरळ करण्याचे वैयक्तिकृत उपचार.",
  tr6_l1: "मेटल व सिरॅमिक ब्रेसेस (तारांचे उपचार)",
  tr6_l2: "पारदर्शक क्लिअर अलायनर्स",
  tr6_l3: "अंबाजोगाईमध्ये नियमित व सोयीस्कर फॉलो-अप",

  /* Reordered 3-Image Root Canal Precision Showcase */
  rct3_eyebrow: "दीर्घकाळ टिकणाऱ्या रूट कॅनालचे शास्त्र",
  rct3_title: "आमचे रूट कॅनाल उपचार यशस्वी का होतात?",
  rct3_sub: "रूट कॅनालचे दीर्घकालीन यश तीन महत्त्वाच्या टप्प्यांवर अवलंबून असते: मायक्रोस्कोपिक स्पष्टता, सखोल निर्जंतुकीकरण आणि घट्ट 3D सीलिंग.",
  rct3_b1: "01 • मॅग्निफिकेशन",
  rct3_t1: "मायक्रोस्कोप मॅग्निफिकेशनचा प्रभाव",
  rct3_p1: "डेंटल ऑपरेटिंग मायक्रोस्कोपखाली केसापेक्षाही बारीक अतिरिक्त नसा व सूक्ष्म तडे स्पष्ट दिसतात—त्यामुळे कोणतीही नस सुटत नाही.",
  rct3_b2: "02 • सखोल स्वच्छता",
  rct3_t2: "सखोल स्वच्छता व निर्जंतुकीकरण",
  rct3_p2: "रूट कॅनालच्या यशासाठी दातातील संसर्ग पूर्णपणे निघणे आवश्यक असते. रबर डॅमखाली केलेली सखोल स्वच्छता जंतू मुळापासून काढून टाकते.",
  rct3_b3: "03 • 3D ऑब्च्युरेशन",
  rct3_t3: "घट्ट 3D ऑब्च्युरेशन सील",
  rct3_p3: "3D डाउनपॅक व बॅकफिल पद्धतीमुळे मुळाच्या गुंतागुंतीच्या वळणांमध्ये आणि सूक्ष्म फांद्यांमध्ये कोणतीही पोकळी न ठेवता घट्ट सील तयार होते.",

  /* Complete Dental Care Carousel */
  fam_eyebrow: "संपूर्ण कुटुंबासाठी सर्व उपचार एकाच छताखाली",
  fam_title: "तुमच्या कुटुंबासाठी संपूर्ण दंतसेवा —",
  fam1_t: "सामान्य व कौटुंबिक दंतोपचार",
  fam1_p: "दात व हिरड्यांच्या विविध समस्यांचे प्रतिबंध, अचूक निदान आणि सौम्य उपचार.",
  fam1_s1: "नियमित दंत तपासणी",
  fam1_s2: "दात स्वच्छता (स्केलिंग)",
  fam1_s3: "डेंटल कॅप व ब्रिज",
  fam1_s4: "अक्कलदाढ काढणे",

  fam2_t: "कॉस्मेटिक व रेस्टोरेटिव्ह",
  fam2_p: "खराब झालेले दात वाचवणे आणि तुमच्या हास्याचे नैसर्गिक सौंदर्य व मजबुती वाढवणे.",
  fam2_s1: "DSLR स्माईल प्लॅनिंग",
  fam2_s2: "कंपोझिट बाँडिंग",
  fam2_s3: "पोर्सिलेन व्हिनियर्स",
  fam2_s4: "खराब झालेले दात वाचवणे",

  fam3_t: "ऑर्थोडॉन्टिक्स (दात सरळ करणे)",
  fam3_p: "वेडेवाकडे दात सरळ करून सुंदर हास्य आणि योग्य चावण्याची क्षमता देणारे उपचार.",
  fam3_s1: "इनव्हिजालाईन व क्लिअर अलायनर्स",
  fam3_s2: "मेटल व सिरॅमिक ब्रेसेस",
  fam3_s3: "दातांमधील फटी सुधारणे",
  fam3_s4: "तरुण व प्रौढांसाठी उपचार",

  fam4_t: "मायक्रोस्कोप एंडोडॉन्टिक्स",
  fam4_p: "ऑप्टिकल मॅग्निफिकेशन आणि 3D वॉर्म ऑब्च्युरेशनसह नैसर्गिक दात वाचवणारे तज्ज्ञ रूट कॅनाल.",
  fam4_s1: "सिंगल सिटिंग रूट कॅनाल",
  fam4_s2: "अचूक री-रूट कॅनाल (Re-RCT)",
  fam4_s3: "3D वॉर्म ऑब्च्युरेशन",
  fam4_s4: "मायक्रोस्कोप-आधारित उपचार",

  fam5_t: "बालदंत व ज्येष्ठ नागरिक सेवा",
  fam5_p: "लहान मुलांसाठी भीतीमुक्त उपचार आणि ज्येष्ठ नागरिकांसाठी आदरपूर्वक व आरामदायी दंतसेवा.",
  fam5_s1: "लहान मुलांचे दात वाचवणे",
  fam5_s2: "सुईविरहित भूल (Needle-Free)",
  fam5_s3: "दात किडण्यापासून संरक्षण",
  fam5_s4: "ज्येष्ठ नागरिक दंतसेवा",

  fam6_t: "डेंटल इम्प्लांट्स",
  fam6_p: "पडलेल्या दातांच्या जागी नैसर्गिक दिसणारे आणि चर्वणासाठी मजबूत, कायमस्वरूपी दात.",
  fam6_s1: "एक दात इम्प्लांट",
  fam6_s2: "अनेक दात इम्प्लांट्स",
  fam6_s3: "इम्प्लांट ब्रिज",
  fam6_s4: "इम्प्लांट-आधारित कवळी",

  /* Equipment Tab */
  tech_eyebrow: "जागतिक दर्जाची उपकरणे व पारदर्शकता",
  tech_title: "सूक्ष्म तपशील पाहणारी दृष्टी—दीर्घकाळ टिकणाऱ्या उपचारांसाठी",
  tech_sub: "प्रत्येक उपचार अचूक, आरामदायी, सुरक्षित आणि टिकाऊ व्हावा यासाठी आम्ही जागतिक दर्जाची दंत उपकरणे, सुईविरहित भूल, 3D रूट कॅनाल प्रणाली व ऑटोक्लेव्ह तंत्रज्ञान वापरतो.",

  scope_cap1: "iSee 9000 सर्जिकल मायक्रोस्कोप",
  scope_cap2: "अतिसूक्ष्म को-ॲक्सियल ऑप्टिक्स",
  scope_thumb_t: "अतिसूक्ष्म मायक्रो-एंडोडॉन्टिक्स",
  scope_thumb_p: "उच्च प्रकाशव्यवस्था आणि सूक्ष्मदर्शक लेन्समुळे दाताच्या मुळातील अतिसूक्ष्म नसा स्पष्ट दिसतात.",
  scope_pill: "✦ बीड जिल्हा आणि लगतच्या जिल्ह्यांमध्ये विशेष सुविधा",
  scope_title: "बीड जिल्हा व परिसरातील पहिले आणि एकमेव डेंटल ऑपरेटिंग मायक्रोस्कोप",
  scope_p1: "<strong>घुले डेंटल केअर अँड रूट कॅनाल सेंटर</strong> हे <strong>बीड जिल्हा आणि लगतच्या जिल्ह्यांतील पहिले व एकमेव क्लिनिक</strong> आहे जिथे संपूर्ण सुसज्ज डेंटल ऑपरेटिंग मायक्रोस्कोप उपलब्ध आहे.",
  scope_p2: "दाताच्या आतील सूक्ष्म नसा अनेकदा केसापेक्षाही बारीक असतात. मायक्रोस्कोपच्या साहाय्याने उपचार केल्यास लपलेल्या नसा शोधणे, सिंगल सिटिंग रूट कॅनाल अचूकपणे करणे आणि पूर्वी अयशस्वी झालेले रूट कॅनाल (Re-RCT) वाचवणे शक्य होते.",
  scope_li1: "लपलेल्या अतिरिक्त नसा, बारीक तडे (फ्रॅक्चर) आणि सूक्ष्म संसर्ग अचूक ओळखतो",
  scope_li2: "नैसर्गिक दाताचा निरोगी भाग वाचवून दाताची मजबुती टिकवून ठेवतो",
  scope_li3: "सिंगल सिटिंग रूट कॅनाल, गुंतागुंतीचे Re-RCT आणि रेस्टोरेटिव्ह उपचारांसाठी अत्यंत उपयुक्त",
  scope_li4: "अनेक वर्षे टिकणारे आणि खात्रीशीर परिणाम देण्यासाठी डिझाइन केलेले",

  mag_small: "बहुस्तरीय सूक्ष्मदर्शक स्पष्टता",
  mag_title: "2.1x ते 19.2x पर्यंत मॅग्निफिकेशन — प्रत्येक तपशिलावर बारीक लक्ष",
  mag_desc: "<strong>2.1x</strong> पासून थेट <strong>19.2x</strong> पर्यंतच्या सहा टप्प्यांमुळे प्रत्येक किनार, सूक्ष्म तडा आणि रूट कॅनाल स्पष्टपणे दिसते—अंदाजासाठी कोणतीही जागा उरत नाही.",

  needle_eyebrow: "भीतीमुक्त व आरामदायी दंतसेवा",
  needle_title: "सुईविरहित, जवळपास वेदनारहित भूल (Needle-Free Anaesthesia)",
  needle_desc: "इंजेक्शनच्या सुईच्या भीतीमुळे अनेक रुग्ण दंतोपचार टाळतात. आमच्याकडे विशेष <strong>सुईविरहित भूल (Injex Soft-Shot)</strong> उपकरण उपलब्ध असून त्याद्वारे सुईशिवाय अत्यंत सौम्य, जलद आणि जवळपास वेदनारहित पद्धतीने दात बधिर केला जातो.",
  needle_li1: "सुईच्या टोचण्याची भीती नाही—काही क्षणांतच सौम्य व आरामदायी भूल",
  needle_li2: "लहान मुले आणि दंतोपचाराला घाबरणाऱ्या रुग्णांसाठी विशेष उपयुक्त",
  needle_li3: "जलद आणि तणावमुक्त अनुभवामुळे संपूर्ण उपचार आरामात पूर्ण होतात",

  obt_eyebrow: "रूट कॅनालच्या दीर्घकालीन यशासाठी",
  obt_title: "3D डाउनपॅक आणि बॅकफिल ऑब्च्युरेशन प्रणाली",
  obt_desc: "रूट कॅनाल दीर्घकाळ टिकणे हे स्वच्छ केलेली नस किती अचूकपणे सील केली आहे यावर अवलंबून असते. आमची <strong>3D वॉर्म व्हर्टिकल डाउनपॅक व बॅकफिल प्रणाली</strong> उष्ण व मऊ सीलिंग साहित्य मुळाच्या सूक्ष्म फांद्यांपर्यंत अचूक पोहोचवते.",
  obt_li1: "संपूर्ण रूट कॅनालमध्ये कोणतीही पोकळी न ठेवता घट्ट 3D सील तयार होते",
  obt_li2: "साध्या पद्धतीत सुटू शकणाऱ्या अतिसूक्ष्म बाजूच्या नसाही पूर्णपणे भरल्या जातात",
  obt_li3: "पुन्हा जंतुसंसर्ग होण्यास प्रतिबंध—सिंगल सिटिंग व Re-RCT मध्ये यशाचे प्रमाण लक्षणीय वाढते",

  dslr_p_cam: "Canon DSLR",
  dslr_p_macro: "100mm मॅक्रो",
  dslr_p_ring: "रिंग फ्लॅश",
  dslr_eyebrow: "१००% पारदर्शकता",
  dslr_title: "DSLR डेंटल केस डॉक्युमेंटेशन",
  dslr_desc: "दंतोपचाराचे स्पष्ट फोटो घेण्यासाठी आम्ही खास <strong>100mm मॅक्रो लेन्स आणि रिंग फ्लॅशसह Canon DSLR कॅमेरा</strong> वापरतो—जेणेकरून तुमच्या दातात नक्की काय समस्या आहे आणि काय उपचार केले हे तुम्ही स्वतः पाहू शकाल.",
  dslr_li1: "<strong>उपचारापूर्वी (Pre-Op):</strong> कीड, तडा किंवा समस्या सुरू करण्याआधी स्पष्ट पहा",
  dslr_li2: "<strong>उपचारादरम्यान (Intra-Op):</strong> सूक्ष्म आणि काळजीपूर्वक कामाची पारदर्शक नोंद",
  dslr_li3: "<strong>उपचारानंतर (Post-Op):</strong> पूर्णपणे दुरुस्त झालेला दात स्वतः पाहून खात्री पटवा",

  loupes_eyebrow: "दैनंदिन सूक्ष्मदर्शक अचूकता",
  loupes_title: "LED प्रकाशासह Ergoptix 3x डेंटल लुप्स",
  loupes_desc: "नियमित फिलिंग, कॅपची तयारी आणि सखोल तपासणीसाठी आम्ही LED प्रकाशासह <strong>Ergoptix 3x मॅग्निफिकेशन लुप्स</strong> वापरतो.",
  loupes_li1: "कीड संपूर्णपणे स्वच्छ करून घट्ट व टिकाऊ फिलिंग करणे",
  loupes_li2: "कॅपच्या कडा अचूक बसवून नैसर्गिक आराम आणि दीर्घायुष्य देणे",
  loupes_li3: "प्रत्येक उपचारासाठी स्वच्छ व छायाविरहित प्रकाशव्यवस्था",

  curing_eyebrow: "साहित्यात कोणतीही तडजोड नाही",
  curing_title: "Ivoclar Bluephase LED क्युअरिंग तंत्रज्ञान",
  curing_desc: "दातातील फिलिंग तितकेच मजबूत असते जितके ते पक्के करणारे उपकरण उत्तम असते. जागतिक दर्जाच्या <strong>Ivoclar Bluephase</strong> LED क्युअरिंग लाईटमुळे कंपोझिट सिमेंट खोलवर व पूर्णपणे घट्ट होते.",
  curing_li1: "अधिक मजबूत पकड (बाँडिंग) आणि झिणझिण्यांचा धोका कमी",
  curing_li2: "दीर्घकाळ टिकणारे आणि झिजरोधक दंतोपचार",
  curing_li3: "उच्च गुणवत्तेत कोणतीही तडजोड न करण्याच्या धोरणाचे प्रतीक",

  steril_eyebrow: "रुग्णाची सुरक्षितता सर्वोपरि",
  steril_title: "डिजिटल ऑटोक्लेव्ह निर्जंतुकीकरण प्रणाली",
  steril_desc: "प्रत्येक भेटीत तुमची सुरक्षितता आमच्यासाठी सर्वात महत्त्वाची आहे. आमच्या <strong>Runyes डिजिटल स्टीम ऑटोक्लेव्ह</strong>द्वारे सर्व उपकरणांचे उच्च दाबावर अचूक निर्जंतुकीकरण केले जाते, तसेच एकदाच वापरण्यायोग्य डिस्पोजेबल साहित्य वापरले जाते.",
  steril_li1: "प्रत्येक रुग्णानंतर उपकरणांचे काटेकोर वाफेद्वारे निर्जंतुकीकरण",
  steril_li2: "सील केलेल्या पाऊचमधील स्वच्छ उपकरणे व निर्जंतुक क्लिनिकल परिसर",
  steril_li3: "हॉस्पिटल-दर्जाचे जंतुसंसर्ग नियंत्रण ज्यावर तुम्ही पूर्ण विश्वास ठेवू शकता",

  ios_fb_t: "Shining 3D Neo इंट्रा-ओरल स्कॅनर",
  ios_fb_s: "अत्याधुनिक 3D डिजिटल इम्प्रेशन • लवकरच येत आहे",
  ios_pill: "✦ लवकरच येत आहे • डिजिटल अपग्रेड",
  ios_title: "Shining 3D Neo — डिजिटल इंट्रा-ओरल स्कॅनर (IOS)",
  ios_desc: "आम्ही लवकरच आमच्या क्लिनिकमध्ये <strong>Shining 3D Neo इंट्रा-ओरल स्कॅनर</strong> समाविष्ट करत आहोत. पारंपरिक पेस्टच्या मापाच्या ट्रेऐवजी जलद आणि रेडिएशन-मुक्त ऑप्टिकल स्कॅनरद्वारे काही मिनिटांतच तुमच्या दातांचे अचूक 3D डिजिटल मॉडेल तयार होते.",
  ios_li1: "<strong>पेस्टच्या मापाचा त्रास नाही:</strong> मळमळ किंवा अस्वस्थतेशिवाय पूर्णपणे आरामदायी डिजिटल स्कॅन",
  ios_li2: "<strong>अतिसूक्ष्म अचूकता:</strong> कॅप, ब्रिज, इम्प्लांट्स आणि अलायनर्ससाठी तंतोतंत फिटिंग",
  ios_li3: "<strong>त्वरित 3D दृश्य:</strong> स्क्रीनवर दातांचे 3D मॉडेल पाहून उपचाराचे स्पष्ट नियोजन",
  ios_li4: "<strong>जलद सेवा:</strong> थेट डिजिटल लॅब पाठवणीमुळे कमी दुरुस्त्या आणि लवकर कॅप तयार",

  /* Gallery Tab */
  gal_eyebrow: "आमच्या क्लिनिकची झलक",
  gal_title: "क्लिनिक गॅलरी व क्लिनिकल केसेस",
  gal_sub: "अंबाजोगाई येथील वरद हाईट्समधील आमचे स्वच्छ, प्रसन्न क्लिनिक आणि DSLR डॉक्युमेंटेड उपचारापूर्वी व नंतरचे परिणाम पहा.",
  gal7: "रिसेप्शन आणि प्रतीक्षा कक्ष",
  gal8: "आधुनिक व निर्जंतुक उपचार कक्ष",
  gal9: "वरद हाईट्स, अंबाजोगाई",

  cases_eyebrow: "DSLR डॉक्युमेंटेड परिणाम",
  cases_title: "क्लिनिकल केसेस: उपचारापूर्वी (Pre-Op) आणि उपचारानंतर (Post-Op)",
  cases_sub: "आमच्या Canon DSLR व 100mm मॅक्रो कॅमेराद्वारे नोंदवलेले प्रत्यक्ष उपचारांचे परिणाम आणि पारदर्शक अचूकता.",
  tag_pre: "उपचारापूर्वी",
  tag_post: "उपचारानंतर",
  case1_t: "सिंगल सिटिंग मायक्रोस्कोप रूट कॅनाल",
  case1_p: "उच्च मॅग्निफिकेशन आणि 3D वॉर्म व्हर्टिकल ऑब्च्युरेशनसह एका अपॉइंटमेंटमध्ये पूर्ण केलेले उपचार.",
  case2_t: "जुने रूट कॅनाल पुन्हा अचूकपणे करणे (Re-RCT)",
  case2_p: "पूर्वी अयशस्वी झालेले रूट कॅनाल डेंटल मायक्रोस्कोपच्या साहाय्याने यशस्वीपणे वाचवले आणि 3D सील केले.",
  case3_t: "अतिशय खराब झालेला दात वाचवणे",
  case3_p: "उच्च दर्जाचे साहित्य आणि Ivoclar Bluephase तंत्रज्ञानाने दाताची मजबूत पुनर्बांधणी.",

  /* Reviews Tab */
  rev_eyebrow: "रुग्णांचे खरे अनुभव",
  rev_title: "आमचे रुग्ण Google वर काय म्हणतात",
  rev_sub: "बीड जिल्ह्यातील ज्या कुटुंबांनी आमच्यावर विश्वास ठेवला त्यांचे प्रामाणिक अभिप्राय.",
  rev_score: "4.9 / 5.0 रेटिंग",
  rev_count: "• 45+ प्रमाणित Google रिव्ह्यूज",
  rev_badge: "Google रिव्ह्यू",
  rev1_text: "“माझ्या स्वतःच्या उपचारानंतर मी खात्रीने डॉ. घुले डेंटल केअर अँड रूट कॅनाल सेंटरची शिफारस करतो — आधुनिक उपकरणे, डॉक्टरांचा मनमिळावू स्वभाव, अजिबात तीव्र वेदना न होता अत्यंत कौशल्याने केलेले पूर्ण उपचार, उपचारादरम्यान दिलेली सविस्तर माहिती, स्वच्छ व आरामदायी वातावरण आणि अत्यंत योग्य दर.”",
  rev2_text: "“उच्च दर्जाच्या दंतोपचारासाठी मी डॉ. घुले डेंटल केअर अँड रूट कॅनाल सेंटरची मनापासून शिफारस करतो. उत्तम अनुभव, मनमिळावू व जाणकार स्टाफ, अत्याधुनिक वैद्यकीय उपकरणे, सौम्य व सखोल उपचार, स्वच्छ परिसर आणि प्रत्येक प्रक्रियेची सविस्तर माहिती.”",
  rev3_text: "“डॉ. हृषिकेश घुले व डॉ. अश्विनी घुले दोघेही निदानामध्ये अतिशय उत्तम आहेत. क्लिनिकमध्ये अतिशय चांगले उपचार मिळतात आणि ते खूप सहकार्य करतात. त्यांना पुढील वाटचालीस मनापासून शुभेच्छा.”",
  rev4_text: "“डॉक्टरांसोबतचा सर्वोत्तम अनुभव. रुग्णांवर अत्यंत आनंदाने व आपुलकीने उपचार करतात—आणि सर्वात महत्त्वाचे म्हणजे वेदनारहित उपचार.”",
  rev_verified: "— प्रमाणित Google रुग्ण",
  rev_btn: "सर्व 45+ Google रिव्ह्यूज पहा →",

  cta_eyebrow: "प्रामाणिक व काळजीपूर्वक दंतसेवेचा अनुभव घ्या",
  cta_title: "तपासणीसाठी अपॉइंटमेंट बुक करायची आहे का?",
  cta_desc: "आमच्यासोबत आरामात बसा, तुमची समस्या सविस्तर सांगा आणि दीर्घकाळ टिकणाऱ्या मायक्रोस्कोप-आधारित, सुईविरहित व पारदर्शक दंतोपचाराचा अनुभव घ्या.",

  /* Contact Tab & Footer */
  con_eyebrow: "क्लिनिकला भेट द्या",
  con_title: "संपर्क आणि पत्ता",
  con_sub: "अंबाजोगाईमध्ये तथागत चौकाजवळ, थोरात हॉस्पिटलच्या शेजारी, वरद हाईट्स (पहिला मजला) येथे सहज पोहोचता येणारे क्लिनिक.",
  con_addr_lbl: "क्लिनिकचा पत्ता",
  con_addr: "पहिला मजला, वरद हाईट्स, थोरात हॉस्पिटल शेजारी, तथागत चौकाजवळ, अंबाजोगाई, बीड जिल्हा, महाराष्ट्र",
  con_phone_lbl: "फोन व WhatsApp",
  con_hours_lbl: "क्लिनिकची वेळ",
  con_hours: "सोमवार – शनिवार: सकाळी 10:30 ते संध्याकाळी 7:00",

  foot_clinic: "घुले डेंटल केअर अँड रूट कॅनाल सेंटर",
  foot_desc: "बीड जिल्हा व लगतच्या जिल्ह्यांतील पहिल्या डेंटल ऑपरेटिंग मायक्रोस्कोपसह अंबाजोगाईमधील प्रत्येक पिढीसाठी प्रामाणिक, सुईविरहित, पारदर्शक व दीर्घकाळ टिकणारी दंतसेवा.",
  foot_links_t: "महत्त्वाचे दुवे",
  foot_tr_t: "प्रमुख उपचार",
  foot_phone_lbl: "फोन:",
  foot_time_lbl: "वेळ:",
  foot_copy: "© 2026 घुले डेंटल केअर अँड रूट कॅनाल सेंटर. सर्व हक्क राखीव.",
  foot_docs: "डॉ. हृषिकेश घुले (B.D.S., M.D.S.) आणि डॉ. अश्विनी शेप घुले (B.D.S.)",
  wa_float: "WhatsApp अपॉइंटमेंट",

  /* WhatsApp Booking Modal */
  mod_eyebrow: "घुले डेंटल केअर • अंबाजोगाई",
  mod_title: "दंत तपासणीसाठी अपॉइंटमेंट घ्या",
  mod_name_lbl: "रुग्णाचे पूर्ण नाव *",
  mod_name_ph: "उदा. राजेश देशमुख",
  mod_phone_lbl: "मोबाईल नंबर *",
  mod_phone_ph: "१० अंकी मोबाईल नंबर",
  mod_doc_lbl: "डॉक्टर निवडा",
  mod_doc_opt0: "कोणतेही उपलब्ध डॉक्टर",
  mod_doc_opt1: "डॉ. हृषिकेश घुले (रूट कॅनाल व रेस्टोरेटिव्ह)",
  mod_doc_opt2: "डॉ. अश्विनी शेप घुले (लहान मुले व ज्येष्ठ नागरिक)",
  mod_tr_lbl: "उपचार / तक्रार",
  mod_tr_opt0: "सामान्य तपासणी व सल्ला",
  mod_tr_opt1: "सिंगल सिटिंग रूट कॅनाल ट्रीटमेंट (एका अपॉइंटमेंटमध्ये)",
  mod_tr_opt1b: "जुने रूट कॅनाल पुन्हा अचूकपणे करणे (Re-RCT)",
  mod_tr_opt2: "खराब झालेला दात वाचवणे / कॅप",
  mod_tr_opt9: "सुईविरहित वेदनारहित दंतोपचार (Needle-Free)",
  mod_tr_opt5: "डेंटल इम्प्लांट्स",
  mod_tr_opt6: "कॉस्मेटिक / स्माईल मेकओव्हर",
  mod_tr_opt3: "बालदंत चिकित्सा (लहान मुले)",
  mod_tr_opt4: "ज्येष्ठ नागरिक दंतोपचार",
  mod_tr_opt7: "ब्रेसेस / दात सरळ करणे",
  mod_tr_opt8: "दातदुखी / तातडीचे उपचार",
  mod_date_lbl: "पसंतीची तारीख *",
  mod_slot_lbl: "पसंतीची वेळ",
  mod_slot_1: "सकाळ (10:30 AM – 1:30 PM)",
  mod_slot_2: "दुपार (1:30 PM – 4:30 PM)",
  mod_slot_3: "संध्याकाळ (4:30 PM – 7:00 PM)",
  mod_notes_lbl: "थोडक्यात माहिती / तक्रार (ऐच्छिक)",
  mod_notes_ph: "दातदुखी, झिणझिण्या किंवा तुमचा प्रश्न येथे लिहा...",
  mod_note: "क्लिनिकची वेळ: सोमवार – शनिवार, सकाळी 10:30 – संध्या. 7:00. खालील बटणावर क्लिक केल्यास +91 90678 01333 वर तयार WhatsApp मेसेज उघडेल.",
  mod_submit: "WhatsApp वर अपॉइंटमेंट विनंती पाठवा →"
};

/* =========================================================
   Horizontal Tab Navigation Engine
   ========================================================= */
function getTabLabel(tabId) {
  if (currentLang === "mr" && mrTranslations["tab_" + tabId]) {
    return mrTranslations["tab_" + tabId];
  }
  return TAB_LABELS_EN[tabId] || tabId;
}

function updateTabNavButtons() {
  const prevBtn = document.getElementById("prevTabBtn");
  const nextBtn = document.getElementById("nextTabBtn");
  if (!prevBtn || !nextBtn) return;

  const idx = TAB_ORDER.indexOf(currentTab);
  const prevPrefix = currentLang === "mr" ? "← मागील: " : "← Previous: ";
  const nextPrefix = currentLang === "mr" ? "पुढील: " : "Next: ";

  if (idx > 0) {
    prevBtn.style.visibility = "visible";
    prevBtn.textContent = prevPrefix + getTabLabel(TAB_ORDER[idx - 1]);
  } else {
    prevBtn.style.visibility = "hidden";
  }

  if (idx < TAB_ORDER.length - 1) {
    nextBtn.style.visibility = "visible";
    nextBtn.textContent = nextPrefix + getTabLabel(TAB_ORDER[idx + 1]) + " →";
  } else {
    nextBtn.style.visibility = "hidden";
  }
}

function openTab(tabId, skipScroll) {
  const aliasMap = {
    top: "home",
    welcome: "home",
    about: "doctors",
    trust: "philosophy",
    technology: "equipment",
    cases: "gallery"
  };

  const resolved = aliasMap[tabId] || tabId;
  const targetTab = TAB_ORDER.includes(resolved) ? resolved : "home";
  currentTab = targetTab;

  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === "tab-" + targetTab);
  });

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-tab") === targetTab;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
    if (isActive && typeof btn.scrollIntoView === "function") {
      try {
        btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } catch (e) {}
    }
  });

  updateTabNavButtons();

  try {
    history.replaceState(null, "", "#" + targetTab);
  } catch (e) {}

  if (!skipScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function stepTab(delta) {
  const idx = TAB_ORDER.indexOf(currentTab);
  const nextIdx = idx + delta;
  if (nextIdx >= 0 && nextIdx < TAB_ORDER.length) {
    openTab(TAB_ORDER[nextIdx]);
  }
}

/* Horizontal Scroll Helper for Family Dental Care Carousel */
function scrollFamilyCare(direction) {
  const track = document.getElementById("familyTrack");
  if (!track) return;
  const card = track.querySelector(".family-card");
  const step = card ? card.offsetWidth + 24 : 360;
  track.scrollBy({ left: direction * step, behavior: "smooth" });
}

/* =========================================================
   English <-> Marathi Translation Engine
   ========================================================= */
function cacheEnglishDefaults() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!(key in enCache.text)) enCache.text[key] = el.textContent;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (!(key in enCache.html)) enCache.html[key] = el.innerHTML;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!(key in enCache.placeholder)) enCache.placeholder[key] = el.getAttribute("placeholder") || "";
  });
}

function setLanguage(lang) {
  currentLang = lang === "mr" ? "mr" : "en";
  document.documentElement.setAttribute("lang", currentLang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (currentLang === "mr" && mrTranslations[key]) {
      el.textContent = mrTranslations[key];
    } else if (enCache.text[key] !== undefined) {
      el.textContent = enCache.text[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (currentLang === "mr" && mrTranslations[key]) {
      el.innerHTML = mrTranslations[key];
    } else if (enCache.html[key] !== undefined) {
      el.innerHTML = enCache.html[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (currentLang === "mr" && mrTranslations[key]) {
      el.setAttribute("placeholder", mrTranslations[key]);
    } else if (enCache.placeholder[key] !== undefined) {
      el.setAttribute("placeholder", enCache.placeholder[key]);
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
  });

  updateTabNavButtons();

  try { localStorage.setItem("ghule_dental_lang", currentLang); } catch (e) {}
}

/* =========================================================
   Interactive WhatsApp Appointment Booking Modal
   ========================================================= */
function openBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;
  const dateInput = document.getElementById("preferredDate");
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const minDate = `${yyyy}-${mm}-${dd}`;
    dateInput.min = minDate;
    if (!dateInput.value) dateInput.value = minDate;
  }
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function submitWhatsAppBooking(event) {
  event.preventDefault();

  const name = document.getElementById("patientName").value.trim();
  const phone = document.getElementById("patientPhone").value.trim();
  const doctorEl = document.getElementById("doctorChoice");
  const treatmentEl = document.getElementById("treatmentChoice");
  const dateVal = document.getElementById("preferredDate").value;
  const slotEl = document.getElementById("preferredSlot");
  const notes = document.getElementById("patientNotes").value.trim();

  const doctor = doctorEl.options[doctorEl.selectedIndex].text;
  const treatment = treatmentEl.options[treatmentEl.selectedIndex].text;
  const slot = slotEl.options[slotEl.selectedIndex].text;

  // Format date nicely (DD-MM-YYYY) and prevent Sunday bookings
  let formattedDate = dateVal;
  if (dateVal && dateVal.includes("-")) {
    const parts = dateVal.split("-");
    formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    const chosenDay = new Date(dateVal + "T00:00:00").getDay();
    if (chosenDay === 0) {
      const warnMsg = currentLang === "mr"
        ? "रविवारी क्लिनिक बंद असते (सोमवार ते शनिवार सुरू). कृपया सोमवार ते शनिवारमधील तारीख निवडा."
        : "The clinic is closed on Sundays (open Monday – Saturday). Please choose a date from Monday to Saturday.";
      alert(warnMsg);
      return;
    }
  }

  let message = "";
  if (currentLang === "mr") {
    message =
      `नमस्कार, मला घुले डेंटल केअर अँड रूट कॅनाल सेंटर, अंबाजोगाई येथे अपॉइंटमेंट बुक करायची आहे.\n\n` +
      `• रुग्णाचे नाव: ${name}\n` +
      `• मोबाईल नंबर: ${phone}\n` +
      `• डॉक्टर: ${doctor}\n` +
      `• उपचार / तक्रार: ${treatment}\n` +
      `• पसंतीची तारीख: ${formattedDate}\n` +
      `• पसंतीची वेळ: ${slot}` +
      (notes ? `\n• अतिरिक्त माहिती: ${notes}` : "");
  } else {
    message =
      `Hello, I would like to book an appointment at Ghule Dental Care & Root Canal Centre, Ambajogai.\n\n` +
      `• Patient Name: ${name}\n` +
      `• Mobile Number: ${phone}\n` +
      `• Preferred Doctor: ${doctor}\n` +
      `• Treatment / Concern: ${treatment}\n` +
      `• Preferred Date: ${formattedDate}\n` +
      `• Preferred Time Slot: ${slot}` +
      (notes ? `\n• Notes / Symptoms: ${notes}` : "");
  }

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank", "noopener,noreferrer");
  closeBookingModal();
}

/* =========================================================
   Initialize on Page Load
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  cacheEnglishDefaults();

  // Open tab from URL hash if present (e.g., #treatments)
  const initialHash = window.location.hash.replace("#", "").trim().toLowerCase();
  openTab(initialHash || "home", true);

  // Restore saved language preference
  try {
    const saved = localStorage.getItem("ghule_dental_lang");
    if (saved === "mr") setLanguage("mr");
  } catch (e) {}

  // Support browser back/forward hash changes
  window.addEventListener("hashchange", () => {
    const nextHash = window.location.hash.replace("#", "").trim().toLowerCase();
    if (nextHash) openTab(nextHash, true);
  });

  // Close booking modal when clicking backdrop or pressing Escape
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeBookingModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBookingModal();
  });
});