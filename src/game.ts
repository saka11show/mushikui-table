import { TITLE, MESSAGE, YODAN_KAKU } from "./data"

export function renderGame(root: HTMLElement) {
    const holeLabel = "未然形";

    const rowsHtml = YODAN_KAKU
        .map(row => {
            const isHole = row.label === holeLabel;
            const shownValue = isHole ? "？" : row.value
            return `<li>${row.label}:${shownValue}</li>`
        })
        .join("");

    root.innerHTML = `
        <h1>${TITLE}</h1>
        <p>${MESSAGE}</p>

        <ul>
            ${rowsHtml}
        </ul>
    `
}