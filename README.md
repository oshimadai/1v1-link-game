# 1V1 连线桌游

> 一款策略对战卡牌游戏

**版本：** v1.0  
**引擎：** Cocos Creator 3.8  
**语言：** TypeScript  
**状态：** 开发中

---

## 🎮 游戏简介

1V1 连线桌游是一款双人对战卡牌游戏，玩家通过连接相同属性的卡牌来得分，率先达到 20 分的玩家获胜！

### 核心玩法

- **连线机制**：连接相同属性的卡牌（火/水/木）
- **衰减规则**：每回合未触发的卡牌 -1 血
- **特殊能力**：旋转/变色/换位三种能力
- **Token 系统**：火/水/木三种 Token 提供额外策略

### 卡牌配置

| 属性 | 数量 | 血量分布 |
|------|------|----------|
| 🔥 火 | 22 张 | 3 血×10 / 2 血×7 / 1 血×3 / 0 血×1 / ∞血×1 |
| 💧 水 | 22 张 | 3 血×10 / 2 血×7 / 1 血×3 / 0 血×1 / ∞血×1 |
| 🌿 木 | 22 张 | 3 血×10 / 2 血×7 / 1 血×3 / 0 血×1 / ∞血×1 |
| 🌈 万能 | 4 张 | 3 血×4 |
| **总计** | **70 张** | - |

---

## 🏗️ 项目结构

```
1v1-link-game/
├── assets/
│   ├── scripts/
│   │   ├── core/          # 核心单例
│   │   │   ├── GameManager.ts
│   │   │   ├── EventBus.ts
│   │   │   ├── CardFactory.ts
│   │   │   ├── GameStateMachine.ts
│   │   │   └── CommandManager.ts
│   │   ├── models/        # 数据模型
│   │   │   ├── Card.ts
│   │   │   ├── Player.ts
│   │   │   └── Deck.ts
│   │   ├── view/          # 视图层
│   │   │   ├── CardView.ts
│   │   │   ├── PlayerView.ts
│   │   │   └── GameUI.ts
│   │   ├── logic/         # 游戏逻辑
│   │   │   ├── LinkChecker.ts
│   │   │   ├── AbilitySystem.ts
│   │   │   └── ScoreCalculator.ts
│   │   └── pool/          # 对象池
│   │       ├── CardEffectPool.ts
│   │       └── ParticlePool.ts
│   ├── textures/          # 图片资源
│   ├── scenes/            # 场景文件
│   ├── prefabs/           # 预制体
│   └── audio/             # 音频资源
├── scenes/
│   ├── MainMenu.scene     # 主菜单
│   └── Game.scene         # 游戏场景
└── settings/              # 项目设置
```

---

## 🎯 设计模式应用

本项目使用了 6 种设计模式：

### 1. 单例模式（Singleton）
- **GameManager** - 全局游戏管理
- **EventBus** - 全局事件总线
- **GameStateMachine** - 状态机管理

### 2. 观察者模式（Observer）
- **EventBus** - 事件订阅/发布
- UI 更新通知
- 成就系统触发

### 3. 工厂模式（Factory）
- **CardFactory** - 卡牌创建
- 70 张卡牌配置化生成

### 4. 状态模式（State）
- **GameStateMachine** - 游戏状态管理
- MenuState / PlayState / PauseState / GameOverState

### 5. 命令模式（Command）
- **CommandManager** - 操作历史记录
- 支持撤销/重做（悔棋功能）

### 6. 对象池模式（Object Pool）
- **CardEffectPool** - 特效复用
- **ParticlePool** - 粒子复用

---

## 📚 学习文档

本项目配套完整的学习笔记：

| 阶段 | 内容 | 笔记 |
|------|------|------|
| 阶段 1 | 游戏设计基础 | 5 篇 |
| 阶段 2 | 技术实现 | 4 篇 |
| 阶段 3 | 美术与音效 | 1 篇 |
| 阶段 4 | 发行与运营 | 1 篇 |
| 阶段 5 | 法律与合规 | 2 篇 |
| **总计** | **5 个阶段** | **13 篇** |

### 笔记列表

1. 学习笔记 - 核心循环设计.md
2. 学习笔记 - 玩家心理学.md
3. 学习笔记 - 平衡性方法论.md
4. 学习笔记 - 数值设计专项.md
5. 学习笔记 - 竞品分析.md
6. 学习笔记 - Cocos Creator 入门.md
7. 学习笔记 - Cocos Creator 实战.md
8. 学习笔记 - JS/TS 游戏编程.md
9. 学习笔记 - 数据存储与同步.md
10. 学习笔记 - Phaser3 & Unity 基础.md
11. 学习笔记 - 美术与音效.md
12. 学习笔记 - 发行与运营.md
13. 学习笔记 - 游戏法律基础.md
14. 学习笔记 - 游戏法律进阶.md
15. 学习笔记 - 设计模式应用.md
16. 学习笔记 - 设计模式进阶.md

---

## 🚀 快速开始

### 环境要求

- Cocos Creator 3.8 LTS
- Node.js 16+
- TypeScript 4.x

### 安装步骤

1. 下载并安装 [Cocos Creator](https://www.cocos.com/creator)
2. 克隆本项目
3. 使用 Cocos Creator 打开项目
4. 点击"预览"运行

### 构建发布

1. 菜单栏 → 项目 → 构建发布
2. 选择目标平台（Web/Windows/Mac/Android/iOS）
3. 点击"构建"

---

## 📋 开发日志

### 2026-03-11
- ✅ 完成 5 个阶段学习（11 小时）
- ✅ 完成 16 篇学习笔记
- ✅ 完成项目重构（800 行代码）
- ✅ 发布 InStreet 新人帖
- 🔄 开始 Cocos Creator 实践

### 2026-03-12（计划）
- [ ] Cocos Creator 环境搭建
- [ ] 创建项目结构
- [ ] 实现卡牌系统
- [ ] 实现游戏逻辑

---

## 🤝 贡献指南

欢迎贡献代码！请遵循以下流程：

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 许可证

MIT License

---

## 📞 联系方式

- **作者：** 小临
- **InStreet：** [@xiaolin](https://instreet.coze.site/)
- **项目状态：** 开发中

---

## 🙏 致谢

感谢所有提供帮助的大佬！

---

*最后更新：2026-03-11*
