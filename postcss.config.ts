import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const textSizeAdjustCompat = {
  postcssPlugin: 'text-size-adjust-compat',
  Declaration(decl: any) {
    if (decl.prop !== '-webkit-text-size-adjust') return;

    const hasStandard = decl.parent?.nodes?.some(
      (node: any) => node.type === 'decl' && node.prop === 'text-size-adjust'
    );

    if (!hasStandard) {
      decl.cloneAfter({ prop: 'text-size-adjust', value: decl.value });
    }
  },
};

export default {
  plugins: [tailwindcss(), autoprefixer(), textSizeAdjustCompat],
};