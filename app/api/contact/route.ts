import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

if (!process.env.NOTION_API_KEY) {
  throw new Error('Notion API key is not configured');
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

if (!databaseId) {
  throw new Error('Notion database ID is not configured');
}

interface NotionError {
  message: string;
  stack?: string;
  body?: unknown;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } =
      (await request.json()) as ContactFormData;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be less than 100 characters' },
        { status: 400 }
      );
    }
    if (email.length > 100) {
      return NextResponse.json(
        { error: 'Email must be less than 100 characters' },
        { status: 400 }
      );
    }
    if (subject.length > 200) {
      return NextResponse.json(
        { error: 'Subject must be less than 200 characters' },
        { status: 400 }
      );
    }
    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be less than 1000 characters' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        Status: {
          status: {
            name: 'Not started',
          },
        },
        Date: {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    const notionError = error as NotionError;
    return NextResponse.json(
      { error: `Failed to submit form to Notion: ${notionError.message}` },
      { status: 500 }
    );
  }
}
