/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import createNextIntlPlugin from 'next-intl/plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

export default withNextIntl(nextConfig)
