import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID?.replace(/-/g, '');

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!databaseId) {
      throw new Error('Notion database ID not configured');
    }

    await notion.pages.create({
      parent: {
        database_id: databaseId,
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

    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to submit form to Notion: ${errorMessage}` },
      { status: 500 }
    );
  }
}
