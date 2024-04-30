const { createCategory, getCategories, getCategory, editCategory, deleteCategory } = require('../../services/CategoryService');

const router = require('express').Router();

router.post('/create-category', async (req, res) => {
    await createCategory(req, res);
});

router.get('/get-categories', async (req, res) => {
    await getCategories(req, res);
});

router.get('/get-category/:id', async (req, res) => {
    await getCategory(req.params.id, res);
});

router.post('/edit-category', async (req, res) => {
    await editCategory(req, res);
});

router.delete('/delete-category/:id', async (req, res) => {
    await deleteCategory(req.params.id, res)
});


module.exports = router;

