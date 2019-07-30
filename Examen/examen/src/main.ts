import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
// import * as cookieParser from 'cookie-parser'
const cookieParser = require('cookie-parser');
import * as session from 'express-session'; // Typescript
const FileStore = require('session-file-store')(session); // Nodejs
import * as express from 'express';
import * as path from 'path';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.use(cookieParser('Secreto'));
  app.use(session({
    name:'server-session-id',
    secret:'No sera de tomar un traguito',
    resave:false,
    saveUninitialized:true,
    cookie: {
      secure: false
    },
    store: new FileStore()
  }));

  // @ts-ignore
  app.set('view engine', 'ejs');
  // app.set('view engine', 'ejs');
  app.use(express.static('publico'));
  await app.listen(3003);

}
bootstrap();
