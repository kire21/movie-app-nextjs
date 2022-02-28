import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        'mongodb+srv://kire:kire@cluster0.xom83.mongodb.net/movieApp?retryWrites=true&w=majority'
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
      console.log(error);
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
      res.status(201).json({ message: 'Success', message: newMessage });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Inserting comment failed!' });
      client.close();
      return;
    }

    client.close();
  }
}

export default handler;
