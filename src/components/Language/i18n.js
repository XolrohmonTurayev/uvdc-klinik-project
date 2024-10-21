import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "uz",
  resources: {
    uz: {
      translation: {
        headersLinks: {
          home: "Bosh sahifa",
          about: "Biz haqimizda",
          doctors: "Shifokorlar",
          service: "Xizmatlar",
          reviews: "Sharhlar",
          news: "Yangiliklar",
          contact: "Bog'lanish",
          gallery: "Galereya",
        },
        btns: {
          zayavka_btn: "Qabulga yozilish",
          more: "Batafsil",
          send: "Yuborish",
          back: "Orqaga",
        },
        pagesData: {
          homePage: {
            title: "ULTRA VEDA Klinikasi Sizning Sog’ligingiz Haqida Qayg’uradi",
            subtitle:
              "ULTRA VEDA klinikasida siz sog'ligingiz uchun zarur bo'lgan barcha ko'riklardan o'tishingiz va davolanishingiz mumkin",
          },
          newsPage: {
            description:
              "ULTRA VEDA so'nggi yangiliklardan xabardor bo'ling! Bizning sahifamiz hamjamiyatimizga muhim yangiliklar, sog'liq uchun maslahatlar va biz taklif qilayotgan xizmatlar haqida tushunchalar berishga bag'ishlangan.",
          },
          contactPage: {
            biz_bilan_boglaning: "Biz bilan bog'laning",
            ishonch_sozlari:
              "Biz har qanday savolingizga javob berishdan xursand bo'lamiz. Telefon va elektron pochta ma'lumotlari saytda e'lon qilinmaydi.",
            manzil_sozi: "Manzil",
            manzili: "Urganch sh, Temiryo’lchi MFY, Yoshlik ko’chasi 18/3v uy",
          },
          aboutPage: {
            subtitle1: "Bizning ULTRA VEDA klinikamiz",
            description1: "ULTRA VEDA  diagnostika, davolash va o’quv markazi. UZI Doppler, rentgenologiya, nevrologiya. kardiologiya, terapiya, ginekologiya, pediatriya,  jarrohlik, kolposkop, laboratoriya, gistologiya va tibbiy radiologiya mutaxassisligi bo’yicha o’quv kurslari  bilan shug'ullanadigan ixtisoslashgan tibbiyot muassasasidir. Klinikada 15 dan ortiq turli yo'nalishlardagi tor mutaxassisliklar bo'yicha 20 dan ortiq yuqori malakali shifokorlar jamoasi faoliyat olib boradi va bemorlarga keng qamrovli tibbiy yordam ko‘rsatish maqsadida zamonaviy texnologiyalar va ilg‘or diagnostika usullaridan foydalaniladi. Bu yerda yuqori malakali mutaxassislar nevrologiyaning tor yo‘nalishlarida katta tajribaga ega bo‘lib, bemorlarga samarali va sifatli davolash xizmatlarini taqdim etishadi. Klinikada barcha kasalliklarni davolash uchun yuqori darajadagi tibbiy yordam ko‘rsatish uchun barcha sharoitlar mavjud.",
            subDescription: "Ultra tovush tekshiruvi — tibbiyotda va boshqa sohalarda keng qo'llaniladigan tasvirlash usuli bo'lib, yuqori chastotali tovush to'lqinlaridan foydalanadi. Bu usul asosan quyidagi maqsadlar uchun ishlatiladi",
            subListItem1: "Ultra tovush tekshiruvi ichki organlarni va to'qimalarni ko'rish, shuningdek, kasalliklarni aniqlash uchun ishlatiladi, masalan, yurak, jigar, buyrak va boshqa organlarni tekshirishda.",
            subListItem2: "Bemorlarning holatini kuzatish va davolash jarayonini baholashda qo'llaniladi.",
            subListItem3: "Ultra tovush tekshiruvi homiladorlik vaqtida homila rivojlanishini kuzatish va uning holatini baholash uchun muhimdir",
            subListItem4: "Bu tekshirish usuli bemorlar uchun xavfsiz va zararsiz hisoblanadi, chunki u radiatsiyadan foydalanmaydi",
            subListItem5: "Zamonaviy ultra tovush uskunalari 3D va 4D tasvirlarni yaratish imkonini beradi, bu esa tashxis va davolash jarayonini yanada samarali qiladi.",
            subtitle2: "Nega aynan ULTRA VEDA ni tanlashingiz kerak?",
            description2:
              "ULTRA VEDA – 5 yil davomida bemorlarning salomatligini tiklash va saqlashda muvaffaqiyatli yordam berib kelayotgan va har qanday kasallikka yuqori malakali yordam ko‘rsatish bo‘yicha o‘z xizmat turlarini muntazam kengaytirib borayotgan tibbiy klinikalar tarmog‘idir.",
            subtitle3: "Bizning sertifikatlarimiz",
            afzalliklar: {
              afzallik1: "Individual yondashuv",
              afzallik2: "Xalqaro sertifikatlar",
              afzallik3: "Qulay joylashuv",
            },
          },
          testimonialPage: {
            testimonials: {
              test1: {
                author: "Aziza Ahmedova",
                reviews:
                  "Men ushbu shifoxonaning shifokorlari va tibbiyot xodimlariga ularning professionalligi va e'tiborli munosabati uchun minnatdorman. Har doim tabassum bilan kutib olishdi va davolanishimning har bir bosqichida yordam berishga tayyor edilar. Ularning g'amxo'rligi va bilimlari tufayli tezda tiklandim. Bu qiyin paytda ko'rsatgan yordamingiz va qo'llab-quvvatlaganingiz uchun katta rahmat!",
              },
              test2: {
                author: "Jasur Samandarov",
                reviews:
                  "Ushbu shifoxonada davolangandan keyin o'zimni butunlay boshqacha odamdek his qildim. Shifokorlar va hamshiralarning har bosqichda menga ko'rsatgan ajoyib yordami va e'tiboridan minnatdorman. Ularning professionalligi va g'amxo'rligi davolanish jarayonini ancha yengil qildi. Tibbiyot xodimlarining barchasiga chin yurakdan minnatdorchilik bildiraman!",
              },
              test3: {
                author: "Shahlo Yunusova",
                reviews:
                  "Men davolanish shunchalik qulay bo'lishi mumkin deb o'ylamagan edim, to shu shifoxonaga tushgunimcha. Bu yerda shifokorlar haqiqiy professionallar, hamshiralarning esa har doim mehribon va samimiy edi. Tiklanish jarayoni yuqori darajada tashkil etilgan edi va men o'zimni ishonchli qo'llarda his qildim. Barcha xodimlarga g'amxo'rlik va e'tiboringiz uchun katta rahmat!",
              },
            },
          },
          doctorsPage: {
            description:
              "ULTRA VEDA tibbiyot markazlari tarmog'i tibbiyotning turli yo'nalishlari bo'yicha yuqori malakali mutaxassislardan iborat ahil jamoadir. Ularning har biri ta'sirchan ish tajribasi va benuqson obro'ga ega. Bizning shifokorlarimiz uchun imkonsiz narsa yo'q - ular eng qiyin holatlarda ham yordam berishadi.",
          },
          servicePage: {
            serviceType: "Xizmat turi",
            doctor: "Shifokor",
            doctorLevel: "Oliy toifali shifokor",
            consultation: "Bepul konsultatsiya oling",
            description:
              "ULTRA VEDA tibbiyot klinikalari tarmog'ini tobora ko'proq bemorlar tanlamoqda, chunki u har qanday kasallikni to'g'ri tashxislash va samarali davolash uchun barcha imkoniyatlarni birlashtiradi. Natijaga kafolat beramiz!",
          },
        },
        main: {
          counters: {
            counterNumber1: "Kunlik mijozlar soni",
            counterNumber2: "Yiliga davolangan bemorlar soni",
            counterNumber3: "Malakali shifokorlar soni",
            counterNumber4: "Operatsiyalar soni",
          },
          sertificates: "Bizning sertifikatlarimiz",
          footer: {
            title: "ULTRA VEDA KLINIKASI",
            description:
              "ULTRA VEDA Klinikasida siz sog'liginggiz uchun zarur bo'lgan barcha ko'riklardan o'tishinggiz va davolanishinggiz mumkin",
            subtitle: "Foydali havolalar",
          },
          aboutUs: {
            level: "5 yillik tajriba",
            desc: "“ULTRA VEDA” jadal rivojlanayotgan zamonaviy tibbiy klinikalar tarmog‘i bo‘lib, 5 yildan buyon o‘z bemorlariga sog‘lig‘ini tiklash va saqlashda muvaffaqiyatli yordam berib kelmoqda.",
          },
          testimonials: {
            title: "Mijozlarimiz fikrlari",
            subtitle:
              "Ultra Veda Klinikasini tobora ko'proq bemorlar tanlamoqda, chunki u har qanday kasallikni to'g'ri tashxislash va samarali davolash uchun barcha imkoniyatlarni birlashtiradi. Natijaga kafolat beramiz!",
            client: "Mijoz",
          },
        },
        form: {
          ism: "Ismingiz",
          phone: "Telefon raqamingiz",
          message: "Xabar...",
        },
        seo: {
          seo1: {
            yearsOf: "24 yillik",
            experience: "tajriba",
            kasbi: "Patalog anatom",
            toifa: "Oliy toifali shifokor",
            FIO: "Avezov Abadjan Urunbayevich",
            FI: "Avezov Abadjan",
            info: "Vrach Patolog anatom, Tibbiyot fanlari bo’yicha falsafa doktori, UVDC klinikasi ta’sischisi",
            skills: "Kasbiy ko'nikmalari",
            skill_1: "Gistologiya, Patologik anatomiya, sud tibbiy ekspertizasi, pedagogik texnologiya va kompyuter texnologiyasi",
            skill_2: "Kasallikka hujayra darajasida  to'g'ri tashxis qo'yish",
          },
          seo2: {
            yearsOf: "22 yillik",
            experience: "tajriba",
            kasbi: "Tibbiy Radiolog",
            toifa: "Oliy toifali shifokor",
            FIO: "Aytimova Gulsanam Yusupovna",
            FI: "Aytimova Gulsanam",
            info: "Tibbiyot fanlari bo'yicha falsafa doktori Tibbiy Radiolog bo'lib, hozirda UVDC klinikasida faoliyat olib boradi. Gulsanam Aytimova bu sohada 22 yillik tajribaga ega.",
            skills: "Kasbiy ko'nikmalari",
            skill_1: "Raqamli radiografiya, kompyuter tomografiyasi, magnit-rezonans tomografiyasi va ultratovush kabi turli radiologik usullar orqali tasvirlar olish.",
            skill_2: "Kasallikka to'g'ri tashxis qo'yish",
          },
        },
        doctorsInfo: {
          doc1name: "Bobojanov Azamat",
          doc1job: "Jarroh",
          doc2name: "Ro'zimova E'tibor",
          doc2job: "Okusher Ginekolog",
          doc3name: "Otajonov Erkin",
          doc3job: "Nevropatolog",
          doc4name: "Kabulova Muhabbat",
          doc4job: "Kardiolog",
          doc5name: "Urinbayeva Nilufar",
          doc5job: "Kardiolog terapevt",
          doc6name: "Allaberganova Rohila",
          doc6job: "Psixolog",
          doc7name: "Yangiboyev Dilshod",
          doc7job: "Vrach Laborant",
          doc8name: "Yo'ldasheva Shaxlo",
          doc8job: "Vrach Terapevt",
        },
      },
    },
    ru: {
      translation: {
        headersLinks: {
          home: "Главная",
          about: "О нас",
          doctors: "Врачи",
          service: "Услуги",
          reviews: "Отзывы",
          news: "Новости",
          contact: "Контакты",
          gallery: "Галерея",
        },
        btns: {
          zayavka_btn: "Записаться на прием",
          more: "Подробнее",
          send: "Отправить",
          back: "Назад",
        },
        pagesData: {
          homePage: {
            title: "Клиника ULTRA VEDA Заботится о Вашем Здоровье",
            subtitle:
              "В клинике ULTRA VEDA вы можете пройти все необходимые обследования и получить лечение для вашего здоровья.",
          },

          newsPage: {
            description:
              "Будьте в курсе последних новостей ULTRA VEDA! Наш блог посвящен важным новостям для нашего сообщества, советам по здоровью и представлению услуг, которые мы предлагаем.",
          },
          contactPage: {
            biz_bilan_boglaning: "Связаться с нами",
            ishonch_sozlari:
              "Мы будем рады ответить на любой ваш вопрос. Телефонные и электронные почтовые данные не публикуются на сайте.",
            manzil_sozi: "Адрес",
            manzili: "г. Ургенч, Тимирёльчи МФЙ, ул. Ёшлик, д. 18/3в",
          },
          aboutPage: {
            subtitle1: "Наша клиника ULTRA VEDA",
            description1: "ULTRA VEDA — это специализированное медицинское учреждение, занимающееся диагностикой, лечением и обучением. Здесь предлагаются курсы по УЗИ с допплером, рентгенологии, неврологии, кардиологии, терапии, гинекологии, педиатрии, хирургии, кольпоскопии, лабораторным исследованиям, гистологии и медицинской радиологии. В клинике работают более 20 высококвалифицированных врачей по более чем 15 направлениям. В учреждении используются современные технологии и передовые методы диагностики для предоставления пациентам комплексной медицинской помощи. Специалисты с большим опытом в узких направлениях неврологии оказывают эффективные и качественные лечебные услуги. В клинике созданы все условия для оказания высококлассной медицинской помощи по лечению различных заболеваний.",
            subDescription: "Ультразвуковое исследование — это широко применяемый метод визуализации в медицине и других областях, использующий высокочастотные звуковые волны. Этот метод в основном используется для следующих целей",
            subListItem1: "Ультразвуковое исследование используется для визуализации внутренних органов и тканей, а также для выявления заболеваний, например, для обследования сердца, печени, почек и других органов.",
            subListItem2: "Применяется для наблюдения за состоянием пациентов и оценки процесса лечения.",
            subListItem3: "Ультразвуковое исследование важно для мониторинга развития плода во время беременности и оценки его состояния.",
            subListItem4: "Этот метод является безопасным и безвредным для пациентов, так как не использует радиацию.",
            subListItem5: "Современное ультразвуковое оборудование позволяет создавать 3D и 4D изображения, что делает процесс диагностики и лечения еще более эффективным.",
            subtitle2: "Почему стоит выбрать ULTRA VEDA?",
            description2: "ULTRA VEDA — это сеть медицинских клиник, которая успешно помогает восстанавливать и сохранять здоровье пациентов на протяжении 5 лет, постоянно расширяя спектр своих услуг по оказанию высококвалифицированной помощи при любых заболеваниях.",
            subtitle3: "Наши сертификаты",
            afzalliklar: {
              afzallik1: "Индивидуальный подход",
              afzallik2: "Международные сертификаты",
              afzallik3: "Удобное расположение",
            },
          },
          testimonialPage: {
            testimonials: {
              test1: {
                author: "Азиза Ахмедова",
                reviews:
                  "Я благодарна врачам и медицинскому персоналу этой клиники за их профессионализм и внимательное отношение. Они всегда встречали с улыбкой и были готовы помочь на каждом этапе моего лечения. Благодаря их заботе и знаниям я быстро восстановилась. Большое спасибо за помощь и поддержку в трудное время!",
              },
              test2: {
                author: "Жасур Самандаров",
                reviews:
                  "После лечения в этой клинике я чувствую себя совершенно другим человеком. Я благодарен врачам и медсестрам за их замечательную помощь и внимание на каждом этапе. Их профессионализм и забота сделали процесс лечения значительно легче. Я искренне благодарен всему медицинскому персоналу!",
              },
              test3: {
                author: "Шахло Юнусова",
                reviews:
                  "Я не думала, что лечение может быть таким комфортным, пока не попала в эту клинику. Здесь врачи настоящие профессионалы, а медсестры всегда были добрыми и искренними. Процесс восстановления был организован на высшем уровне, и я чувствовала себя в надежных руках. Большое спасибо всем сотрудникам за заботу и внимание!",
              },
            },
          },
          doctorsPage: {
            description:
              "Сеть медицинских центров ULTRA VEDA представляет собой сплоченную команду высококвалифицированных специалистов в различных областях медицины. Каждый из них имеет впечатляющий опыт работы и безупречную репутацию. Для наших врачей нет ничего невозможного — они помогают даже в самых сложных случаях.",
          },
          servicePage: {
            serviceType: "Тип услуги",
            doctor: "Врач",
            doctorLevel: "Врач высшей категории",
            consultation: "Получите бесплатную консультацию",
            description:
              "Все больше пациентов выбирают сеть медицинских клиник ULTRA VEDA, так как она объединяет все возможности для правильной диагностики и эффективного лечения любого заболевания. Гарантируем результат!"
          }

        },
        main: {
          counters: {
            counterNumber1: "Количество клиентов в день",
            counterNumber2: "Количество пациентов в год",
            counterNumber3: "Количество квалифицированных врачей",
            counterNumber4: "Количество операций",
          },
          testimonials: {
            title: "Мнение наших клиентов",
            subtitle:
              "Сеть клиник Ultra Veda становится все более популярной среди пациентов, так как она объединяет все возможности для точной диагностики и эффективного лечения любых заболеваний. Мы гарантируем результат!",
            client: "Клиент",
          },

          sertificates: "Наши сертификаты",
          footer: {
            title: "КЛИНИКА ULTRA VEDA",
            description:
              "В клинике ULTRA VEDA вы можете пройти все необходимые обследования и получить лечение для вашего здоровья.",
            subtitle: "Полезные ссылки",
          },
          aboutUs: {
            level: "5 лет опыта",
            desc: "“ULTRA VEDA” — быстро развивающаяся современная сеть медицинских клиник, которая успешно помогает своим пациентам восстанавливать и поддерживать здоровье уже 5 лет.",
          },
        },
        form: {
          ism: "Имя",
          phone: "Ваш телефон",
          message: "Сообщение...",
        },
        seo: {
          yearsOf: "22 лет",
          experience: "опыт",
          kasbi: "Медицинский радиолог",
          toifa: "Врач высшей категории",
          FIO: "Айтимова Гульсанам Юсуповна",
          FI: "Айтимова Гульсанам",
          info: "Доктор философии в области медицины, медицинский радиолог, в настоящее время работает в клинике UVDC. Гульсанам Айтимова имеет 22-летний опыт в этой области.",
          skills: "Профессиональные навыки",
          skill_1: "Получение изображений с помощью различных радиологических методов, таких как цифровая радиография, компьютерная томография, магнитно-резонансная томография и ультразвук.",
          skill_2: "Правильная диагностика заболеваний",
        },
        doctorsInfo: {
          doc1name: "Бобожанов Азамат",
          doc1job: "Хирург",
          doc2name: "Рузимова Эътибор",
          doc2job: "Акушер-гинеколог",
          doc3name: "Отажонов Эркин",
          doc3job: "Невропатолог",
          doc4name: "Кабулова Мухаббат",
          doc4job: "Кардиолог",
          doc5name: "Уринбаева Нилуфар",
          doc5job: "Кардиолог терапевт",
          doc6name: "Аллаберганова Рохила",
          doc6job: "Психолог",
          doc7name: "Янгибоев Дильшод",
          doc7job: "Врач-лаборант",
          doc8name: "Йулдашева Шахло",
          doc8job: "Врач-терапевт",
        },
      },
    },
    en: {
      translation: {
        headersLinks: {
          home: "Home",
          about: "About Us",
          doctors: "Doctors",
          service: "Services",
          reviews: "Reviews",
          news: "News",
          contact: "Contact",
          gallery: "Gallery",
        },
        btns: {
          zayavka_btn: "Make an Appointment",
          more: "More Details",
          send: "Send",
          back: "Cancel",
        },
        pagesData: {
          homePage: {
            title: "ULTRA VEDA Clinic Cares About Your Health",
            subtitle:
              "At ULTRA VEDA Clinic, you can undergo all necessary examinations and receive treatment for your health.",
          },

          newsPage: {
            description:
              "Stay informed about the latest news from ULTRA VEDA! Our blog is dedicated to providing important updates to our community, health tips, and insights into the services we offer.",
          },
          contactPage: {
            biz_bilan_boglaning: "Contact Us",
            ishonch_sozlari:
              "We are happy to answer any questions you may have. Phone and email details will not be published on the site.",
            manzil_sozi: "Address",
            manzili: "Urganch, Temiryo’lchi MFY, Yoshlik Street 18/3v",
          },
          aboutPage: {
            subtitle1: "Our ULTRA VEDA Clinic",
            description1: "ULTRA VEDA is a specialized medical institution focused on diagnostics, treatment, and education. It offers training courses in Doppler ultrasound, radiology, neurology, cardiology, therapy, gynecology, pediatrics, surgery, colposcopy, laboratory studies, histology, and medical radiology. The clinic employs over 20 highly qualified doctors across more than 15 specialties. The facility utilizes modern technologies and advanced diagnostic methods to provide comprehensive medical care to patients. Experts with extensive experience in narrow fields of neurology offer effective and high-quality treatment services. The clinic is equipped with everything necessary to provide top-level medical assistance for treating various diseases.",
            subDescription: "Ultrasound examination is a widely used imaging method in medicine and other fields, utilizing high-frequency sound waves. This method is mainly used for the following purposes",
            subListItem1: "Ultrasound examination is used to visualize internal organs and tissues, as well as to detect diseases, such as in the examination of the heart, liver, kidneys, and other organs.",
            subListItem2: "It is used to monitor patients' conditions and assess the treatment process.",
            subListItem3: "Ultrasound examination is crucial during pregnancy to monitor the development of the fetus and assess its condition.",
            subListItem4: "This method is safe and harmless for patients as it does not use radiation.",
            subListItem5: "Modern ultrasound equipment allows for the creation of 3D and 4D images, making the diagnostic and treatment process even more effective.",
            subtitle2: "Why should you choose ULTRA VEDA?",
            description2: "ULTRA VEDA is a network of medical clinics that has been successfully helping restore and maintain patients' health for 5 years, continually expanding its range of services to provide high-quality care for any illness.",
            subtitle3: "Our Certifications",
            afzalliklar: {
              afzallik1: "Individual approach",
              afzallik2: "International certifications",
              afzallik3: "Convenient location",
            },
          },
          testimonialPage: {
            testimonials: {
              test1: {
                author: "Aziza Ahmedova",
                reviews:
                  "I am grateful to the doctors and medical staff of this clinic for their professionalism and attentive attitude. They always greeted me with a smile and were ready to help at every stage of my treatment. Thanks to their care and knowledge, I recovered quickly. Thank you so much for your support and help during this difficult time!",
              },
              test2: {
                author: "Jasur Samandarov",
                reviews:
                  "After being treated at this clinic, I feel like a completely different person. I am grateful for the wonderful support and attention I received from doctors and nurses at every stage. Their professionalism and care made the treatment process much easier. I sincerely thank all the medical staff!",
              },
              test3: {
                author: "Shahlo Yunusova",
                reviews:
                  "I didn’t think that treatment could be so comfortable until I came to this clinic. The doctors here are true professionals, and the nurses were always kind and sincere. The recovery process was well-organized, and I felt like I was in safe hands. Thank you so much to all the staff for your care and attention!",
              },
            },
          },
          doctorsPage: {
            description:
              "The ULTRA VEDA network of medical centers is a cohesive team of highly qualified specialists in various medical fields. Each has impressive work experience and an impeccable reputation. For our doctors, nothing is impossible—they help even in the most challenging cases.",
          },
          servicePage: {
            serviceType: "Service Type",
            doctor: "Doctor",
            doctorLevel: "Doctor of the highest category",
            consultation: "Get a free consultation",
            description:
              "More and more patients are choosing the ULTRA VEDA medical clinic network because it combines all the possibilities for accurate diagnosis and effective treatment of any disease. We guarantee results!"
          },
        },
        main: {
          counters: {
            counterNumber1: "Daily Number of Clients",
            counterNumber2: "Patients Treated Annually",
            counterNumber3: "Number of Qualified Doctors",
            counterNumber4: "Number of Surgeries",
          },
          testimonials: {
            title: "Client Opinions",
            subtitle:
              "The Ultra Veda clinic network is increasingly chosen by patients because it combines all the resources needed for accurate diagnosis and effective treatment of any illness. We guarantee results!",
            client: "Client",
          },

          sertificates: "Our Certifications",
          footer: {
            title: "ULTRA VEDA CLINIC",
            description:
              "At ULTRA VEDA Clinic, you can undergo all necessary examinations and receive treatment for your health.",
            subtitle: "Useful Links",
          },
          aboutUs: {
            level: "5 Years of Experience",
            desc: "“ULTRA VEDA” is a rapidly developing network of modern medical clinics, successfully helping its patients restore and maintain health for over 5 years.",
          },
        },
        form: {
          ism: "Name",
          phone: "Your Phone Number",
          message: "Message...",
        },
        seo: {
          yearsOf: "22 years",
          experience: "of experience",
          kasbi: "Medical Radiologist",
          toifa: "Top category doctor",
          FIO: "Aytimova Gulsanam Yusupovna",
          FI: "Aytimova Gulsanam",
          info: "PhD in medical sciences, Medical Radiologist currently working at UVDC Clinic. Gulsanam Aytimova has 22 years of experience in this field.",
          skills: "Professional skills",
          skill_1: "Obtaining images using various radiological methods such as digital radiography, computed tomography, magnetic resonance imaging, and ultrasound.",
          skill_2: "Correctly diagnosing diseases",
        },
        doctorsInfo: {
          doc1name: "Bobojanov Azamat",
          doc1job: "Surgeon",
          doc2name: "Ro'zimova E'tibor",
          doc2job: "Obstetrician Gynecologist",
          doc3name: "Otajonov Erkin",
          doc3job: "Neuropathologist",
          doc4name: "Qabulova Muhabbat",
          doc4job: "Cardiologist",
          doc5name: "Urinbayeva Nilufar",
          doc5job: "Cardiologist Therapist",
          doc6name: "Allaberganova Rohila",
          doc6job: "Psychologist",
          doc7name: "Yangiboyev Dilshod",
          doc7job: "Medical Laboratory Technician",
          doc8name: "Yo'ldosheva Shaxlo",
          doc8job: "Therapist",
        },
      },
    },
  },
});
