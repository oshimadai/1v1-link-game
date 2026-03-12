import { _decorator, Component, Node, Label, Sprite, Color, UITransform, EventTouch } from 'cc';
import { Card } from '../models/Card';

const { ccclass, property } = _decorator;

/**
 * 卡牌视图组件
 * 负责卡牌的显示和交互
 */
@ccclass('CardView')
export class CardView extends Component {
    @property(Label)
    public hpLabel: Label | null = null;

    @property(Label)
    public scoreLabel: Label | null = null;

    @property(Sprite)
    public cardSprite: Sprite | null = null;

    // 卡牌数据
    private cardData: Card | null = null;

    // 是否被选中
    private isSelected: boolean = false;

    // 属性颜色映射
    private static ATTR_COLORS: Record<string, Color> = {
        'fire': new Color(255, 100, 100, 255),    // 火 - 红色
        'water': new Color(100, 100, 255, 255),   // 水 - 蓝色
        'wood': new Color(100, 255, 100, 255),    // 木 - 绿色
        'universal': new Color(255, 255, 100, 255) // 万能 - 黄色
    };

    start() {
        // 注册点击事件
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    /**
     * 初始化卡牌
     * @param card 卡牌数据
     */
    public initCard(card: Card) {
        this.cardData = card;
        this.updateView();
    }

    /**
     * 更新视图
     */
    public updateView() {
        if (!this.cardData) return;

        // 更新血量显示
        if (this.hpLabel) {
            const hpText = this.cardData.hp === Infinity ? '∞' : this.cardData.hp.toString();
            this.hpLabel.string = hpText;
        }

        // 更新分数显示
        if (this.scoreLabel) {
            this.scoreLabel.string = this.cardData.score.toString();
        }

        // 更新卡牌颜色（根据属性）
        if (this.cardSprite) {
            const color = CardView.ATTR_COLORS[this.cardData.attr] || Color.WHITE;
            this.cardSprite.color = color;
        }
    }

    /**
     * 触摸开始
     */
    private onTouchStart(event: EventTouch) {
        if (!this.cardData) return;

        this.isSelected = true;
        
        // TODO: 显示卡牌详情或选中效果
        console.log(`[CardView] 选中卡牌：${this.cardData.attr}属性，${this.cardData.hp}血`);
    }

    /**
     * 触摸结束
     */
    private onTouchEnd(event: EventTouch) {
        if (!this.cardData) return;

        this.isSelected = false;

        // TODO: 触发卡牌能力或连线逻辑
        console.log(`[CardView] 释放卡牌：${this.cardData.attr}属性`);
    }

    /**
     * 设置卡牌血量
     * @param hp 新血量
     */
    public setHp(hp: number) {
        if (this.cardData) {
            this.cardData.hp = hp;
            this.updateView();
        }
    }

    /**
     * 设置选中状态
     * @param selected 是否选中
     */
    public setSelected(selected: boolean) {
        this.isSelected = selected;
        // TODO: 更新选中视觉效果
    }

    /**
     * 播放选中动画
     */
    public playSelectAnimation() {
        // TODO: 实现选中动画
        console.log('[CardView] 播放选中动画');
    }

    /**
     * 播放连线动画
     */
    public playLinkAnimation() {
        // TODO: 实现连线动画
        console.log('[CardView] 播放连线动画');
    }
}
