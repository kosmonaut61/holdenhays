import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['.next/**', 'node_modules/**', 'qa/**', 'vendor/**', 'next-env.d.ts'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: { globals: { window:'readonly', document:'readonly', console:'readonly', setTimeout:'readonly', clearTimeout:'readonly', requestAnimationFrame:'readonly', cancelAnimationFrame:'readonly', ResizeObserver:'readonly', IntersectionObserver:'readonly' } },
    rules: {
      '@typescript-eslint/no-explicit-any':'warn',
      '@typescript-eslint/no-unused-vars':['warn',{argsIgnorePattern:'^_',varsIgnorePattern:'^_'}],
      '@typescript-eslint/no-empty-object-type':'warn',
      'no-undef':'off'
    }
  }
)
