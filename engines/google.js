const cloud = require('../helpers/cloud')

const googleLanguages = {
  'Afrikaans (South Africa)': 'af-ZA',
  'Amharic (Ethiopia)': 'am-ET',
  'Armenian (Armenia)': 'hy-AM',
  'Azerbaijani (Azerbaijan)': 'az-AZ',
  'Indonesian (Indonesia)': 'id-ID',
  'Malay (Malaysia)': 'ms-MY',
  'Bengali (Bangladesh)': 'bn-BD',
  'Bengali (India)': 'bn-IN',
  'Catalan (Spain)': 'ca-ES',
  'Czech (Czech Republic)': 'cs-CZ',
  'Danish (Denmark)': 'da-DK',
  'German (Germany)': 'de-DE',
  'English (Australia)': 'en-AU',
  'English (Canada)': 'en-CA',
  'English (Ghana)': 'en-GH',
  'English (United Kingdom)': 'en-GB',
  'English (India)': 'en-IN',
  'English (Ireland)': 'en-IE',
  'English (Kenya)': 'en-KE',
  'English (New Zealand)': 'en-NZ',
  'English (Nigeria)': 'en-NG',
  'English (Philippines)': 'en-PH',
  'English (South Africa)': 'en-ZA',
  'English (Tanzania)': 'en-TZ',
  'English (United States)': 'en-US',
  'Spanish (Argentina)': 'es-AR',
  'Spanish (Bolivia)': 'es-BO',
  'Spanish (Chile)': 'es-CL',
  'Spanish (Colombia)': 'es-CO',
  'Spanish (Costa Rica)': 'es-CR',
  'Spanish (Ecuador)': 'es-EC',
  'Spanish (El Salvador)': 'es-SV',
  'Spanish (Spain)': 'es-ES',
  'Spanish (United States)': 'es-US',
  'Spanish (Guatemala)': 'es-GT',
  'Spanish (Honduras)': 'es-HN',
  'Spanish (Mexico)': 'es-MX',
  'Spanish (Nicaragua)': 'es-NI',
  'Spanish (Panama)': 'es-PA',
  'Spanish (Paraguay)': 'es-PY',
  'Spanish (Peru)': 'es-PE',
  'Spanish (Puerto Rico)': 'es-PR',
  'Spanish (Dominican Republic)': 'es-DO',
  'Spanish (Uruguay)': 'es-UY',
  'Spanish (Venezuela)': 'es-VE',
  'Basque (Spain)': 'eu-ES',
  'Filipino (Philippines)': 'fil-PH',
  'French (Canada)': 'fr-CA',
  'French (France)': 'fr-FR',
  'Galician (Spain)': 'gl-ES',
  'Georgian (Georgia)': 'ka-GE',
  'Gujarati (India)': 'gu-IN',
  'Croatian (Croatia)': 'hr-HR',
  'Zulu (South Africa)': 'zu-ZA',
  'Icelandic (Iceland)': 'is-IS',
  'Italian (Italy)': 'it-IT',
  'Javanese (Indonesia)': 'jv-ID',
  'Kannada (India)': 'kn-IN',
  'Khmer (Cambodia)': 'km-KH',
  'Lao (Laos)': 'lo-LA',
  'Latvian (Latvia)': 'lv-LV',
  'Lithuanian (Lithuania)': 'lt-LT',
  'Hungarian (Hungary)': 'hu-HU',
  'Malayalam (India)': 'ml-IN',
  'Marathi (India)': 'mr-IN',
  'Dutch (Netherlands)': 'nl-NL',
  'Nepali (Nepal)': 'ne-NP',
  'Norwegian Bokmål (Norway)': 'nb-NO',
  'Polish (Poland)': 'pl-PL',
  'Portuguese (Brazil)': 'pt-BR',
  'Portuguese (Portugal)': 'pt-PT',
  'Romanian (Romania)': 'ro-RO',
  'Sinhala (Sri Lanka)': 'si-LK',
  'Slovak (Slovakia)': 'sk-SK',
  'Slovenian (Slovenia)': 'sl-SI',
  'Sundanese (Indonesia)': 'su-ID',
  'Swahili (Tanzania)': 'sw-TZ',
  'Swahili (Kenya)': 'sw-KE',
  'Finnish (Finland)': 'fi-FI',
  'Swedish (Sweden)': 'sv-SE',
  'Tamil (India)': 'ta-IN',
  'Tamil (Singapore)': 'ta-SG',
  'Tamil (Sri Lanka)': 'ta-LK',
  'Tamil (Malaysia)': 'ta-MY',
  'Telugu (India)': 'te-IN',
  'Vietnamese (Vietnam)': 'vi-VN',
  'Turkish (Turkey)': 'tr-TR',
  'Urdu (Pakistan)': 'ur-PK',
  'Urdu (India)': 'ur-IN',
  'Greek (Greece)': 'el-GR',
  'Bulgarian (Bulgaria)': 'bg-BG',
  'Russian (Russia)': 'ru-RU',
  'Serbian (Serbia)': 'sr-RS',
  'Ukrainian (Ukraine)': 'uk-UA',
  'Hebrew (Israel)': 'he-IL',
  'Arabic (Israel)': 'ar-IL',
  'Arabic (Jordan)': 'ar-JO',
  'Arabic (United Arab Emirates)': 'ar-AE',
  'Arabic (Bahrain)': 'ar-BH',
  'Arabic (Algeria)': 'ar-DZ',
  'Arabic (Saudi Arabia)': 'ar-SA',
  'Arabic (Iraq)': 'ar-IQ',
  'Arabic (Kuwait)': 'ar-KW',
  'Arabic (Morocco)': 'ar-MA',
  'Arabic (Tunisia)': 'ar-TN',
  'Arabic (Oman)': 'ar-OM',
  'Arabic (State of Palestine)': 'ar-PS',
  'Arabic (Qatar)': 'ar-QA',
  'Arabic (Lebanon)': 'ar-LB',
  'Arabic (Egypt)': 'ar-EG',
  'Persian (Iran)': 'fa-IR',
  'Hindi (India)': 'hi-IN',
  'Thai (Thailand)': 'th-TH',
  'Korean (South Korea)': 'ko-KR',
  'Chinese, Mandarin (Traditional, Taiwan)': 'cmn-Hant-TW',
  'Chinese, Cantonese (Traditional, Hong Kong)': 'yue-Hant-HK',
  'Japanese (Japan)': 'ja-JP',
  'Chinese, Mandarin (Simplified, Hong Kong)': 'cmn-Hans-HK',
  'Chinese, Mandarin (Simplified, China)': 'cmn-Hans-CN',
}

