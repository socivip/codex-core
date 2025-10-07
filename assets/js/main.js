(function () {
    const nav = document.getElementById('primaryNav');
    const menuToggle = document.getElementById('menuToggle');
    const yearEl = document.getElementById('year');

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('is-open')) {
                    nav.classList.remove('is-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    const cityData = [
        { name: 'Adana', slug: 'adana', salonCount: 186, districts: ['Seyhan', 'Çukurova', 'Yüreğir', 'Sarıçam', 'Ceyhan', 'Kozan', 'Karaisalı', 'Pozantı', 'Karataş'] },
        { name: 'Adıyaman', slug: 'adiyaman', salonCount: 64, districts: ['Merkez', 'Kahta', 'Besni', 'Gölbaşı', 'Çelikhan', 'Gerger', 'Tut', 'Sincik'] },
        { name: 'Afyonkarahisar', slug: 'afyonkarahisar', salonCount: 72, districts: ['Merkez', 'Sandıklı', 'Dinar', 'Emirdağ', 'Bolvadin', 'Çay', 'Şuhut', 'İscehisar'] },
        { name: 'Ağrı', slug: 'agri', salonCount: 41, districts: ['Merkez', 'Doğubayazıt', 'Patnos', 'Eleşkirt', 'Tutak', 'Diyadin', 'Taşlıçay', 'Hamur'] },
        { name: 'Amasya', slug: 'amasya', salonCount: 38, districts: ['Merkez', 'Merzifon', 'Suluova', 'Taşova', 'Gümüşhacıköy', 'Hamamözü'] },
        { name: 'Ankara', slug: 'ankara', salonCount: 560, districts: ['Çankaya', 'Yenimahalle', 'Keçiören', 'Etimesgut', 'Sincan', 'Altındağ', 'Mamak', 'Pursaklar', 'Polatlı', 'Gölbaşı'] },
        { name: 'Antalya', slug: 'antalya', salonCount: 420, districts: ['Muratpaşa', 'Konyaaltı', 'Kepez', 'Alanya', 'Manavgat', 'Serik', 'Kemer', 'Kaş', 'Finike', 'Kumluca'] },
        { name: 'Artvin', slug: 'artvin', salonCount: 22, districts: ['Merkez', 'Hopa', 'Arhavi', 'Borçka', 'Yusufeli', 'Şavşat', 'Ardanuç', 'Murgul'] },
        { name: 'Aydın', slug: 'aydin', salonCount: 198, districts: ['Efeler', 'Kuşadası', 'Didim', 'Nazilli', 'Söke', 'Germencik', 'Bozdoğan', 'Çine', 'Koçarlı'] },
        { name: 'Balıkesir', slug: 'balikesir', salonCount: 210, districts: ['Karesi', 'Altıeylül', 'Edremit', 'Bandırma', 'Ayvalık', 'Burhaniye', 'Gönen', 'Susurluk', 'Sındırgı'] },
        { name: 'Bilecik', slug: 'bilecik', salonCount: 36, districts: ['Merkez', 'Bozüyük', 'Osmaneli', 'Pazaryeri', 'Söğüt', 'İnhisar', 'Gölpazarı', 'Yenipazar'] },
        { name: 'Bingöl', slug: 'bingol', salonCount: 24, districts: ['Merkez', 'Genç', 'Solhan', 'Karlıova', 'Kiğı', 'Adaklı', 'Yayladere', 'Yedisu'] },
        { name: 'Bitlis', slug: 'bitlis', salonCount: 28, districts: ['Merkez', 'Tatvan', 'Ahlat', 'Güroymak', 'Hizan', 'Mutki', 'Adilcevaz'] },
        { name: 'Bolu', slug: 'bolu', salonCount: 44, districts: ['Merkez', 'Gerede', 'Mudurnu', 'Mengen', 'Göynük', 'Yeniçağa', 'Seben', 'Dörtdivan'] },
        { name: 'Burdur', slug: 'burdur', salonCount: 32, districts: ['Merkez', 'Bucak', 'Gölhisar', 'Yeşilova', 'Tefenni', 'Ağlasun', 'Karamanlı', 'Çeltikçi'] },
        { name: 'Bursa', slug: 'bursa', salonCount: 520, districts: ['Nilüfer', 'Osmangazi', 'Yıldırım', 'Gemlik', 'İnegöl', 'Mudanya', 'Gürsu', 'Kestel', 'Karacabey', 'Mustafakemalpaşa'] },
        { name: 'Çanakkale', slug: 'canakkale', salonCount: 58, districts: ['Merkez', 'Çan', 'Biga', 'Ezine', 'Ayvacık', 'Gelibolu', 'Bayramiç', 'Lapseki', 'Yenice'] },
        { name: 'Çankırı', slug: 'cankiri', salonCount: 19, districts: ['Merkez', 'Çerkeş', 'Ilgaz', 'Kızılırmak', 'Orta', 'Eldivan', 'Kurşunlu', 'Şabanözü', 'Yapraklı', 'Atkaracalar'] },
        { name: 'Çorum', slug: 'corum', salonCount: 54, districts: ['Merkez', 'Sungurlu', 'Osmancık', 'İskilip', 'Alaca', 'Uğurludağ', 'Dodurga', 'Kargı', 'Laçin'] },
        { name: 'Denizli', slug: 'denizli', salonCount: 176, districts: ['Pamukkale', 'Merkezefendi', 'Çivril', 'Acıpayam', 'Tavas', 'Honaz', 'Buldan', 'Serinhisar', 'Çameli'] },
        { name: 'Diyarbakır', slug: 'diyarbakir', salonCount: 162, districts: ['Kayapınar', 'Bağlar', 'Yenişehir', 'Sur', 'Ergani', 'Bismil', 'Çınar', 'Silvan', 'Lice', 'Çermik'] },
        { name: 'Edirne', slug: 'edirne', salonCount: 48, districts: ['Merkez', 'Keşan', 'Uzunköprü', 'İpsala', 'Havsa', 'Meriç', 'Enez', 'Süloğlu', 'Lalapaşa'] },
        { name: 'Elazığ', slug: 'elazig', salonCount: 66, districts: ['Merkez', 'Kovancılar', 'Karakoçan', 'Palu', 'Sivrice', 'Arıcak', 'Maden', 'Baskil', 'Alacakaya'] },
        { name: 'Erzincan', slug: 'erzincan', salonCount: 26, districts: ['Merkez', 'Tercan', 'Üzümlü', 'Refahiye', 'İliç', 'Çayırlı', 'Kemah', 'Kemaliye'] },
        { name: 'Erzurum', slug: 'erzurum', salonCount: 82, districts: ['Yakutiye', 'Palandöken', 'Aziziye', 'Oltu', 'Pasinler', 'Horasan', 'Aşkale', 'Hınıs', 'İspir'] },
        { name: 'Eskişehir', slug: 'eskisehir', salonCount: 190, districts: ['Tepebaşı', 'Odunpazarı', 'Sivrihisar', 'Çifteler', 'Alpu', 'Beylikova', 'Mihalgazi', 'İnönü'] },
        { name: 'Gaziantep', slug: 'gaziantep', salonCount: 340, districts: ['Şahinbey', 'Şehitkamil', 'Nizip', 'İslahiye', 'Araban', 'Nurdağı', 'Karkamış', 'Yavuzeli', 'Oğuzeli'] },
        { name: 'Giresun', slug: 'giresun', salonCount: 47, districts: ['Merkez', 'Bulancak', 'Görele', 'Tirebolu', 'Espiye', 'Dereli', 'Keşap', 'Şebinkarahisar'] },
        { name: 'Gümüşhane', slug: 'gumushane', salonCount: 17, districts: ['Merkez', 'Kelkit', 'Şiran', 'Torul', 'Köse', 'Kürtün'] },
        { name: 'Hakkâri', slug: 'hakkari', salonCount: 18, districts: ['Merkez', 'Yüksekova', 'Şemdinli', 'Çukurca', 'Derecik'] },
        { name: 'Hatay', slug: 'hatay', salonCount: 210, districts: ['Antakya', 'Defne', 'İskenderun', 'Arsuz', 'Reyhanlı', 'Dörtyol', 'Samandağ', 'Kırıkhan', 'Altınözü'] },
        { name: 'Isparta', slug: 'isparta', salonCount: 52, districts: ['Merkez', 'Eğirdir', 'Yalvaç', 'Keçiborlu', 'Şarkikaraağaç', 'Gelendost', 'Senirkent', 'Uluborlu'] },
        { name: 'Mersin', slug: 'mersin', salonCount: 268, districts: ['Yenişehir', 'Mezitli', 'Toroslar', 'Akdeniz', 'Tarsus', 'Silifke', 'Erdemli', 'Anamur', 'Mut', 'Bozyazı'] },
        { name: 'İstanbul', slug: 'istanbul', salonCount: 1780, districts: ['Kadıköy', 'Beşiktaş', 'Şişli', 'Üsküdar', 'Ataşehir', 'Bakırköy', 'Beyoğlu', 'Sarıyer', 'Maltepe', 'Kartal', 'Başakşehir', 'Pendik'] },
        { name: 'İzmir', slug: 'izmir', salonCount: 620, districts: ['Konak', 'Karşıyaka', 'Bornova', 'Bayraklı', 'Çiğli', 'Buca', 'Karabağlar', 'Urla', 'Çeşme', 'Aliağa', 'Seferihisar'] },
        { name: 'Kars', slug: 'kars', salonCount: 21, districts: ['Merkez', 'Kağızman', 'Sarıkamış', 'Digor', 'Arpaçay', 'Selim', 'Akyaka', 'Susuz'] },
        { name: 'Kastamonu', slug: 'kastamonu', salonCount: 42, districts: ['Merkez', 'Tosya', 'Taşköprü', 'İnebolu', 'Cide', 'Araç', 'Azdavay', 'Doğanyurt', 'Küre'] },
        { name: 'Kayseri', slug: 'kayseri', salonCount: 240, districts: ['Melikgazi', 'Kocasinan', 'Talas', 'Develi', 'Yahyalı', 'İncesu', 'Hacılar', 'Bünyan', 'Pınarbaşı'] },
        { name: 'Kırklareli', slug: 'kirklareli', salonCount: 33, districts: ['Merkez', 'Lüleburgaz', 'Babaeski', 'Vize', 'Pınarhisar', 'Demirköy', 'Kofçaz', 'Pehlivanköy'] },
        { name: 'Kırşehir', slug: 'kirsehir', salonCount: 28, districts: ['Merkez', 'Kaman', 'Mucur', 'Akpınar', 'Çiçekdağı', 'Akçakent', 'Boztepe'] },
        { name: 'Kocaeli', slug: 'kocaeli', salonCount: 310, districts: ['İzmit', 'Gebze', 'Başiskele', 'Kartepe', 'Gölcük', 'Darıca', 'Körfez', 'Çayırova', 'Kandıra'] },
        { name: 'Konya', slug: 'konya', salonCount: 310, districts: ['Selçuklu', 'Meram', 'Karatay', 'Ereğli', 'Akşehir', 'Beyşehir', 'Çumra', 'Seydişehir', 'Ilgın'] },
        { name: 'Kütahya', slug: 'kutahya', salonCount: 36, districts: ['Merkez', 'Tavşanlı', 'Gediz', 'Simav', 'Emet', 'Domaniç', 'Hisarcık', 'Altıntaş'] },
        { name: 'Malatya', slug: 'malatya', salonCount: 110, districts: ['Yeşilyurt', 'Battalgazi', 'Doğanşehir', 'Akçadağ', 'Arapgir', 'Hekimhan', 'Pütürge', 'Darende'] },
        { name: 'Manisa', slug: 'manisa', salonCount: 215, districts: ['Şehzadeler', 'Yunusemre', 'Turgutlu', 'Akhisar', 'Salihli', 'Alaşehir', 'Soma', 'Saruhanlı', 'Kırkağaç'] },
        { name: 'Kahramanmaraş', slug: 'kahramanmaras', salonCount: 168, districts: ['Onikişubat', 'Dulkadiroğlu', 'Elbistan', 'Afşin', 'Göksun', 'Türkoğlu', 'Pazarcık', 'Andırın', 'Çağlayancerit'] },
        { name: 'Mardin', slug: 'mardin', salonCount: 142, districts: ['Artuklu', 'Kızıltepe', 'Midyat', 'Nusaybin', 'Derik', 'Mazıdağı', 'Dargeçit', 'Yeşilli', 'Ömerli', 'Savur'] },
        { name: 'Muğla', slug: 'mugla', salonCount: 260, districts: ['Menteşe', 'Bodrum', 'Fethiye', 'Marmaris', 'Milas', 'Datça', 'Ortaca', 'Köyceğiz', 'Yatağan', 'Seydikemer'] },
        { name: 'Muş', slug: 'mus', salonCount: 26, districts: ['Merkez', 'Bulanık', 'Malazgirt', 'Varto', 'Hasköy', 'Korkut'] },
        { name: 'Nevşehir', slug: 'nevsehir', salonCount: 48, districts: ['Merkez', 'Ürgüp', 'Avanos', 'Göreme', 'Derinkuyu', 'Gülşehir', 'Acıgöl', 'Kozaklı', 'Hacıbektaş'] },
        { name: 'Niğde', slug: 'nigde', salonCount: 34, districts: ['Merkez', 'Bor', 'Çiftlik', 'Ulukışla', 'Çamardı', 'Altunhisar'] },
        { name: 'Ordu', slug: 'ordu', salonCount: 120, districts: ['Altınordu', 'Ünye', 'Fatsa', 'Perşembe', 'Gölköy', 'Korgan', 'Aybastı', 'Kabadüz'] },
        { name: 'Rize', slug: 'rize', salonCount: 40, districts: ['Merkez', 'Çayeli', 'Ardeşen', 'Pazar', 'İyidere', 'Fındıklı', 'Hemşin', 'Güneysu'] },
        { name: 'Sakarya', slug: 'sakarya', salonCount: 170, districts: ['Adapazarı', 'Serdivan', 'Erenler', 'Hendek', 'Akyazı', 'Sapanca', 'Karasu', 'Ferizli', 'Pamukova'] },
        { name: 'Samsun', slug: 'samsun', salonCount: 210, districts: ['İlkadım', 'Atakum', 'Canik', 'Bafra', 'Çarşamba', 'Terme', 'Vezirköprü', 'Havza', '19 Mayıs'] },
        { name: 'Siirt', slug: 'siirt', salonCount: 23, districts: ['Merkez', 'Kurtalan', 'Pervari', 'Eruh', 'Şirvan', 'Baykan', 'Tillo'] },
        { name: 'Sinop', slug: 'sinop', salonCount: 27, districts: ['Merkez', 'Boyabat', 'Gerze', 'Ayancık', 'Durağan', 'Türkeli', 'Erfelek', 'Saraydüzü'] },
        { name: 'Sivas', slug: 'sivas', salonCount: 82, districts: ['Merkez', 'Şarkışla', 'Suşehri', 'Gürün', 'Zara', 'Yıldızeli', 'Kangal', 'Gemerek', 'Divriği'] },
        { name: 'Tekirdağ', slug: 'tekirdag', salonCount: 188, districts: ['Süleymanpaşa', 'Çorlu', 'Çerkezköy', 'Kapaklı', 'Ergene', 'Malkara', 'Muratlı', 'Hayrabolu', 'Şarköy'] },
        { name: 'Tokat', slug: 'tokat', salonCount: 52, districts: ['Merkez', 'Erbaa', 'Turhal', 'Niksar', 'Zile', 'Reşadiye', 'Pazar', 'Artova', 'Başçiftlik'] },
        { name: 'Trabzon', slug: 'trabzon', salonCount: 198, districts: ['Ortahisar', 'Akçaabat', 'Yomra', 'Arsin', 'Of', 'Vakfıkebir', 'Sürmene', 'Çarşıbaşı', 'Maçka'] },
        { name: 'Tunceli', slug: 'tunceli', salonCount: 14, districts: ['Merkez', 'Pertek', 'Mazgirt', 'Çemişgezek', 'Pülümür', 'Nazımiye', 'Ovacık', 'Hozat'] },
        { name: 'Şanlıurfa', slug: 'sanliurfa', salonCount: 240, districts: ['Haliliye', 'Eyyübiye', 'Karaköprü', 'Siverek', 'Viranşehir', 'Harran', 'Akçakale', 'Birecik', 'Ceylanpınar'] },
        { name: 'Uşak', slug: 'usak', salonCount: 36, districts: ['Merkez', 'Banaz', 'Eşme', 'Ulubey', 'Sivaslı', 'Karahallı'] },
        { name: 'Van', slug: 'van', salonCount: 132, districts: ['İpekyolu', 'Edremit', 'Tuşba', 'Erciş', 'Gürpınar', 'Gevaş', 'Çaldıran', 'Muradiye', 'Özalp'] },
        { name: 'Yozgat', slug: 'yozgat', salonCount: 40, districts: ['Merkez', 'Sorgun', 'Akdağmadeni', 'Yerköy', 'Boğazlıyan', 'Çekerek', 'Sarıkaya', 'Şefaatli'] },
        { name: 'Zonguldak', slug: 'zonguldak', salonCount: 76, districts: ['Merkez', 'Ereğli', 'Çaycuma', 'Devrek', 'Alaplı', 'Gökçebey', 'Kilimli', 'Kozlu'] },
        { name: 'Aksaray', slug: 'aksaray', salonCount: 34, districts: ['Merkez', 'Ortaköy', 'Ağaçören', 'Eskil', 'Gülağaç', 'Güzelyurt', 'Sarıyahşi'] },
        { name: 'Bayburt', slug: 'bayburt', salonCount: 12, districts: ['Merkez', 'Aydıntepe', 'Demirözü'] },
        { name: 'Karaman', slug: 'karaman', salonCount: 28, districts: ['Merkez', 'Ermenek', 'Kazımkarabekir', 'Ayrancı', 'Sarıveliler', 'Başyayla'] },
        { name: 'Kırıkkale', slug: 'kirikkale', salonCount: 30, districts: ['Merkez', 'Yahşihan', 'Keskin', 'Delice', 'Balışeyh', 'Sulakyurt', 'Çelebi'] },
        { name: 'Batman', slug: 'batman', salonCount: 88, districts: ['Merkez', 'Kozluk', 'Sason', 'Beşiri', 'Hasankeyf', 'Gercüş'] },
        { name: 'Şırnak', slug: 'sirnak', salonCount: 52, districts: ['Merkez', 'Cizre', 'Silopi', 'İdil', 'Uludere', 'Beytüşşebap', 'Güçlükonak'] },
        { name: 'Bartın', slug: 'bartin', salonCount: 24, districts: ['Merkez', 'Amasra', 'Ulus', 'Kurucaşile'] },
        { name: 'Ardahan', slug: 'ardahan', salonCount: 16, districts: ['Merkez', 'Göle', 'Çıldır', 'Posof', 'Hanak', 'Damal'] },
        { name: 'Iğdır', slug: 'igdir', salonCount: 20, districts: ['Merkez', 'Tuzluca', 'Aralık', 'Karakoyunlu'] },
        { name: 'Yalova', slug: 'yalova', salonCount: 42, districts: ['Merkez', 'Çiftlikköy', 'Altınova', 'Armutlu', 'Termal', 'Çınarcık'] },
        { name: 'Karabük', slug: 'karabuk', salonCount: 33, districts: ['Merkez', 'Safranbolu', 'Yenice', 'Eskipazar', 'Ovacık', 'Eflani'] },
        { name: 'Kilis', slug: 'kilis', salonCount: 18, districts: ['Merkez', 'Elbeyli', 'Musabeyli', 'Polateli'] },
        { name: 'Osmaniye', slug: 'osmaniye', salonCount: 64, districts: ['Merkez', 'Kadirli', 'Düziçi', 'Bahçe', 'Toprakkale', 'Sumbas', 'Hasanbeyli'] },
        { name: 'Düzce', slug: 'duzce', salonCount: 58, districts: ['Merkez', 'Akçakoca', 'Kaynaşlı', 'Gölyaka', 'Cumayeri', 'Yığılca', 'Gümüşova', 'Çilimli'] }
    ];

    const cityOptions = document.getElementById('cityOptions');
    const districtOptions = document.getElementById('districtOptions');
    const cityInput = document.getElementById('cityInput');
    const districtInput = document.getElementById('districtInput');
    const searchForm = document.getElementById('searchForm');

    const slugify = (value) => value
        .toString()
        .trim()
        .toLowerCase()
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/İ/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/â/g, 'a')
        .replace(/ê/g, 'e')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-');

    if (cityOptions && cityData.length) {
        cityData
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name, 'tr'))
            .forEach((city) => {
                const option = document.createElement('option');
                option.value = city.name;
                cityOptions.appendChild(option);
            });
    }

    const resetDistrict = () => {
        if (!districtInput || !districtOptions) return;
        districtInput.value = '';
        districtInput.setAttribute('placeholder', 'İlçe seçmek için il belirleyin');
        districtInput.disabled = true;
        districtOptions.innerHTML = '';
    };

    const populateDistricts = (districts) => {
        if (!districtOptions) return;
        districtOptions.innerHTML = '';
        districts.forEach((district) => {
            const option = document.createElement('option');
            option.value = district;
            districtOptions.appendChild(option);
        });
    };

    let selectedCity;

    if (cityInput) {
        cityInput.addEventListener('change', (event) => {
            const value = event.target.value.trim();
            const match = cityData.find((city) => city.name.toLowerCase() === value.toLowerCase());

            if (match) {
                selectedCity = match;
                if (districtInput) {
                    districtInput.disabled = false;
                    districtInput.placeholder = `${match.name} ilçeleri`;
                    districtInput.focus();
                }
                populateDistricts(match.districts);
            } else {
                selectedCity = undefined;
                resetDistrict();
            }
        });
    }

    if (districtInput) {
        districtInput.addEventListener('change', (event) => {
            if (!selectedCity) {
                event.target.value = '';
                event.target.blur();
                return;
            }
            const value = event.target.value.trim();
            const hasDistrict = selectedCity.districts.some((district) => district.toLowerCase() === value.toLowerCase());
            if (!hasDistrict) {
                event.target.value = '';
            }
        });
    }

    document.querySelectorAll('.select-field__clear').forEach((button) => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            if (!targetId) return;
            const target = document.getElementById(targetId);
            if (!target) return;
            target.value = '';
            target.focus();
            if (target === cityInput) {
                selectedCity = undefined;
                resetDistrict();
            }
        });
    });

    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!selectedCity || !districtInput || !districtInput.value.trim()) {
                if (cityInput && !selectedCity) {
                    cityInput.focus();
                } else if (districtInput && !districtInput.value.trim()) {
                    districtInput.focus();
                }
                return;
            }
            const districtSlug = slugify(districtInput.value);
            const url = `/${selectedCity.slug}/${districtSlug}.html`;
            window.location.href = url;
        });
    }

    document.querySelectorAll('.switch').forEach((switchEl) => {
        switchEl.addEventListener('click', () => {
            switchEl.classList.toggle('is-active');
            const checkbox = switchEl.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        });
    });

    const cityCards = document.getElementById('cityCards');
    if (cityCards) {
        const cardFragment = document.createDocumentFragment();
        cityData.slice(0, 9).forEach((city) => {
            const card = document.createElement('article');
            card.className = 'city-card';
            card.innerHTML = `
                <div class="stack">
                    <div>
                        <h3>${city.name}</h3>
                        <span class="city-card__badge">${city.salonCount}+ salon</span>
                    </div>
                    <p>${city.districts.slice(0, 3).join(', ')} ve diğer ilçeler</p>
                    <div class="city-card__actions">
                        <a class="outline-pill" href="/${city.slug}/${slugify(city.districts[0])}.html">En İyi 10</a>
                        <a class="outline-pill" href="#">Fiyatlar</a>
                        <a class="outline-pill" href="#">Şu Anda Açık</a>
                    </div>
                </div>
            `;
            cardFragment.appendChild(card);
        });
        cityCards.appendChild(cardFragment);
    }

    const filterChips = document.querySelectorAll('.filter-chip');
    const listingGrid = document.getElementById('listingGrid');
    const emptyState = document.getElementById('emptyState');
    const loadingState = document.getElementById('loadingState');

    if (filterChips.length && listingGrid) {
        const cards = Array.from(listingGrid.querySelectorAll('.salon-card'));
        const state = new Set();

        const applyFilters = () => {
            if (loadingState) {
                loadingState.hidden = true;
            }
            let visibleCount = 0;
            cards.forEach((card) => {
                let show = true;
                const services = (card.getAttribute('data-services') || '').split(' ');
                const isOpen = card.getAttribute('data-open') === 'true';
                const isSunday = card.getAttribute('data-sunday') === 'true';

                if (state.has('balayaj') && !services.includes('balayaj')) show = false;
                if (state.has('gelin') && !services.includes('gelin')) show = false;
                if (state.has('keratin') && !services.includes('keratin')) show = false;
                if (state.has('open') && !isOpen) show = false;
                if (state.has('sunday') && !isSunday) show = false;

                card.hidden = !show;
                if (show) visibleCount += 1;
            });

            if (emptyState) {
                emptyState.hidden = visibleCount !== 0;
            }
        };

        filterChips.forEach((chip) => {
            chip.addEventListener('click', () => {
                const key = chip.getAttribute('data-filter');
                if (!key) return;
                if (key === 'featured') {
                    filterChips.forEach((c) => c.classList.remove('is-active'));
                    chip.classList.add('is-active');
                    state.clear();
                    cards.forEach((card) => (card.hidden = false));
                    if (emptyState) emptyState.hidden = true;
                    return;
                }

                chip.classList.toggle('is-active');
                if (state.has(key)) {
                    state.delete(key);
                } else {
                    state.add(key);
                }
                applyFilters();
            });
        });

        const resetButton = document.querySelector('[data-reset-filters]');
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                state.clear();
                filterChips.forEach((chip) => {
                    const key = chip.getAttribute('data-filter');
                    if (key && key !== 'featured') {
                        chip.classList.remove('is-active');
                    } else if (key === 'featured') {
                        chip.classList.add('is-active');
                    }
                });
                cards.forEach((card) => (card.hidden = false));
                if (emptyState) emptyState.hidden = true;
            });
        }
    }
})();
