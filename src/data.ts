export const TITLE = "mushikui-table";
export const MESSAGE = "画面づくり開始３";

// 活用表の１行を表す型
export type KatsuyoRow = {
    label: string; // 未然形・連用形など
    value: string; // 書か・書き　など
};

// 四段活用（書く）のデータ
export const YODAN_KAKU: KatsuyoRow[] = [
    { label: "未然形", value: "書か"},
    { label: "連用形", value: "書き"},
    { label: "終止形", value: "書く"},
    { label: "連体形", value: "書く"},
    { label: "已然形", value: "書け"},
    { label: "命令形", value: "書け"},
];