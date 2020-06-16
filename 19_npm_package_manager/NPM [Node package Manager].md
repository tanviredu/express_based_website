# NPM [Node package Manager]

-----------

* **create a package.json project**

  `npm init`

  then you follow the necessary steps and  if you choose default this will finally created in **package.json**

  ```json
  {
    "name": "test-npm",
    "version": "1.0.0",
    "description": "test-project",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "tanvir rahman",
    "license": "ISC"
  }
  ```

  `

* install package locally

  ```bash
  npm install <package name>
  npm install express --save
  ```

  

* install package globally

  ```bash
  npm install -g bable-cli
  npm install -g vue-cli
  npm install -g create-react-app
  ```

  

* install package as a dev dependency. dev dependency don't publish on the production

  this is only for development

  ```bash
  npm install --save-dev nodemon
  npm install --save-dev eslint
  ```

  

* after installing the package locally and with dev dependency the **package.json** will be like this

  ```json
  {
    "name": "test-npm",
    "version": "1.0.0",
    "description": "test-project",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "tanvir rahman",
    "license": "ISC",
    "dependencies": {
      "express": "^4.17.1"
    },
    "devDependencies": {
      "nodemon": "^2.0.4"
    }
  }
  ```

  ### global package directory management

  -----------

  

  * in unix based system the global package stays in these directory

    ```bash
    /use/local/lin/node_modules
    ```

    or

    ```
    /usr/local/lib/node
    ```

  * in windows 7 it comes in the directory

    ```
    %AppData%\npm\node_modules
    ```

  

  ### [you must have proper permission in both windows and linux to install package globally in the system]

  

  * to check if any package is out of date this command is used

    ```bash
    npm outdated
    ```

    if you have outdated package then this will show like this

    ```
    Package  Current  Wanted  Latest  Location
    eslint     5.2.0  5.16.0   7.2.0  test-npm
    ```

    

  * check the global package is outdated or not

    ```bash
    npm outdated -g
    ```

  * Update the version of the package

    ```bash
    npm update <package_name>
    npm install eslint
    ```

    or you can update this with this command too

    ```bash
    npm install
    ```

    to update the npm itsef

    ```
    npm install npm
    ```

    

  * For Remove the package

    ```bash
    npm uninstall <package_name>
    npm uninstall express
    npm uninstall -g create-raeact-app
    ```

    it will automatically remove from the **package.json** file



## Versioning System of node packages

-----------

the package that is installed 

```bash
express@4,17,1
```



*  **4** =>  stands for the **Major** releases

* **17** => stands for the **Minor** releases

* **2** => stands for the **Patch** releases

* **^**  =>means All the minor patches are ok



* if you install a package from the internet the npm package manager the npm will cache the package so if you want to install same package in the other package this will installed from the cache

* to clean the cache

  ```bash
  npm cache clean --force
  ```

  

* to verify the cache

  ```bash
  npm cache verify
  ```

* to find any issue or any problem like security threat this command is used

  ```bash
  npm audit
  ```

  

## Scripting in the package.json

* you can make command inside your scripts. suppose you want to start the server with nodemon so you change the **package.json** like this 

  ```json
  {
    "name": "test-npm",
    "version": "1.0.0",
    "description": "test-project",
    "main": "index.js",
    "scripts": {
      "start":"nodemon index.js"
    },
    "author": "tanvir rahman",
    "license": "ISC",
    "dependencies": {
      "express": "^4.17.1"
    },
    "devDependencies": {
      "nodemon": "^2.0.4"
    }
  }
  ```

  

  * after that you can start the server with this command

    ```bash
    npm start
    ```

    

    # npx

    -----------

    

    * suppose you want a angular starter template to work but you don't want 

      to install the cli for that because it will polluting the global folder with a lot of package is not recommended

      then you can use the npx

      npm take the package name and the command . it will temporarily install the package and then install the project and then remove it

      ```bash
      npx <package_name> <command>
      npx -p @angular/cli ng new myapp
      ```

      