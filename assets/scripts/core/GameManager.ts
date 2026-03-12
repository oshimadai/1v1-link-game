import { _decorator, Component, Node, director } from 'cc';
import { EventBus } from './core/EventBus';
import { GameStateMachine } from './core/GameStateMachine';
import { CardFactory } from './core/CardFactory';

const { ccclass, property } = _decorator;

/**
 * 游戏管理器（单例模式）
 * 负责游戏流程控制、状态管理
 */
@ccclass('GameManager')
export class GameManager extends Component {
    @property(Node)
    public cardArea: Node | null = null;

    @property(Node)
    public player1Area: Node | null = null;

    @property(Node)
    public player2Area: Node | null = null;

    @property(Node)
    public uiRoot: Node | null = null;

    // 游戏状态机
    private gameState: GameStateMachine | null = null;

    // 事件总线
    private eventBus: EventBus | null = null;

    // 单例实例
    private static instance: GameManager | null = null;

    static getInstance(): GameManager {
        return GameManager.instance!;
    }

    start() {
        // 初始化单例
        GameManager.instance = this;

        // 初始化事件总线
        this.eventBus = new EventBus();

        // 初始化游戏状态机
        this.gameState = new GameStateMachine();

        // 切换到主菜单状态
        this.gameState.changeState('menu');

        console.log('[GameManager] 游戏初始化完成');
    }

    update(deltaTime: number) {
        // 游戏主循环
        if (this.gameState) {
            this.gameState.update(deltaTime);
        }
    }

    /**
     * 开始新游戏
     */
    public startNewGame() {
        console.log('[GameManager] 开始新游戏');
        
        if (this.gameState) {
            this.gameState.changeState('play');
        }

        // 创建牌组
        const deck = CardFactory.createFullDeck();
        console.log(`[GameManager] 创建牌组：${deck.length} 张卡牌`);

        // 发牌逻辑（待实现）
        this.dealCards();
    }

    /**
     * 发牌
     */
    private dealCards() {
        // TODO: 实现发牌逻辑
        console.log('[GameManager] 发牌中...');
    }

    /**
     * 游戏结束
     * @param winnerId 获胜者 ID (1 或 2)
     */
    public gameOver(winnerId: number) {
        console.log(`[GameManager] 游戏结束，玩家${winnerId}获胜`);
        
        if (this.gameState) {
            this.gameState.changeState('gameover');
        }

        // TODO: 显示结算界面
    }

    /**
     * 返回主菜单
     */
    public backToMenu() {
        console.log('[GameManager] 返回主菜单');
        
        if (this.gameState) {
            this.gameState.changeState('menu');
        }

        // TODO: 清理游戏状态
    }
}
