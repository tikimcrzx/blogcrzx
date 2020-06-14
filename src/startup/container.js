const {
  createContainer,
  asClass,
  asValue,
  asFunction,
} = require('awilix');

// Config
const config = require('../config');
const app = require('.');

// Services
const { AuthService, UserService } = require('../services');

// Controllers
const {
  AuthController,
  UserController,
} = require('../controllers');

// Routes
const {
  AuthRoutes,
  UserRoutes,
} = require('../routes/index.routes');
const Routes = require('../routes');

// Models
const {
  Category,
  Comment,
  Post,
  Rol,
  User,
} = require('../models');

// Repositories
const { UserRepository } = require('../repositories');

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes),
    config: asValue(config),
  })
  .register({
    AuthService: asClass(AuthService).singleton(),
    UserService: asClass(UserService).singleton(),
  })
  .register({
    AuthController: asClass(
      AuthController.bind(AuthController),
    ).singleton(),
    UserController: asClass(
      UserController.bind(UserController),
    ).singleton(),
  })
  .register({
    AuthRoutes: asFunction(AuthRoutes).singleton(),
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
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
