import Contact from '../models/Contact.js';
export async function createContact(req, res, next) {
  try {
    const { name, email, message } = req.body || {};
    if (typeof name !== 'string' || !name.trim() || typeof email !== 'string' ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ message: 'Enter a valid name, email and message.' });
    }
    if (name.length > 80 || email.length > 160 || message.length > 2000) {
      return res.status(400).json({ message: 'One or more fields exceed the allowed length.' });
    }
    if (!process.env.MONGODB_URI) {
      return res.status(503).json({ message: 'Contact storage is not configured. Set MONGODB_URI and restart the API.' });
    }
    await Contact.create({ name: name.trim(), email: email.trim(), message: message.trim() });
    return res.status(201).json({ message: 'Message saved successfully.' });
  } catch (error) { next(error); }
}