const i18nCodes = {
  'ru-RU': 'ru',
  'en-AU': 'en',
  'en-CA': 'en',
  'en-GH': 'en',
  'en-GB': 'en',
  'en-IN': 'en',
  'en-IE': 'en',
  'en-KE': 'en',
  'en-NZ': 'en',
  'en-NG': 'en',
  'en-PH': 'en',
  'en-ZA': 'en',
  'en-TZ': 'en',
  'en-US': 'en',
  'es-AR': 'es',
  'es-BO': 'es',
  'es-CL': 'es',
  'es-CO': 'es',
  'es-CR': 'es',
  'es-EC': 'es',
  'es-SV': 'es',
  'es-ES': 'es',
  'es-US': 'es',
  'es-GT': 'es',
  'es-HN': 'es',
  'es-MX': 'es',
  'es-NI': 'es',
  'es-PA': 'es',
  'es-PY': 'es',
  'es-PE': 'es',
  'es-PR': 'es',
  'es-DO': 'es',
  'es-UY': 'es',
  'es-VE': 'es',
  'pt-BR': 'pt',
  'pt-PT': 'pt',
  'sv-SE': 'sv',
  'tr-TR': 'tr',
  'ja-JP': 'ja',
  'nb-NO': 'no',
  'uk-UA': 'ua',
  'cmn-Hant-TW': 'ch',
  'yue-Hant-HK': 'ch',
  'cmn-Hans-HK': 'ch',
  'cmn-Hans-CN': 'ch',
  'hy-AM': 'am',
  'az-AZ': 'az',
  'ar-IL': 'ar',
  'ar-JO': 'ar',
  'ar-AE': 'ar',
  'ar-BH': 'ar',
  'ar-DZ': 'ar',
  'ar-SA': 'ar',
  'ar-IQ': 'ar',
  'ar-KW': 'ar',
  'ar-MA': 'ar',
  'ar-TN': 'ar',
  'ar-OM': 'ar',
  'ar-PS': 'ar',
  'ar-QA': 'ar',
  'ar-LB': 'ar',
  'ar-EG': 'ar',
  'ko-KR': 'ko',
  'fr-CA': 'fr',
  'fr-FR': 'fr',
  'it-IT': 'it',
  'de-DE': 'ge',
  'am-ET': 'et',
  'hi-IN': 'hi',
  'fa-IR': 'fa',
  'ur-PK': 'ur',
  'ur-IN': 'ur',
  'ro-RO': 'ro',
}

const defaultLanguageCode = 'en-US'

function languageForTelegramCode(telegramCode) {
  if (!telegramCode) {
    return defaultLanguageCode
  }
  for (const key of Object.keys(i18nCodes)) {
    if (telegramCode.toLowerCase().indexOf(key.toLowerCase())) {
      return key
    }
  }
  return defaultLanguageCode
}

async function recognize(filePath, chat, duration) {
  // Check if chat has google credentials
  if (!chat.googleKey) {
    throw new Error('No google credentials')
  }
  // Upload to drive
  const uri = await cloud.put(filePath, chat)
  // Transcribe
  const SpeechClient = require('@google-cloud/speech').SpeechClient
  const speech = new SpeechClient({
    credentials: JSON.parse(chat.googleKey),
  })

  const request = {
    config: {
      enableWordTimeOffsets: true,
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: chat.googleLanguage,
    },
    audio: {
      uri,
    },
  }
  try {
    const [operation] = await speech.longRunningRecognize(request)
    const [response] = await operation.promise()
    const resultingStrings = []
    response.results.forEach((result) => {
      if (!result.alternatives[0].words.length) {
        return
      }
      const firstWord = result.alternatives[0].words[0]
      const lastWord =
        result.alternatives[0].words[result.alternatives[0].words.length - 1]
      const startTime = `${firstWord.startTime.seconds}.${
        firstWord.startTime.nanos / 100000000
      }`
      const endTime = `${lastWord.endTime.seconds}.${
        lastWord.endTime.nanos / 100000000
      }`
      const text = result.alternatives[0].transcript.trim()
      if (text) {
        resultingStrings.push([`${startTime}-${endTime}`, text])
      }
    })
    return resultingStrings
  } catch (err) {
    throw err
  } finally {
    await cloud.del(uri, chat)
  }
}

module.exports = {
  code: 'google',
  name: 'Google Speech',
  languageForTelegramCode,
  defaultLanguageCode,
  recognize,
  languages: Object.keys(googleLanguages).map((k) => ({
    code: googleLanguages[k],
    name: k,
    i18nCode: i18nCodes[googleLanguages[k]],
  })),
}
