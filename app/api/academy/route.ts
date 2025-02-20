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
  throw new Error('Notion database ID is not configured');
}

interface NotionError {
  message: string;
  stack?: string;
  body?: unknown;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!databaseId) {
      throw new Error('Notion database ID is not configured');
    }

    // First verify database access
    try {
      await notion.databases.retrieve({ database_id: databaseId });
    } catch (error) {
      const notionError = error as NotionError;
      throw new Error(`Database access failed: ${notionError.message}`);
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      education,
      field,
      experience,
      software,
      equipment,
      goals,
      portfolio,
      referral,
    } = body;

    await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: `${firstName} ${lastName}`,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Phone: {
          rich_text: [
            {
              text: {
                content: phone,
              },
            },
          ],
        },
        'Educational Level': {
          select: {
            name: education,
          },
        },
        'Field of Study': {
          rich_text: [
            {
              text: {
                content: field,
              },
            },
          ],
        },
        'Experience Level': {
          select: {
            name: experience,
          },
        },
        'Software Proficiency': {
          rich_text: [
            {
              text: {
                content: software,
              },
            },
          ],
        },
        'Equipment Experience': {
          rich_text: [
            {
              text: {
                content: equipment,
              },
            },
          ],
        },
        'Learning Goals': {
          rich_text: [
            {
              text: {
                content: goals,
              },
            },
          ],
        },
        'Portfolio URL': {
          url: portfolio || null,
        },
        'Referral Source': {
          select: {
            name: referral,
          },
        },
        Status: {
          status: {
            name: 'Not Started',
          },
        },
        'Application Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    const notionError = error as NotionError;
    return NextResponse.json(
      {
        message: 'Error submitting application',
        error: notionError.message,
        details: notionError.body,
      },
      { status: 500 }
    );
  }
}
