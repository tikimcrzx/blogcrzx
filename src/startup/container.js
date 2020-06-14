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
const {
  AuthService,
  RolService,
  UserService,
} = require('../services');

// Controllers
const {
  AuthController,
  RolController,
  UserController,
} = require('../controllers');

// Routes
const {
  AuthRoutes,
  RolRoutes,
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
const {
  RolRepository,
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
    RolService: asClass(RolService).singleton(),
    UserService: asClass(UserService).singleton(),
  })
  .register({
    AuthController: asClass(
      AuthController.bind(AuthController),
    ).singleton(),
    RolController: asClass(
      RolController.bind(RolController),
    ).singleton(),
    UserController: asClass(
      UserController.bind(UserController),
    ).singleton(),
  })
  .register({
    AuthRoutes: asFunction(AuthRoutes).singleton(),
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
    RolRepository: asClass(RolRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
