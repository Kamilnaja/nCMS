const ArticlesService = require("../services/ArticlesService");
const articlesService = new ArticlesService();
const express = require('express');
const articlesController = express.Router();

articlesController.get('/api/posts', articlesService.getArticles);
articlesController.get('/api/posts/:id', articlesService.getOneById);
articlesController.put('/api/posts/:id', articlesService.editArticle);
articlesController.post('/api/posts', articlesService.createArticle);
articlesController.delete('/api/posts/:id', articlesService.deleteById);

module.exports = articlesController;