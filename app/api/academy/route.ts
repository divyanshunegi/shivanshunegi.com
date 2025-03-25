import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

if (!process.env.NOTION_API_KEY) {
  throw new Error('Notion API key is not configured');
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_ACADEMY_DATABASE_ID;

if (!databaseId) {
  throw new Error('Notion Academy database ID is not configured');
}

interface NotionError {
  message: string;
  stack?: string;
  body?: unknown;
}

interface AcademyFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  education: string;
  field: string;
  experience: string;
  software: string;
  equipment: string;
  goals: string;
  portfolio: string;
  referral: string;
}

export async function POST(request: Request) {
  try {
    const formData = (await request.json()) as AcademyFormData;

    // Validate input
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!formData[field as keyof AcademyFormData]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    await notion.pages.create({
      parent: {
        database_id: databaseId as string,
      },
      properties: {
        'First Name': {
          title: [
            {
              text: {
                content: formData.firstName,
              },
            },
          ],
        },
        'Last Name': {
          rich_text: [
            {
              text: {
                content: formData.lastName,
              },
            },
          ],
        },
        Email: {
          email: formData.email,
        },
        Phone: {
          phone_number: formData.phone,
        },
        Education: {
          rich_text: [
            {
              text: {
                content: formData.education || '',
              },
            },
          ],
        },
        Field: {
          rich_text: [
            {
              text: {
                content: formData.field || '',
              },
            },
          ],
        },
        Experience: {
          rich_text: [
            {
              text: {
                content: formData.experience || '',
              },
            },
          ],
        },
        Software: {
          rich_text: [
            {
              text: {
                content: formData.software || '',
              },
            },
          ],
        },
        Equipment: {
          rich_text: [
            {
              text: {
                content: formData.equipment || '',
              },
            },
          ],
        },
        Goals: {
          rich_text: [
            {
              text: {
                content: formData.goals || '',
              },
            },
          ],
        },
        Portfolio: {
          url: formData.portfolio || null,
        },
        Referral: {
          rich_text: [
            {
              text: {
                content: formData.referral || '',
              },
            },
          ],
        },
        Status: {
          status: {
            name: 'New',
          },
        },
        'Submission Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
    });
  } catch (error) {
    const notionError = error as NotionError;
    return NextResponse.json(
      { error: `Failed to submit application: ${notionError.message}` },
      { status: 500 }
    );
  }
}