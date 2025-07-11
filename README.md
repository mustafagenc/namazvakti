# Namaz Vakitleri API

Bu API, Dünya'daki tüm şehirlerin namaz vakitlerini hesaplayan bir API'dir.

Hesaplama yöntemi [praytimes.org](http://praytimes.org/) sitesinden alınmıştır.

## API Erişim Noktaları

- API Erişim Adresi: https://api.namazvakti.app
- Swagger Docs Heroku: https://api.namazvakti.app/docs
- Postman Collection:
  https://www.getpostman.com/collections/9d4e7131672ed2619725

| Metod | Erişim Noktası                                                                                                                  | Açıklama                                                                                         |
| ----: | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|   GET | [/api/v1/countries](https://api.namazvakti.app/api/v1/countries)                                                                | Veritabanındaki tüm ülkeleri dizi olarak döndürür.                                               |
|   GET | [/api/v1/cities/:country_id](https://api.namazvakti.app/api/v1/cities/225)                                                      | Verilen `country_id` değeriyle eşleşen tüm şehirleri döndürür.                                   |
|   GET | [/api/v1/towns/:city_id](https://api.namazvakti.app/api/v1/towns/2170)                                                          | Verilen `city_id` değeriyle eşleşen tüm ilçeleri döndürür.                                       |
|   GET | [/api/v1/town/:name](https://api.namazvakti.app/api/v1/town/İzm)                                                                | İsme göre arama yapmak için en az 3 karakter gönderilmelisiniz 10 kayıt döner                    |
|   GET | [/api/v1/nearest/:latitude/:longitude](https://api.namazvakti.app/api/v1/nearest/41.0247135/29.1039466)                         | Verdiğiniz koordinatlara göre en yakın ilçenin bilgilerini döner                                 |
|   GET | [/api/v1/praytimes/:townid](https://api.namazvakti.app/api/v1/praytimes/108812)                                                 | Belirtilen `townid` değerine göre namaz vakitlerini döndürür                                     |
|   GET | [/api/v1/prayingtime/monthly/:townid](https://api.namazvakti.app/api/v1/prayingtime/monthly/108812)                             | Belirtilen `townid` değerine göre bulunduğumuz ayın namaz vakitlerini döndürür                   |
|   GET | [/api/v1/prayingtime/yearly/:townid](https://api.namazvakti.app/api/v1/prayingtime/yearly/108812)                               | Belirtilen `townid` değerine göre bir sonraki yılın sonuna kadar olan namaz vakitlerini döndürür |
|   GET | [/api/v1/prayingtime/nearest/:latitude/:longitude](https://api.namazvakti.app/api/v1/prayingtime/nearest/41.0247135/29.1039466) | Verdiğiniz koordinatlara en yakın ilçenin namaz vakitlerini döner                                |

## Türkiye için hesaplama yöntemlerinde kullanılan kaynaklar

### Diyanet işleri başkanlığına göre

- İmsak : 18 derece
- Yatsı: 17 derece

```
Diyanet: {
    name: 'Diyanet İşleri Başkanlığı',
    params: {
        fajr: 18, // İmsak
        dhuhr: 6, // Öğle
        asr: 1.09, // İkindi
        maghrib: 2.2, // Akşam
        isha: 17, // Yatsı
        midnight: 'Jafari' // Gece Yarısı
    }
}
```

### Bağlantılar

- [Fazilet Takvimi](https://fazilettakvimi.com/sual-ve-cevaplar/14/)
- [Türk Takvimi](https://www.turktakvim.com/index.php?link=html/muhim_tenbih.html)
- [Namaz Vakti](https://www.namazvakti.com/tr.1.pdf)
- [Akra](https://akra.media/Araclar/NamazVakti)

## Stats

![Alt](https://repobeats.axiom.co/api/embed/ea86e58d4d95508a71d5d33a07a6c635ce1fce80.svg 'Repobeats analytics image')
