
1) 创建项目，在项目的根目录下执行（`.` 就是 react.me ）
```sh
$ yarn create react-app . --template=typescript
```

2. 代码风格控制(VSCode+Eslint+Prettier)

   1. Prettier VSCode 插件安装

      ![image-20220215225442580](/Users/tangxianfeng/Library/Application Support/typora-user-images/image-20220215225442580.png)

      

   2. aslint 安装

      - eslint

      ```sh
      $ yarn global add eslint
      ```

      - 安装依赖

      ```sh
      $ yarn add eslint-plugin-prettier@latest --save-dev
      ```

      

      - aslint 配置文件`.eslintrc.json`加到项目中

      `.eslintrc.json 内容`

      ```json
      {
          "env": {
              "browser": true,
              "es2021": true
          },
          "extends": [
              "eslint:recommended",
              "plugin:react/recommended",
              "plugin:@typescript-eslint/recommended"
          ],
          "parser": "@typescript-eslint/parser",
          "parserOptions": {
              "ecmaFeatures": {
                  "jsx": true
              },
              "ecmaVersion": "latest",
              "sourceType": "module"
          },
          "plugins": [
              "react",
              "@typescript-eslint"
          ],
          "rules": {
          }
      }
      
      "eslint.format.enable": true
      "eslint.run": "onSave"
      ```

      - 需要改 eslint 插件的配置文件

      

