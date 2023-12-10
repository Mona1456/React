# start from basic

# npm install -D parcel // -D means we install dev dependency and parcel means this parcel is bundler, Beast etc..

there is two types of depencies 1. dev dependency 2. normal dependency

# dev dependency: it is generally required for in a development phase and normal dependency used for production also

<!-- (^ caret ~ tilde ) -->

if we put this caret parcel will automatically updates the minor version (parcel:"^2.8.3" - "^2.8.4")
if we put this tilde parcel will automatically updates the major version (parcel:"~2.8.3" - "~2.9.3")

# package.json and package-lock.json

package.json=> is a configuration for npm it keeps track of what version install to our system
package-lock.json=> it keep exact track of hat version install to our system

# node module

node module basically fateches all the code of all the dependencies to out system
our project needs parcel dependecies and parcel as a project needs has own depencies and those depenedecied has own dependecies this is know as transitive dependencies.

# Bundler (parcel,webpack,wheat) this are many types of bundler

bundler means bundle your apps its packages your app properly so that it can be shift to production

# if any case you have delete your node module so in case you have install again node module (npm install)

# npx parcel index.html (it means index.html is a source what happen basically parcel goes to the source index.html build and development or build for app and its host development build to the localhost:1234 and now we have able to access our app on localhost:1234)

npx means exicuting a package when we do npx
if u want to install the package we use npm

npm install react
npm install react-dom

# PArcel

- dev build
- local server
- HMR = Hot module replacement
- File watching algorithm - written in c++
- Cahing - Faster builds
- image optimization
- bundling
- minification
- compress
- consistent hashing
- code spliting
- Differential bundling -support older browser
- gives better error handling
- https
- tree shaking - remove unused code
- different dev and production bundle

# npx parcel build index.html (bundle for prod) when we have doing install its gives a error (-> remove main:"appp.js" from your package.json beacause this is a entry point )

-> when you execute parcel npx parcel index.html its generate a development builds for your projects and its hosted on 1234
it means when its generate the development build its put setup on dist

babel is a compiler thats convert jsx code into react code thats why browser only understand react code

-functional component: a normal JS function just return some peice of jsx code or react code

-component composition: you put component inside a component is called
