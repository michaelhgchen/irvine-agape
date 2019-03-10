import Typography from 'typography'

const DEFAULT_FONT_STACK = [
  'Helvetica',
  'Arial',
  'Hiragino Sans GB',
  'Microsoft YaHei',
  'WenQuanYi Micro Hei',
  'sans-serif',
]

const typography = new Typography({
  baseFontSize: '18px',
  bodyFontFamily: DEFAULT_FONT_STACK,
  headerFontFamily: DEFAULT_FONT_STACK,
})

export default typography
