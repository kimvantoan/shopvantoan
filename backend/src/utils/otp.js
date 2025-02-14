import CryptoJS from "crypto-js";

export function generateOTP(secret, timestamp = Math.floor(Date.now() / 1000)) {
  const hmac = CryptoJS.HmacSHA1(timestamp.toString(), secret);
  const hmacValue = hmac.toString(CryptoJS.enc.Hex);

  const offset = parseInt(hmacValue.slice(-1), 16);

  const otp = (
    (parseInt(hmacValue.slice(offset * 2, offset * 2 + 8), 16) & 0x7fffffff) %
    1000000
  )
    .toString()
    .padStart(6, "0");

  return otp;
}

export function verifyOTP(secret, otp, window = 120) {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  
  for (let i = -window; i <= window; i++) {
    const timestamp = currentTimestamp + i;
    if (generateOTP(secret, timestamp) === otp) {
      return true;
    }
  }

  return false;
}

