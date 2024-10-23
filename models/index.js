'use strict';

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { Sequelize } from 'sequelize';
import process from 'process';

// Get __filename and __dirname equivalents for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// Dynamically import the config file
const configPath = path.join(__dirname, '../config/config.js');
const configModule = await import(pathToFileURL(configPath).href);
const config = configModule.default[env];  // Modified this line to properly access the environment config

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // Modified to explicitly pass all config options
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,  // This ensures dialect is explicitly passed
    ...config  // Spread any other config options
  });
}

// Rest of your code remains the same
const modelFiles = fs
  .readdirSync(__dirname)
  .filter(file => (
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js' && file.indexOf('.test.js') === -1
  ));

for (const file of modelFiles) {
  const modelPath = path.join(__dirname, file);
  const model = (await import(pathToFileURL(modelPath).href)).default(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;