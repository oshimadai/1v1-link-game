type EventType = string;
type Callback = (data?: any) => void;

/**
 * 全局事件总线（单例模式）
 * 用于游戏内各系统之间的事件通信
 */
export class EventBus {
    private static instance: EventBus | null = null;
    private events: Map<EventType, Callback[]> = new Map();
    
    private constructor() {}
    
    public static getInstance(): EventBus {
        if (!EventBus.instance) {
            EventBus.instance = new EventBus();
        }
        return EventBus.instance;
    }
    
    /**
     * 监听事件
     * @param event 事件名称
     * @param callback 回调函数
     */
    public on(event: EventType, callback: Callback) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event)!.push(callback);
        console.log(`[EventBus] 监听事件：${event}`);
    }
    
    /**
     * 监听一次（自动移除）
     * @param event 事件名称
     * @param callback 回调函数
     */
    public once(event: EventType, callback: Callback) {
        const wrapper = (data?: any) => {
            callback(data);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
    }
    
    /**
     * 移除监听
     * @param event 事件名称
     * @param callback 回调函数
     */
    public off(event: EventType, callback: Callback) {
        const callbacks = this.events.get(event);
        if (callbacks) {
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
                console.log(`[EventBus] 移除监听：${event}`);
            }
        }
    }
    
    /**
     * 触发事件
     * @param event 事件名称
     * @param data 事件数据
     */
    public emit(event: EventType, data?: any) {
        const callbacks = this.events.get(event);
        if (callbacks) {
            console.log(`[EventBus] 触发事件：${event}`, data);
            callbacks.forEach(callback => callback(data));
        }
    }
    
    /**
     * 清空所有监听
     */
    public clear() {
        this.events.clear();
    }
}
