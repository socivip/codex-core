# KadınKuaför – Blesyum Esintili Kadın Kuaförü Keşif Arayüzü

KadınKuaför, Türkiye’deki kadın kuaförlerini 81 il ve 900+ ilçe kapsamında sergileyen, Blesyum tasarım dilinden ilham alan mobil-öncelikli bir web arayüzüdür. Light tema, geniş boşluklu blok düzeni ve pembe (#ec4899) vurgu rengiyle tasarlandı.

## Özellikler

- **Ana sayfa blokları**: Hero > İl/ilçe seçim kartı > fayda kartları > şehir kart grid > CTA > UI kit hiyerarşisi.
- **Tema**: #f7f8fa arka plan, yumuşak gölgeli (#ffffff) kartlar, #0f172a metin rengi ve #ec4899 birincil CTA renkleri.
- **İl/ilçe seçimi**: 81 il için alfabetik arama destekli datalist, il seçildiğinde ilçe alanı otomatik doluyor; `/[il-slug]/[ilce-slug]` desenine yönlendiriyor.
- **Şehir kartları**: Şehir başlığı, salon sayısı rozeti, "En İyi 10", "Fiyatlar", "Şu Anda Açık" outline butonları ile hover’da pembe vurgular.
- **Liste şablonu**: `/bilecik/bozuyuk.html` örneğinde öne çıkan pin alanı, filtre chip’leri, salon kart bileşenleri, boş durum ve skeleton durumları yer alır.
- **Salon profil iskeleti**: Kapak görseli, doğrulama rozeti, fiyat rozetleri, sekmeli içerik ve mobil sticky bottom bar.
- **Mikro etkileşimler**: Mobil menü aç/kapa, switch ve chip aktif durumları, seçim alanlarında temizleme ikonu, filtre sıfırlama.

## Dosya Yapısı

```
index.html              # KadınKuaför ana sayfası
bilecik/bozuyuk.html    # İlçe liste sayfası örneği
assets/css/style.css    # Tema ve bileşen stilleri
assets/js/main.js       # Navigasyon, seçim ve filtre davranışları
```

## Geliştirme

Herhangi bir statik sunucu ile projeyi yerel ortamda inceleyebilirsiniz:

```
npx serve .
# veya
python -m http.server 8000
```

## Notlar

- Salon verileri şimdilik örnek içeriklerle sunulmuştur; gerçek sistemde `GET /api/list?city={il}&district={ilce}&openNow&service` uç noktası ile beslenmesi planlanmaktadır.
- Görseller Unsplash üzerinden örnek olarak bağlanmıştır. Üretim ortamında kendi optimizasyonlu görsellerinizi kullanın.
