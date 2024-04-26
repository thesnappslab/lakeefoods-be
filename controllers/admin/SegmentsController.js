const { createSegment, getSegments, getSegment } = require('../../services/SegmentService');

const router = require('express').Router();

router.post('/create-segment', async (req, res) => {
    await createSegment(req, res);
});

router.get('/get-segments', async (req, res) => {
    await getSegments(req, res);
});

router.get('/get-segment/:id', async (req, res) => {
    await getSegment(req.params.id, res);
});

router.post('/update-segment', async (req, res) => {
    //req body with id and updation fields
});

router.delete('/delete-segment/:id', async (req, res) => {
    //id in params
});

router.post('/delete-segments', async (req, res) => {
    //array of IDs
});

module.exports = router;

