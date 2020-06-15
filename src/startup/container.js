const { createContainer, asClass, asValue, asFunction } = require('awilix');

// Config
const config = require('../config');
const app = require('.');

// Services
const {
  AuthService,
  CategoryService,
  RolService,
  UserService,
} = require('../services');

// Controllers
const {
  AuthController,
  CategoryController,
  RolController,
  UserController,
} = require('../controllers');

// Routes
const {
  AuthRoutes,
  CategoryRoutes,
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
    RolService: asClass(RolService).singleton(),
    UserService: asClass(UserService).singleton(),
  })
  .register({
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    CategoryController: asClass(
      CategoryController.bind(CategoryController),
    ).singleton(),
    RolController: asClass(RolController.bind(RolController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
  })
  .register({
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    CategoryRoutes: asFunction(CategoryRoutes).singleton(),
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
    RolRepository: asClass(RolRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
