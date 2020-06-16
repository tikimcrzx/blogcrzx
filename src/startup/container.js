const { createContainer, asClass, asValue, asFunction } = require('awilix');

// Config
const config = require('../config');
const app = require('.');

// Services
const {
  AuthService,
  CategoryService,
  CommentService,
  PostService,
  RolService,
  UserService,
} = require('../services');

// Controllers
const {
  AuthController,
  CategoryController,
  CommentController,
  PostController,
  RolController,
  UserController,
} = require('../controllers');

// Routes
const {
  AuthRoutes,
  CategoryRoutes,
  CommentRoutes,
  PostRoutes,
  RolRoutes,
  UserRoutes,
} = require('../routes/index.routes');
const Routes = require('../routes');

// Models
const { Category, Comment, Post, Rol, User } = require('../models');

// Repositories
const {
  RolRepository,
  CategoryRepository,
  CommentRepository,
  PostRepository,
  UserRepository,
} = require('../repositories');

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes),
    config: asValue(config),
  })
  .register({
    AuthService: asClass(AuthService).singleton(),
    CategoryService: asClass(CategoryService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    PostService: asClass(PostService).singleton(),
    RolService: asClass(RolService).singleton(),
    UserService: asClass(UserService).singleton(),
  })
  .register({
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    CategoryController: asClass(
      CategoryController.bind(CategoryController),
    ).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController),
    ).singleton(),
    PostController: asClass(PostController.bind(PostController)).singleton(),
    RolController: asClass(RolController.bind(RolController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
  })
  .register({
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    CategoryRoutes: asFunction(CategoryRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    PostRoutes: asFunction(PostRoutes).singleton(),
    RolRoutes: asFunction(RolRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Rol: asValue(Rol),
    Post: asValue(Post),
    Comment: asValue(Comment),
    Category: asValue(Category),
  })
  .register({
    CategoryRepository: asClass(CategoryRepository).singleton(),
    PostRepository: asClass(PostRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
    RolRepository: asClass(RolRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
