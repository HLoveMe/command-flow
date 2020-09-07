const QRCode = require("qrcode-generator")
const typeNumber = 4;
const errorCorrectionLevel = 'L';
const qr = QRCode(typeNumber, errorCorrectionLevel);
qr.addData("AAAA");
qr.make();
console.log(qr.createDataURL(4))