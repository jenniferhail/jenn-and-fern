import { Client } from '@sendgrid/client'
import { NextResponse } from 'next/server'

export async function PUT(request: Request) {
  const client = new Client()
  client.setApiKey(process.env.SENDGRID_API_KEY || '')

  const reqData = await request.json()
  const reqBody = {
    method: 'PUT' as const,
    url: '/v3/marketing/contacts',
    body: {
      list_ids: ['39d18bd6-a970-4d11-98bc-506a0fd3f2a5'],
      contacts: [{ ...reqData }],
    },
  }

  try {
    const [response, body] = await client.request(reqBody)
    console.log('Response status:', response.statusCode)
    // Handle response based on status code or body content
    if (response.statusCode !== 202) {
      // Adjust based on SendGrid's success response code
      throw new Error(
        `SendGrid request failed with status ${response.statusCode}`
      )
    }
  } catch (error) {
    const typedError = error as { response: { body: { errors: any } } }
    console.error('SendGrid request error:', typedError)
    console.error(
      'SendGrid request error details:',
      typedError.response.body.errors
    )
    return NextResponse.json(
      { message: 'Failed to update contacts' },
      { status: 500 }
    )
  }

  return NextResponse.json({ message: 'Success' }, { status: 200 })
}
