## [0.7.1](https://github.com/varletjs/axle/compare/v0.7.0...v0.7.1) (2024-04-23)



# [0.7.0](https://github.com/varletjs/axle/compare/v0.6.0...v0.7.0) (2024-04-23)


### Features

* add function withResponse ([#16](https://github.com/varletjs/axle/issues/16)) ([7bd290b](https://github.com/varletjs/axle/commit/7bd290ba7244feebad4f5ee42a5574e66f49589c))



# [0.6.0](https://github.com/varletjs/axle/compare/v0.5.2...v0.6.0) (2024-01-06)


### types

* refactor runner generic types ([e168ef2](https://github.com/varletjs/axle/commit/e168ef2c17b2831d3e1df819016c315d09178912))


### BREAKING CHANGES

* The first generic parameter of runner is changed to response, and the second parameter is changed to params.



## [0.5.2](https://github.com/varletjs/axle/compare/v0.5.1...v0.5.2) (2024-01-03)


### Features

* support treeshaking ([8c05476](https://github.com/varletjs/axle/commit/8c0547652397be8759a84a472568cab7c8113e56))



## [0.5.1](https://github.com/varletjs/axle/compare/v0.5.0...v0.5.1) (2024-01-02)



# [0.5.0](https://github.com/varletjs/axle/compare/v0.4.0...v0.5.0) (2024-01-02)


### Features

* **use:** support resetValue method and cloneResetValue option ([e4e7bed](https://github.com/varletjs/axle/commit/e4e7bedf04c0ac99936a1136b4f61ae25699f234))



# [0.4.0](https://github.com/varletjs/axle/compare/v0.3.5...v0.4.0) (2023-12-28)


### Bug Fixes

* **use:** modify getter value behavior ([4dc8a56](https://github.com/varletjs/axle/commit/4dc8a56a42642c64ad4c4d4344197bbaf52377da))


### Features

* **use:** support url getter and config getter ([5b0365b](https://github.com/varletjs/axle/commit/5b0365b081517a1edbd71ef97c15fad035356a40))


### BREAKING CHANGES

* **use:** options.params, options.config behavior changes from merging to overriding



## [0.3.5](https://github.com/varletjs/axle/compare/v0.3.4...v0.3.5) (2023-12-21)



## [0.3.4](https://github.com/varletjs/axle/compare/v0.3.3...v0.3.4) (2023-12-20)


### Bug Fixes

* fix path error in node env ([af9df06](https://github.com/varletjs/axle/commit/af9df061122b41d5dec674104867c90d3faf57f2))



## [0.3.3](https://github.com/varletjs/axle/compare/v0.3.2...v0.3.3) (2023-12-20)


### Features

* support cjs format ([2c135f3](https://github.com/varletjs/axle/commit/2c135f370b6d6a33f83c87a60825079f39ab43fb))



## [0.3.2](https://github.com/varletjs/axle/compare/v0.3.1...v0.3.2) (2023-12-19)



## [0.3.1](https://github.com/varletjs/axle/compare/v0.3.0...v0.3.1) (2023-12-17)


### Features

* support status  ([#11](https://github.com/varletjs/axle/issues/11)) ([0ec529b](https://github.com/varletjs/axle/commit/0ec529b2c353d4d9674789a3bf30b093029f45a0))



# [0.3.0](https://github.com/varletjs/axle/compare/v0.2.18...v0.3.0) (2023-12-16)


### Code Refactoring

* refactor mapping option to mappings ([ccaf7f5](https://github.com/varletjs/axle/commit/ccaf7f53f843e5a7b5fe68cd3ee0221f0e767140))


### Features

* **requestMd5Interceptor:** support path overload ([19acb60](https://github.com/varletjs/axle/commit/19acb604dc4c43398a8fed9c88a80dd92a2d4776))
* **requestMockInterceptor:** support handler overload ([9b2ccaa](https://github.com/varletjs/axle/commit/9b2ccaaf4a9a3531d886d8a6fd9690f5376c4cb5))


### BREAKING CHANGES

* Mapping option is deprecated, please use mappings instead. affected interceptors are:
requestMd5Interceptor, requestMockInterceptor



## [0.2.18](https://github.com/varletjs/axle/compare/v0.2.17...v0.2.18) (2023-12-15)


### Bug Fixes

* clone ctx fields ([03ed3db](https://github.com/varletjs/axle/commit/03ed3db94fcd9bc824064eee476daa64805e4d82))


### Features

* support requestMd5Interceptor ([313ae02](https://github.com/varletjs/axle/commit/313ae022acb81dd6869c4a06a412a9947ea9fbe5))



## [0.2.17](https://github.com/varletjs/axle/compare/v0.2.16...v0.2.17) (2023-12-09)



## [0.2.16](https://github.com/varletjs/axle/compare/v0.2.15...v0.2.16) (2023-12-08)


### Bug Fixes

* restore peer ([4c6d0ce](https://github.com/varletjs/axle/commit/4c6d0cea83899c7287ef5db61111a3abd422af58))



## [0.2.15](https://github.com/varletjs/axle/compare/v0.2.14...v0.2.15) (2023-12-08)


### Bug Fixes

* move vue to optionalDependencies ([8e227db](https://github.com/varletjs/axle/commit/8e227db0f243b49624a9d6e8fbd02a0a002eaa7a))



## [0.2.14](https://github.com/varletjs/axle/compare/v0.2.13...v0.2.14) (2023-12-08)


### Features

* support default immediate config ([02d16eb](https://github.com/varletjs/axle/commit/02d16eb05e3c513332b5f5297015f2a71bed439c))



## [0.2.13](https://github.com/varletjs/axle/compare/v0.2.12...v0.2.13) (2023-12-07)


### Bug Fixes

* rename responseStatusInterceptor api ([d1e5b43](https://github.com/varletjs/axle/commit/d1e5b430855dd9b80880ad019abadf28a9cfc005))



## [0.2.12](https://github.com/varletjs/axle/compare/v0.2.11...v0.2.12) (2023-12-07)


### Features

* support responseStatusInterceptor ([#8](https://github.com/varletjs/axle/issues/8)) ([04f3778](https://github.com/varletjs/axle/commit/04f37781ca8fbbc088cec9ea2f22982757077f1f))



## [0.2.11](https://github.com/varletjs/axle/compare/v0.2.10...v0.2.11) (2023-12-06)


### Features

* support requestMockInterceptor ([3138a7f](https://github.com/varletjs/axle/commit/3138a7fea17431b399f433707260ac69bd904587))



## [0.2.10](https://github.com/varletjs/axle/compare/v0.2.9...v0.2.10) (2023-12-03)



## [0.2.9](https://github.com/varletjs/axle/compare/v0.2.8...v0.2.9) (2023-12-03)


### Features

* support matcher ([d50c5ce](https://github.com/varletjs/axle/commit/d50c5ced3c9e97b502c24a3c4246ca7b73cd06e2))



## [0.2.8](https://github.com/varletjs/axle/compare/v0.2.7...v0.2.8) (2023-12-03)


### Features

* support retry interceptor and fix types error ([f47a462](https://github.com/varletjs/axle/commit/f47a4629454d6b1db013d7f0f7fdb88b85babb88))



## [0.2.7](https://github.com/varletjs/axle/compare/v0.2.6...v0.2.7) (2023-12-02)


### Features

* support matcher for interceptor ([f58a7df](https://github.com/varletjs/axle/commit/f58a7df2ff1f55722781777f12ab087087f0b7a6))



## [0.2.6](https://github.com/varletjs/axle/compare/v0.2.5...v0.2.6) (2023-12-01)


### Bug Fixes

* replace || with ?? ([34fd2c8](https://github.com/varletjs/axle/commit/34fd2c88b906bbdfa337b7483a72617f84791730))


### Features

* add built-in timeout interceptor ([#4](https://github.com/varletjs/axle/issues/4)) ([255236f](https://github.com/varletjs/axle/commit/255236f1796eeb31fb6c15864396b640719a2feb))



## [0.2.5](https://github.com/varletjs/axle/compare/v0.2.4...v0.2.5) (2023-11-30)


### Features

* support rest args for interceptor ([74cf8bf](https://github.com/varletjs/axle/commit/74cf8bf60bc796a6f7567463c0587db588fb86c7))



## [0.2.4](https://github.com/varletjs/axle/compare/v0.2.3...v0.2.4) (2023-11-30)


### Bug Fixes

* rename data to onResponse ([d153a79](https://github.com/varletjs/axle/commit/d153a79033954aeb283f96ba11eae8ffbac61e32))


### Features

* support interceptors system ([76b5fb5](https://github.com/varletjs/axle/commit/76b5fb57dbd76986e881bff9de0ad4f61738bf65))
* support options.axiosInterceptorOptions ([7a53a4e](https://github.com/varletjs/axle/commit/7a53a4ee21ff1045cc8be467209e9491a65e2342))



## [0.2.3](https://github.com/varletjs/axle/compare/v0.2.2...v0.2.3) (2023-11-29)


### Features

* support resetValue ([f67b1c0](https://github.com/varletjs/axle/commit/f67b1c0af17c36e05a628d42bcdf1ce77ecef73c))



## [0.2.2](https://github.com/varletjs/axle/compare/v0.2.1...v0.2.2) (2023-11-29)


### Features

* support params getter ([3552ec7](https://github.com/varletjs/axle/commit/3552ec7cb92f4ca317394b511e6122e661c5bbc2))



## [0.2.1](https://github.com/varletjs/axle/compare/v0.2.0...v0.2.1) (2023-09-13)


### Bug Fixes

* fix playground api invoke ([8535023](https://github.com/varletjs/axle/commit/8535023b54aa9d0da30224e385c936f53019f764))



# [0.2.0](https://github.com/varletjs/axle/compare/v0.1.2...v0.2.0) (2023-09-12)



## [0.1.2](https://github.com/varletjs/axle/compare/v0.1.1...v0.1.2) (2023-07-21)



## [0.1.1](https://github.com/varletjs/axle/compare/v0.1.0...v0.1.1) (2023-07-21)



# [0.1.0](https://github.com/varletjs/axle/compare/v0.0.26...v0.1.0) (2023-07-21)


### Features

* support more utils ([f0a7992](https://github.com/varletjs/axle/commit/f0a7992337c8988e465483aa33158fc952188ca6))



## [0.0.26](https://github.com/varletjs/axle/compare/v0.0.25...v0.0.26) (2023-07-20)


### Features

* rename postJSON ([35236b9](https://github.com/varletjs/axle/commit/35236b96d292507052d371441e0ef1d47946ee15))



## [0.0.25](https://github.com/varletjs/axle/compare/v0.0.24...v0.0.25) (2023-07-06)


### Bug Fixes

* fix args ([e312004](https://github.com/varletjs/axle/commit/e3120048696da1dd7f5653d1b709f9c914b989b3))


### Features

* support retry ([aae87f0](https://github.com/varletjs/axle/commit/aae87f013d10668479c4f8f8838c4918ec0e734a))



## [0.0.24](https://github.com/varletjs/axle/compare/v0.0.23...v0.0.24) (2023-07-06)


### Bug Fixes

* update ([e8f7e69](https://github.com/varletjs/axle/commit/e8f7e695ef4c6f7bd61f633cc8c8d17bdf3bc965))


### Features

* support abort and progress ([54ee3c3](https://github.com/varletjs/axle/commit/54ee3c3c5de6c3c4222dcf11ddc60d04fd70e1b2))



## [0.0.23](https://github.com/varletjs/axle/compare/v0.0.22...v0.0.23) (2023-07-05)


### Bug Fixes

* fix onError ([82fb1da](https://github.com/varletjs/axle/commit/82fb1daf6b6fcc46e5665603dd08180583d77cac))



## [0.0.22](https://github.com/varletjs/axle/compare/v0.0.21...v0.0.22) (2023-07-05)



## [0.0.21](https://github.com/varletjs/axle/compare/v0.0.20...v0.0.21) (2023-07-04)



## [0.0.20](https://github.com/varletjs/axle/compare/v0.0.19...v0.0.20) (2023-07-04)



## [0.0.19](https://github.com/varletjs/axle/compare/v0.0.18...v0.0.19) (2023-07-04)



## [0.0.18](https://github.com/varletjs/axle/compare/v0.0.17...v0.0.18) (2023-07-04)



## [0.0.17](https://github.com/varletjs/axle/compare/v0.0.16...v0.0.17) (2023-07-04)



## [0.0.16](https://github.com/varletjs/axle/compare/v0.0.15...v0.0.16) (2023-07-04)



## [0.0.15](https://github.com/varletjs/axle/compare/v0.0.14...v0.0.15) (2023-07-03)



## [0.0.14](https://github.com/varletjs/axle/compare/v0.0.13...v0.0.14) (2023-07-03)


### Features

* support prevError ([02780eb](https://github.com/varletjs/axle/commit/02780eb85486369b555f99b9fb7f51bda6dfde48))



## [0.0.13](https://github.com/varletjs/axle/compare/v0.0.12...v0.0.13) (2023-07-03)



## [0.0.12](https://github.com/varletjs/axle/compare/v0.0.11...v0.0.12) (2023-07-03)


### Bug Fixes

* fix params invalid ([f6196fa](https://github.com/varletjs/axle/commit/f6196faa6d9ba2a68135003f0afe857256fa7a0c))



## [0.0.11](https://github.com/varletjs/axle/compare/v0.0.10...v0.0.11) (2023-07-03)



## [0.0.10](https://github.com/varletjs/axle/compare/v0.0.9...v0.0.10) (2023-07-03)


### Features

* support prevData for dataFormatter ([e65c889](https://github.com/varletjs/axle/commit/e65c8898e9334e3bad634d0a0c99c7717f4ae0fa))



## [0.0.9](https://github.com/varletjs/axle/compare/v0.0.8...v0.0.9) (2023-06-29)



## [0.0.8](https://github.com/varletjs/axle/compare/v0.0.7...v0.0.8) (2023-06-19)



## [0.0.7](https://github.com/varletjs/axle/compare/v0.0.6...v0.0.7) (2023-06-19)



## [0.0.6](https://github.com/varletjs/axle/compare/v0.0.5...v0.0.6) (2023-06-19)



## [0.0.5](https://github.com/varletjs/axle/compare/v0.0.4...v0.0.5) (2023-06-02)



## [0.0.4](https://github.com/varletjs/axle/compare/v0.0.3...v0.0.4) (2023-06-02)


### Bug Fixes

* fix config ([04f3a48](https://github.com/varletjs/axle/commit/04f3a4832ae6ce3950bf34898ce712119d342db4))


### Features

* support useAxleHelper ([477d9fc](https://github.com/varletjs/axle/commit/477d9fcce5de8837072bfa31c4b9f906ce0327f6))



## [0.0.3](https://github.com/varletjs/axle/compare/v0.0.2...v0.0.3) (2022-06-30)


### Bug Fixes

* fix arraybuffer errs ([d7eeeef](https://github.com/varletjs/axle/commit/d7eeeefddc063414b5b8ef9a4c4e622a3cf34dcc))



## [0.0.2](https://github.com/varletjs/axle/compare/v0.0.1...v0.0.2) (2022-04-11)



## [0.0.1](https://github.com/varletjs/axle/compare/cb1ecbda73212fd99a269f4f8dee2de5c354fc3f...v0.0.1) (2022-03-27)


### Features

* finish axle develop ([cb1ecbd](https://github.com/varletjs/axle/commit/cb1ecbda73212fd99a269f4f8dee2de5c354fc3f))



