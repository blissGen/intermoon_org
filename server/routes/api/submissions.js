const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
  const submissions = await loadSubmissionsCollection();
  res.send(await submissions.find({}).toArray());
});

router.post('/', async (req, res) => {
  const submissions = await loadSubmissionsCollection();
  await submissions.insertOne({
	text: req.body.text,
	createdAt: new Date()  
  });
  res.status(201).send();	
});

async function loadSubmissionsCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://ntrmn:mod%5Fsynth2020@intermoon-cluster-viqge.gcp.mongodb.net/test?retryWrites=true&w=majority', {
	useUnifiedTopology: true	
  });
  return client.db('intermoon_submissions').collection('submissions');
}

module.exports = router;
