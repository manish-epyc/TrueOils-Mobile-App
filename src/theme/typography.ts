// Chicken Hotty (script/logo), Playfair Display (serif headings), and Inter
// (body/UI text, via Google Fonts).
export const fontFamily = {
  script: 'ChickenHotty',

  headingRegular: 'PlayfairDisplay-Regular',
  headingMedium: 'PlayfairDisplay-Medium',
  headingSemiBold: 'PlayfairDisplay-SemiBold',
  headingBold: 'PlayfairDisplay-Bold',

  bodyRegular: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodyBold: 'Inter_700Bold',
} as const;

export const fontSize = {
  xs: 12,
  sm: 13,
  base: 14,
  md: 15,
  lg: 20,
  xl: 13, // heading token, reduced 40% from 22
  display: 33, // heading token, reduced 40% from 55
  displayLg: 35, // heading token, reduced 40% from 58
} as const;
