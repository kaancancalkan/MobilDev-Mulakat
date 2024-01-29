//diziler , dizi boyutu gibi değişkenler burada tanımlanıyor.
let data = [];
const dataSize = 500;
const minValue = 1;
const maxValue = 10000;
for (let i = 0; i < dataSize; i++) {
    data.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
}

// bu kısımda normalizasyonu hesaplıyoruz
function normalizeData(newElement) {
    // Yeni eleman ekleme
    data.push(newElement);

    
    const currentMin = Math.min(...data);
    const currentMax = Math.max(...data);

    //normalizasyon
    const normalizedData = data.map(x => (x - currentMin) / (currentMax - currentMin));

    //fonksiyon çıktısı
    return normalizedData;
}

//test senaryosu
const newElement = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
const normalizedData = normalizeData(newElement);
console.log("Dizi uzunluğu:", normalizedData.length);
console.log("Normalleştirilmiş veriler:", normalizedData);