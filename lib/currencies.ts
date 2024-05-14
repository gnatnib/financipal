export const Currencies = [
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "IDR", label: "Rp IDR", locale: "id-ID" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
  { value: "GBP", label: "£ Pound", locale: "en-GB" },
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
  
];

export type Currency = (typeof Currencies)[0];
