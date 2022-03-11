const fs = require('fs')
require('dotenv').config({ path: '.env.production' })

async function generateRobots () {
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT

  const robots = []
  robots.push('User-agent: *')

  if (environment === 'production') {
    robots.push('Disallow: /follow-up')
  } else {
    robots.push('Disallow: /')
  }

  fs.writeFileSync('public/robots.txt', robots.join('\n'))

  console.log(`Robots for environment ${environment} generated successfully`)
}

generateRobots()
