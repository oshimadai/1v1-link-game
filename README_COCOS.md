# 1V1 连线桌游 - Cocos Creator 项目

> 一款策略对战卡牌游戏

**版本：** v1.0  
**引擎：** Cocos Creator 3.8.5  
**语言：** TypeScript  
**状态：** 开发中

---

## 🎮 游戏简介

1V1 连线桌游是一款双人对战卡牌游戏，玩家通过连接相同属性的卡牌来得分，率先达到 30 分的玩家获胜！

### 核心玩法

- **连线机制**：连接相同属性的卡牌（火/水/木）
- **衰减规则**：每回合未触发的卡牌 -1 血
- **特殊能力**：旋转/变色/换位三种能力
- **Token 系统**：火/水/木三种 Token 提供额外策略

---

## 🚀 快速开始

### 1. 安装 Cocos Creator

**下载地址：** https://www.cocos.com/creator

**推荐版本：** Cocos Creator 3.8.5 LTS

### 2. 打开项目

```bash
# 方法 1：通过 Cocos Creator 界面
1. 启动 Cocos Creator
2. 点击"打开项目"
3. 选择本项目目录：1v1-link-game-refactored
4. 等待资源导入完成

# 方法 2：直接打开
# 在 Cocos Creator 启动器中，项目列表应该会自动显示本项目
```

### 3. 运行游戏

```bash
# 在 Cocos Creator 中：
1. 双击打开 assets/scenes/Game.scene
2. 点击工具栏的"预览"按钮（▶️）
3. 游戏将在内置浏览器中运行
```

---

## 🏗️ 项目结构

```
1v1-link-game-refactored/
├── assets/                    # 资源目录（Cocos Creator 核心）
│   ├── scripts/              # TypeScript 脚本
│   │   ├── core/             # 核心单例
│   │   │   ├── GameManager.ts    # 游戏管理器
│   │   │   ├── EventBus.ts         # 事件总线
│   │   │   ├── CardFactory.ts      # 卡牌工厂
│   │   │   ├── GameStateMachine.ts # 状态机
│   │   │   └── CommandManager.ts   # 命令管理
│   │   ├── models/           # 数据模型
│   │   │   ├── Card.ts       # 卡牌模型
│   │   │   └── Player.ts     # 玩家模型
│   │   ├── view/             # 视图层
│   │   │   └── CardView.ts   # 卡牌视图
│   │   ├── logic/            # 游戏逻辑（待实现）
│   │   └── pool/             # 对象池（待实现）
│   ├── scenes/               # 场景文件
│   │   ├── Game.scene        # 游戏主场景
│   │   └── MainMenu.scene    # 主菜单场景
│   ├── prefabs/              # 预制体
│   │   └── Card.prefab       # 卡牌预制体
│   ├── textures/             # 图片资源（待添加）
│   └── audio/                # 音频资源（待添加）
├── profiles/                  # 项目配置
├── settings/                  # 引擎设置
├── project.json              # 项目描述文件
├── tsconfig.json             # TypeScript 配置
└── README.md                 # 本文档
```

---

## 📋 开发任务清单

### 已完成 ✅
- [x] 项目结构创建
- [x] TypeScript 核心代码导入
- [x] GameManager 组件
- [x] CardView 组件
- [x] 基础场景（Game/MainMenu）
- [x] 卡牌预制体

### 待完成 🔄
- [ ] 添加美术资源（卡牌图片、背景、UI）
- [ ] 实现发牌逻辑
- [ ] 实现连线检测
- [ ] 实现计分系统
- [ ] 实现玩家交互
- [ ] 添加音效
- [ ] 添加粒子特效
- [ ] UI 界面完善
- [ ] 游戏流程完整测试

---

## 🎯 下一步操作

### 第一步：导入美术资源

```bash
# 从 HTML 原型版本复制美术资源
cp -r ../1v1-link-game/assets/* assets/textures/

# 或在 Cocos Creator 中：
# 1. 将图片文件拖拽到 assets/textures/ 目录
# 2. 等待 Cocos 自动导入
```

### 第二步：配置预制体

```bash
# 在 Cocos Creator 中：
1. 打开 assets/prefabs/Card.prefab
2. 将卡牌图片拖拽到 Sprite 组件
3. 配置 Label 字体和大小
4. 保存预制体
```

### 第三步：完善场景

```bash
# 在 Cocos Creator 中：
1. 打开 assets/scenes/Game.scene
2. 从预制体拖拽卡牌到场景
3. 配置玩家区域
4. 添加 UI 元素（分数、血量等）
5. 保存场景
```

---

## 🛠️ 开发工具

### Cocos Creator 面板

- **层级管理器** - 查看场景节点树
- **属性检查器** - 编辑节点属性
- **资源管理器** - 管理项目资源
- **场景编辑器** - 可视化编辑场景
- **控制台** - 查看日志和错误

### 常用快捷键

| 功能 | Windows | Mac |
|------|---------|-----|
| 预览游戏 | Ctrl+Shift+B | Cmd+Shift+B |
| 构建发布 | Ctrl+Shift+H | Cmd+Shift+H |
| 保存场景 | Ctrl+S | Cmd+S |
| 播放/停止 | Ctrl+Shift+P | Cmd+Shift+P |

---

## 📦 构建发布

### Web 平台

```bash
# 在 Cocos Creator 中：
1. 菜单栏 → 项目 → 构建发布
2. 选择平台：Web Mobile 或 Web Desktop
3. 点击"构建"
4. 构建产物在 build/ 目录
```

### 其他平台

- Windows/Mac/Linux：桌面应用
- Android/iOS：移动应用
- 小游戏：微信/抖音/百度小程序

---

## 🤝 协作开发

### Git 工作流

```bash
# 提交更改
git add assets/scripts/
git commit -m "feat: 实现卡牌连线逻辑"

# 推送代码
git push origin main

# 拉取更新
git pull origin main
```

### 注意事项

- ⚠️ **不要提交** `library/`, `local/`, `temp/`, `build/` 目录
- ✅ **应该提交** `assets/`, `settings/`, `profiles/` 目录
- ⚠️ **场景文件** 合并时可能冲突，建议分工编辑

---

## 📚 相关文档

- **卡牌配置：** [飞书文档](https://my.feishu.cn/docx/Mp5jd1xvHoLmpGxqDMsczS7vnmd)
- **游戏规则：** `1V1 桌游 - 完整规则 v2.0.md`
- **学习笔记：** `memory/学习笔记 - Cocos Creator 实战.md`

---

## 🐛 常见问题

### Q1: 项目无法打开？
**A:** 确保使用 Cocos Creator 3.8.x 版本，检查 project.json 配置

### Q2: TypeScript 报错？
**A:** 检查 tsconfig.json 配置，确保 Cocos 类型定义正确

### Q3: 场景显示空白？
**A:** 检查摄像机设置和节点层级关系

### Q4: 资源导入失败？
**A:** 检查图片格式（推荐 PNG），确保文件大小合理

---

## 📞 联系方式

- **作者：** 小临 🎮
- **项目状态：** 开发中
- **最后更新：** 2026-03-12

---

*祝你开发顺利！有问题随时找我~*
