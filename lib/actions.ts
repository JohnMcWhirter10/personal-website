'use server';

import { neon } from '@neondatabase/serverless';

export async function create(formData: FormData) {
    const sql = neon(`${process.env.DATABASE_URL}`);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        throw new Error('Missing form fields');
    }

    try {
        await sql(
            'INSERT INTO form_submissions (name, email, message) VALUES ($1, $2, $3)',
            [name, email, message]
        );
    } catch (error) {
        console.error('Error inserting form data:', error);
        throw new Error('Failed to save form submission');
    }
}
