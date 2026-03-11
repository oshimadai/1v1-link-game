import { Card } from '../models/Card';

/**
 * 卡牌配置接口
 */
interface CardConfig {
    attr: string;
    hp: number;
    score: number;
    arrow: string;
    ability?: {
        id: number;
        name: string;
        icon: string;
    } | null;
}

/**
 * 卡牌工厂（工厂模式）
 * 负责创建所有卡牌
 */
export class CardFactory {
    /**
     * 创建单张卡牌
     * @param config 卡牌配置
     */
    public static create(config: CardConfig): Card {
        const card = new Card();
        card.attr = config.attr;
        card.hp = config.hp;
        card.maxHp = config.hp;
        card.score = config.score;
        card.arrow = config.arrow;
        card.ability = config.ability || null;
        return card;
    }
    
    /**
     * 创建完整牌组（70 张）
     */
    public static createFullDeck(): Card[] {
        const deck: Card[] = [];
        
        // 火属性 22 张
        deck.push(...this.createFireCards());
        
        // 水属性 22 张
        deck.push(...this.createWaterCards());
        
        // 木属性 22 张
        deck.push(...this.createWoodCards());
        
        // 万能属性 4 张
        deck.push(...this.createWildCards());
        
        // 洗牌
        this.shuffle(deck);
        
        console.log(`[CardFactory] 创建牌组：${deck.length}张`);
        return deck;
    }
    
    /**
     * 创建火属性卡牌（22 张）
     */
    private static createFireCards(): Card[] {
        const cards: Card[] = [];
        const configs: CardConfig[] = [
            // 3 血 10 张
            { attr: '火', hp: 3, score: 1, arrow: '→', ability: { id: 1, name: '旋转', icon: '🔄' } },
            { attr: '火', hp: 3, score: 1, arrow: '→', ability: { id: 2, name: '变色', icon: '🎨' } },
            { attr: '火', hp: 3, score: 1, arrow: '→', ability: { id: 3, name: '换位', icon: '💫' } },
            { attr: '火', hp: 3, score: 1, arrow: '→', ability: { id: 1, name: '旋转', icon: '🔄' } },
            { attr: '火', hp: 3, score: 1, arrow: '↑', ability: { id: 2, name: '变色', icon: '🎨' } },
            { attr: '火', hp: 3, score: 1, arrow: '↑', ability: { id: 3, name: '换位', icon: '💫' } },
            { attr: '火', hp: 3, score: 1, arrow: '↓', ability: { id: 1, name: '旋转', icon: '🔄' } },
            { attr: '火', hp: 3, score: 1, arrow: '↓', ability: { id: 2, name: '变色', icon: '🎨' } },
            { attr: '火', hp: 3, score: 1, arrow: '←', ability: { id: 3, name: '换位', icon: '💫' } },
            { attr: '火', hp: 3, score: 1, arrow: '←', ability: { id: 1, name: '旋转', icon: '🔄' } },
            // 2 血 7 张
            { attr: '火', hp: 2, score: 2, arrow: '→', ability: { id: 1, name: '旋转', icon: '🔄' } },
            { attr: '火', hp: 2, score: 2, arrow: '→', ability: { id: 2, name: '变色', icon: '🎨' } },
            { attr: '火', hp: 2, score: 2, arrow: '→', ability: { id: 3, name: '换位', icon: '💫' } },
            { attr: '火', hp: 2, score: 2, arrow: '↓', ability: { id: 1, name: '旋转', icon: '🔄' } },
            { attr: '火', hp: 2, score: 2, arrow: '↓', ability: { id: 2, name: '变色', icon: '🎨' } },
            { attr: '火', hp: 2, score: 2, arrow: '↑', ability: { id: 3, name: '换位', icon: '💫' } },
            { attr: '火', hp: 2, score: 2, arrow: '←', ability: { id: 1, name: '旋转', icon: '🔄' } },
            // 1 血 3 张
            { attr: '火', hp: 1, score: 3, arrow: '→', ability: { id: 1, name: '旋转', icon: '🔄' } },
            { attr: '火', hp: 1, score: 3, arrow: '↑', ability: { id: 2, name: '变色', icon: '🎨' } },
            { attr: '火', hp: 1, score: 3, arrow: '↓', ability: { id: 3, name: '换位', icon: '💫' } },
            // 0 血 1 张
            { attr: '火', hp: 0, score: 0, arrow: '←', ability: { id: 1, name: '旋转', icon: '🔄' } },
            // ∞血 1 张
            { attr: '火', hp: '∞', score: 1, arrow: '→', ability: null },
        ];
        
        configs.forEach(config => cards.push(this.create(config)));
        return cards;
    }
    
    /**
     * 创建水属性卡牌（22 张）
     */
    private static createWaterCards(): Card[] {
        // 与水属性相同配置
        return this.createFireCards().map(card => {
            const newCard = new Card();
            newCard.attr = '水';
            newCard.hp = card.hp;
            newCard.score = card.score;
            newCard.arrow = card.arrow;
            newCard.ability = card.ability;
            return newCard;
        });
    }
    
    /**
     * 创建木属性卡牌（22 张）
     */
    private static createWoodCards(): Card[] {
        // 与火属性相同配置
        return this.createFireCards().map(card => {
            const newCard = new Card();
            newCard.attr = '木';
            newCard.hp = card.hp;
            newCard.score = card.score;
            newCard.arrow = card.arrow;
            newCard.ability = card.ability;
            return newCard;
        });
    }
    
    /**
     * 创建万能属性卡牌（4 张）
     */
    private static createWildCards(): Card[] {
        const cards: Card[] = [];
        const arrows = ['→', '↑', '↓', '←'];
        
        arrows.forEach(arrow => {
            const card = new Card();
            card.attr = '万能';
            card.hp = 3;
            card.maxHp = 3;
            card.score = 1;
            card.arrow = arrow;
            card.ability = null;
            cards.push(card);
        });
        
        return cards;
    }
    
    /**
     * 洗牌
     */
    private static shuffle(deck: Card[]) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}
