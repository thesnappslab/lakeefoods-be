const { createSegment, getSegments, getSegment, updateSegment, deleteSegment } = require('../../services/SegmentService');

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

router.post('/edit-segment', async (req, res) => {
    await updateSegment(req, res)
});

router.delete('/delete-segment/:id', async (req, res) => {
    await deleteSegment(req.params.id, res)
});


module.exports = router;

