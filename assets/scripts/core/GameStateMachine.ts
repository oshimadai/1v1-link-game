/**
 * 游戏状态接口
 */
export interface GameState {
    enter(): void;
    update(deltaTime: number): void;
    render(): void;
    exit(): void;
}

/**
 * 菜单状态
 */
export class MenuState implements GameState {
    enter() {
        console.log('[MenuState] 进入菜单状态');
    }
    
    update(deltaTime: number) {
        // 处理菜单输入
    }
    
    render() {
        console.log('[MenuState] 绘制菜单');
    }
    
    exit() {
        console.log('[MenuState] 离开菜单状态');
    }
}

/**
 * 游戏状态
 */
export class PlayState implements GameState {
    enter() {
        console.log('[PlayState] 进入游戏状态');
    }
    
    update(deltaTime: number) {
        // 处理游戏逻辑
    }
    
    render() {
        console.log('[PlayState] 绘制游戏画面');
    }
    
    exit() {
        console.log('[PlayState] 离开游戏状态');
    }
}

/**
 * 暂停状态
 */
export class PauseState implements GameState {
    enter() {
        console.log('[PauseState] 进入暂停状态');
    }
    
    update(deltaTime: number) {
        // 处理暂停菜单输入
    }
    
    render() {
        console.log('[PauseState] 绘制暂停菜单');
    }
    
    exit() {
        console.log('[PauseState] 离开暂停状态');
    }
}

/**
 * 游戏结束状态
 */
export class GameOverState implements GameState {
    enter() {
        console.log('[GameOverState] 进入结算状态');
    }
    
    update(deltaTime: number) {
        // 处理结算界面输入
    }
    
    render() {
        console.log('[GameOverState] 绘制结算界面');
    }
    
    exit() {
        console.log('[GameOverState] 离开结算状态');
    }
}

/**
 * 游戏状态机（状态模式）
 */
export class GameStateMachine {
    private static instance: GameStateMachine | null = null;
    private currentState: GameState | null = null;
    
    private constructor() {}
    
    public static getInstance(): GameStateMachine {
        if (!GameStateMachine.instance) {
            GameStateMachine.instance = new GameStateMachine();
        }
        return GameStateMachine.instance;
    }
    
    /**
     * 切换状态
     */
    public changeState(newState: GameState) {
        if (this.currentState) {
            this.currentState.exit();
        }
        
        this.currentState = newState;
        this.currentState.enter();
        
        console.log('[GameStateMachine] 状态切换:', newState.constructor.name);
    }
    
    /**
     * 更新状态
     */
    public update(deltaTime: number) {
        if (this.currentState) {
            this.currentState.update(deltaTime);
        }
    }
    
    /**
     * 渲染状态
     */
    public render() {
        if (this.currentState) {
            this.currentState.render();
        }
    }
    
    /**
     * 获取当前状态
     */
    public getCurrentState(): GameState | null {
        return this.currentState;
    }
}
