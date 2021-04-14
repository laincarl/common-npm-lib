# 基于ModuleFederationPlugin实现运行时依赖

## 要点

- 使用一个公共库作为基础依赖库，这个库负责共享所有基础依赖
- expose导出时
- 使用`babel-plugin-module-resolver`实现引用的不修改也就是react->base/react
- 目前只alias了前缀，也就是react->base/react, 之后可实现版本功能, react->base-16.0/react

基于基础依赖库的app不需要打包这些共享的依赖，加快启动速度
