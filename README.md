# How To Build an Express CRUD App

Specifically a blog using Jade and Mongoose. In this lesson you will learn

- What is Express
- How to create routes
- What is Jade
- How to render Jade templates
- What is Mongo
- What is Mongoose
- How to create, read, update and delete with Mongoose models
- How to utilize HTTP (via Express) to create, read, update and delete

**Wow! That's sweet!** :cool:

# Step 1

Download the `express-generator` package from npmjs.org
```shell
npm install --global express-generator
```

Use the now globally installed CLI to genereate a new project called "blog"
```shell
express blog
```

Change directories to the blog project folder
```shell
cd blog
```

Install the projects dependencies from npmjs.org
```shell
npm install
```

# Step 2

Change the homepage to have the title of your blog.

- Pass a new `title` to the Jade file

# Step 3

Cool site but could use some content. Let's setup a database.

Add mongoose as a dependency and save it to your `package.json`
```shell
npm install --save mongoose
```

- Tell mongoose to connect to the mongo database

- create a new folder for your models

```shell
mkdir models
```

- create `models/post.js` using the Mongoose API

