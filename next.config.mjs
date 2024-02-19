/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const nextConfig = {
  i18n: {
    locales: ['en-us', 'es-us'],
    defaultLocale: 'en-us',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

export default nextConfig
