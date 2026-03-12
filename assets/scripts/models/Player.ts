import { Card } from './Card';

/**
 * 玩家类
 */
export class Player {
    /** 玩家名称 */
    name: string = '';
    /** 手牌区域（5 张） */
    area: (Card | null)[] = [];
    /** 牌组 */
    deck: Card[] = [];
    /** 分数 */
    score: number = 0;
    /** 扣分（死亡卡牌） */
    penalty: number = 0;
    /** Token 数量 */
    tokens: Record<string, number> = {
        '火': 0,
        '水': 0,
        '木': 0
    };
    
    constructor(name: string) {
        this.name = name;
        this.area = [null, null, null, null, null];
    }
    
    /**
     * 获取总分数（分数 - 扣分）
     */
    get totalScore(): number {
        return this.score - this.penalty;
    }
    
    /**
     * 设置牌组
     */
    setDeck(deck: Card[]) {
        this.deck = deck;
    }
    
    /**
     * 获取卡牌
     */
    getCard(index: number): Card | null {
        if (index < 0 || index >= this.area.length) return null;
        return this.area[index];
    }
    
    /**
     * 抽牌
     */
    drawCard(count: number = 1) {
        for (let i = 0; i < count && this.deck.length > 0; i++) {
            const card = this.deck.pop();
            if (card) {
                for (let j = 0; j < 5; j++) {
                    if (!this.area[j]) {
                        this.area[j] = card;
                        break;
                    }
                }
            }
        }
    }
    
    /**
     * 补充手牌至 5 张
     */
    refill() {
        const needed = 5 - this.area.filter(c => c).length;
        if (needed > 0) {
            this.drawCard(needed);
            console.log(`[Player] ${this.name} 补充${needed}张牌`);
        }
    }
    
    /**
     * 添加分数
     */
    addScore(points: number) {
        this.score += points;
        console.log(`[Player] ${this.name} 得分 +${points}, 总分：${this.totalScore}`);
    }
    
    /**
     * 添加扣分
     */
    addPenalty(points: number) {
        this.penalty += points;
        console.log(`[Player] ${this.name} 扣分 +${points}, 总扣分：${this.penalty}`);
    }
    
    /**
     * 添加 Token
     */
    addToken(type: string) {
        if (this.tokens[type] !== undefined) {
            this.tokens[type]++;
            console.log(`[Player] ${this.name} 获得${type}Token，数量：${this.tokens[type]}`);
        }
    }
    
    /**
     * 使用 Token
     */
    useToken(type: string): boolean {
        if (this.tokens[type] > 0) {
            this.tokens[type]--;
            console.log(`[Player] ${this.name} 使用${type}Token`);
            return true;
        }
        return false;
    }
    
    /**
     * 统计手牌数量
     */
    countCards(): number {
        return this.area.filter(c => c).length;
    }
}
