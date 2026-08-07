// Figma uses "Chicken Hotty" (display) and "TT Norms Pro Serif" (body) — both
// custom/licensed fonts we don't have files for. Using close Google Font
// substitutes (Caveat, Lora) until the real font files are provided.
export const fontFamily = {
  displayRegular: 'Caveat_400Regular',
  displayMedium: 'Caveat_500Medium',
  displaySemiBold: 'Caveat_600SemiBold',
  displayBold: 'Caveat_700Bold',

  bodyRegular: 'Lora_400Regular',
  bodyMedium: 'Lora_500Medium',
  bodyDemiBold: 'Lora_600SemiBold',
  bodyBold: 'Lora_700Bold',
} as const;

export const fontSize = {
  xs: 12,
  sm: 13,
  base: 14,
  md: 15,
  lg: 20,
  xl: 22,
  display: 55,
  displayLg: 58,
} as const;
