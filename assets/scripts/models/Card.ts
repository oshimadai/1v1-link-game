/**
 * 能力接口
 */
export interface Ability {
    id: number;
    name: string;
    icon: string;
    desc?: string;
}

/**
 * 卡牌类
 */
export class Card {
    /** 卡牌 ID */
    id: string = '';
    /** 属性（火/水/木/万能） */
    attr: string = '';
    /** 当前血量 */
    hp: number | string = 3;
    /** 最大血量 */
    maxHp: number = 3;
    /** 分数 */
    score: number = 1;
    /** 箭头方向 */
    arrow: string = '→';
    /** 能力 */
    ability: Ability | null = null;
    /** 是否已触发 */
    triggered: boolean = false;
    
    constructor() {
        this.id = Math.random().toString(36).substr(2, 9);
    }
    
    /**
     * 获取属性 Emoji
     */
    getAttrEmoji(): string {
        const emojis: Record<string, string> = {
            '火': '🔥',
            '水': '💧',
            '木': '🌿',
            '万能': '🌈'
        };
        return emojis[this.attr] || '❓';
    }
    
    /**
     * 获取血量显示
     */
    getHpDisplay(): string {
        if (this.hp === '∞') return '∞';
        if (typeof this.hp === 'number') {
            if (this.hp <= 0) return '☠️';
            return '●'.repeat(this.hp) + '○'.repeat(this.maxHp - this.hp);
        }
        return '';
    }
    
    /**
     * 衰减（每回合 -1 血）
     * @returns 是否死亡
     */
    decay(): boolean {
        if (this.hp === '∞' || typeof this.hp !== 'number') return false;
        if (this.hp <= 0) return false;
        
        this.hp--;
        return this.hp <= 0;
    }
    
    /**
     * 重置卡牌状态
     */
    reset() {
        this.triggered = false;
        this.hp = this.maxHp;
    }
}
