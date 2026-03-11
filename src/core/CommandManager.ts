/**
 * 命令接口
 */
export interface Command {
    execute(): void;
    undo(): void;
}

/**
 * 命令管理器（命令模式）
 * 负责记录和管理所有操作命令
 */
export class CommandManager {
    private static instance: CommandManager | null = null;
    private history: Command[] = [];
    private currentIndex: number = -1;
    private maxHistory: number = 50;
    
    private constructor() {}
    
    public static getInstance(): CommandManager {
        if (!CommandManager.instance) {
            CommandManager.instance = new CommandManager();
        }
        return CommandManager.instance;
    }
    
    /**
     * 执行命令
     */
    public execute(command: Command) {
        command.execute();
        
        // 移除当前索引之后的命令
        this.history = this.history.slice(0, this.currentIndex + 1);
        
        // 添加新命令
        this.history.push(command);
        this.currentIndex++;
        
        // 限制历史记录长度
        if (this.history.length > this.maxHistory) {
            this.history.shift();
            this.currentIndex--;
        }
        
        console.log(`[CommandManager] 执行命令，历史记录：${this.history.length}`);
    }
    
    /**
     * 撤销
     */
    public undo() {
        if (this.currentIndex >= 0) {
            const command = this.history[this.currentIndex];
            command.undo();
            this.currentIndex--;
            console.log('[CommandManager] 撤销操作');
        }
    }
    
    /**
     * 重做
     */
    public redo() {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            const command = this.history[this.currentIndex];
            command.execute();
            console.log('[CommandManager] 重做操作');
        }
    }
    
    /**
     * 清空历史
     */
    public clear() {
        this.history = [];
        this.currentIndex = -1;
    }
    
    /**
     * 是否可以撤销
     */
    public canUndo(): boolean {
        return this.currentIndex >= 0;
    }
    
    /**
     * 是否可以重做
     */
    public canRedo(): boolean {
        return this.currentIndex < this.history.length - 1;
    }
}
